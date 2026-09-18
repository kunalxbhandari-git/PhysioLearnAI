"use client";

import { useEffect, useMemo, useState } from "react";
import { usePrefersReducedMotion } from "./motion";

const COLORS = ["#0e9aa7", "#2cc7d4", "#0b2e4f", "#14805e", "#e5a33d", "#ec5a74"];

/** One-shot celebratory confetti burst (pure CSS, removed after it falls). */
export function Confetti() {
  const reduce = usePrefersReducedMotion();
  const [done, setDone] = useState(false);

  const pieces = useMemo(
    () =>
      Array.from({ length: 70 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.9,
        duration: 2.4 + Math.random() * 1.6,
        size: 6 + Math.random() * 6,
        color: COLORS[i % COLORS.length],
        rotate: Math.random() * 360,
        drift: (Math.random() - 0.5) * 160,
        round: Math.random() > 0.6,
      })),
    []
  );

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 4800);
    return () => clearTimeout(t);
  }, []);

  if (reduce || done) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece absolute top-[-4%]"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.round ? p.size : p.size * 0.45,
            background: p.color,
            borderRadius: p.round ? "50%" : "2px",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            // custom properties consumed by the keyframes
            ["--drift" as string]: `${p.drift}px`,
            ["--spin" as string]: `${p.rotate + 540}deg`,
          }}
        />
      ))}
    </div>
  );
}
