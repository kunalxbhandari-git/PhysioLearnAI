"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Loader2, Send, Sparkles, User, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "./motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "What should I study today?",
  "Quiz me on a random concept",
  "Explain the rotator cuff simply",
];

/**
 * Global floating AI tutor: a round pulsing button in the bottom-left corner
 * that opens a chat panel anywhere in the app. On study pages the inline
 * TutorChat already has topic context, so the floating button hides there.
 */
export function FloatingTutor() {
  const pathname = usePathname();
  const reduce = usePrefersReducedMotion();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  // Study pages already embed the topic-aware tutor; quizzes must stay distraction-free.
  if (pathname.startsWith("/learn/") || pathname.startsWith("/quiz/play/")) return null;

  async function send(text: string) {
    const question = text.trim();
    if (!question || busy) return;
    setError(null);
    setInput("");
    const history: Message[] = [...messages, { role: "user", content: question }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setBusy(true);
    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      if (!res.ok || !res.body) throw new Error();
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        const current = acc;
        setMessages([...history, { role: "assistant", content: current }]);
      }
      if (acc.trim() === "") throw new Error();
    } catch {
      setMessages(history);
      setError("I couldn't answer right now — please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {/* Round launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close AI tutor" : "Open AI tutor"}
        aria-expanded={open}
        className={cn(
          "fixed bottom-20 left-4 z-40 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition-transform hover:scale-105 active:scale-95 lg:bottom-5 lg:left-[252px]",
          !reduce && !open && "tutor-pulse"
        )}
        style={{
          background: "linear-gradient(135deg, var(--accent) 0%, var(--primary) 90%)",
        }}
      >
        {open ? <X className="h-6 w-6" /> : <Bot className="h-7 w-7" />}
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-surface">
            <Sparkles className="h-2.5 w-2.5 text-accent-strong" aria-hidden="true" />
          </span>
        )}
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.21, 0.65, 0.36, 1] }}
            className="fixed bottom-36 left-4 right-4 z-40 flex max-h-[70dvh] flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl sm:right-auto sm:w-96 lg:bottom-[5.5rem] lg:left-[252px]"
            role="dialog"
            aria-label="AI tutor chat"
          >
            <div className="flex items-center gap-2.5 border-b border-border bg-surface-2 px-4 py-3">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full text-white"
                style={{ background: "linear-gradient(135deg, var(--accent) 0%, var(--primary) 90%)" }}
              >
                <Bot className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold">AI Tutor</p>
                <p className="text-xs text-muted">Your physiotherapy study companion</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.length === 0 && (
                <div>
                  <p className="text-sm text-muted">
                    Hi! Ask me anything about physiotherapy, or try:
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        disabled={busy}
                        className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-accent hover:text-accent-strong"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={cn("flex gap-2.5", m.role === "user" && "flex-row-reverse")}>
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                      m.role === "user" ? "bg-accent text-white" : "bg-primary text-primary-fg"
                    )}
                    aria-hidden="true"
                  >
                    {m.role === "user" ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                  </span>
                  <div
                    className={cn(
                      "max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                      m.role === "user" ? "bg-accent-soft" : "bg-surface-2"
                    )}
                  >
                    {m.content ||
                      (busy && i === messages.length - 1 ? (
                        <Loader2 className="h-4 w-4 animate-spin text-muted" aria-label="Thinking" />
                      ) : (
                        ""
                      ))}
                  </div>
                </div>
              ))}
              {error && (
                <p role="alert" className="rounded-xl bg-danger-soft px-3 py-2 text-xs font-medium text-danger">
                  {error}
                </p>
              )}
            </div>

            <form
              className="flex items-center gap-2 border-t border-border p-3"
              onSubmit={(e) => {
                e.preventDefault();
                void send(input);
              }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything…"
                maxLength={2000}
                className="h-10 flex-1 rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-accent"
                aria-label="Ask the AI tutor a question"
              />
              <button
                type="submit"
                disabled={busy || input.trim() === ""}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-fg transition-colors hover:bg-primary-hover disabled:opacity-50"
                aria-label="Send"
              >
                {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </button>
            </form>
            <p className="border-t border-border bg-surface-2 px-4 py-1.5 text-center text-[10px] text-muted">
              AI-generated educational content — not clinical advice.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
