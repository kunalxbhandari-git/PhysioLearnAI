import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, StickyNote } from "lucide-react";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/user";
import { Badge, ButtonLink, Card, EmptyState, PageHeader } from "@/components/ui";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = { title: "Notes" };
export const dynamic = "force-dynamic";

export default async function NotesPage() {
  const user = await getCurrentUser();
  const notes = await prisma.note.findMany({
    where: { userId: user.id },
    orderBy: { updatedAt: "desc" },
    include: { topic: { select: { slug: true, title: true, category: true } } },
  });

  return (
    <div>
      <PageHeader title="My Notes" subtitle="Personal revision notes, one per topic. Edit them from any study page." />
      {notes.length === 0 ? (
        <EmptyState
          icon={<StickyNote aria-hidden="true" />}
          title="No notes yet"
          text="Open any topic and use the Notes button to write personal revision notes — they save automatically."
          action={<ButtonLink href="/topics">Browse Topics</ButtonLink>}
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {notes.map((n) => (
            <Card key={n.id} className="flex flex-col p-5">
              <div className="flex items-center justify-between gap-2">
                <h2 className="font-bold">{n.topic.title}</h2>
                <Badge>{n.topic.category}</Badge>
              </div>
              <p className="mt-2 flex-1 whitespace-pre-line text-sm leading-relaxed text-ink/85 line-clamp-6">
                {n.content}
              </p>
              <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                <span className="text-xs text-muted">Updated {formatDate(n.updatedAt)}</span>
                <Link
                  href={`/learn/${n.topic.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-accent-strong hover:underline"
                >
                  Open topic <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
