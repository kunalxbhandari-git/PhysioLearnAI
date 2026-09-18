"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { AlarmClock, ArrowRight, CheckCircle2, Loader2, XCircle } from "lucide-react";
import { Badge, Button, Card, ProgressBar, difficultyBadgeVariant } from "@/components/ui";
import type { PlayState } from "@/lib/quiz/engine";
import { cn, formatSeconds } from "@/lib/utils";

interface Feedback {
  correct: boolean;
  correctIndex: number;
  explanation: string;
}

const LETTERS = ["A", "B", "C", "D"];

export function QuizPlayer({ initialState }: { initialState: PlayState }) {
  const [state, setState] = useState<PlayState>(initialState);
  const [remaining, setRemaining] = useState(initialState.remainingSeconds);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [error, setError] = useState<string | null>(null);
  const timeoutFired = useRef(false);
  const router = useRouter();

  const applyState = useCallback(
    (next: PlayState) => {
      setState(next);
      setRemaining(next.remainingSeconds);
      setSelected(null);
      timeoutFired.current = false;
      if (next.status === "completed") {
        router.push(`/results/${next.attemptId}`);
      }
    },
    [router]
  );

  const submit = useCallback(
    async (choice: number | null) => {
      if (submitting || state.status !== "in_progress" || !state.question) return;
      setSubmitting(true);
      setError(null);
      try {
        const res = await fetch(`/api/quiz/${state.attemptId}/answer`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ order: state.question.order, selectedIndex: choice }),
        });
        if (!res.ok) throw new Error();
        const data = (await res.json()) as {
          finished: boolean;
          feedback: Feedback | null;
          state: PlayState;
        };
        if (data.feedback && choice !== null) {
          // Practice mode: pause on feedback before moving on.
          setFeedback(data.feedback);
          setState((s) => ({ ...s })); // keep current question rendered
          // Stash next state to apply on "Next"
          pendingState.current = data.state;
        } else {
          applyState(data.state);
        }
      } catch {
        setError("Could not submit — check your connection. Your timer is still running.");
      } finally {
        setSubmitting(false);
      }
    },
    [state, submitting, applyState]
  );

  const pendingState = useRef<PlayState | null>(null);

  function continueAfterFeedback() {
    const next = pendingState.current;
    pendingState.current = null;
    setFeedback(null);
    if (next) applyState(next);
  }

  // Countdown tick — purely visual; the server is the source of truth.
  useEffect(() => {
    if (state.status !== "in_progress" || feedback) return;
    const interval = setInterval(() => {
      setRemaining((r) => {
        const next = r - 1;
        if (next <= 0 && !timeoutFired.current) {
          timeoutFired.current = true;
          void submit(null);
        }
        return Math.max(0, next);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [state.status, state.currentIndex, feedback, submit]);

  // Warn before leaving mid-quiz
  useEffect(() => {
    const handler = (e: BeforeUnloadEvent) => {
      if (state.status === "in_progress") e.preventDefault();
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [state.status]);

  // Keyboard: A-D / 1-4 select, Enter submits
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (feedback || !state.question) return;
      const k = e.key.toLowerCase();
      const letterIdx = ["a", "b", "c", "d"].indexOf(k);
      const numIdx = ["1", "2", "3", "4"].indexOf(k);
      const idx = letterIdx !== -1 ? letterIdx : numIdx;
      if (idx !== -1 && idx < (state.question.options.length ?? 0)) setSelected(idx);
      if (e.key === "Enter" && selected !== null) void submit(selected);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [state.question, selected, feedback, submit]);

  if (state.status !== "in_progress" || !state.question) {
    return (
      <div className="flex min-h-64 items-center justify-center text-muted">
        <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" /> Preparing your
        results…
      </div>
    );
  }

  const q = state.question;
  const urgency = remaining <= 30 ? "urgent" : remaining <= 60 ? "warning" : "normal";
  const progressPct = (state.currentIndex / state.questionCount) * 100;

  return (
    <div className="mx-auto max-w-3xl">
      {/* Header: progress + timer */}
      <div className="sticky top-0 z-20 -mx-4 mb-6 border-b border-border bg-background/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 lg:static lg:mx-0 lg:border-0 lg:bg-transparent lg:px-0 lg:backdrop-blur-none">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-muted">{state.topic.title}</p>
            <p className="font-bold">
              Question {state.currentIndex + 1} of {state.questionCount}
            </p>
          </div>
          <div
            className={cn(
              "flex items-center gap-2 rounded-2xl border-2 px-4 py-2 font-mono text-xl font-extrabold tabular-nums",
              urgency === "normal" && "border-border bg-surface",
              urgency === "warning" && "border-warning bg-warning-soft text-warning",
              urgency === "urgent" && "border-danger bg-danger-soft text-danger"
            )}
            role="timer"
            aria-live={urgency === "urgent" ? "assertive" : "off"}
            aria-label={`Time remaining ${formatSeconds(remaining)}`}
          >
            <AlarmClock className="h-5 w-5" aria-hidden="true" />
            {formatSeconds(remaining)}
          </div>
        </div>
        <div className="mx-auto mt-3 max-w-3xl">
          <ProgressBar value={progressPct} />
        </div>
      </div>

      {/* Question navigator */}
      <div className="mb-5 flex flex-wrap gap-1.5" aria-label="Question overview">
        {Array.from({ length: state.questionCount }, (_, i) => {
          const answered = state.answered.find((a) => a.order === i);
          return (
            <span
              key={i}
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold",
                i === state.currentIndex
                  ? "bg-primary text-primary-fg"
                  : answered
                    ? answered.timedOut
                      ? "bg-danger-soft text-danger"
                      : "bg-success-soft text-success"
                    : "bg-surface-2 text-muted"
              )}
              aria-label={`Question ${i + 1}: ${
                i === state.currentIndex
                  ? "current"
                  : answered
                    ? answered.timedOut
                      ? "timed out"
                      : "answered"
                    : "not yet reached"
              }`}
            >
              {i + 1}
            </span>
          );
        })}
      </div>

      {/* Question */}
      <Card className="p-5 sm:p-8">
        <div className="mb-4 flex items-center justify-between gap-3">
          <Badge variant={difficultyBadgeVariant(q.difficulty)}>{q.difficulty}</Badge>
          <Badge variant={state.mode === "exam" ? "default" : "accent"}>
            {state.mode === "exam" ? "Exam Mode" : "Practice Mode"}
          </Badge>
        </div>
        <h2 className="text-lg font-bold leading-relaxed sm:text-xl">{q.text}</h2>

        <div className="mt-6 space-y-2.5" role="radiogroup" aria-label="Answer options">
          {q.options.map((opt, i) => {
            const isSel = selected === i;
            const showCorrect = feedback && i === feedback.correctIndex;
            const showWrong = feedback && isSel && !feedback.correct;
            return (
              <button
                key={i}
                role="radio"
                aria-checked={isSel}
                disabled={!!feedback || submitting}
                onClick={() => setSelected(i)}
                className={cn(
                  "flex w-full items-start gap-3 rounded-2xl border-2 p-4 text-left transition-all",
                  showCorrect
                    ? "border-success bg-success-soft"
                    : showWrong
                      ? "border-danger bg-danger-soft"
                      : isSel
                        ? "border-accent bg-accent-soft"
                        : "border-border bg-surface hover:border-accent/50"
                )}
              >
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold",
                    showCorrect
                      ? "bg-success text-white"
                      : showWrong
                        ? "bg-danger text-white"
                        : isSel
                          ? "bg-accent text-white"
                          : "bg-surface-2 text-muted"
                  )}
                >
                  {LETTERS[i]}
                </span>
                <span className="pt-0.5 text-sm leading-relaxed sm:text-base">{opt}</span>
                {showCorrect && (
                  <CheckCircle2 className="ml-auto mt-1 h-5 w-5 shrink-0 text-success" aria-label="Correct answer" />
                )}
                {showWrong && (
                  <XCircle className="ml-auto mt-1 h-5 w-5 shrink-0 text-danger" aria-label="Your incorrect answer" />
                )}
              </button>
            );
          })}
        </div>

        {feedback && (
          <div
            className={cn(
              "mt-5 rounded-2xl border p-4",
              feedback.correct ? "border-success/40 bg-success-soft" : "border-danger/40 bg-danger-soft"
            )}
            role="status"
          >
            <p className={cn("font-bold", feedback.correct ? "text-success" : "text-danger")}>
              {feedback.correct ? "Correct!" : "Not quite."}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed">{feedback.explanation}</p>
          </div>
        )}

        {error && (
          <p role="alert" className="mt-4 rounded-xl bg-danger-soft px-3 py-2 text-sm font-medium text-danger">
            {error}
          </p>
        )}

        <div className="mt-6 flex justify-end border-t border-border pt-5">
          {feedback ? (
            <Button size="lg" onClick={continueAfterFeedback}>
              {state.currentIndex + 1 >= state.questionCount ? "See Results" : "Next Question"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          ) : (
            <Button size="lg" onClick={() => submit(selected)} disabled={selected === null || submitting}>
              {submitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
              {state.currentIndex + 1 >= state.questionCount ? "Submit & Finish" : "Submit Answer"}
            </Button>
          )}
        </div>
      </Card>

      <p className="mt-4 text-center text-xs text-muted">
        Tip: press A–D to choose an option and Enter to submit.
      </p>
    </div>
  );
}
