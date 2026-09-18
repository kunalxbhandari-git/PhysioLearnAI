import { prisma } from "@/lib/db";

export interface TopicProgress {
  done: number;
  total: number;
  percent: number;
}

/** Per-topic study progress (completed sections / total sections). */
export async function getTopicProgressMap(userId: string): Promise<Map<string, TopicProgress>> {
  const [topics, progress] = await Promise.all([
    prisma.topic.findMany({
      where: { enabled: true },
      select: { id: true, _count: { select: { sections: true } } },
    }),
    prisma.sectionProgress.findMany({
      where: { userId },
      include: { section: { select: { topicId: true } } },
    }),
  ]);

  const doneByTopic = new Map<string, number>();
  for (const p of progress) {
    doneByTopic.set(p.section.topicId, (doneByTopic.get(p.section.topicId) ?? 0) + 1);
  }

  const map = new Map<string, TopicProgress>();
  for (const t of topics) {
    const done = doneByTopic.get(t.id) ?? 0;
    const total = t._count.sections;
    map.set(t.id, {
      done,
      total,
      percent: total > 0 ? Math.round((done / total) * 100) : 0,
    });
  }
  return map;
}

/** Most recently studied topic (by latest section completion). */
export async function getContinueLearning(userId: string) {
  const latest = await prisma.sectionProgress.findFirst({
    where: { userId },
    orderBy: { completedAt: "desc" },
    include: {
      section: {
        include: { topic: { select: { id: true, slug: true, title: true, category: true } } },
      },
    },
  });
  if (!latest) return null;
  const progressMap = await getTopicProgressMap(userId);
  const p = progressMap.get(latest.section.topic.id) ?? { done: 0, total: 0, percent: 0 };
  return { topic: latest.section.topic, progress: p };
}

/** Questions answered today, for the daily goal card. */
export async function getTodayQuestionCount(userId: string): Promise<number> {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  return prisma.attemptQuestion.count({
    where: { attempt: { userId }, answeredAt: { gte: start } },
  });
}
