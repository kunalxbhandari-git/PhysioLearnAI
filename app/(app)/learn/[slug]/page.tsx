import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/user";
import { StudyModule, type StudySectionData } from "./study-module";
import type { ContentBlock } from "@/prisma/data/types";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = await prisma.topic.findUnique({ where: { slug }, select: { title: true } });
  return { title: topic ? `Study: ${topic.title}` : "Study" };
}

export default async function LearnPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ section?: string }>;
}) {
  const [{ slug }, { section }] = await Promise.all([params, searchParams]);
  const user = await getCurrentUser();

  const topic = await prisma.topic.findFirst({
    where: { slug, enabled: true },
    include: { sections: { orderBy: { order: "asc" } } },
  });
  if (!topic || topic.sections.length === 0) notFound();

  const [progress, bookmarks, note] = await Promise.all([
    prisma.sectionProgress.findMany({
      where: { userId: user.id, sectionId: { in: topic.sections.map((s) => s.id) } },
      select: { sectionId: true },
    }),
    prisma.bookmark.findMany({
      where: { userId: user.id, sectionId: { in: topic.sections.map((s) => s.id) } },
      select: { sectionId: true },
    }),
    prisma.note.findUnique({
      where: { userId_topicId: { userId: user.id, topicId: topic.id } },
      select: { content: true },
    }),
  ]);

  const doneIds = new Set(progress.map((p) => p.sectionId));
  const bookmarkedIds = new Set(bookmarks.map((b) => b.sectionId));

  const sections: StudySectionData[] = topic.sections.map((s) => ({
    id: s.id,
    slug: s.slug,
    title: s.title,
    estMinutes: s.estMinutes,
    difficulty: s.difficulty,
    content: JSON.parse(s.content) as ContentBlock[],
    completed: doneIds.has(s.id),
    bookmarked: bookmarkedIds.has(s.id),
  }));

  const initialIndex = Math.max(
    0,
    section ? sections.findIndex((s) => s.slug === section) : sections.findIndex((s) => !s.completed)
  );

  return (
    <StudyModule
      topic={{
        slug: topic.slug,
        title: topic.title,
        category: topic.category,
        keyTakeaways: JSON.parse(topic.keyTakeaways) as string[],
      }}
      sections={sections}
      initialIndex={initialIndex === -1 ? 0 : initialIndex}
      initialNote={note?.content ?? ""}
    />
  );
}
