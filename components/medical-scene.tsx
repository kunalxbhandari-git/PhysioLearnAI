"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "./motion";

/**
 * Decorative pseudo-3D medical scene for the dashboard hero: a stethoscope
 * centerpiece with floating companions (heart, capsule, dumbbell, cross).
 * Depth comes from layered gradients, shadows and parallax that follows the
 * cursor. Pure SVG/CSS — no heavy 3D libraries, fully reduced-motion aware.
 */

export function Stethoscope() {
  return (
    <svg viewBox="0 0 220 240" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="st-tube2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2a6ea3" />
          <stop offset="100%" stopColor="#0b2e4f" />
        </linearGradient>
        <linearGradient id="st-metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8f1f7" />
          <stop offset="50%" stopColor="#9fb8ca" />
          <stop offset="100%" stopColor="#5a7186" />
        </linearGradient>
        <radialGradient id="st-chest" cx="0.35" cy="0.3" r="0.9">
          <stop offset="0%" stopColor="#f2f8fc" />
          <stop offset="45%" stopColor="#b9cedd" />
          <stop offset="100%" stopColor="#54708a" />
        </radialGradient>
        <radialGradient id="st-diaphragm" cx="0.4" cy="0.35" r="0.8">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#cfe0ec" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="120" cy="228" rx="72" ry="10" fill="#0b2e4f" opacity="0.14" />

      {/* Main tube: from junction down and around to chestpiece */}
      <path
        d="M86 78 C82 120 60 138 74 166 C88 196 140 200 158 176 C172 156 158 140 148 150"
        fill="none"
        stroke="#092540"
        strokeWidth="13"
        strokeLinecap="round"
        opacity="0.35"
        transform="translate(2.5 3.5)"
      />
      <path
        d="M86 78 C82 120 60 138 74 166 C88 196 140 200 158 176 C172 156 158 140 148 150"
        fill="none"
        stroke="url(#st-tube2)"
        strokeWidth="12"
        strokeLinecap="round"
      />
      {/* Tube highlight */}
      <path
        d="M86 78 C82 120 60 138 74 166 C88 196 140 200 158 176"
        fill="none"
        stroke="#7fb3d8"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
        transform="translate(-2 -2)"
      />

      {/* Ear tubes (metal) */}
      <path d="M86 80 C80 56 66 44 58 28" fill="none" stroke="url(#st-metal)" strokeWidth="9" strokeLinecap="round" />
      <path d="M88 80 C96 58 108 48 118 34" fill="none" stroke="url(#st-metal)" strokeWidth="9" strokeLinecap="round" />
      {/* Spring between ear tubes */}
      <path d="M62 40 Q88 62 112 44" fill="none" stroke="#8aa5ba" strokeWidth="3.5" opacity="0.8" />
      {/* Ear olives */}
      <circle cx="56" cy="24" r="7.5" fill="url(#st-metal)" stroke="#46596c" strokeWidth="1" />
      <circle cx="121" cy="30" r="7.5" fill="url(#st-metal)" stroke="#46596c" strokeWidth="1" />

      {/* Chestpiece */}
      <g transform="translate(140 158)">
        <circle cx="6" cy="8" r="30" fill="#0b2e4f" opacity="0.25" />
        <circle cx="0" cy="0" r="30" fill="url(#st-chest)" stroke="#46596c" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="21" fill="url(#st-diaphragm)" stroke="#8aa5ba" strokeWidth="1.5" />
        {/* Glint */}
        <path d="M-16 -12 Q-6 -22 8 -18" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      </g>
    </svg>
  );
}

export function Heart3D() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="mh-heart" cx="0.35" cy="0.3" r="0.95">
          <stop offset="0%" stopColor="#ff9db0" />
          <stop offset="55%" stopColor="#ec5a74" />
          <stop offset="100%" stopColor="#b3364b" />
        </radialGradient>
      </defs>
      <ellipse cx="50" cy="90" rx="26" ry="5" fill="#b3364b" opacity="0.18" />
      <path
        d="M50 84 Q22 62 16 42 Q13 24 28 19 Q41 15 50 28 Q59 15 72 19 Q87 24 84 42 Q78 62 50 84 Z"
        fill="url(#mh-heart)"
      />
      <path d="M30 30 Q38 24 46 28" fill="none" stroke="#ffd3dc" strokeWidth="3.5" strokeLinecap="round" opacity="0.9" />
      {/* ECG across */}
      <path d="M20 55 H38 l4 0 3-9 5 16 4-12 2 5 6 0 H80" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
    </svg>
  );
}

