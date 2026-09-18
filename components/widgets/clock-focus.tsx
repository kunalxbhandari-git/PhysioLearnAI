"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw, Timer } from "lucide-react";
import { Card } from "@/components/ui";
import { cn, formatSeconds } from "@/lib/utils";

const PRESETS = [25, 30, 35, 45];
const BREAK_SECONDS = 5 * 60;

/** Live clock + focus timer with 25/30/35/45-min presets, custom length, and 5-min breaks. */
export function ClockFocusWidget() {
  const [now, setNow] = useState<Date | null>(null);
  const [mode, setMode] = useState<"focus" | "break">("focus");
  const [focusMinutes, setFocusMinutes] = useState(25);
  const [custom, setCustom] = useState("");
  const [remaining, setRemaining] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  function applyFocusLength(minutes: number) {
    const m = Math.min(180, Math.max(5, Math.round(minutes)));
    setFocusMinutes(m);
    setRunning(false);
    setMode("focus");
    setRemaining(m * 60);
  }

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!running) return;
    interval.current = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          // Switch phase automatically
          setMode((m) => {
            const next = m === "focus" ? "break" : "focus";
            setRemaining(next === "focus" ? focusMinutes * 60 : BREAK_SECONDS);
            return next;
          });
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, [running, focusMinutes]);

  function reset() {
    setRunning(false);
    setMode("focus");
    setRemaining(focusMinutes * 60);
  }

  const total = mode === "focus" ? focusMinutes * 60 : BREAK_SECONDS;
  const pct = ((total - remaining) / total) * 100;

  return (
    <Card className="flex h-full flex-col p-5">
      {/* Live clock */}
      <div className="text-center">
        <p className="font-mono text-4xl font-extrabold tabular-nums" suppressHydrationWarning>
          {now
            ? now.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })
            : "--:--"}
        </p>
        <p className="mt-0.5 text-xs font-semibold text-muted" suppressHydrationWarning>
          {now
            ? now.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" })
            : ""}
        </p>
      </div>

      {/* Focus timer */}
      <div className="mt-4 rounded-2xl bg-surface-2 p-4">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-muted">
            <Timer className="h-3.5 w-3.5 text-accent-strong" aria-hidden="true" />
            {mode === "focus" ? "Focus session" : "Break time"}
          </p>
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-[10px] font-bold",
              mode === "focus" ? "bg-accent-soft text-accent-strong" : "bg-success-soft text-success"
            )}
          >
            {mode === "focus" ? `${focusMinutes} min` : "5 min"}
          </span>
        </div>

        {/* Session length presets + custom */}
        <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
          {PRESETS.map((m) => (
            <button
              key={m}
              onClick={() => applyFocusLength(m)}
              aria-pressed={focusMinutes === m}
              className={cn(
                "rounded-full px-2.5 py-1 text-[11px] font-bold transition-colors",
                focusMinutes === m && mode === "focus"
                  ? "bg-primary text-primary-fg"
                  : "border border-border bg-surface text-muted hover:border-accent"
              )}
            >
              {m}m
            </button>
          ))}
          <form
            className="flex items-center gap-1"
            onSubmit={(e) => {
              e.preventDefault();
              const v = Number(custom);
              if (Number.isFinite(v) && v > 0) {
                applyFocusLength(v);
                setCustom("");
              }
            }}
          >
            <input
              type="number"
              min={5}
              max={180}
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              placeholder="Custom"
              aria-label="Custom focus length in minutes"
              className="h-7 w-16 rounded-full border border-border bg-surface px-2.5 text-[11px] font-semibold outline-none focus:border-accent [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            <button
              type="submit"
              className="rounded-full border border-border bg-surface px-2 py-1 text-[11px] font-bold text-muted hover:border-accent"
              aria-label="Set custom focus length"
            >
              Set
            </button>
          </form>
        </div>
        <p className="mt-2 text-center font-mono text-3xl font-extrabold tabular-nums">
          {formatSeconds(remaining)}
        </p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface">
          <div
            className={cn("h-full rounded-full transition-[width]", mode === "focus" ? "bg-accent" : "bg-success")}
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="mt-3 flex justify-center gap-2">
          <button
            onClick={() => setRunning((r) => !r)}
            className="flex h-9 items-center gap-1.5 rounded-xl bg-primary px-4 text-xs font-bold text-primary-fg"
          >
            {running ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            {running ? "Pause" : "Start"}
          </button>
          <button
            onClick={reset}
            aria-label="Reset timer"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border text-muted hover:bg-surface"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </Card>
  );
}
