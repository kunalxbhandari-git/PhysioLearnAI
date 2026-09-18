import { Lightbulb } from "lucide-react";
import { Card } from "@/components/ui";

const TIPS = [
  "Spaced repetition beats cramming — 20 minutes daily outperforms 3 hours once a week.",
  "Teach a concept out loud to an imaginary patient. If you can't explain it simply, revisit it.",
  "Test yourself before you feel ready — retrieval practice is the fastest way to durable memory.",
  "After every wrong quiz answer, write one sentence on why the right answer is right.",
  "Link every special test to the structure it stresses — mechanism beats memorisation.",
  "Study anatomy with movement: perform each action as you learn the muscle that produces it.",
  "Review today's topic again tomorrow morning — sleep consolidates what you practised.",
  "Interleave topics: mixing knee, shoulder and spine questions builds better clinical reasoning than blocking.",
  "Use the 24-hour rule when prescribing exercise: pain ≤5/10 that settles by next day is acceptable load.",
  "Before reading a section, quiz yourself on its title — priming doubles what sticks.",
  "Flashcards work best spoken aloud, answered before flipping, and shuffled every session.",
  "When two options both look right in an MCQ, re-read the stem for the qualifier word: 'most', 'first', 'best'.",
  "Draw the brachial plexus (or any pathway) from memory once a week — drawing beats re-reading.",
  "Connect every condition to one real or imagined patient story — stories are memory glue.",
];

/** Deterministic tip-of-the-day (rotates by day of year). */
export function DailyTip() {
  const start = new Date(new Date().getFullYear(), 0, 0);
  const dayOfYear = Math.floor((Date.now() - start.getTime()) / 86400000);
  const tip = TIPS[dayOfYear % TIPS.length];

  return (
    <Card className="relative flex h-full flex-col justify-center overflow-hidden p-5">
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent-soft blur-2xl"
        aria-hidden="true"
      />
      <h3 className="flex items-center gap-2 font-bold">
        <Lightbulb className="h-4 w-4 text-warning" aria-hidden="true" />
        Study Tip of the Day
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-ink/90">{tip}</p>
    </Card>
  );
}
