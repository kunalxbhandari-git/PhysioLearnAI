"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Badge, Button, Card } from "@/components/ui";
import { cn } from "@/lib/utils";

interface AdminTopic {
  slug: string;
  title: string;
  category: string;
  enabled: boolean;
  sections: number;
  questions: number;
  flashcards: number;
}

export function AdminPanel({
  passingPercent: initialPassing,
  topics,
}: {
  passingPercent: string;
  topics: AdminTopic[];
}) {
  const [passing, setPassing] = useState(initialPassing);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [toggling, setToggling] = useState<string | null>(null);
  const router = useRouter();

  async function savePassing() {
    setSaving(true);
    try {
      await fetch("/api/admin", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ passingPercent: Number(passing) }),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } finally {
      setSaving(false);
    }
  }

  async function toggleTopic(slug: string) {
    setToggling(slug);
    try {
      await fetch("/api/admin", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ toggleTopicSlug: slug }),
      });
      router.refresh();
    } finally {
      setToggling(null);
    }
  }

  return (
    <div className="space-y-5">
      <Card className="p-5">
        <h2 className="font-bold">Assessment Settings</h2>
        <div className="mt-3 flex flex-wrap items-end gap-3">
          <label className="block">
            <span className="mb-1 block text-sm font-semibold">Passing percentage</span>
            <input
              type="number"
              min={1}
              max={100}
              value={passing}
              onChange={(e) => setPassing(e.target.value)}
              className="h-10 w-32 rounded-xl border border-border bg-background px-3 text-sm outline-none focus:border-accent"
            />
          </label>
          <Button onClick={savePassing} disabled={saving}>
            {saving ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : saved ? (
              <Check className="h-4 w-4" aria-hidden="true" />
            ) : null}
            {saved ? "Saved" : "Save"}
          </Button>
        </div>
        <p className="mt-2 text-xs text-muted">
          Pass/fail is always calculated on the server using this threshold.
        </p>
      </Card>

      <Card className="overflow-hidden">
        <div className="border-b border-border px-5 py-4">
          <h2 className="font-bold">Topics</h2>
          <p className="text-sm text-muted">Disable a topic to hide it from the library and quizzes.</p>
        </div>
        <div className="divide-y divide-border">
          {topics.map((t) => (
            <div key={t.slug} className="flex flex-wrap items-center gap-3 px-5 py-3">
              <div className="min-w-0 flex-1">
                <p className={cn("font-semibold", !t.enabled && "text-muted line-through")}>{t.title}</p>
                <p className="text-xs text-muted">
                  {t.category} · {t.sections} sections · {t.questions} questions · {t.flashcards} cards
                </p>
              </div>
              <Badge variant={t.enabled ? "success" : "default"}>
                {t.enabled ? "Enabled" : "Disabled"}
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleTopic(t.slug)}
                disabled={toggling === t.slug}
              >
                {toggling === t.slug && <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />}
                {t.enabled ? "Disable" : "Enable"}
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
