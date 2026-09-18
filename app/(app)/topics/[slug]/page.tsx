import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Circle,
  ClipboardList,
  Clock,
  Layers,
} from "lucide-react";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/user";
import { Badge, ButtonLink, Card, PageHeader, ProgressBar, difficultyBadgeVariant } from "@/components/ui";
import { TopicIcon } from "@/components/topic-icon";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = await prisma.topic.findUnique({ where: { slug }, select: { title: true } });
  return { title: topic?.title ?? "Topic" };
}

export default async function TopicDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const user = await getCurrentUser();
  const topic = await prisma.topic.findFirst({
    where: { slug, enabled: true },
    include: {
      sections: { orderBy: { order: "asc" } },
      _count: { select: { questions: true, flashcards: true } },
    },
  });
  if (!topic) notFound();

  const progress = await prisma.sectionProgress.findMany({
    where: { userId: user.id, sectionId: { in: topic.sections.map((s) => s.id) } },
    select: { sectionId: true },
  });
  const doneIds = new Set(progress.map((p) => p.sectionId));
  const percent =
    topic.sections.length > 0 ? Math.round((doneIds.size / topic.sections.length) * 100) : 0;

  return (
    <div>
      <nav className="mb-4 text-sm text-muted" aria-label="Breadcrumb">
        <Link href="/topics" className="hover:text-ink">
          Topics
        </Link>{" "}
        / <span className="text-ink">{topic.title}</span>
      </nav>

      <Card className="mb-6 p-6">
        <div className="flex flex-wrap items-start gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent-strong">
            <TopicIcon name={topic.icon} className="h-7 w-7" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>{topic.category}</Badge>
              <Badge variant={difficultyBadgeVariant(topic.difficulty)}>{topic.difficulty}</Badge>
            </div>
            <h1 className="mt-1.5 text-2xl font-extrabold sm:text-3xl">{topic.title}</h1>
            <p className="mt-1 max-w-2xl text-sm text-muted">{topic.description}</p>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted">
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {topic.estMinutes} min study time
              </span>
              <span className="inline-flex items-center gap-1">
                <Layers className="h-3.5 w-3.5" aria-hidden="true" /> {topic.sections.length} subtopics
              </span>
              <span className="inline-flex items-center gap-1">
                <ClipboardList className="h-3.5 w-3.5" aria-hidden="true" /> {topic._count.questions}{" "}
                questions in bank
              </span>
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-3">
          <ProgressBar value={percent} className="flex-1" tone={percent >= 100 ? "success" : "accent"} />
          <span className="text-sm font-bold text-accent-strong">{percent}%</span>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <ButtonLink href={`/learn/${topic.slug}`} size="lg">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            {percent > 0 && percent < 100 ? "Continue Studying" : "Study Entire Topic"}
          </ButtonLink>
          <ButtonLink href={`/quiz/setup/${topic.slug}`} variant="accent" size="lg">
            Start Quiz <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href={`/flashcards/${topic.slug}`} variant="outline" size="lg">
            Flashcards ({topic._count.flashcards})
          </ButtonLink>
        </div>
      </Card>

      <PageHeader title="Subtopics" subtitle="Work through each section, or study the entire topic in order." />
      <div className="grid gap-3 sm:grid-cols-2">
        {topic.sections.map((s, i) => {
          const done = doneIds.has(s.id);
          return (
            <Link key={s.id} href={`/learn/${topic.slug}?section=${s.slug}`} className="group block">
              <Card className="flex items-center gap-4 p-4 transition-colors group-hover:border-accent">
                {done ? (
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-success" aria-label="Completed" />
                ) : (
                  <Circle className="h-6 w-6 shrink-0 text-border" aria-hidden="true" />
                )}
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">
                    {i + 1}. {s.title}
                  </p>
                  <p className="text-xs text-muted">
                    {s.estMinutes} min · {s.difficulty}
                  </p>
                </div>
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
