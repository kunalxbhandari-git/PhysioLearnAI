"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Check, Loader2, LogOut, Monitor, Moon, Sun } from "lucide-react";
import { Button, Card } from "@/components/ui";
import { cn } from "@/lib/utils";

interface Initial {
  displayName: string;
  dailyGoalQuestions: string;
  defaultQuizLength: string;
  defaultQuizMode: string;
  preferredDifficulty: string;
}

type Theme = "light" | "dark" | "system";

export function SettingsForm({ initial }: { initial: Initial }) {
  const [form, setForm] = useState(initial);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState<Theme>("system");
  const [reduceMotion, setReduceMotion] = useState(false);
  const [fontScale, setFontScale] = useState<"normal" | "large">("normal");
  const router = useRouter();

  // Load client-side preferences
  useEffect(() => {
    try {
      const t = localStorage.getItem("pl-theme");
      if (t === "light" || t === "dark") setTheme(t);
      setReduceMotion(localStorage.getItem("pl-reduce-motion") === "true");
      if (localStorage.getItem("pl-font-scale") === "large") setFontScale("large");
    } catch {
      // storage unavailable — keep defaults
    }
  }, []);

  function applyTheme(next: Theme) {
    setTheme(next);
    try {
      if (next === "system") {
        localStorage.removeItem("pl-theme");
        delete document.documentElement.dataset.theme;
      } else {
        localStorage.setItem("pl-theme", next);
        document.documentElement.dataset.theme = next;
      }
    } catch {
      // ignore storage errors
    }
  }

  function applyReduceMotion(v: boolean) {
    setReduceMotion(v);
    try {
      localStorage.setItem("pl-reduce-motion", String(v));
      if (v) document.documentElement.dataset.reduceMotion = "true";
      else delete document.documentElement.dataset.reduceMotion;
    } catch {}
  }

  function applyFontScale(v: "normal" | "large") {
    setFontScale(v);
    try {
      if (v === "large") {
        localStorage.setItem("pl-font-scale", "large");
        document.documentElement.dataset.fontScale = "large";
      } else {
        localStorage.removeItem("pl-font-scale");
        delete document.documentElement.dataset.fontScale;
      }
    } catch {}
  }

  async function save() {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch {
      setError("Could not save settings. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  const selectClass =
    "h-10 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-accent";

  return (
    <div className="space-y-5">
      {/* Profile */}
      <Card className="p-5">
        <h2 className="font-bold">Profile</h2>
        <label className="mt-3 block">
          <span className="mb-1 block text-sm font-semibold">Display name</span>
          <input
            value={form.displayName}
            onChange={(e) => setForm({ ...form, displayName: e.target.value })}
            maxLength={40}
            className={selectClass}
          />
        </label>
      </Card>

      {/* Learning */}
      <Card className="p-5">
        <h2 className="font-bold">Learning</h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-sm font-semibold">Daily goal (questions)</span>
            <input
              type="number"
              min={5}
              max={200}
              value={form.dailyGoalQuestions}
              onChange={(e) => setForm({ ...form, dailyGoalQuestions: e.target.value })}
              className={selectClass}
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold">Preferred difficulty</span>
            <select
              value={form.preferredDifficulty}
              onChange={(e) => setForm({ ...form, preferredDifficulty: e.target.value })}
              className={selectClass}
            >
              {["Mixed", "Beginner", "Intermediate", "Advanced"].map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold">Default quiz length</span>
            <select
              value={form.defaultQuizLength}
              onChange={(e) => setForm({ ...form, defaultQuizLength: e.target.value })}
              className={selectClass}
            >
              <option value="10">10 questions</option>
              <option value="20">20 questions</option>
              <option value="30">30 questions</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold">Default quiz mode</span>
            <select
              value={form.defaultQuizMode}
              onChange={(e) => setForm({ ...form, defaultQuizMode: e.target.value })}
              className={selectClass}
            >
              <option value="exam">Exam</option>
              <option value="practice">Practice</option>
            </select>
          </label>
        </div>
      </Card>

      {/* Appearance */}
      <Card className="p-5">
        <h2 className="font-bold">Appearance</h2>
        <div className="mt-3 grid grid-cols-3 gap-2" role="radiogroup" aria-label="Theme">
          {(
            [
              { key: "light", label: "Light", icon: Sun },
              { key: "dark", label: "Dark", icon: Moon },
              { key: "system", label: "System", icon: Monitor },
            ] as const
          ).map((t) => (
            <button
              key={t.key}
              role="radio"
              aria-checked={theme === t.key}
              onClick={() => applyTheme(t.key)}
              className={cn(
                "flex flex-col items-center gap-1.5 rounded-2xl border-2 p-4 text-sm font-semibold transition-colors",
                theme === t.key ? "border-accent bg-accent-soft" : "border-border hover:border-accent/50"
              )}
            >
              <t.icon className="h-5 w-5" aria-hidden="true" />
              {t.label}
            </button>
          ))}
        </div>
      </Card>

      {/* Accessibility */}
      <Card className="p-5">
        <h2 className="font-bold">Accessibility</h2>
        <div className="mt-3 space-y-3">
          <label className="flex items-center justify-between gap-4">
            <span>
              <span className="block text-sm font-semibold">Reduce animations</span>
              <span className="block text-xs text-muted">
                Minimises motion throughout the app (also follows your OS setting).
              </span>
            </span>
            <input
              type="checkbox"
              checked={reduceMotion}
              onChange={(e) => applyReduceMotion(e.target.checked)}
              className="h-5 w-5 accent-[var(--accent)]"
            />
          </label>
          <label className="flex items-center justify-between gap-4">
            <span>
              <span className="block text-sm font-semibold">Larger text</span>
              <span className="block text-xs text-muted">Increases the base font size.</span>
            </span>
            <input
              type="checkbox"
              checked={fontScale === "large"}
              onChange={(e) => applyFontScale(e.target.checked ? "large" : "normal")}
              className="h-5 w-5 accent-[var(--accent)]"
            />
          </label>
        </div>
      </Card>

      {/* Security */}
      <Card className="p-5">
        <h2 className="font-bold">Security</h2>
        <p className="mt-1 text-sm text-muted">
          The access password is configured on the server (APP_PASSWORD environment variable) and is
          never stored in the browser.
        </p>
        <Button
          variant="outline"
          className="mt-3"
          onClick={async () => {
            await fetch("/api/auth/logout", { method: "POST" });
            router.push("/gate");
            router.refresh();
          }}
        >
          <LogOut className="h-4 w-4" aria-hidden="true" /> Log out
        </Button>
      </Card>

      {error && (
        <p role="alert" className="rounded-xl bg-danger-soft px-3 py-2 text-sm font-medium text-danger">
          {error}
        </p>
      )}

      <div className="flex justify-end">
        <Button onClick={save} disabled={saving} className="min-w-36">
          {saving ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : saved ? (
            <Check className="h-4 w-4" aria-hidden="true" />
          ) : null}
          {saved ? "Saved" : "Save changes"}
        </Button>
      </div>
    </div>
  );
}
