import { prisma } from "@/lib/db";
import { getPassingPercent } from "@/lib/settings";
import { QUESTION_SECONDS, GRACE_SECONDS } from "./constants";
import { analyzeAttempt } from "./analysis";
import { checkAchievements } from "@/lib/achievements";

export type QuizMode = "exam" | "practice";

export interface ClientQuestion {
  order: number;
  text: string;
  options: string[];
  difficulty: string;
}

export interface PlayState {
  attemptId: string;
  topic: { slug: string; title: string };
  mode: QuizMode;
  questionCount: number;
  currentIndex: number;
  status: string;
  remainingSeconds: number;
  question: ClientQuestion | null;
  answered: { order: number; timedOut: boolean; selectedIndex: number | null }[];
}

export const MOCK_EXAM_SLUG = "mock-exam";

/** The hidden pseudo-topic that mixed mock-exam attempts attach to. */
export async function getMockExamTopic() {
  return prisma.topic.upsert({
    where: { slug: MOCK_EXAM_SLUG },
    create: {
      slug: MOCK_EXAM_SLUG,
      title: "Mixed Mock Exam",
      category: "Clinical Assessment",
      description:
        "Exam-style practice drawing questions from every topic on the platform — the closest thing to the real paper.",
      difficulty: "Advanced",
      estMinutes: 0,
      icon: "stethoscope",
      enabled: false, // hidden from the library; reachable only via Exam Prep
    },
    // Self-heal: keep it hidden even if it was accidentally enabled elsewhere.
    update: { enabled: false },
  });
}

/** Start a new attempt: pick least-recently-seen questions, randomized.
 *  The special "mock-exam" slug draws from ALL topics' question banks. */
