"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CheckCircle2, Clock, Layers, Search } from "lucide-react";
import { Badge, Card, ProgressBar, difficultyBadgeVariant } from "@/components/ui";
import { TopicIcon } from "@/components/topic-icon";
import { cn } from "@/lib/utils";

export interface TopicCardData {
  slug: string;
  title: string;
  category: string;
  description: string;
  difficulty: string;
  estMinutes: number;
  icon: string;
  sectionCount: number;
  questionCount: number;
  progress: number;
  completed: boolean;
}

export function TopicLibrary({ topics }: { topics: TopicCardData[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(topics.map((t) => t.category)))],
    [topics]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return topics.filter(
      (t) =>
        (category === "All" || t.category === category) &&
        (q === "" ||
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q))
    );
  }, [topics, query, category]);

  return (
    <div>
      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search muscles, conditions, assessments, exercises…"
          className="h-12 w-full rounded-2xl border border-border bg-surface pl-10 pr-4 text-sm outline-none transition-colors focus:border-accent"
          aria-label="Search topics"
        />
      </div>

      {/* Category filters */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Filter by category">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={category === c}
            onClick={() => setCategory(c)}
            className={cn(
              "shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors",
              category === c
                ? "bg-primary text-primary-fg"
                : "border border-border bg-surface text-muted hover:bg-surface-2"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <Card className="p-10 text-center text-sm text-muted">
          No topics match your search. Try a different term or category.
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((t) => (
            <Link key={t.slug} href={`/topics/${t.slug}`} className="group block h-full">
              <Card className="flex h-full flex-col p-5 transition-all group-hover:-translate-y-0.5 group-hover:border-accent group-hover:shadow-lg">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                    <TopicIcon name={t.icon} className="h-5 w-5" />
                  </span>
                  {t.completed ? (
                    <Badge variant="success">
                      <CheckCircle2 className="h-3 w-3" aria-hidden="true" /> Completed
                    </Badge>
                  ) : (
                    <Badge>{t.category}</Badge>
                  )}
                </div>
                <h3 className="mt-3 text-lg font-bold leading-snug">{t.title}</h3>
                <p className="mt-1 line-clamp-2 flex-1 text-sm text-muted">{t.description}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted">
                  <Badge variant={difficultyBadgeVariant(t.difficulty)}>{t.difficulty}</Badge>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {t.estMinutes} min
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Layers className="h-3.5 w-3.5" aria-hidden="true" /> {t.sectionCount} subtopics
                  </span>
                </div>
                {t.progress > 0 && (
                  <div className="mt-3 flex items-center gap-2">
                    <ProgressBar value={t.progress} className="flex-1" tone={t.completed ? "success" : "accent"} />
                    <span className="text-xs font-bold text-accent-strong">{t.progress}%</span>
                  </div>
                )}
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
