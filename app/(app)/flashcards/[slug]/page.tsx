import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { FlashcardPlayer } from "./flashcard-player";

export const metadata: Metadata = { title: "Practice Flashcards" };
export const dynamic = "force-dynamic";

export default async function FlashcardTopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = await prisma.topic.findFirst({
    where: { slug, enabled: true },
    include: { flashcards: { orderBy: { order: "asc" } } },
  });
  if (!topic || topic.flashcards.length === 0) notFound();

  return (
    <div className="mx-auto max-w-2xl">
      <nav className="mb-4 text-sm text-muted" aria-label="Breadcrumb">
        <Link href="/flashcards" className="hover:text-ink">
          Flashcards
        </Link>{" "}
        / <span className="text-ink">{topic.title}</span>
      </nav>
      <FlashcardPlayer
        topicTitle={topic.title}
        topicSlug={topic.slug}
        cards={topic.flashcards.map((c) => ({ id: c.id, front: c.front, back: c.back }))}
      />
    </div>
  );
}