export function Capsule3D() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="mc-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5adfe8" />
          <stop offset="100%" stopColor="#0b7f8a" />
        </linearGradient>
        <linearGradient id="mc-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#c3d9e4" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="88" rx="24" ry="4.5" fill="#0b7f8a" opacity="0.18" />
      <g transform="rotate(-32 50 50)">
        <rect x="18" y="36" width="34" height="28" rx="14" fill="url(#mc-a)" />
        <rect x="48" y="36" width="34" height="28" rx="14" fill="url(#mc-b)" stroke="#9fb8ca" strokeWidth="0.8" />
        <line x1="50" y1="37" x2="50" y2="63" stroke="#127f8a" strokeWidth="1.4" opacity="0.5" />
        <path d="M24 42 Q34 38 44 40" fill="none" stroke="#d8fbfd" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
      </g>
    </svg>
  );
}

export function Dumbbell3D() {
  return (
    <svg viewBox="0 0 110 100" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="md-plate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a5d7d" />
          <stop offset="50%" stopColor="#0b2e4f" />
          <stop offset="100%" stopColor="#071c31" />
        </linearGradient>
        <linearGradient id="md-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8f1f7" />
          <stop offset="100%" stopColor="#7a93a8" />
        </linearGradient>
      </defs>
      <ellipse cx="55" cy="86" rx="34" ry="5" fill="#0b2e4f" opacity="0.16" />
      <g transform="rotate(-18 55 50)">
        <rect x="42" y="45" width="26" height="10" rx="5" fill="url(#md-bar)" />
        <rect x="18" y="28" width="14" height="44" rx="6" fill="url(#md-plate)" />
        <rect x="6" y="34" width="11" height="32" rx="5" fill="url(#md-plate)" opacity="0.85" />
        <rect x="78" y="28" width="14" height="44" rx="6" fill="url(#md-plate)" />
        <rect x="93" y="34" width="11" height="32" rx="5" fill="url(#md-plate)" opacity="0.85" />
        <path d="M20 32 Q26 30 30 32" fill="none" stroke="#7fa5c4" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      </g>
    </svg>
  );
}

export function CrossBadge() {
  return (
    <svg viewBox="0 0 80 80" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="mx" cx="0.35" cy="0.3" r="0.95">
          <stop offset="0%" stopColor="#5adfe8" />
          <stop offset="100%" stopColor="#0b7f8a" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="30" fill="url(#mx)" opacity="0.95" />
      <circle cx="40" cy="40" r="30" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.35" />
      <path d="M40 26 V54 M26 40 H54" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

export function MedicalScene() {
  const reduce = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 16 });
  const sy = useSpring(my, { stiffness: 60, damping: 16 });

  // Parallax layers move at different rates
  const far = { x: useTransform(sx, (v) => v * 8), y: useTransform(sy, (v) => v * 6) };
  const mid = { x: useTransform(sx, (v) => v * 16), y: useTransform(sy, (v) => v * 12) };
  const near = { x: useTransform(sx, (v) => v * 26), y: useTransform(sy, (v) => v * 20) };

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
      className="pointer-events-auto absolute inset-y-0 right-0 hidden w-[46%] select-none md:block"
      aria-hidden="true"
    >
      {/* Glow backdrop */}
      <div className="absolute right-8 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent-soft blur-3xl" />

      {/* Stethoscope centerpiece */}
      <motion.div style={reduce ? {} : mid} className="absolute right-[14%] top-1/2 h-64 w-60 -translate-y-1/2">
        <div className={reduce ? "" : "float-slow"}>
          <Stethoscope />
        </div>
      </motion.div>

      {/* Heart */}
      <motion.div style={reduce ? {} : near} className="absolute right-[4%] top-[12%] h-20 w-20">
        <div className={reduce ? "" : "beat"}>
          <Heart3D />
        </div>
      </motion.div>

      {/* Capsule */}
      <motion.div style={reduce ? {} : far} className="absolute right-[46%] top-[16%] h-16 w-16">
        <div className={reduce ? "" : "float-slower"}>
          <Capsule3D />
        </div>
      </motion.div>

      {/* Dumbbell */}
      <motion.div style={reduce ? {} : near} className="absolute bottom-[10%] right-[42%] h-20 w-24">
        <div className={reduce ? "" : "float-slow-delayed"}>
          <Dumbbell3D />
        </div>
      </motion.div>

      {/* Cross badge */}
      <motion.div style={reduce ? {} : far} className="absolute bottom-[20%] right-[2%] h-12 w-12 opacity-90">
        <div className={reduce ? "" : "float-slower-delayed"}>
          <CrossBadge />
        </div>
      </motion.div>
    </div>
  );
}
