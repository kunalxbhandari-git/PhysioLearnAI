"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  BarChart3,
  Bookmark,
  ClipboardList,
  Home,
  Layers,
  LibraryBig,
  PersonStanding,
  LogOut,
  MoreHorizontal,
  Search,
  Settings,
  ShieldCheck,
  StickyNote,
  Trophy,
} from "lucide-react";
import { Logo } from "./logo";
import { CommandPalette } from "./command-palette";
import { FloatingTutor } from "./floating-tutor";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/topics", label: "Topics", icon: LibraryBig },
  { href: "/anatomy", label: "3D Anatomy", icon: PersonStanding },
  { href: "/flashcards", label: "Flashcards", icon: Layers },
  { href: "/history", label: "Assessments", icon: ClipboardList },
  { href: "/progress", label: "Progress", icon: BarChart3 },
  { href: "/scoreboard", label: "Scoreboard", icon: Trophy },
  { href: "/bookmarks", label: "Bookmarks", icon: Bookmark },
  { href: "/notes", label: "Notes", icon: StickyNote },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/admin", label: "Admin", icon: ShieldCheck },
];

const MOBILE_NAV = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/topics", label: "Learn", icon: LibraryBig },
  { href: "/history", label: "Quiz", icon: ClipboardList },
  { href: "/progress", label: "Progress", icon: BarChart3 },
  { href: "/settings", label: "More", icon: MoreHorizontal },
];

function LogoutButton({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <button
      className={cn(
        "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-muted transition-colors hover:bg-surface-2 hover:text-ink",
        className
      )}
      onClick={async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/gate");
        router.refresh();
      }}
    >
      <LogOut className="h-4 w-4" aria-hidden="true" />
      Log out
    </button>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [paletteOpen, setPaletteOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <div className="min-h-dvh">
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
      <FloatingTutor />

      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r border-border bg-surface lg:flex">
        <div className="px-5 py-5">
          <Link href="/dashboard" aria-label="PhysioLearn AI home">
            <Logo />
          </Link>
        </div>
        <div className="px-3">
          <button
            onClick={() => setPaletteOpen(true)}
            className="flex w-full items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-2"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            <span>Search…</span>
            <kbd className="ml-auto rounded-md border border-border bg-surface px-1.5 py-0.5 text-[10px] font-semibold">
              ⌘K
            </kbd>
          </button>
        </div>
        <nav className="mt-4 flex-1 space-y-0.5 overflow-y-auto px-3" aria-label="Main navigation">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition-colors",
                isActive(item.href)
                  ? "bg-accent-soft text-accent-strong"
                  : "text-muted hover:bg-surface-2 hover:text-ink"
              )}
            >
              <item.icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-border p-3">
          <LogoutButton />
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-surface/90 px-4 py-3 backdrop-blur lg:hidden">
        <Link href="/dashboard" aria-label="PhysioLearn AI home">
          <Logo />
        </Link>
        <button
          onClick={() => setPaletteOpen(true)}
          aria-label="Search"
          className="rounded-xl border border-border p-2 text-muted"
        >
          <Search className="h-5 w-5" aria-hidden="true" />
        </button>
      </header>

      {/* Content */}
      <main className="px-4 pb-24 pt-6 sm:px-6 lg:ml-60 lg:pb-10 lg:pt-8">
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>

      {/* Mobile bottom navigation */}
      <nav
        className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 border-t border-border bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden"
        aria-label="Mobile navigation"
      >
        {MOBILE_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
            className={cn(
              "flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-semibold",
              isActive(item.href) ? "text-accent-strong" : "text-muted"
            )}
          >
            <item.icon className="h-5 w-5" aria-hidden="true" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
