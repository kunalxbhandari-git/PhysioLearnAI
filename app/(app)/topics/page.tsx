import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/user";
import { getTopicProgressMap } from "@/lib/progress";
import { BookOpen } from "lucide-react";
import { Card, PageHeader } from "@/components/ui";
import { TopicLibrary } from "./topic-library";

const REFERENCE_TEXTS = [
  "Dutton's Orthopaedic Examination, Evaluation and Intervention — 6th ed.",
  "Magee's Orthopedic Physical Assessment — 7th ed.",
  "Kisner & Colby — Therapeutic Exercise: Foundations and Techniques — 8th ed.",
  "Magee et al. — Pathology and Intervention in Musculoskeletal Rehabilitation — 2nd ed.",
  "Brukner & Khan's Clinical Sports Medicine — 6th ed.",
  "O'Sullivan & Schmitz — Physical Rehabilitation — 8th ed.",
  "Umphred's Neurological Rehabilitation — 7th ed.",
  "Neurologic Rehabilitation: Neuroscience and Neuroplasticity in PT Practice — 2nd ed.",
  "Frownfelter & Dean — Cardiovascular and Pulmonary Physical Therapy — 6th ed.",
  "Hillegass — Essentials of Cardiopulmonary Physical Therapy — 5th ed.",
  "DeTurk & Cahalin — Cardiovascular and Pulmonary Physical Therapy — 3rd ed.",
  "Goodman & Fuller's Pathology for the Physical Therapist Assistant — 5th ed.",
  "Acute Care Handbook for Physical Therapists — 5th ed.",
  "Campbell's Physical Therapy for Children — 6th ed.",
  "Guccione's Geriatric Physical Therapy — 4th ed.",
];

export const metadata: Metadata = { title: "Topics" };
export const dynamic = "force-dynamic";

export default async function TopicsPage() {
  const user = await getCurrentUser();
  const [topics, progressMap] = await Promise.all([
    prisma.topic.findMany({
      where: { enabled: true },
      orderBy: [{ category: "asc" }, { order: "asc" }, { title: "asc" }],
      include: { _count: { select: { sections: true, questions: true } } },
    }),
    getTopicProgressMap(user.id),
  ]);

  const items = topics.map((t) => ({
    slug: t.slug,
    title: t.title,
    category: t.category,
    description: t.description,
    difficulty: t.difficulty,
    estMinutes: t.estMinutes,
    icon: t.icon,
    sectionCount: t._count.sections,
    questionCount: t._count.questions,
    progress: progressMap.get(t.id)?.percent ?? 0,
    completed: (progressMap.get(t.id)?.percent ?? 0) >= 100,
  }));

  return (
    <div>
      <PageHeader
        title="Physiotherapy Knowledge Library"
        subtitle="Browse topics across anatomy, conditions, assessment and exercise therapy."
      />
      <TopicLibrary topics={items} />

      {/* Source texts */}
      <Card className="mt-8 p-5 sm:p-6">
        <h2 className="flex items-center gap-2 font-bold">
          <BookOpen className="h-4 w-4 text-accent-strong" aria-hidden="true" />
          Core Reference Texts
        </h2>
        <p className="mt-1 text-sm text-muted">
          Every topic on this platform is written in alignment with the standard physiotherapy
          curriculum texts below — the same reference list used by major licensing exams such as
          the Canadian PCE.
        </p>
        <ul className="mt-3 grid gap-x-6 gap-y-1.5 text-sm leading-relaxed sm:grid-cols-2">
          {REFERENCE_TEXTS.map((t, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[11px] text-muted">
          Content summarises established educational concepts consistent with these texts; it does
          not reproduce them. Always pair study here with the full texts for depth.
        </p>
      </Card>
    </div>
  );
}
