"use client";

import dynamic from "next/dynamic";
import { MedicalScene } from "@/components/medical-scene";
import { usePrefersReducedMotion } from "@/components/motion";

// WebGL bundle loads lazily and only on the client; the illustrated scene
// shows while it loads and stays as the reduced-motion fallback.
const HeroCanvas = dynamic(() => import("./hero-canvas"), {
  ssr: false,
  loading: () => <MedicalScene />,
});

export function Hero3D() {
  const reduce = usePrefersReducedMotion();
  if (reduce) return <MedicalScene />;
  return (
    <div className="absolute inset-y-0 right-0 hidden w-[52%] md:block" aria-hidden="true">
      <HeroCanvas />
    </div>
  );
}
