import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bookmark } from "lucide-react";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/user";
import { Badge, ButtonLink, Card, EmptyState, PageHeader } from "@/components/ui";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = { title: "Bookmarks" };
export const dynamic = "force-dynamic";

export default async function BookmarksPage() {
  const user = await getCurrentUser();
  const bookmarks = await prisma.bookmark.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    include: {
      section: { select: { slug: true, title: true } },
      topic: { select: { slug: true, title: true, category: true } },
    },
  });

  return (
    <div>
      <PageHeader title="Bookmarks" subtitle="Sections you saved for quick revision." />
      {bookmarks.length === 0 ? (
        <EmptyState
          icon={<Bookmark aria-hidden="true" />}
          title="No bookmarks yet"
          text="Save important concepts here for quick revision — use the Bookmark button while studying."
          action={<ButtonLink href="/topics">Browse Topics</ButtonLink>}
        />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {bookmarks.map((b) => (
            <Link
              key={b.id}
              href={`/learn/${b.topic.slug}?section=${b.section.slug}`}
              className="group block"
            >
              <Card className="flex items-center gap-4 p-4 transition-colors group-hover:border-accent">
                <Bookmark className="h-5 w-5 shrink-0 text-accent-strong" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold">{b.section.title}</p>
                  <p className="truncate text-xs text-muted">
                    {b.topic.title} · saved {formatDate(b.createdAt)}
                  </p>
                </div>
                <Badge>{b.topic.category}</Badge>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
