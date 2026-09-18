"use client";

import { useEffect, useMemo, useState } from "react";
import { CalendarClock, Check, ListTodo, Plus, Trash2 } from "lucide-react";
import { Card } from "@/components/ui";
import { cn } from "@/lib/utils";

export interface TodoItem {
  id: string;
  title: string;
  dueAt: string | null;
  completed: boolean;
}

function countdown(dueAt: string, now: number): { label: string; urgency: "ok" | "soon" | "over" } {
  const diff = new Date(dueAt).getTime() - now;
  if (diff <= 0) return { label: "Overdue", urgency: "over" };
  const mins = Math.floor(diff / 60000);
  const days = Math.floor(mins / 1440);
  const hours = Math.floor((mins % 1440) / 60);
  const m = mins % 60;
  const label = days > 0 ? `${days}d ${hours}h left` : hours > 0 ? `${hours}h ${m}m left` : `${m}m left`;
  return { label, urgency: diff < 3 * 3600_000 ? "soon" : "ok" };
}

export function TodoWidget({ initial }: { initial: TodoItem[] }) {
  const [todos, setTodos] = useState<TodoItem[]>(initial);
  const [title, setTitle] = useState("");
  const [due, setDue] = useState("");
  const [now, setNow] = useState(Date.now());

  // Tick the countdowns
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(t);
  }, []);

  const sorted = useMemo(
    () =>
      [...todos].sort((a, b) => {
        if (a.completed !== b.completed) return a.completed ? 1 : -1;
        if (a.dueAt && b.dueAt) return new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime();
        if (a.dueAt) return -1;
        if (b.dueAt) return 1;
        return 0;
      }),
    [todos]
  );

  async function add(e: React.FormEvent) {
    e.preventDefault();
    const t = title.trim();
    if (!t) return;
    setTitle("");
    setDue("");
    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title: t, dueAt: due ? new Date(due).toISOString() : null }),
      });
      if (res.ok) {
        const data = (await res.json()) as { todo: { id: string; title: string; dueAt: string | null; completed: boolean } };
        setTodos((prev) => [...prev, data.todo]);
      }
    } catch {
      // network error — item simply not added
    }
  }

  function toggle(id: string) {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
    const item = todos.find((t) => t.id === id);
    fetch("/api/todos", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id, completed: !item?.completed }),
    }).catch(() => {});
  }

  function remove(id: string) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    fetch("/api/todos", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id }),
    }).catch(() => {});
  }

  const remaining = todos.filter((t) => !t.completed).length;

  return (
    <Card className="flex h-full flex-col p-5">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-bold">
          <ListTodo className="h-4 w-4 text-accent-strong" aria-hidden="true" />
          Study To-Do
        </h3>
        <span className="text-xs font-semibold text-muted">
          {remaining === 0 ? "All done 🎉" : `${remaining} open`}
        </span>
      </div>

      <form onSubmit={add} className="mt-3 space-y-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a task… e.g. Revise knee special tests"
          maxLength={200}
          className="h-10 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-accent"
          aria-label="New task title"
        />
        <div className="flex gap-2">
          <input
            type="datetime-local"
            value={due}
            onChange={(e) => setDue(e.target.value)}
            className="h-9 flex-1 rounded-xl border border-border bg-background px-2.5 text-xs text-muted outline-none focus:border-accent"
            aria-label="Due date and time (optional)"
          />
          <button
            type="submit"
            disabled={title.trim() === ""}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-fg disabled:opacity-40"
            aria-label="Add task"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </form>

      <ul className="mt-3 flex-1 space-y-2 overflow-y-auto" aria-label="Tasks">
        {sorted.length === 0 && (
          <li className="py-4 text-center text-sm text-muted">
            No tasks yet — plan your next study session above.
          </li>
        )}
        {sorted.map((t) => {
          const cd = t.dueAt && !t.completed ? countdown(t.dueAt, now) : null;
          return (
            <li key={t.id} className="flex items-center gap-2.5 rounded-xl bg-surface-2 px-3 py-2">
              <button
                onClick={() => toggle(t.id)}
                aria-label={t.completed ? "Mark as not done" : "Mark as done"}
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors",
                  t.completed ? "border-success bg-success text-white" : "border-border bg-surface hover:border-accent"
                )}
              >
                {t.completed && <Check className="h-3 w-3" />}
              </button>
              <div className="min-w-0 flex-1">
                <p
                  className={cn(
                    "break-words text-sm font-semibold leading-snug",
                    t.completed && "text-muted line-through"
                  )}
                >
                  {t.title}
                </p>
                {t.dueAt && (
                  <p suppressHydrationWarning className="flex items-center gap-1 text-[11px] text-muted">
                    <CalendarClock className="h-3 w-3" aria-hidden="true" />
                    {new Date(t.dueAt).toLocaleString(undefined, {
                      day: "numeric",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                )}
              </div>
              {cd && (
                <span
                  className={cn(
                    "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold",
                    cd.urgency === "over" && "bg-danger-soft text-danger",
                    cd.urgency === "soon" && "bg-warning-soft text-warning",
                    cd.urgency === "ok" && "bg-accent-soft text-accent-strong"
                  )}
                >
                  {cd.label}
                </span>
              )}
              <button
                onClick={() => remove(t.id)}
                aria-label="Delete task"
                className="shrink-0 rounded-lg p-1 text-muted transition-colors hover:bg-danger-soft hover:text-danger"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
