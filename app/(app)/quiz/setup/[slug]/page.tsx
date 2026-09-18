import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { QuizSetup } from "./quiz-setup";

export const metadata: Metadata = { title: "Quiz Setup" };
export const dynamic = "force-dynamic";

export default async function QuizSetupPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const isMock = slug === "mock-exam";
  const topic = isMock
    ? { slug: "mock-exam", title: "Mixed Mock Exam", _count: { questions: await prisma.question.count({ where: { enabled: true, topic: { enabled: true } } }) } }
    : await prisma.topic.findFirst({
        where: { slug, enabled: true },
        include: { _count: { select: { questions: true } } },
      });
  if (!topic) notFound();

  return (
    <div className="mx-auto max-w-3xl">
      <nav className="mb-4 text-sm text-muted" aria-label="Breadcrumb">
        {isMock ? (
          <>
            <Link href="/exams" className="hover:text-ink">
              Exam Prep
            </Link>{" "}
            / <span className="text-ink">Mock Exam</span>
          </>
        ) : (
          <>
            <Link href="/topics" className="hover:text-ink">
              Topics
            </Link>{" "}
            /{" "}
            <Link href={`/topics/${topic.slug}`} className="hover:text-ink">
              {topic.title}
            </Link>{" "}
            / <span className="text-ink">Quiz</span>
          </>
        )}
      </nav>
      <QuizSetup
        topicSlug={topic.slug}
        topicTitle={topic.title}
        questionBankSize={topic._count.questions}
      />
    </div>
  );
}
