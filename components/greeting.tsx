"use client";

import { useEffect, useState } from "react";
import { Moon, Sunrise, Sun, Sunset } from "lucide-react";

function greetingFor(hour: number): { text: string; Icon: typeof Sun } {
  if (hour >= 5 && hour < 12) return { text: "Good morning", Icon: Sunrise };
  if (hour >= 12 && hour < 17) return { text: "Good afternoon", Icon: Sun };
  if (hour >= 17 && hour < 21) return { text: "Good evening", Icon: Sunset };
  return { text: "Good night", Icon: Moon };
}

/** "Hi <name>, good morning" — follows the user's clock and updates itself. */
export function Greeting({ name }: { name: string }) {
  const [hour, setHour] = useState<number | null>(null);

  useEffect(() => {
    setHour(new Date().getHours());
    // Re-check each minute so the greeting flips at the boundaries automatically
    const t = setInterval(() => setHour(new Date().getHours()), 60_000);
    return () => clearInterval(t);
  }, []);

  if (hour === null) {
    // Server render / first paint: name only, no time guess (avoids hydration mismatch)
    return (
      <p className="text-sm font-bold text-accent-strong sm:text-base">Hi {name} 👋</p>
    );
  }

  const { text, Icon } = greetingFor(hour);
  return (
    <p className="flex items-center gap-1.5 text-sm font-bold text-accent-strong sm:text-base">
      <Icon className="h-4 w-4" aria-hidden="true" />
      Hi {name}, {text.toLowerCase()} 👋
    </p>
  );
}
