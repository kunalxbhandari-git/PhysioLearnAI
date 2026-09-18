"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/components/motion";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  Brain,
  Check,
  CheckCircle2,
  Circle,
  Loader2,
  NotebookPen,
  Sparkles,
} from "lucide-react";
import { Badge, Button, ButtonLink, Card, ProgressBar, difficultyBadgeVariant } from "@/components/ui";
import { ContentBlocks } from "@/components/study/content-blocks";
import { TutorChat } from "@/components/study/tutor-chat";
import type { ContentBlock } from "@/prisma/data/types";
import { cn } from "@/lib/utils";

export interface StudySectionData {
  id: string;
  slug: string;
  title: string;
  estMinutes: number;
  difficulty: string;
  content: ContentBlock[];
  completed: boolean;
  bookmarked: boolean;
}

interface TopicData {
  slug: string;
  title: string;
  category: string;
  keyTakeaways: string[];
}

export function StudyModule({
  topic,
  sections: initialSections,
  initialIndex,
  initialNote,
}: {
  topic: TopicData;
  sections: StudySectionData[];
  initialIndex: number;
  initialNote: string;
}) {
  const [sections, setSections] = useState(initialSections);
  const [index, setIndex] = useState(initialIndex);
  const [note, setNote] = useState(initialNote);
  const [noteSaved, setNoteSaved] = useState<"idle" | "saving" | "saved">("idle");
  const [showNotes, setShowNotes] = useState(false);
  const [simplified, setSimplified] = useState<string | null>(null);
  const [simplifying, setSimplifying] = useState(false);
  const [xpPop, setXpPop] = useState(0);
  const reduce = usePrefersReducedMotion();
  const topRef = useRef<HTMLDivElement>(null);

  const section = sections[index];
  const doneCount = sections.filter((s) => s.completed).length;
  const percent = Math.round((doneCount / sections.length) * 100);
  const isLast = index === sections.length - 1;

  // Track study time: report every 60s of active study
  useEffect(() => {
    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        fetch("/api/study/session", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ topicSlug: topic.slug, seconds: 60 }),
        }).catch(() => {});
      }
    }, 60_000);
    return () => clearInterval(interval);
  }, [topic.slug]);

  useEffect(() => {
    setSimplified(null);
    topRef.current?.scrollIntoView({ block: "start", behavior: "instant" as ScrollBehavior });
    // Keep the URL shareable without triggering navigation
    window.history.replaceState(null, "", `/learn/${topic.slug}?section=${sections[index]?.slug ?? ""}`);
  }, [index, topic.slug, sections]);

  async function markComplete(goNext: boolean) {
    const s = sections[index];
    if (!s.completed) {
      setSections((prev) => prev.map((x, i) => (i === index ? { ...x, completed: true } : x)));
      setXpPop((n) => n + 1); // trigger the +10 XP reward pop
      fetch("/api/study/complete-section", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ sectionId: s.id }),
      }).catch(() => {});
    }
    if (goNext && !isLast) setIndex(index + 1);
  }

  async function toggleBookmark() {
    const s = sections[index];
    setSections((prev) => prev.map((x, i) => (i === index ? { ...x, bookmarked: !x.bookmarked } : x)));
    fetch("/api/bookmarks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ sectionId: s.id }),
    }).catch(() => {});
  }

  async function saveNote(value: string) {
    setNote(value);
    setNoteSaved("saving");
  }

  // Debounced note persistence
  useEffect(() => {
    if (noteSaved !== "saving") return;
    const t = setTimeout(async () => {
      try {
        await fetch("/api/notes", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ topicSlug: topic.slug, content: note }),
        });
        setNoteSaved("saved");
        setTimeout(() => setNoteSaved("idle"), 1500);
      } catch {
        setNoteSaved("idle");
      }
    }, 700);
    return () => clearTimeout(t);
  }, [note, noteSaved, topic.slug]);

  async function explainSimply() {
    if (simplifying) return;
    setSimplifying(true);
    try {
      const res = await fetch("/api/ai/simplify", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ topicSlug: topic.slug, sectionSlug: section.slug }),
      });
      if (res.ok) {
        const data = (await res.json()) as { text: string };
        setSimplified(data.text);
      }
    } finally {
      setSimplifying(false);
    }
  }

  const keyPoints = useMemo(() => {
    const kp = section.content.filter((b) => b.kind === "keypoints" || b.kind === "pearls");
    return kp.flatMap((b) => ("items" in b ? b.items : [])).slice(0, 6);
  }, [section]);

  return (
    <div ref={topRef} className="scroll-mt-20">
      {/* Header */}
      <nav className="mb-3 text-sm text-muted" aria-label="Breadcrumb">
        <Link href="/topics" className="hover:text-ink">
          Topics
        </Link>{" "}
        /{" "}
        <Link href={`/topics/${topic.slug}`} className="hover:text-ink">
          {topic.title}
        </Link>
      </nav>

      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold">{topic.title}</h1>
          <p className="text-sm text-muted">
            {doneCount} / {sections.length} sections completed
          </p>
        </div>
        <div className="flex w-full max-w-56 items-center gap-2">
          <ProgressBar value={percent} tone={percent >= 100 ? "success" : "accent"} className="flex-1" />
          <span className="text-sm font-bold text-accent-strong">{percent}%</span>
        </div>
      </div>

      {/* Mobile section picker */}
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            className={cn(
              "flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold",
              i === index
                ? "bg-primary text-primary-fg"
                : "border border-border bg-surface text-muted"
            )}
          >
            {s.completed && <Check className="h-3 w-3" aria-hidden="true" />}
            {i + 1}. {s.title}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)_240px]">
        {/* Left: section list */}
        <aside className="hidden lg:block">
          <nav className="sticky top-8 space-y-1" aria-label="Sections">
            {sections.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                aria-current={i === index ? "true" : undefined}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-sm font-semibold transition-colors",
                  i === index
                    ? "bg-accent-soft text-accent-strong"
                    : "text-muted hover:bg-surface-2 hover:text-ink"
                )}
              >
                {s.completed ? (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                ) : (
                  <Circle className="h-4 w-4 shrink-0 text-border" aria-hidden="true" />
                )}
                <span className="min-w-0 truncate">{s.title}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Center: content */}
        <article>
          <Card className="relative p-5 sm:p-8">
            {/* +XP reward pop */}
            <AnimatePresence>
              {xpPop > 0 && (
                <span
                  key={xpPop}
                  className="xp-pop pointer-events-none absolute right-6 top-6 z-10 rounded-full bg-success px-3 py-1 text-sm font-extrabold text-white shadow-lg"
                  aria-hidden="true"
                >
                  +10 XP
                </span>
              )}
            </AnimatePresence>
            <motion.div
              key={section.id}
              initial={reduce ? false : { opacity: 0, x: 26 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: [0.21, 0.65, 0.36, 1] }}
            >
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent-strong">
                  Section {index + 1} of {sections.length}
                </p>
                <h2 className="mt-1 text-2xl font-extrabold">{section.title}</h2>
                <div className="mt-1.5 flex items-center gap-2">
                  <Badge variant={difficultyBadgeVariant(section.difficulty)}>{section.difficulty}</Badge>
                  <span className="text-xs text-muted">{section.estMinutes} min read</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleBookmark}
                  aria-pressed={section.bookmarked}
                  aria-label={section.bookmarked ? "Remove bookmark" : "Bookmark this section"}
                >
                  {section.bookmarked ? (
                    <BookmarkCheck className="h-4 w-4 text-accent-strong" aria-hidden="true" />
                  ) : (
                    <Bookmark className="h-4 w-4" aria-hidden="true" />
                  )}
                  {section.bookmarked ? "Saved" : "Bookmark"}
                </Button>
                <Button variant="outline" size="sm" onClick={() => setShowNotes((v) => !v)} aria-expanded={showNotes}>
                  <NotebookPen className="h-4 w-4" aria-hidden="true" /> Notes
                </Button>
              </div>
            </div>

            {showNotes && (
              <div className="mb-5 rounded-2xl border border-border bg-surface-2 p-3">
                <label className="mb-1.5 flex items-center justify-between text-xs font-bold uppercase tracking-wide text-muted">
                  My notes for this topic
                  <span className="normal-case">
                    {noteSaved === "saving" && "Saving…"}
                    {noteSaved === "saved" && "Saved ✓"}
                  </span>
                </label>
                <textarea
                  value={note}
                  onChange={(e) => saveNote(e.target.value)}
                  rows={4}
                  placeholder="Write your personal revision notes here — they save automatically."
                  className="w-full resize-y rounded-xl border border-border bg-surface p-3 text-sm outline-none focus:border-accent"
                />
              </div>
            )}

            <ContentBlocks blocks={section.content} />

            {/* Explain simply */}
            <div className="mt-6 border-t border-border pt-5">
              <Button variant="outline" size="sm" onClick={explainSimply} disabled={simplifying}>
                {simplifying ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : (
                  <Brain className="h-4 w-4 text-accent-strong" aria-hidden="true" />
                )}
                Explain Simply
              </Button>
              {simplified && (
                <div className="mt-3 rounded-2xl border border-accent/30 bg-accent-soft p-4 text-sm leading-relaxed whitespace-pre-line">
                  {simplified}
                </div>
              )}
            </div>

            {/* Prev / next */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
              <Button variant="outline" onClick={() => setIndex(Math.max(0, index - 1))} disabled={index === 0}>
                <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Previous
              </Button>
              <div className="flex gap-2">
                {!section.completed && (
                  <Button variant="outline" onClick={() => markComplete(false)}>
                    <Check className="h-4 w-4" aria-hidden="true" /> Mark complete
                  </Button>
                )}
                {!isLast ? (
                  <Button onClick={() => markComplete(true)}>
                    {section.completed ? "Next" : "Complete & Next"}{" "}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                ) : (
                  <Button onClick={() => markComplete(false)} disabled={section.completed}>
                    <Check className="h-4 w-4" aria-hidden="true" />
                    {section.completed ? "Topic complete" : "Finish topic"}
                  </Button>
                )}
              </div>
            </div>
            </motion.div>
          </Card>

          {/* AI tutor */}
          <TutorChat topicSlug={topic.slug} topicTitle={topic.title} sectionTitle={section.title} />

          {/* Quiz CTA */}
          {(isLast || percent >= 100) && (
            <Card className="mt-5 flex flex-wrap items-center justify-between gap-4 border-accent/40 bg-accent-soft p-5">
              <div>
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <Sparkles className="h-5 w-5 text-accent-strong" aria-hidden="true" />
                  Ready to Test Yourself?
                </h3>
                <p className="text-sm text-muted">
                  Check your understanding with a timed assessment — 2 minutes per question.
                </p>
              </div>
              <ButtonLink href={`/quiz/setup/${topic.slug}`} size="lg" variant="accent">
                Start Quiz <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </Card>
          )}
        </article>

        {/* Right: key points */}
        <aside className="hidden xl:block">
          <div className="sticky top-8 space-y-4">
            {keyPoints.length > 0 && (
              <Card className="p-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-muted">Remember This</h3>
                <ul className="mt-2 space-y-2 text-sm leading-relaxed">
                  {keyPoints.map((k, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-strong" aria-hidden="true" />
                      {k}
                    </li>
                  ))}
                </ul>
              </Card>
            )}
            <Card className="p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-muted">Progress</h3>
              <p className="mt-2 text-3xl font-extrabold text-accent-strong">{percent}%</p>
              <p className="text-xs text-muted">
                {doneCount} of {sections.length} sections
              </p>
              <ProgressBar value={percent} className="mt-2" tone={percent >= 100 ? "success" : "accent"} />
            </Card>
          </div>
        </aside>
      </div>
    </div>
  );
}
