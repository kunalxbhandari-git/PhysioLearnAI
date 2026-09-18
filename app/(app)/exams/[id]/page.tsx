import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ClipboardList,
  FileQuestion,
  FileSearch,
  Globe,
  GraduationCap,
  Landmark,
  Lightbulb,
} from "lucide-react";
import { Badge, ButtonLink, Card, PageHeader } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { EXAM_DETAILS } from "../exam-details";
import { SampleQuestions } from "./sample-questions";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const exam = EXAM_DETAILS[id];
  return { title: exam ? `${exam.shortName} Prep` : "Exam Prep" };
}

export default async function ExamDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const exam = EXAM_DETAILS[id];
  if (!exam) notFound();

  return (
    <div className="space-y-8">
      <nav className="text-sm text-muted" aria-label="Breadcrumb">
        <Link href="/exams" className="hover:text-ink">
          Exam Prep
        </Link>{" "}
        / <span className="text-ink">{exam.shortName}</span>
      </nav>

      <FadeIn>
        <Card className="medical-grid relative overflow-hidden p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-12 -top-12 h-52 w-52 rounded-full bg-accent-soft blur-3xl" aria-hidden="true" />
          <div className="relative">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent">
                <Globe className="h-3 w-3" aria-hidden="true" /> {exam.region}
              </Badge>
              <Badge>
                <Landmark className="h-3 w-3" aria-hidden="true" /> {exam.body}
              </Badge>
            </div>
            <h1 className="mt-2 text-2xl font-extrabold sm:text-3xl">{exam.name}</h1>
            <p className="mt-2 max-w-3xl text-sm text-muted sm:text-base">{exam.intro}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <ButtonLink href="/quiz/setup/mock-exam" variant="accent">
                <GraduationCap className="h-4 w-4" aria-hidden="true" /> Take a Mock Exam
              </ButtonLink>
              <ButtonLink href="/topics" variant="outline">
                Browse Study Topics
              </ButtonLink>
            </div>
          </div>
        </Card>
      </FadeIn>

      {/* 1. How to apply */}
      <FadeIn>
        <section aria-label="How to apply">
          <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
            <ClipboardList className="h-5 w-5 text-accent-strong" aria-hidden="true" /> How to Apply
          </h2>
          <Card className="p-5 sm:p-6">
            <ol className="space-y-4">
              {exam.howToApply.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-primary-fg">
                    {i + 1}
                  </span>
                  <div className="pt-0.5">
                    <p className="font-bold">{s.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink/85">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-4 border-t border-border pt-3 text-xs text-muted">
              Fees, dates and rules change — always confirm on {exam.website} before applying.
            </p>
          </Card>
        </section>
      </FadeIn>

      {/* 2 & 3. Questions + past papers */}
      <FadeIn>
        <section aria-label="Exam-style questions">
          <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
            <FileQuestion className="h-5 w-5 text-accent-strong" aria-hidden="true" /> Exam-Style
            Questions
          </h2>
          <Card className="mb-4 border-warning/30 bg-warning-soft p-4">
            <p className="flex items-start gap-2 text-sm leading-relaxed">
              <FileSearch className="mt-0.5 h-4 w-4 shrink-0 text-warning" aria-hidden="true" />
              <span>
                <strong>About &ldquo;last year&rsquo;s questions&rdquo;:</strong> {exam.pastPapers.reality}
              </span>
            </p>
            <ul className="mt-2 space-y-1 pl-6 text-sm">
              {exam.pastPapers.officialSources.map((s, i) => (
                <li key={i} className="list-disc">
                  {s}
                </li>
              ))}
            </ul>
          </Card>
          <SampleQuestions questions={exam.sampleQuestions} />
        </section>
      </FadeIn>

      {/* 4. Quiz plan */}
      <FadeIn>
        <section aria-label="Quiz plan">
          <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
            <GraduationCap className="h-5 w-5 text-accent-strong" aria-hidden="true" /> Your Quiz Plan
          </h2>
          <Card className="p-5">
            <ul className="space-y-2">
              {exam.quizPlan.map((q, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {q}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <ButtonLink href="/quiz/setup/mock-exam" variant="accent">
                Start Mock Exam <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/progress" variant="outline">
                Check Weak Areas
              </ButtonLink>
            </div>
          </Card>
        </section>
      </FadeIn>

      {/* 5. What's different */}
      <FadeIn>
        <section aria-label="What makes this exam different">
          <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
            <Lightbulb className="h-5 w-5 text-warning" aria-hidden="true" /> What&rsquo;s Different
            About This Prep
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {exam.strategy.map((s, i) => (
              <Card key={i} className="p-4">
                <p className="text-sm leading-relaxed">
                  <span className="mr-1.5 font-extrabold text-accent-strong">{i + 1}.</span>
                  {s}
                </p>
              </Card>
            ))}
          </div>
        </section>
      </FadeIn>

      <p className="text-center text-[11px] text-muted">
        General educational guidance, not official exam information — always verify with {exam.website}.
      </p>
    </div>
  );
}
