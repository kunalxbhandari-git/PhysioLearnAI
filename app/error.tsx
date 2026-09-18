"use client";

import { AlertTriangle } from "lucide-react";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 px-4 text-center">
      <AlertTriangle className="h-10 w-10 text-warning" aria-hidden="true" />
      <h1 className="text-2xl font-extrabold">Something went wrong</h1>
      <p className="max-w-sm text-sm text-muted">
        An unexpected error occurred. Your progress is safe — please try again.
      </p>
      <button
        onClick={reset}
        className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-fg"
      >
        Try again
      </button>
    </div>
  );
}