export async function startQuiz(
  userId: string,
  topicSlug: string,
  requestedCount: number,
  mode: QuizMode
) {
  const isMock = topicSlug === MOCK_EXAM_SLUG;
  const topic = isMock
    ? await getMockExamTopic()
    : await prisma.topic.findFirst({ where: { slug: topicSlug, enabled: true } });
  if (!topic) throw new Error("Topic not found");

  const pool = await prisma.question.findMany({
    where: isMock
      ? { enabled: true, topic: { enabled: true } }
      : { topicId: topic.id, enabled: true },
    select: { id: true, difficulty: true },
  });
  if (pool.length === 0) throw new Error("No questions available for this topic yet");

  // Usage counts from this user's previous attempts → prefer unseen questions.
  const previous = await prisma.attemptQuestion.findMany({
    where: { attempt: isMock ? { userId } : { userId, topicId: topic.id } },
    select: { questionId: true },
  });
  const usage = new Map<string, number>();
  for (const p of previous) usage.set(p.questionId, (usage.get(p.questionId) ?? 0) + 1);

  const shuffled = [...pool]
    .map((q) => ({ q, sort: (usage.get(q.id) ?? 0) + Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((x) => x.q);

  const count = Math.min(requestedCount, shuffled.length);
  const chosen = shuffled.slice(0, count);
  // Present in a fresh random order
  chosen.sort(() => Math.random() - 0.5);

  const attempt = await prisma.quizAttempt.create({
    data: {
      userId,
      topicId: topic.id,
      mode,
      questionCount: count,
      questions: {
        create: chosen.map((q, i) => ({
          questionId: q.id,
          order: i,
          startedAt: i === 0 ? new Date() : null,
        })),
      },
    },
  });

  return { attemptId: attempt.id, count };
}

function elapsedSeconds(startedAt: Date): number {
  return (Date.now() - startedAt.getTime()) / 1000;
}

/**
 * Load the attempt for play. The remaining time is always computed from the
 * server-side startedAt, so refreshing the page never grants extra time.
 * Questions whose time already fully expired are auto-recorded as timed out.
 */
export async function getPlayState(attemptId: string, userId: string): Promise<PlayState> {
  // Sweep any already-expired questions first (handles refresh/disconnect).
  await sweepExpired(attemptId, userId);

  const attempt = await prisma.quizAttempt.findFirst({
    where: { id: attemptId, userId },
    include: {
      topic: { select: { slug: true, title: true } },
      questions: { orderBy: { order: "asc" }, include: { question: true } },
    },
  });
  if (!attempt) throw new Error("Attempt not found");

  const current = attempt.questions[attempt.currentIndex] ?? null;
  let remaining = 0;
  let question: ClientQuestion | null = null;

  if (attempt.status === "in_progress" && current) {
    remaining = Math.max(0, QUESTION_SECONDS - elapsedSeconds(current.startedAt ?? new Date()));
    question = {
      order: current.order,
      text: current.question.text,
      options: JSON.parse(current.question.options) as string[],
      difficulty: current.question.difficulty,
    };
  }

  return {
    attemptId: attempt.id,
    topic: attempt.topic,
    mode: attempt.mode as QuizMode,
    questionCount: attempt.questionCount,
    currentIndex: attempt.currentIndex,
    status: attempt.status,
    remainingSeconds: Math.round(remaining),
    question,
    answered: attempt.questions
      .filter((q) => q.answeredAt !== null || q.timedOut)
      .map((q) => ({ order: q.order, timedOut: q.timedOut, selectedIndex: q.selectedIndex })),
  };
}

/** Auto-timeout every question whose 2 minutes fully elapsed while the client was away. */
async function sweepExpired(attemptId: string, userId: string) {
  for (let guard = 0; guard < 40; guard++) {
    const attempt = await prisma.quizAttempt.findFirst({
      where: { id: attemptId, userId, status: "in_progress" },
      include: { questions: { orderBy: { order: "asc" } } },
    });
    if (!attempt) return;
    const current = attempt.questions[attempt.currentIndex];
    if (!current?.startedAt) return;
    if (elapsedSeconds(current.startedAt) <= QUESTION_SECONDS + GRACE_SECONDS) return;
    await recordAnswer(attemptId, userId, current.order, null, true);
  }
}

export interface AnswerResult {
  recorded: boolean;
  finished: boolean;
  // Populated only in practice mode:
  feedback: { correct: boolean; correctIndex: number; explanation: string } | null;
}

/**
 * Record an answer (or a timeout when selectedIndex is null).
 * All timing and correctness is validated server-side.
 */
export async function submitAnswer(
  attemptId: string,
  userId: string,
  order: number,
  selectedIndex: number | null
): Promise<AnswerResult> {
  return recordAnswer(attemptId, userId, order, selectedIndex, false);
}

async function recordAnswer(
  attemptId: string,
  userId: string,
  order: number,
  selectedIndex: number | null,
  isSweep: boolean
): Promise<AnswerResult> {
  const attempt = await prisma.quizAttempt.findFirst({
    where: { id: attemptId, userId },
    include: { questions: { orderBy: { order: "asc" }, include: { question: true } } },
  });
  if (!attempt) throw new Error("Attempt not found");
  if (attempt.status !== "in_progress") {
    return { recorded: false, finished: attempt.status === "completed", feedback: null };
  }
  if (order !== attempt.currentIndex) {
    // Stale request (e.g. double submit) — ignore quietly.
    return { recorded: false, finished: false, feedback: null };
  }

  const aq = attempt.questions[order];
  if (!aq?.startedAt || aq.answeredAt || aq.timedOut) {
    return { recorded: false, finished: false, feedback: null };
  }

  const elapsed = elapsedSeconds(aq.startedAt);
  const timedOut = selectedIndex === null || elapsed > QUESTION_SECONDS + GRACE_SECONDS;
  const correct = !timedOut && selectedIndex === aq.question.correctIndex;

  await prisma.attemptQuestion.update({
    where: { id: aq.id },
    data: {
      answeredAt: new Date(),
      selectedIndex: timedOut ? null : selectedIndex,
      correct,
      timedOut,
      timeSec: Math.min(elapsed, QUESTION_SECONDS),
    },
  });

  const isLast = order + 1 >= attempt.questionCount;
  if (isLast) {
    await completeAttempt(attemptId, userId);
  } else {
    await prisma.quizAttempt.update({
      where: { id: attemptId },
      data: { currentIndex: order + 1 },
    });
    await prisma.attemptQuestion.update({
      where: { attemptId_order: { attemptId, order: order + 1 } },
      data: { startedAt: new Date() },
    });
  }

  const feedback =
    attempt.mode === "practice" && !isSweep
      ? {
          correct,
          correctIndex: aq.question.correctIndex,
          explanation: aq.question.explanation,
        }
      : null;

  return { recorded: true, finished: isLast, feedback };
}

/** Server-side scoring, analysis generation and gamification on completion. */
async function completeAttempt(attemptId: string, userId: string) {
  const attempt = await prisma.quizAttempt.findFirst({
    where: { id: attemptId, userId },
    include: {
      topic: { select: { slug: true, title: true } },
      questions: { orderBy: { order: "asc" }, include: { question: true } },
    },
  });
  if (!attempt || attempt.status === "completed") return;

  const score = attempt.questions.filter((q) => q.correct).length;
  const percentage = Math.round((score / attempt.questionCount) * 1000) / 10;
  const passingPercent = await getPassingPercent();
  const passed = percentage >= passingPercent;
  const totalTimeSec = Math.round(
    attempt.questions.reduce((s, q) => s + (q.timeSec ?? 0), 0)
  );

  const analysis = analyzeAttempt(
    attempt.questions.map((q) => ({
      correct: q.correct === true,
      timedOut: q.timedOut,
      timeSec: q.timeSec,
      tags: JSON.parse(q.question.tags) as string[],
      difficulty: q.question.difficulty,
    })),
    attempt.topic,
    percentage,
    passed
  );

  await prisma.quizAttempt.update({
    where: { id: attemptId },
    data: {
      status: "completed",
      completedAt: new Date(),
      score,
      percentage,
      passed,
      totalTimeSec,
      analysis: JSON.stringify(analysis),
    },
  });

  // XP: base 20 + 1 per correct answer + pass bonus
  const xp = 20 + score + (passed ? 15 : 0);
  await prisma.user.update({ where: { id: userId }, data: { xp: { increment: xp } } });

  await checkAchievements(userId);
}
