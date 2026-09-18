"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { Card } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { SampleQuestion } from "../exam-details";

const LETTERS = ["A", "B", "C", "D"];

/** Interactive exam-style questions with tap-to-answer and explanations. */
export function SampleQuestions({ questions }: { questions: SampleQuestion[] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  return (
    <div className="space-y-4">
      {questions.map((q, qi) => {
        const chosen = answers[qi];
        const answered = chosen !== undefined;
        return (
          <Card key={qi} className="p-5">
            <p className="font-semibold leading-relaxed">
              <span className="mr-1.5 text-sm font-extrabold text-accent-strong">Q{qi + 1}.</span>
              {q.q}
            </p>
            <div className="mt-3 space-y-1.5">
              {q.options.map((opt, oi) => {
                const isCorrect = answered && oi === q.correct;
                const isWrong = answered && chosen === oi && oi !== q.correct;
                return (
                  <button
                    key={oi}
                    disabled={answered}
                    onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                    className={cn(
                      "flex w-full items-start gap-2.5 rounded-xl border px-3 py-2.5 text-left text-sm leading-relaxed transition-colors",
                      isCorrect
                        ? "border-success bg-success-soft font-semibold"
                        : isWrong
                          ? "border-danger bg-danger-soft"
                          : "border-border bg-surface enabled:hover:border-accent/50"
                    )}
                  >
                    <span className="font-bold">{LETTERS[oi]}.</span>
                    <span className="flex-1">{opt}</span>
                    {isCorrect && <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-label="Correct answer" />}
                    {isWrong && <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-danger" aria-label="Your answer" />}
                  </button>
                );
              })}
            </div>
            {answered && (
              <p className="mt-3 rounded-xl bg-surface-2 p-3 text-sm leading-relaxed">
                <span className={cn("font-bold", chosen === q.correct ? "text-success" : "text-danger")}>
                  {chosen === q.correct ? "Correct! " : "Not quite. "}
                </span>
                {q.explanation}
              </p>
            )}
          </Card>
        );
      })}
    </div>
  );
}
