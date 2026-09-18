import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(req: NextRequest) {
  const q = (req.nextUrl.searchParams.get("q") ?? "").trim().toLowerCase();
  if (q.length < 2) return NextResponse.json({ results: [] });

  const [topics, sections] = await Promise.all([
    prisma.topic.findMany({
      where: { enabled: true },
      select: { slug: true, title: true, category: true, description: true },
    }),
    prisma.section.findMany({
      where: { topic: { enabled: true } },
      select: { slug: true, title: true, topic: { select: { slug: true, title: true } } },
    }),
  ]);

  const results = [
    ...topics
      .filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q)
      )
      .map((t) => ({
        type: "topic" as const,
        title: t.title,
        subtitle: t.category,
        href: `/topics/${t.slug}`,
      })),
    ...sections
      .filter((s) => s.title.toLowerCase().includes(q))
      .map((s) => ({
        type: "section" as const,
        title: s.title,
        subtitle: s.topic.title,
        href: `/learn/${s.topic.slug}?section=${s.slug}`,
      })),
  ].slice(0, 12);

  return NextResponse.json({ results });
}
