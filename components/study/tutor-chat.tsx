"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Loader2, Send, Sparkles, User } from "lucide-react";
import { Card } from "@/components/ui";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "Explain this section like I'm a beginner",
  "Give me a quick clinical example",
  "How is this likely to be asked in an exam?",
];

export function TutorChat({
  topicSlug,
  topicTitle,
  sectionTitle,
}: {
  topicSlug: string;
  topicTitle: string;
  sectionTitle: string;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

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
        body: JSON.stringify({ topicSlug, sectionTitle, messages: history }),
      });
      if (!res.ok || !res.body) throw new Error();

      // Stream the reply token-by-token into the last message.
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
      setError("The tutor couldn't answer right now — check your connection and try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Card className="mt-5 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-fg">
          <Bot className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-bold">AI Tutor</p>
          <p className="text-xs text-muted">Ask anything about {topicTitle}</p>
        </div>
        <Sparkles className="ml-auto h-4 w-4 text-accent-strong" aria-hidden="true" />
      </div>

      <div
        ref={scrollRef}
        className={cn("space-y-3 overflow-y-auto px-4 py-4", messages.length > 0 ? "max-h-96" : "")}
        aria-live="polite"
      >
        {messages.length === 0 && (
          <div>
            <p className="text-sm text-muted">
              I know which section you&apos;re reading. Try one of these, or ask your own question:
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
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg",
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
      </div>

      {error && (
        <p role="alert" className="mx-4 mb-3 rounded-xl bg-danger-soft px-3 py-2 text-xs font-medium text-danger">
          {error}
        </p>
      )}

      <form
        className="flex items-center gap-2 border-t border-border p-3"
        onSubmit={(e) => {
          e.preventDefault();
          void send(input);
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Ask about ${sectionTitle}…`}
          maxLength={2000}
          className="h-10 flex-1 rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-accent"
          aria-label="Ask the AI tutor a question"
        />
        <button
          type="submit"
          disabled={busy || input.trim() === ""}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-fg transition-colors hover:bg-primary-hover disabled:opacity-50"
          aria-label="Send"
        >
          {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </button>
      </form>

      <p className="border-t border-border bg-surface-2 px-4 py-2 text-center text-[10px] text-muted">
        AI-generated educational content — verify important details and apply professional judgement.
      </p>
    </Card>
  );
}
