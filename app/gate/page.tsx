import type { Metadata } from "next";
import { GateForm } from "./gate-form";
import { GateScene } from "./gate-scene";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "Enter",
  description: "Private educational platform — sign in to continue.",
};

export default function GatePage() {
  return (
    <GateScene>
      <div className="mb-8 flex flex-col items-center gap-3 text-center">
        <Logo />
        <p className="text-sm text-muted">Your intelligent physiotherapy learning companion.</p>
      </div>

      <GateForm />

      <p className="mt-6 text-center text-xs font-semibold uppercase tracking-widest text-muted">
        Private Educational Platform
      </p>
      <p className="mx-auto mt-4 max-w-xs text-center text-[11px] leading-relaxed text-muted">
        Educational content only. This platform is not a substitute for professional clinical
        assessment, diagnosis, or medical advice.
      </p>
    </GateScene>
  );
}
