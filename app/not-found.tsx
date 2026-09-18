import Link from "next/link";
import { Logo } from "@/components/logo";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 px-4 text-center">
      <Logo />
      <h1 className="text-3xl font-extrabold">Page not found</h1>
      <p className="max-w-sm text-sm text-muted">
        This topic or page doesn&apos;t exist — it may have been moved or disabled.
      </p>
      <Link
        href="/dashboard"
        className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-fg"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
