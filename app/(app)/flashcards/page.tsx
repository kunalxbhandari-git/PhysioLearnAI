import type { Metadata } from "next";
import Link from "next/link";
import { Layers } from "lucide-react";
import { prisma } from "@/lib/db";
import { Badge, Card, PageHeader } from "@/components/ui";
import { TopicIcon } from "@/components/topic-icon";

export const metadata: Metadata = { title: "Flashcards" };
export const dynamic = "force-dynamic";

export default async function FlashcardsPage() {
  const topics = await prisma.topic.findMany({
    where: { enabled: true, flashcards: { some: {} } },
    orderBy: [{ category: "asc" }, { title: "asc" }],
    include: { _count: { select: { flashcards: true } } },
  });

  return (
    <div>
      <PageHeader
        title="Flashcards"
        subtitle="Rapid recall practice generated from each study topic. Flip, rate yourself, repeat."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {topics.map((t) => (
          <Link key={t.slug} href={`/flashcards/${t.slug}`} className="group block">
            <Card className="flex items-center gap-4 p-5 transition-colors group-hover:border-accent">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                <TopicIcon name={t.icon} className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-bold">{t.title}</p>
                <p className="flex items-center gap-1 text-xs text-muted">
                  <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                  {t._count.flashcards} cards
                </p>
              </div>
              <Badge>{t.category}</Badge>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
