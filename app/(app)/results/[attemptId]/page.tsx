import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import {
  AlarmClock,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  RefreshCcw,
  Timer,
  TrendingDown,
  TrendingUp,
  XCircle,
} from "lucide-react";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/user";
import { getPassingPercent } from "@/lib/settings";
import type { AttemptAnalysis } from "@/lib/quiz/analysis";
import { Badge, ButtonLink, Card, ProgressBar, ProgressRing, difficultyBadgeVariant } from "@/components/ui";
import { cn, formatDateTime, formatDuration } from "@/lib/utils";
import { PrintButton } from "./print-button";
import { Confetti } from "@/components/confetti";

export const metadata: Metadata = { title: "Assessment Result" };
export const dynamic = "force-dynamic";

export default async function ResultPage({
  params,
}: {
  params: Promise<{ attemptId: string }>;
}) {
  const { attemptId } = await params;
  const user = await getCurrentUser();

  const attempt = await prisma.quizAttempt.findFirst({
    where: { id: attemptId, userId: user.id },
    include: {
      topic: { select: { slug: true, title: true } },
      questions: { orderBy: { order: "asc" }, include: { question: true } },
    },
  });
  if (!attempt) notFound();
  if (attempt.status !== "completed") redirect(`/quiz/play/${attempt.id}`);

  const passingPercent = await getPassingPercent();
  const analysis = attempt.analysis ? (JSON.parse(attempt.analysis) as AttemptAnalysis) : null;

  const score = attempt.score ?? 0;
  const percentage = Math.round(attempt.percentage ?? 0);
  const passed = attempt.passed ?? false;
  const timedOut = attempt.questions.filter((q) => q.timedOut).length;
  const incorrect = attempt.questions.filter((q) => q.correct === false && !q.timedOut).length;

  const answeredTimes = attempt.questions
    .filter((q) => !q.timedOut && q.timeSec !== null)
    .map((q) => q.timeSec as number);
  const avgTime = answeredTimes.length
    ? answeredTimes.reduce((a, b) => a + b, 0) / answeredTimes.length
    : 0;
  const fastest = answeredTimes.length ? Math.min(...answeredTimes) : 0;
  const slowest = answeredTimes.length ? Math.max(...answeredTimes) : 0;

  const byDifficulty = ["Easy", "Medium", "Hard"].map((d) => {
    const qs = attempt.questions.filter((q) => q.question.difficulty === d);
    const c = qs.filter((q) => q.correct).length;
    return { difficulty: d, correct: c, total: qs.length };
  });

  const LETTERS = ["A", "B", "C", "D"];

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {passed && <Confetti />}
      {/* Summary */}
      <Card className="p-6 sm:p-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
          <ProgressRing value={percentage} size={150} strokeWidth={12} tone={passed ? "success" : "danger"}>
            <div className="text-center">
              <p className="text-3xl font-extrabold">{percentage}%</p>
              <p className={cn("text-xs font-bold", passed ? "text-success" : "text-danger")}>
                {passed ? "PASS" : "NEEDS WORK"}
              </p>
            </div>
          </ProgressRing>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-strong">
              Assessment Complete
            </p>
            <h1 className="mt-1 text-2xl font-extrabold sm:text-3xl">{attempt.topic.title}</h1>
            <p className="mt-1 text-sm text-muted">
              {formatDateTime(attempt.completedAt ?? attempt.startedAt)} · {attempt.mode === "exam" ? "Exam" : "Practice"} mode ·
              pass mark {passingPercent}%
            </p>
            <p className="mt-3 text-4xl font-extrabold">
              {score} <span className="text-xl text-muted">/ {attempt.questionCount}</span>
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
              <ButtonLink href={`/quiz/setup/${attempt.topic.slug}`}>
                <RefreshCcw className="h-4 w-4" aria-hidden="true" /> Retake Quiz
              </ButtonLink>
              <ButtonLink href={`/learn/${attempt.topic.slug}`} variant="outline">
                <BookOpen className="h-4 w-4" aria-hidden="true" /> Study Weak Areas
              </ButtonLink>
              <PrintButton />
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-8 grid grid-cols-2 gap-3 border-t border-border pt-6 sm:grid-cols-4">
          <StatBox icon={<CheckCircle2 className="h-4 w-4 text-success" />} label="Correct" value={String(score)} />
          <StatBox icon={<XCircle className="h-4 w-4 text-danger" />} label="Incorrect" value={String(incorrect)} />
          <StatBox icon={<AlarmClock className="h-4 w-4 text-warning" />} label="Timed out" value={String(timedOut)} />
          <StatBox icon={<Timer className="h-4 w-4 text-accent-strong" />} label="Avg / question" value={formatDuration(avgTime)} />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatBox icon={<TrendingUp className="h-4 w-4 text-success" />} label="Fastest answer" value={formatDuration(fastest)} />
          <StatBox icon={<TrendingDown className="h-4 w-4 text-warning" />} label="Slowest answer" value={formatDuration(slowest)} />
          <StatBox icon={<Timer className="h-4 w-4 text-muted" />} label="Total time" value={formatDuration(attempt.totalTimeSec ?? 0)} />
          <div className="rounded-xl bg-surface-2 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">By difficulty</p>
            <div className="mt-1 space-y-0.5 text-xs font-semibold">
              {byDifficulty
                .filter((d) => d.total > 0)
                .map((d) => (
                  <p key={d.difficulty}>
                    {d.difficulty}: {d.correct}/{d.total}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </Card>

      {/* AI analysis */}
      {analysis && (
        <section aria-label="Performance analysis">
          <h2 className="mb-3 text-xl font-bold">Your Performance</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="p-5">
              <h3 className="font-bold text-success">What You Did Well</h3>
              <ul className="mt-2 space-y-1.5 text-sm leading-relaxed">
                {analysis.didWell.map((s, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-5">
              <h3 className="font-bold text-danger">Areas to Improve</h3>
              {analysis.toImprove.length === 0 ? (
                <p className="mt-2 text-sm text-muted">No clear weak areas in this attempt — great work.</p>
              ) : (
                <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm font-semibold leading-relaxed">
                  {analysis.toImprove.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
              )}
              {analysis.patterns.length > 0 && (
                <>
                  <h4 className="mt-4 text-sm font-bold">Why you lost marks</h4>
                  <ul className="mt-1.5 space-y-1.5 text-sm text-muted">
                    {analysis.patterns.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </>
              )}
            </Card>
          </div>

          {/* Tag accuracy bars */}
          {analysis.tagStats.length > 0 && (
            <Card className="mt-4 p-5">
              <h3 className="font-bold">Accuracy by Area</h3>
              <div className="mt-3 space-y-3">
                {analysis.tagStats.map((t) => (
                  <div key={t.tag}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="font-semibold">{t.label}</span>
                      <span className="text-muted">
                        {t.correct}/{t.total} · {t.accuracy}%
                      </span>
                    </div>
                    <ProgressBar
                      value={t.accuracy}
                      tone={t.accuracy >= 80 ? "success" : t.accuracy >= 60 ? "warning" : "danger"}
                    />
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Revision plan */}
          <Card className="mt-4 p-5">
            <h3 className="font-bold">Recommended Revision Plan</h3>
            <ol className="mt-3 space-y-2.5">
              {analysis.plan.map((p) => (
                <li key={p.day} className="flex items-start gap-3">
                  <span className="flex h-8 w-14 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-xs font-extrabold text-accent-strong">
                    Day {p.day}
                  </span>
                  <span className="pt-1.5 text-sm leading-relaxed">{p.task}</span>
                </li>
              ))}
            </ol>
            {analysis.recommendation && (
              <ButtonLink href={analysis.recommendation.href} className="mt-5" variant="accent">
                {analysis.recommendation.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            )}
            <p className="mt-4 text-xs text-muted">{analysis.disclaimer}</p>
          </Card>
        </section>
      )}

      {/* Review answers */}
      <section aria-label="Review answers">
        <h2 className="mb-3 text-xl font-bold">Review Answers</h2>
        <div className="space-y-4">
          {attempt.questions.map((aq, i) => {
            const options = JSON.parse(aq.question.options) as string[];
            const state = aq.timedOut ? "timeout" : aq.correct ? "correct" : "incorrect";
            return (
              <Card
                key={aq.id}
                className={cn(
                  "overflow-hidden border-l-4",
                  state === "correct" && "border-l-success",
                  state === "incorrect" && "border-l-danger",
                  state === "timeout" && "border-l-warning"
                )}
              >
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-muted">Q{i + 1}</span>
                    <Badge variant={difficultyBadgeVariant(aq.question.difficulty)}>
                      {aq.question.difficulty}
                    </Badge>
                    {state === "timeout" && <Badge variant="warning">Timed Out</Badge>}
                    {state === "correct" && <Badge variant="success">Correct</Badge>}
                    {state === "incorrect" && <Badge variant="danger">Incorrect</Badge>}
                    {aq.timeSec !== null && (
                      <span className="ml-auto text-xs text-muted">{formatDuration(aq.timeSec)}</span>
                    )}
                  </div>
                  <p className="mt-2 font-semibold leading-relaxed">{aq.question.text}</p>
                  <div className="mt-3 space-y-1.5">
                    {options.map((opt, oi) => {
                      const isCorrect = oi === aq.question.correctIndex;
                      const isChosen = oi === aq.selectedIndex;
                      return (
                        <div
                          key={oi}
                          className={cn(
                            "flex items-start gap-2.5 rounded-xl px-3 py-2 text-sm leading-relaxed",
                            isCorrect && "bg-success-soft font-semibold",
                            isChosen && !isCorrect && "bg-danger-soft"
                          )}
                        >
                          <span className="font-bold">{LETTERS[oi]}.</span>
                          <span>{opt}</span>
                          {isCorrect && (
                            <CheckCircle2 className="ml-auto mt-0.5 h-4 w-4 shrink-0 text-success" aria-label="Correct answer" />
                          )}
                          {isChosen && !isCorrect && (
                            <XCircle className="ml-auto mt-0.5 h-4 w-4 shrink-0 text-danger" aria-label="Your answer" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-3 rounded-xl bg-surface-2 p-3 text-sm leading-relaxed">
                    <span className="font-bold">Explanation: </span>
                    {aq.question.explanation}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <div className="no-print flex flex-wrap justify-center gap-3 pb-4">
        <ButtonLink href={`/quiz/setup/${attempt.topic.slug}`}>
          <RefreshCcw className="h-4 w-4" aria-hidden="true" /> Retake Quiz
        </ButtonLink>
        <ButtonLink href={`/topics/${attempt.topic.slug}`} variant="outline">
          Back to Topic
        </ButtonLink>
        <ButtonLink href="/history" variant="outline">
          All Results
        </ButtonLink>
      </div>
    </div>
  );
}

function StatBox({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl bg-surface-2 p-3">
      <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
        {icon} {label}
      </p>
      <p className="mt-1 text-xl font-extrabold">{value}</p>
    </div>
  );
}
