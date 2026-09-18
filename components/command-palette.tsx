"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, FileText, Loader2, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchResult {
  type: "topic" | "section";
  title: string;
  subtitle: string;
  href: string;
}

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Global ⌘K / Ctrl+K shortcut
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape" && open) onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setResults([]);
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  // Debounced search
  useEffect(() => {
    if (!open) return;
    const q = query.trim();
    if (q.length < 2) {
      setResults([]);
      return;
    }
    setLoading(true);
    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
        if (res.ok) {
          const data = (await res.json()) as { results: SearchResult[] };
          setResults(data.results);
          setSelected(0);
        }
      } catch {
        // network hiccup — leave previous results
      } finally {
        setLoading(false);
      }
    }, 200);
    return () => clearTimeout(t);
  }, [query, open]);

  const go = useCallback(
    (r: SearchResult) => {
      onOpenChange(false);
      router.push(r.href);
    },
    [onOpenChange, router]
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 pt-[12vh] backdrop-blur-sm"
      onClick={() => onOpenChange(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-border px-4">
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin text-muted" aria-hidden="true" />
          ) : (
            <Search className="h-4 w-4 text-muted" aria-hidden="true" />
          )}
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelected((s) => Math.min(s + 1, results.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelected((s) => Math.max(s - 1, 0));
              } else if (e.key === "Enter" && results[selected]) {
                go(results[selected]);
              }
            }}
            placeholder="Search muscles, conditions, assessments, exercises…"
            className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted"
            aria-label="Search topics and sections"
          />
        </div>
        <div className="max-h-80 overflow-y-auto p-2">
          {query.trim().length >= 2 && !loading && results.length === 0 && (
            <p className="px-3 py-6 text-center text-sm text-muted">No matches found.</p>
          )}
          {query.trim().length < 2 && (
            <p className="px-3 py-6 text-center text-sm text-muted">
              Type at least two characters to search the knowledge library.
            </p>
          )}
          {results.map((r, i) => (
            <button
              key={r.href + i}
              onClick={() => go(r)}
              onMouseEnter={() => setSelected(i)}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left",
                i === selected ? "bg-accent-soft" : "hover:bg-surface-2"
              )}
            >
              {r.type === "topic" ? (
                <BookOpen className="h-4 w-4 shrink-0 text-accent-strong" aria-hidden="true" />
              ) : (
                <FileText className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
              )}
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold">{r.title}</span>
                <span className="block truncate text-xs text-muted">{r.subtitle}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
