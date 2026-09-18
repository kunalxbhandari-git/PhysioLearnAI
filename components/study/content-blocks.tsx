import {
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  ListChecks,
  OctagonAlert,
  Sparkles,
} from "lucide-react";
import type { ContentBlock } from "@/prisma/data/types";
import { Card } from "@/components/ui";
import { Illustration, ILLUSTRATIONS } from "@/components/illustrations";

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.kind) {
    case "paragraph":
      return <p className="leading-relaxed text-ink/90">{block.text}</p>;

    case "heading":
      return <h3 className="pt-2 text-xl font-bold">{block.text}</h3>;

    case "list":
      return block.ordered ? (
        <ol className="list-decimal space-y-1.5 pl-5 leading-relaxed marker:font-semibold marker:text-accent-strong">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      ) : (
        <ul className="space-y-1.5 pl-1 leading-relaxed">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {it}
            </li>
          ))}
        </ul>
      );

    case "cards":
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          {block.items.map((c, i) => (
            <Card key={i} className="p-4">
              <p className="font-bold text-accent-strong">{c.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink/85">{c.text}</p>
            </Card>
          ))}
        </div>
      );

    case "warning":
      return (
        <div className="rounded-2xl border border-warning/30 bg-warning-soft p-4">
          <p className="flex items-center gap-2 font-bold text-warning">
            <AlertTriangle className="h-4 w-4" aria-hidden="true" />
            {block.title}
          </p>
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed">
            {block.items.map((it, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" aria-hidden="true" />
                {it}
              </li>
            ))}
          </ul>
        </div>
      );

    case "redflags":
      return (
        <div className="rounded-2xl border border-danger/30 bg-danger-soft p-4">
          <p className="flex items-center gap-2 font-bold text-danger">
            <OctagonAlert className="h-4 w-4" aria-hidden="true" />
            Red Flags — Referral Considerations
          </p>
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed">
            {block.items.map((it, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-danger" aria-hidden="true" />
                {it}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-danger/80">
            These situations may require professional medical assessment.
          </p>
        </div>
      );

    case "pearls":
      return (
        <div className="rounded-2xl border border-accent/30 bg-accent-soft p-4">
          <p className="flex items-center gap-2 font-bold text-accent-strong">
            <Lightbulb className="h-4 w-4" aria-hidden="true" />
            Clinical Pearls
          </p>
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed">
            {block.items.map((it, i) => (
              <li key={i} className="flex gap-2">
                <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-strong" aria-hidden="true" />
                {it}
              </li>
            ))}
          </ul>
        </div>
      );

    case "steps":
      return (
        <ol className="space-y-3">
          {block.items.map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-fg">
                {i + 1}
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="font-bold">{s.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-ink/85">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      );

    case "exercise":
      return (
        <Card className="overflow-hidden">
          <div className="border-b border-border bg-surface-2 px-4 py-3">
            <p className="font-bold">{block.name}</p>
            <p className="text-sm text-muted">{block.purpose}</p>
          </div>
          <dl className="space-y-2.5 p-4 text-sm leading-relaxed">
            <ExerciseRow label="Starting position" value={block.position} />
            <ExerciseRow label="Execution" value={block.execution} />
            {block.dosage && <ExerciseRow label="Dosage" value={block.dosage} />}
            {block.progression && <ExerciseRow label="Progression" value={block.progression} />}
            {block.precautions && (
              <div className="rounded-xl bg-warning-soft p-2.5">
                <ExerciseRow label="Precautions" value={block.precautions} />
              </div>
            )}
          </dl>
        </Card>
      );

    case "table":
      return (
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="bg-surface-2 text-left">
                {block.headers.map((h, i) => (
                  <th key={i} className="px-4 py-2.5 font-bold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t border-border align-top">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-2.5 leading-relaxed ${j === 0 ? "font-semibold" : "text-ink/85"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "keypoints":
      return (
        <div className="rounded-2xl border-l-4 border-accent bg-surface-2 p-4">
          <p className="flex items-center gap-2 font-bold">
            <ListChecks className="h-4 w-4 text-accent-strong" aria-hidden="true" />
            {block.title ?? "Key Points"}
          </p>
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed">
            {block.items.map((it, i) => (
              <li key={i} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-strong" aria-hidden="true" />
                {it}
              </li>
            ))}
          </ul>
        </div>
      );

    case "image": {
      if (!ILLUSTRATIONS[block.illustration]) return null;
      return (
        <figure className="overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="mx-auto max-w-md p-4">
            <Illustration name={block.illustration} />
          </div>
          <figcaption className="border-t border-border bg-surface-2 px-4 py-2.5 text-center text-xs text-muted">
            {block.caption}
          </figcaption>
        </figure>
      );
    }

    default:
      return null;
  }
}

function ExerciseRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-bold uppercase tracking-wide text-muted">{label}</dt>
      <dd className="mt-0.5">{value}</dd>
    </div>
  );
}
