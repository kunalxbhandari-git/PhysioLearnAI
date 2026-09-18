"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Capsule3D, CrossBadge, Dumbbell3D, Heart3D, Stethoscope } from "@/components/medical-scene";
import { usePrefersReducedMotion } from "@/components/motion";

/**
 * 3D opening scene for the password gate: a perspective room with a floor
 * grid, depth-layered floating medical objects, and a login card that tilts
 * toward the cursor. CSS 3D transforms only — fast and reduced-motion aware.
 */
export function GateScene({ children }: { children: React.ReactNode }) {
  const reduce = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 15 });
  const sy = useSpring(my, { stiffness: 55, damping: 15 });

  // Card tilt (max ~7deg) + layered parallax
  const rotateY = useTransform(sx, (v) => v * 7);
  const rotateX = useTransform(sy, (v) => v * -7);
  const far = { x: useTransform(sx, (v) => v * 10), y: useTransform(sy, (v) => v * 8) };
  const near = { x: useTransform(sx, (v) => v * 28), y: useTransform(sy, (v) => v * 22) };

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative flex min-h-dvh items-center justify-center overflow-hidden px-4"
      style={{ perspective: 1200 }}
    >
      {/* Depth backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, var(--accent-soft) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, var(--surface-2) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Perspective floor grid */}
      <div
        className="pointer-events-none absolute inset-x-[-40%] bottom-[-12%] h-[55%] opacity-60"
        style={{
          transform: "rotateX(62deg)",
          transformOrigin: "center top",
          backgroundImage:
            "linear-gradient(var(--border) 1.5px, transparent 1.5px), linear-gradient(90deg, var(--border) 1.5px, transparent 1.5px)",
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(to bottom, transparent, black 25%, black 70%, transparent)",
        }}
        aria-hidden="true"
      />

      {/* ECG line */}
      <svg
        viewBox="0 0 1200 120"
        className="pointer-events-none absolute inset-x-0 top-10 h-24 w-[200%] max-w-none opacity-40 sm:w-full"
        aria-hidden="true"
      >
        <path
          className="ecg-line"
          d="M0 60 H300 l18 0 8-26 12 52 10-40 8 14 14 0 h130 l18 0 8-26 12 52 10-40 8 14 14 0 h130 l18 0 8-26 12 52 10-40 8 14 14 0 H1200"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Floating depth objects */}
      <motion.div style={reduce ? {} : far} className="pointer-events-none absolute left-[6%] top-[14%] hidden h-40 w-36 opacity-90 md:block" aria-hidden="true">
        <div className={reduce ? "" : "float-slow"}>
          <Stethoscope />
        </div>
      </motion.div>
      <motion.div style={reduce ? {} : near} className="pointer-events-none absolute right-[8%] top-[16%] hidden h-20 w-20 md:block" aria-hidden="true">
        <div className={reduce ? "" : "beat"}>
          <Heart3D />
        </div>
      </motion.div>
      <motion.div style={reduce ? {} : near} className="pointer-events-none absolute bottom-[18%] left-[12%] hidden h-20 w-24 md:block" aria-hidden="true">
        <div className={reduce ? "" : "float-slower"}>
          <Dumbbell3D />
        </div>
      </motion.div>
      <motion.div style={reduce ? {} : far} className="pointer-events-none absolute bottom-[24%] right-[12%] hidden h-16 w-16 md:block" aria-hidden="true">
        <div className={reduce ? "" : "float-slow-delayed"}>
          <Capsule3D />
        </div>
      </motion.div>
      <motion.div style={reduce ? {} : far} className="pointer-events-none absolute right-[28%] top-[8%] hidden h-11 w-11 opacity-80 lg:block" aria-hidden="true">
        <div className={reduce ? "" : "float-slower-delayed"}>
          <CrossBadge />
        </div>
      </motion.div>

      {/* Tilting login card */}
      <motion.div
        style={reduce ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-sm"
      >
        {children}
      </motion.div>
    </div>
  );
}
