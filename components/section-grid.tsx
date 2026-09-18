import Link from "next/link";
import {
  BarChart3,
  Bookmark,
  Bot,
  ClipboardList,
  Layers,
  LibraryBig,
  PersonStanding,
  Settings,
  ShieldCheck,
  StickyNote,
  Trophy,
} from "lucide-react";
import { Card } from "@/components/ui";
import { StaggerGrid, StaggerItem } from "@/components/motion";

export interface SectionGridCounts {
  topics: number;
  flashcards: number;
  quizzes: number;
  bookmarks: number;
  notes: number;
  achievements: number;
}

/** "Everything in one place" — quick-access grid of every app section. */
export function SectionGrid({ counts }: { counts: SectionGridCounts }) {
  const sections = [
    { href: "/topics", label: "Topic Library", desc: `${counts.topics} topics to master`, icon: LibraryBig, tint: "bg-accent-soft text-accent-strong" },
    { href: "/anatomy", label: "3D Anatomy", desc: "Rotate & explore the skeleton", icon: PersonStanding, tint: "bg-accent-soft text-accent-strong" },
    { href: "/flashcards", label: "Flashcards", desc: `${counts.flashcards} cards for rapid recall`, icon: Layers, tint: "bg-success-soft text-success" },
    { href: "/history", label: "Assessments", desc: `${counts.quizzes} quizzes completed`, icon: ClipboardList, tint: "bg-warning-soft text-warning" },
    { href: "/progress", label: "Progress", desc: "Charts & weak areas", icon: BarChart3, tint: "bg-accent-soft text-accent-strong" },
    { href: "/scoreboard", label: "Scoreboard", desc: `${counts.achievements} achievements unlocked`, icon: Trophy, tint: "bg-warning-soft text-warning" },
    { href: "/bookmarks", label: "Bookmarks", desc: `${counts.bookmarks} saved sections`, icon: Bookmark, tint: "bg-success-soft text-success" },
    { href: "/notes", label: "Notes", desc: `${counts.notes} topic notes`, icon: StickyNote, tint: "bg-accent-soft text-accent-strong" },
    { href: "/settings", label: "Settings", desc: "Theme, goals & accessibility", icon: Settings, tint: "bg-surface-2 text-muted" },
    { href: "/admin", label: "Admin", desc: "Content & pass mark", icon: ShieldCheck, tint: "bg-surface-2 text-muted" },
  ];

  return (
    <section aria-label="All sections">
      <h2 className="mb-3 text-lg font-bold">Explore PhysioLearn</h2>
      <StaggerGrid className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {sections.map((s) => (
          <StaggerItem key={s.href} className="h-full">
            <Link href={s.href} className="block h-full">
              <Card className="flex h-full flex-col items-start gap-2 p-4 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg">
                <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${s.tint}`}>
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-sm font-bold leading-tight">{s.label}</p>
                <p className="text-[11px] leading-snug text-muted">{s.desc}</p>
              </Card>
            </Link>
          </StaggerItem>
        ))}
        <StaggerItem className="h-full">
          <Card className="flex h-full flex-col items-start gap-2 border-accent/40 bg-accent-soft p-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-fg">
              <Bot className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-sm font-bold leading-tight">AI Tutor</p>
            <p className="text-[11px] leading-snug text-muted">
              Tap the round button, bottom-left — anywhere, anytime.
            </p>
          </Card>
        </StaggerItem>
      </StaggerGrid>
    </section>
  );
}
