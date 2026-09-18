"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Check, RotateCcw, Shuffle, X } from "lucide-react";
import { Button, ButtonLink, Card, ProgressBar } from "@/components/ui";
import { cn } from "@/lib/utils";

interface CardData {
  id: string;
  front: string;
  back: string;
}

export function FlashcardPlayer({
  topicTitle,
  topicSlug,
  cards: initialCards,
}: {
  topicTitle: string;
  topicSlug: string;
  cards: CardData[];
}) {
  const [cards, setCards] = useState(initialCards);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Set<string>>(new Set());
  const [missed, setMissed] = useState<Set<string>>(new Set());

  const done = index >= cards.length;
  const card = cards[index];

  function rate(gotIt: boolean) {
    if (!card) return;
    if (gotIt) {
      setKnown((s) => new Set(s).add(card.id));
      setMissed((s) => {
        const n = new Set(s);
        n.delete(card.id);
        return n;
      });
    } else {
      setMissed((s) => new Set(s).add(card.id));
    }
    setFlipped(false);
    setIndex((i) => i + 1);
  }

  function shuffle() {
    setCards((prev) => [...prev].sort(() => Math.random() - 0.5));
    reset();
  }

  function reset() {
    setIndex(0);
    setFlipped(false);
    setKnown(new Set());
    setMissed(new Set());
  }

  function reviewMissed() {
    const missedCards = cards.filter((c) => missed.has(c.id));
    setCards(missedCards);
    reset();
  }

  const percent = useMemo(
    () => (cards.length ? Math.round((Math.min(index, cards.length) / cards.length) * 100) : 0),
    [index, cards.length]
  );

  // Keyboard: space flips, arrow-right = got it, arrow-left = again
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (done) return;
      if (e.key === " ") {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (e.key === "ArrowRight" && flipped) rate(true);
      else if (e.key === "ArrowLeft" && flipped) rate(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done, flipped, card?.id]);

  if (done) {
    return (
      <Card className="p-8 text-center">
        <h1 className="text-2xl font-extrabold">Deck complete</h1>
        <p className="mt-2 text-muted">
          {known.size} known · {missed.size} to review
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {missed.size > 0 && (
            <Button onClick={reviewMissed}>
              <RotateCcw className="h-4 w-4" aria-hidden="true" /> Review {missed.size} missed
            </Button>
          )}
          <Button variant="outline" onClick={shuffle}>
            <Shuffle className="h-4 w-4" aria-hidden="true" /> Shuffle & restart
          </Button>
          <ButtonLink href={`/quiz/setup/${topicSlug}`} variant="accent">
            Take a Quiz <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Card>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold">{topicTitle}</h1>
          <p className="text-sm text-muted">
            Card {index + 1} of {cards.length}
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={shuffle}>
          <Shuffle className="h-4 w-4" aria-hidden="true" /> Shuffle
        </Button>
      </div>
      <ProgressBar value={percent} className="mb-5" />

      <button
        onClick={() => setFlipped((f) => !f)}
        className="block w-full [perspective:1200px]"
        aria-label={flipped ? "Show question" : "Show answer"}
      >
        <div
          className={cn(
            "relative min-h-64 w-full transition-transform duration-500 [transform-style:preserve-3d]",
            flipped && "[transform:rotateY(180deg)]"
          )}
        >
          <Card className="absolute inset-0 flex items-center justify-center p-8 [backface-visibility:hidden]">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-accent-strong">Question</p>
              <p className="mt-3 text-lg font-bold leading-relaxed">{card.front}</p>
              <p className="mt-6 text-xs text-muted">Tap or press Space to flip</p>
            </div>
          </Card>
          <Card className="absolute inset-0 flex items-center justify-center border-accent/40 bg-accent-soft p-8 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-accent-strong">Answer</p>
              <p className="mt-3 text-base font-semibold leading-relaxed">{card.back}</p>
            </div>
          </Card>
        </div>
      </button>

      <div className={cn("mt-6 grid grid-cols-2 gap-3 transition-opacity", !flipped && "pointer-events-none opacity-30")}>
        <Button variant="outline" size="lg" onClick={() => rate(false)}>
          <X className="h-4 w-4 text-danger" aria-hidden="true" /> Still learning
        </Button>
        <Button size="lg" onClick={() => rate(true)}>
          <Check className="h-4 w-4" aria-hidden="true" /> Got it
        </Button>
      </div>
    </div>
  );
}
