import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/user";
import { getTopicProgressMap } from "@/lib/progress";
import { PageHeader } from "@/components/ui";
import { TopicLibrary } from "./topic-library";

export const metadata: Metadata = { title: "Topics" };
export const dynamic = "force-dynamic";

export default async function TopicsPage() {
  const user = await getCurrentUser();
  const [topics, progressMap] = await Promise.all([
    prisma.topic.findMany({
      where: { enabled: true },
      orderBy: [{ category: "asc" }, { order: "asc" }, { title: "asc" }],
      include: { _count: { select: { sections: true, questions: true } } },
    }),
    getTopicProgressMap(user.id),
  ]);

  const items = topics.map((t) => ({
    slug: t.slug,
    title: t.title,
    category: t.category,
    description: t.description,
    difficulty: t.difficulty,
    estMinutes: t.estMinutes,
    icon: t.icon,
    sectionCount: t._count.sections,
    questionCount: t._count.questions,
    progress: progressMap.get(t.id)?.percent ?? 0,
    completed: (progressMap.get(t.id)?.percent ?? 0) >= 100,
  }));

  return (
    <div>
      <PageHeader
        title="Physiotherapy Knowledge Library"
        subtitle="Browse topics across anatomy, conditions, assessment and exercise therapy."
      />
      <TopicLibrary topics={items} />
    </div>
  );
}
