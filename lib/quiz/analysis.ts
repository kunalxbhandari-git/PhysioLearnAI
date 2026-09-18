import { tagLabel } from "./constants";

export interface TagStat {
  tag: string;
  label: string;
  correct: number;
  total: number;
  accuracy: number; // 0-100
}

export interface AttemptAnalysis {
  strengths: TagStat[];
  weaknesses: TagStat[];
  tagStats: TagStat[];
  patterns: string[];
  didWell: string[];
  toImprove: string[];
  plan: { day: number; task: string }[];
  recommendation: { label: string; href: string } | null;
  disclaimer: string;
}

interface AnswerForAnalysis {
  correct: boolean;
  timedOut: boolean;
  timeSec: number | null;
  tags: string[];
  difficulty: string;
}

/**
 * Deterministic performance analysis — the local "AI" fallback provider.
 * Works entirely from real answer data, so it never fabricates facts.
 */
export function analyzeAttempt(
  answers: AnswerForAnalysis[],
  topic: { slug: string; title: string },
  percentage: number,
  passed: boolean
): AttemptAnalysis {
  const byTag = new Map<string, { correct: number; total: number }>();
  for (const a of answers) {
    for (const tag of a.tags) {
      const s = byTag.get(tag) ?? { correct: 0, total: 0 };
      s.total += 1;
      if (a.correct) s.correct += 1;
      byTag.set(tag, s);
    }
  }

  const tagStats: TagStat[] = [...byTag.entries()]
    .map(([tag, s]) => ({
      tag,
      label: tagLabel(tag),
      correct: s.correct,
      total: s.total,
      accuracy: Math.round((s.correct / s.total) * 100),
    }))
    .sort((a, b) => a.accuracy - b.accuracy);

  const meaningful = tagStats.filter((t) => t.total >= 2);
  const weaknesses = meaningful.filter((t) => t.accuracy < 70);
  const strengths = meaningful.filter((t) => t.accuracy >= 80).sort((a, b) => b.accuracy - a.accuracy);

  const timeouts = answers.filter((a) => a.timedOut).length;
  const answered = answers.filter((a) => !a.timedOut);
  const avgTime =
    answered.length > 0
      ? answered.reduce((s, a) => s + (a.timeSec ?? 0), 0) / answered.length
      : 0;
  const hardStats = answers.filter((a) => a.difficulty === "Hard");
  const hardAccuracy =
    hardStats.length > 0 ? hardStats.filter((a) => a.correct).length / hardStats.length : null;

  const patterns: string[] = [];
  for (const w of weaknesses.slice(0, 3)) {
    patterns.push(
      `You answered ${w.total - w.correct} of ${w.total} questions on ${w.label.toLowerCase()} incorrectly.`
    );
  }
  if (timeouts > 0) {
    patterns.push(
      `${timeouts} question${timeouts > 1 ? "s" : ""} timed out — consider flagging a first-instinct answer early, then refining it with remaining time.`
    );
  }
  if (avgTime > 90 && timeouts === 0) {
    patterns.push(
      `Your average response time was ${Math.round(avgTime)}s per question — accurate but close to the limit. More retrieval practice with flashcards can speed up recall.`
    );
  }
  if (hardAccuracy !== null && hardAccuracy < 0.5 && hardStats.length >= 3) {
    patterns.push(
      "Most marks were lost on hard-level questions, which usually test applied clinical reasoning rather than recall — practise working through the 'why' behind each answer."
    );
  }

  const didWell: string[] = strengths
    .slice(0, 3)
    .map((s) => `Strong performance in ${s.label.toLowerCase()} (${s.accuracy}%).`);
  if (timeouts === 0) didWell.push("You answered every question within the time limit.");
  if (avgTime > 0 && avgTime < 45 && percentage >= 70)
    didWell.push(`Fast and accurate — average response time of ${Math.round(avgTime)} seconds.`);
  if (didWell.length === 0)
    didWell.push("You completed the full assessment — every attempt builds a clearer picture of what to study next.");

  const toImprove = weaknesses.slice(0, 4).map((w) => `${w.label} (${w.accuracy}% accuracy)`);

  const mock = topic.slug === "mock-exam";
  const plan: { day: number; task: string }[] = [];
  let day = 1;
  for (const w of weaknesses.slice(0, 3)) {
    plan.push({
      day: day++,
      task: mock
        ? `Re-study ${w.label.toLowerCase()} across the topic library — that's where this paper cost you marks.`
        : `Re-study the ${w.label.toLowerCase()} sections of ${topic.title}.`,
    });
  }
  if (weaknesses.length === 0 && !passed) {
    plan.push({
      day: day++,
      task: mock
        ? "Re-read the quick revision summaries of your weakest topics."
        : `Re-read the full study module for ${topic.title}, focusing on the quick revision summary.`,
    });
  }
  plan.push({
    day: day++,
    task: mock
      ? "Practise flashcards from your weakest topics until recall feels immediate."
      : `Practise the ${topic.title} flashcards until recall feels immediate.`,
  });
  if (timeouts > 0) plan.push({ day: day++, task: "Take a 10-question practice-mode quiz to build speed with instant feedback." });
  plan.push({
    day: day++,
    task: mock ? "Take another mixed mock exam and compare your score." : `Retake the ${topic.title} assessment and compare your score.`,
  });

  const worst = weaknesses[0] ?? null;
  const isMock = topic.slug === "mock-exam";
  const recommendation = isMock
    ? worst
      ? { label: `Study weak area: ${worst.label}`, href: "/topics" }
      : { label: "Take another mock exam", href: "/exams" }
    : worst
      ? {
          label: `Study weak area: ${worst.label} in ${topic.title}`,
          href: `/learn/${topic.slug}`,
        }
      : passed
        ? { label: "Explore your next topic", href: "/topics" }
        : { label: `Re-study ${topic.title}`, href: `/learn/${topic.slug}` };

  return {
    strengths,
    weaknesses,
    tagStats,
    patterns,
    didWell,
    toImprove,
    plan,
    recommendation,
    disclaimer:
      "This analysis is generated from your quiz responses for educational guidance only. It is not medical advice.",
  };
}
