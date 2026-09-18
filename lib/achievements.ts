import { prisma } from "@/lib/db";
import { computeStreak } from "@/lib/streak";

export const ACHIEVEMENTS = [
  { code: "first-quiz", title: "First Assessment", description: "Complete your first quiz.", icon: "flag", xp: 25 },
  { code: "quizzes-10", title: "Ten Down", description: "Complete 10 quizzes.", icon: "layers", xp: 75 },
  { code: "score-90", title: "High Achiever", description: "Score 90% or higher on a quiz.", icon: "trending-up", xp: 50 },
  { code: "perfect-score", title: "Perfect Score", description: "Answer every question correctly in a quiz.", icon: "star", xp: 100 },
  { code: "streak-7", title: "Consistency", description: "Maintain a 7-day learning streak.", icon: "flame", xp: 100 },
  { code: "questions-100", title: "Century", description: "Answer 100 questions.", icon: "hash", xp: 75 },
  { code: "topic-explorer", title: "Topic Explorer", description: "Study sections in 5 different topics.", icon: "compass", xp: 50 },
  { code: "first-topic", title: "First Steps", description: "Complete every section of a topic.", icon: "book-open", xp: 50 },
] as const;

/** Evaluate all achievement conditions and unlock any newly earned ones. */
export async function checkAchievements(userId: string): Promise<string[]> {
  const [defs, owned, attempts, answeredCount, sectionProgress] = await Promise.all([
    prisma.achievement.findMany(),
    prisma.userAchievement.findMany({ where: { userId }, select: { achievementId: true } }),
    prisma.quizAttempt.findMany({
      where: { userId, status: "completed" },
      select: { percentage: true, score: true, questionCount: true },
    }),
    prisma.attemptQuestion.count({ where: { attempt: { userId }, answeredAt: { not: null } } }),
    prisma.sectionProgress.findMany({
      where: { userId },
      include: { section: { select: { topicId: true } } },
    }),
  ]);

  const ownedIds = new Set(owned.map((o) => o.achievementId));
  const topicsStudied = new Set(sectionProgress.map((p) => p.section.topicId)).size;
  const { current: streak } = await computeStreak(userId);

  // Has any topic been fully completed?
  const topics = await prisma.topic.findMany({
    where: { enabled: true },
    select: { id: true, _count: { select: { sections: true } } },
  });
  const doneByTopic = new Map<string, number>();
  for (const p of sectionProgress) {
    doneByTopic.set(p.section.topicId, (doneByTopic.get(p.section.topicId) ?? 0) + 1);
  }
  const anyTopicComplete = topics.some(
    (t) => t._count.sections > 0 && (doneByTopic.get(t.id) ?? 0) >= t._count.sections
  );

  const conditions: Record<string, boolean> = {
    "first-quiz": attempts.length >= 1,
    "quizzes-10": attempts.length >= 10,
    "score-90": attempts.some((a) => (a.percentage ?? 0) >= 90),
    "perfect-score": attempts.some((a) => a.score === a.questionCount && a.questionCount > 0),
    "streak-7": streak >= 7,
    "questions-100": answeredCount >= 100,
    "topic-explorer": topicsStudied >= 5,
    "first-topic": anyTopicComplete,
  };

  const newlyUnlocked: string[] = [];
  for (const def of defs) {
    if (ownedIds.has(def.id)) continue;
    if (conditions[def.code]) {
      await prisma.userAchievement.create({ data: { userId, achievementId: def.id } });
      await prisma.user.update({ where: { id: userId }, data: { xp: { increment: def.xp } } });
      newlyUnlocked.push(def.code);
    }
  }
  return newlyUnlocked;
}
