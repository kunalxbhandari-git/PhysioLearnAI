import { prisma } from "@/lib/db";
import { computeStreak } from "@/lib/streak";
import { tagLabel } from "@/lib/quiz/constants";

export interface DashboardStats {
  topicsStudied: number;
  topicsCompleted: number;
  quizzesCompleted: number;
  averageScore: number | null;
  bestScore: number | null;
  streak: number;
  longestStreak: number;
  totalStudyMinutes: number;
  questionsAnswered: number;
  xp: number;
}

export async function getDashboardStats(userId: string): Promise<DashboardStats> {
  const [user, attempts, sectionProgress, topics, sessions, answeredCount] = await Promise.all([
    prisma.user.findUnique({ where: { id: userId } }),
    prisma.quizAttempt.findMany({
      where: { userId, status: "completed" },
      select: { percentage: true },
    }),
    prisma.sectionProgress.findMany({
      where: { userId },
      include: { section: { select: { topicId: true } } },
    }),
    prisma.topic.findMany({
      where: { enabled: true },
      select: { id: true, _count: { select: { sections: true } } },
    }),
    prisma.studySession.findMany({ where: { userId }, select: { seconds: true } }),
    prisma.attemptQuestion.count({ where: { attempt: { userId }, answeredAt: { not: null } } }),
  ]);

  const doneByTopic = new Map<string, number>();
  for (const p of sectionProgress) {
    doneByTopic.set(p.section.topicId, (doneByTopic.get(p.section.topicId) ?? 0) + 1);
  }
  const topicsCompleted = topics.filter(
    (t) => t._count.sections > 0 && (doneByTopic.get(t.id) ?? 0) >= t._count.sections
  ).length;

  const percentages = attempts.map((a) => a.percentage ?? 0);
  const { current, longest } = await computeStreak(userId);
  const studySeconds =
    sessions.reduce((s, x) => s + x.seconds, 0) + sectionProgress.length * 180; // ~3 min credit per completed section

  return {
    topicsStudied: doneByTopic.size,
    topicsCompleted,
    quizzesCompleted: attempts.length,
    averageScore: percentages.length
      ? Math.round(percentages.reduce((a, b) => a + b, 0) / percentages.length)
      : null,
    bestScore: percentages.length ? Math.round(Math.max(...percentages)) : null,
    streak: current,
    longestStreak: longest,
    totalStudyMinutes: Math.round(studySeconds / 60),
    questionsAnswered: answeredCount,
    xp: user?.xp ?? 0,
  };
}

export interface TagAccuracy {
  tag: string;
  label: string;
  correct: number;
  total: number;
  accuracy: number;
}

/** Accuracy per tag across ALL completed attempts — powers the weak-area engine. */
export async function getTagAccuracy(userId: string): Promise<TagAccuracy[]> {
  const answers = await prisma.attemptQuestion.findMany({
    where: { attempt: { userId, status: "completed" } },
    include: { question: { select: { tags: true } } },
  });

  const byTag = new Map<string, { correct: number; total: number }>();
  for (const a of answers) {
    const tags = JSON.parse(a.question.tags) as string[];
    for (const tag of tags) {
      const s = byTag.get(tag) ?? { correct: 0, total: 0 };
      s.total += 1;
      if (a.correct) s.correct += 1;
      byTag.set(tag, s);
    }
  }

  return [...byTag.entries()]
    .map(([tag, s]) => ({
      tag,
      label: tagLabel(tag),
      correct: s.correct,
      total: s.total,
      accuracy: Math.round((s.correct / s.total) * 100),
    }))
    .sort((a, b) => a.accuracy - b.accuracy);
}

/** Weak areas: tags with enough data and sub-70% accuracy, plus the topic to study. */
export async function getWeakAreas(userId: string, minAttempted = 3) {
  const tagStats = (await getTagAccuracy(userId)).filter(
    (t) => t.total >= minAttempted && t.accuracy < 70
  );

  // For each weak tag, find the topic where the user lost the most marks on it.
  const answers = await prisma.attemptQuestion.findMany({
    where: { attempt: { userId, status: "completed" }, correct: false },
    include: {
      question: { select: { tags: true } },
      attempt: { select: { topic: { select: { slug: true, title: true } } } },
    },
  });

  return tagStats.slice(0, 5).map((t) => {
    const counts = new Map<string, { title: string; n: number }>();
    for (const a of answers) {
      const tags = JSON.parse(a.question.tags) as string[];
      if (!tags.includes(t.tag)) continue;
      const cur = counts.get(a.attempt.topic.slug) ?? { title: a.attempt.topic.title, n: 0 };
      cur.n += 1;
      counts.set(a.attempt.topic.slug, cur);
    }
    const top = [...counts.entries()].sort((a, b) => b[1].n - a[1].n)[0];
    return {
      ...t,
      topicSlug: top?.[0] ?? null,
      topicTitle: top?.[1].title ?? null,
    };
  });
}

/** Score-over-time series for the progress charts. */
export async function getScoreHistory(userId: string) {
  const attempts = await prisma.quizAttempt.findMany({
    where: { userId, status: "completed" },
    orderBy: { completedAt: "asc" },
    include: { topic: { select: { title: true } } },
  });
  return attempts.map((a, i) => ({
    n: i + 1,
    date: a.completedAt?.toISOString() ?? a.startedAt.toISOString(),
    label: a.completedAt
      ? new Date(a.completedAt).toLocaleDateString(undefined, { month: "short", day: "numeric" })
      : "",
    percentage: a.percentage ?? 0,
    topic: a.topic.title,
    passed: a.passed ?? false,
  }));
}

/** Per-topic average accuracy for the bar chart. */
export async function getTopicAccuracy(userId: string) {
  const attempts = await prisma.quizAttempt.findMany({
    where: { userId, status: "completed" },
    include: { topic: { select: { title: true, slug: true } } },
  });
  const byTopic = new Map<string, { title: string; sum: number; n: number }>();
  for (const a of attempts) {
    const cur = byTopic.get(a.topic.slug) ?? { title: a.topic.title, sum: 0, n: 0 };
    cur.sum += a.percentage ?? 0;
    cur.n += 1;
    byTopic.set(a.topic.slug, cur);
  }
  return [...byTopic.entries()]
    .map(([slug, x]) => ({ slug, topic: x.title, accuracy: Math.round(x.sum / x.n), attempts: x.n }))
    .sort((a, b) => b.accuracy - a.accuracy);
}

/** Last N weeks of activity for the heatmap (days with any learning activity). */
export async function getActivityCalendar(userId: string, weeks = 16) {
  const { activeDays } = await computeStreak(userId);
  const out: { date: string; active: boolean }[] = [];
  const start = new Date();
  start.setDate(start.getDate() - weeks * 7 + 1);
  const cursor = new Date(start);
  const today = new Date();
  while (cursor <= today) {
    const key = `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, "0")}-${String(cursor.getDate()).padStart(2, "0")}`;
    out.push({ date: key, active: activeDays.has(key) });
    cursor.setDate(cursor.getDate() + 1);
  }
  return out;
}
