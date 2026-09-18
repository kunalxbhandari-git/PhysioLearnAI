"use client";

import { useState } from "react";
import { CheckCircle2, HelpCircle, XCircle } from "lucide-react";
import { Card } from "@/components/ui";
import { cn } from "@/lib/utils";

export interface QotdQuestion {
  id: string;
  text: string;
  options: string[];
  topicTitle: string;
  difficulty: string;
}

const LETTERS = ["A", "B", "C", "D"];

/** Question of the Day — one-tap daily practice; answer is verified server-side. */
export function QotdWidget({ question }: { question: QotdQuestion }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [result, setResult] = useState<{ correct: boolean; correctIndex: number; explanation: string } | null>(null);
  const [busy, setBusy] = useState(false);

  async function answer(i: number) {
    if (result || busy) return;
    setSelected(i);
    setBusy(true);
    try {
      const res = await fetch("/api/qotd", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ questionId: question.id, selectedIndex: i }),
      });
      if (res.ok) setResult((await res.json()) as typeof result);
    } finally {
      setBusy(false);
    }
  }

  return (
    <Card className="flex h-full flex-col p-5">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-bold">
          <HelpCircle className="h-4 w-4 text-accent-strong" aria-hidden="true" />
          Question of the Day
        </h3>
        <span className="rounded-full bg-surface-2 px-2 py-0.5 text-[10px] font-bold text-muted">
          {question.topicTitle}
        </span>
      </div>
      <p className="mt-3 text-sm font-semibold leading-relaxed">{question.text}</p>
      <div className="mt-3 space-y-1.5">
        {question.options.map((opt, i) => {
          const isSel = selected === i;
          const isCorrect = result && i === result.correctIndex;
          const isWrong = result && isSel && !result.correct;
          return (
            <button
              key={i}
              onClick={() => answer(i)}
              disabled={!!result || busy}
              className={cn(
                "flex w-full items-start gap-2 rounded-xl border px-3 py-2 text-left text-xs leading-relaxed transition-colors",
                isCorrect
                  ? "border-success bg-success-soft font-semibold"
                  : isWrong
                    ? "border-danger bg-danger-soft"
                    : isSel
                      ? "border-accent bg-accent-soft"
                      : "border-border bg-surface hover:border-accent/50"
              )}
            >
              <span className="font-bold">{LETTERS[i]}.</span>
              <span className="flex-1">{opt}</span>
              {isCorrect && <CheckCircle2 className="h-4 w-4 shrink-0 text-success" aria-label="Correct" />}
              {isWrong && <XCircle className="h-4 w-4 shrink-0 text-danger" aria-label="Incorrect" />}
            </button>
          );
        })}
      </div>
      {result && (
        <p className="mt-3 rounded-xl bg-surface-2 p-3 text-xs leading-relaxed">
          <span className={cn("font-bold", result.correct ? "text-success" : "text-danger")}>
            {result.correct ? "Correct! " : "Not quite. "}
          </span>
          {result.explanation}
        </p>
      )}
    </Card>
  );
}
