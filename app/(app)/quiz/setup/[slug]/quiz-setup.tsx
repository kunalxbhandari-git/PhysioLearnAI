"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AlarmClock, GraduationCap, Loader2, Play, Timer } from "lucide-react";
import { Button, Card } from "@/components/ui";
import { cn } from "@/lib/utils";

const LENGTHS = [
  { count: 10 as const, estimate: "≈ 20 minutes" },
  { count: 20 as const, estimate: "≈ 40 minutes" },
  { count: 30 as const, estimate: "≈ 60 minutes" },
];

export function QuizSetup({
  topicSlug,
  topicTitle,
  questionBankSize,
}: {
  topicSlug: string;
  topicTitle: string;
  questionBankSize: number;
}) {
  const [count, setCount] = useState<10 | 20 | 30>(10);
  const [mode, setMode] = useState<"exam" | "practice">("exam");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function start() {
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/quiz/start", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ topicSlug, count, mode }),
      });
      const data = (await res.json()) as { attemptId?: string; error?: string };
      if (res.ok && data.attemptId) {
        router.push(`/quiz/play/${data.attemptId}`);
        return;
      }
      setError(data.error ?? "Could not start the quiz. Please try again.");
      setLoading(false);
    } catch {
      setError("Network error — check your connection and try again.");
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-extrabold sm:text-3xl">Test Your Knowledge</h1>
        <p className="mt-1 text-muted">
          {topicTitle} · {questionBankSize} questions in the bank
        </p>
      </div>

      <h2 className="mb-3 font-bold">How many questions would you like?</h2>
      <div className="grid gap-3 sm:grid-cols-3" role="radiogroup" aria-label="Number of questions">
        {LENGTHS.map((l) => {
          const disabled = questionBankSize < l.count;
          return (
            <button
              key={l.count}
              role="radio"
              aria-checked={count === l.count}
              disabled={disabled}
              onClick={() => setCount(l.count)}
              className={cn(
                "rounded-2xl border-2 p-5 text-center transition-all disabled:opacity-40",
                count === l.count
                  ? "border-accent bg-accent-soft"
                  : "border-border bg-surface hover:border-accent/50"
              )}
            >
              <p className="text-3xl font-extrabold">{l.count}</p>
              <p className="text-sm font-semibold">Questions</p>
              <p className="mt-1 text-xs text-muted">{l.estimate}</p>
            </button>
          );
        })}
      </div>

      <h2 className="mb-3 mt-7 font-bold">Choose your mode</h2>
      <div className="grid gap-3 sm:grid-cols-2" role="radiogroup" aria-label="Quiz mode">
        <button
          role="radio"
          aria-checked={mode === "exam"}
          onClick={() => setMode("exam")}
          className={cn(
            "rounded-2xl border-2 p-5 text-left transition-all",
            mode === "exam" ? "border-accent bg-accent-soft" : "border-border bg-surface hover:border-accent/50"
          )}
        >
          <p className="flex items-center gap-2 font-bold">
            <AlarmClock className="h-4 w-4 text-accent-strong" aria-hidden="true" /> Exam Mode
          </p>
          <p className="mt-1 text-sm text-muted">
            Strict timing, no feedback until the end. Answers and explanations are revealed in the
            final review.
          </p>
        </button>
        <button
          role="radio"
          aria-checked={mode === "practice"}
          onClick={() => setMode("practice")}
          className={cn(
            "rounded-2xl border-2 p-5 text-left transition-all",
            mode === "practice" ? "border-accent bg-accent-soft" : "border-border bg-surface hover:border-accent/50"
          )}
        >
          <p className="flex items-center gap-2 font-bold">
            <GraduationCap className="h-4 w-4 text-accent-strong" aria-hidden="true" /> Practice Mode
          </p>
          <p className="mt-1 text-sm text-muted">
            Immediate feedback with the explanation after every question. Same timer, lower stakes.
          </p>
        </button>
      </div>

      <Card className="mt-7 flex items-start gap-3 p-4">
        <Timer className="mt-0.5 h-5 w-5 shrink-0 text-accent-strong" aria-hidden="true" />
        <div className="text-sm text-muted">
          <p className="font-semibold text-ink">Every question has a 2-minute limit.</p>
          <p className="mt-0.5">
            The timer is per question, not for the whole quiz. When time runs out the question is
            marked unanswered and the next one starts automatically. Timing is enforced on the
            server — refreshing won&apos;t add time.
          </p>
        </div>
      </Card>

      {error && (
        <p role="alert" className="mt-4 rounded-xl bg-danger-soft px-3 py-2 text-sm font-medium text-danger">
          {error}
        </p>
      )}

      <div className="mt-6 flex justify-center">
        <Button size="lg" onClick={start} disabled={loading || questionBankSize === 0} className="min-w-56">
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Play className="h-4 w-4" aria-hidden="true" />
          )}
          Begin Assessment
        </Button>
      </div>
    </div>
  );
}
