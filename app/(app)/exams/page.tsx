import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  Globe,
  GraduationCap,
  Landmark,
  ScrollText,
  Timer,
} from "lucide-react";
import { prisma } from "@/lib/db";
import { Badge, ButtonLink, Card, PageHeader } from "@/components/ui";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/motion";

export const metadata: Metadata = { title: "Exam Prep" };
export const dynamic = "force-dynamic";

interface ExamInfo {
  id: string;
  name: string;
  region: string;
  body: string;
  website: string;
  format: string[];
  tested: string[];
  studyPath: { label: string; href: string }[];
}

const EXAMS: ExamInfo[] = [
  {
    id: "npte",
    name: "NPTE — National Physical Therapy Examination",
    region: "United States",
    body: "FSBPT",
    website: "fsbpt.org",
    format: [
      "Computer-based multiple-choice exam (~225 questions in timed sections, roughly 5 hours)",
      "Scaled scoring — a scaled score of 600/800 is the passing standard",
      "Content spans body systems (musculoskeletal, neuromuscular, cardiopulmonary and other systems) across examination, evaluation and intervention",
      "Also tests equipment, modalities, safety and professional responsibilities",
    ],
    tested: [
      "Musculoskeletal examination & intervention (largest share)",
      "Neuromuscular & nervous system conditions",
      "Cardiovascular & pulmonary rehabilitation",
      "Clinical assessment, safety and red flags",
    ],
    studyPath: [
      { label: "Knee, shoulder, spine & ankle topics", href: "/topics" },
      { label: "Stroke, SCI, TBI, MS & Parkinson's", href: "/topics" },
      { label: "COPD & Cardiac Rehabilitation", href: "/topics" },
      { label: "Special tests & gait assessment", href: "/topics" },
    ],
  },
  {
    id: "pce",
    name: "PCE — Physiotherapy Competency Examination",
    region: "Canada",
    body: "CAPR (Canadian Alliance of Physiotherapy Regulators)",
    website: "alliancept.org",
    format: [
      "Written component: ~200 multiple-choice questions over two books, computer-based",
      "Tests safe, effective entry-level physiotherapy across the lifespan",
      "Blueprint weights musculoskeletal, neurological and cardiorespiratory practice areas",
      "CAPR reading lists include Dutton, Magee, Kisner & Colby, O'Sullivan & Schmitz — the same sources this platform's content is aligned with",
    ],
    tested: [
      "Musculoskeletal assessment & management",
      "Neurological rehabilitation",
      "Cardiorespiratory physiotherapy",
      "Professional practice, safety & precautions",
    ],
    studyPath: [
      { label: "All Musculoskeletal topics", href: "/topics" },
      { label: "All Neurological topics", href: "/topics" },
      { label: "COPD & Cardiac Rehabilitation", href: "/topics" },
      { label: "Clinical Assessment topics", href: "/topics" },
    ],
  },
  {
    id: "gulf",
    name: "Prometric Exams — DHA · MOH · QCHP · SCFHS",
    region: "UAE, Saudi Arabia, Qatar & Gulf",
    body: "Regional health authorities (via Prometric)",
    website: "prometric.com",
    format: [
      "Computer-based MCQ exams, typically 70–100 questions in 2–3 hours",
      "Question style is clinical-vignette MCQ — very similar to this platform's quiz engine",
      "Passing mark commonly around 60% (varies by authority)",
      "Required for physiotherapist licensure in Dubai (DHA), UAE MOH, Qatar (QCHP) and Saudi Arabia (SCFHS)",
    ],
    tested: [
      "Musculoskeletal & orthopaedic physiotherapy",
      "Neurological conditions & rehabilitation",
      "Cardiopulmonary physiotherapy & exercise prescription",
      "Electrotherapy, safety & professional ethics",
    ],
    studyPath: [
      { label: "Musculoskeletal + Assessment topics", href: "/topics" },
      { label: "Exercise Prescription principles", href: "/topics" },
      { label: "Neuro & Cardiopulmonary topics", href: "/topics" },
    ],
  },
  {
    id: "india",
    name: "Indian Competitive Exams — MPT Entrance · Govt Recruitment",
    region: "India",
    body: "AIIMS, ESIC, RRB, state health departments & universities",
    website: "official portals of each body",
    format: [
      "MPT entrance exams: MCQ papers over the full BPT syllabus — anatomy, physiology, biomechanics and all clinical PT subjects",
      "Government recruitment (AIIMS/ESIC/RRB physiotherapist posts): objective papers mixing core PT subjects with general aptitude",
      "No single national licensing exam — state council registration plus competitive exams for seats and posts",
      "Negative marking is common — accuracy matters as much as coverage",
    ],
    tested: [
      "Anatomy & biomechanics fundamentals",
      "Orthopaedic / musculoskeletal physiotherapy",
      "Neurology, cardiopulmonary & exercise therapy",
      "Assessment methods, special tests & electrotherapy basics",
    ],
    studyPath: [
      { label: "Shoulder Anatomy & all Anatomy content", href: "/topics" },
      { label: "Every Musculoskeletal topic", href: "/topics" },
      { label: "Special tests, ROM & gait assessment", href: "/topics" },
    ],
  },
  {
    id: "other",
    name: "Other Routes — UK (HCPC) · Australia (APC)",
    region: "United Kingdom & Australia",
    body: "HCPC / Australian Physiotherapy Council",
    website: "hcpc-uk.org · physiocouncil.com.au",
    format: [
      "UK: HCPC registration for international graduates is application/portfolio-based (no single exam) — your degree, references and scope evidence are assessed",
      "Australia: APC assessment includes written MCQ examination and clinical assessments for overseas-trained physiotherapists",
      "Both value structured, guideline-based clinical reasoning — exactly what the quizzes here train",
    ],
    tested: [
      "Clinical reasoning across MSK, neuro and cardiorespiratory cases",
      "Safety, red flags and referral decisions",
      "Evidence-based management selection",
    ],
    studyPath: [
      { label: "Work through every topic's quiz in exam mode", href: "/topics" },
      { label: "Focus on red-flag sections of each topic", href: "/topics" },
    ],
  },
];

export default async function ExamsPage() {
  const questionCount = await prisma.question.count({
    where: { enabled: true, topic: { enabled: true } },
  });

  return (
    <div className="space-y-8">
      <PageHeader
        title="Exam Preparation Center"
        subtitle="The major physiotherapy licensing and competitive exams — what each one tests, how to prepare with this platform, and full mixed mock exams."
      />

      {/* Mock exam hero */}
      <FadeIn>
        <Card className="medical-grid relative overflow-hidden p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-accent-soft blur-3xl" aria-hidden="true" />
          <div className="relative flex flex-wrap items-center justify-between gap-5">
            <div className="max-w-xl">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent-strong">
                <GraduationCap className="h-4 w-4" aria-hidden="true" /> Exam-style practice
              </p>
              <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">Mixed Mock Exam</h2>
              <p className="mt-2 text-sm text-muted sm:text-base">
                Real exams don&apos;t tell you which topic a question is from. The mock exam draws
                randomly from all <strong>{questionCount} questions</strong> across every topic —
                strict 2-minute-per-question timing, server-side scoring, full review and weak-area
                analysis at the end.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted">
                <Badge variant="accent">
                  <Timer className="h-3 w-3" aria-hidden="true" /> 10 / 20 / 30 questions
                </Badge>
                <Badge variant="accent">
                  <ClipboardList className="h-3 w-3" aria-hidden="true" /> Every topic mixed
                </Badge>
              </div>
            </div>
            <ButtonLink href="/quiz/setup/mock-exam" size="lg" variant="accent" className="shimmer relative overflow-hidden">
              Start Mock Exam <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </Card>
      </FadeIn>

      {/* Exam cards */}
      <StaggerGrid className="grid gap-5 lg:grid-cols-2">
        {EXAMS.map((exam) => (
          <StaggerItem key={exam.id} className="h-full">
            <Card className="flex h-full flex-col p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-extrabold leading-snug">{exam.name}</h3>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs font-semibold text-muted">
                    <Globe className="h-3.5 w-3.5" aria-hidden="true" /> {exam.region} ·{" "}
                    <Landmark className="h-3.5 w-3.5" aria-hidden="true" /> {exam.body}
                  </p>
                </div>
              </div>

              <h4 className="mt-4 flex items-center gap-1.5 text-sm font-bold">
                <ScrollText className="h-4 w-4 text-accent-strong" aria-hidden="true" /> Format
              </h4>
              <ul className="mt-1.5 space-y-1.5 text-sm leading-relaxed text-ink/85">
                {exam.format.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <h4 className="mt-4 text-sm font-bold">What it tests</h4>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {exam.tested.map((t, i) => (
                  <span key={i} className="rounded-full bg-surface-2 px-2.5 py-1 text-xs font-semibold text-muted">
                    {t}
                  </span>
                ))}
              </div>

              <h4 className="mt-4 flex items-center gap-1.5 text-sm font-bold">
                <BookOpen className="h-4 w-4 text-accent-strong" aria-hidden="true" /> Prepare here
              </h4>
              <div className="mt-1.5 space-y-1.5">
                {exam.studyPath.map((s, i) => (
                  <Link
                    key={i}
                    href={s.href}
                    className="flex items-center justify-between rounded-xl bg-accent-soft px-3 py-2 text-sm font-semibold text-accent-strong transition-colors hover:bg-accent hover:text-white"
                  >
                    {s.label}
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </Link>
                ))}
              </div>

              <p className="mt-auto pt-4 text-[11px] text-muted">
                Formats and rules change — always verify current details at {exam.website}.
              </p>
            </Card>
          </StaggerItem>
        ))}

        {/* CTA tile */}
        <StaggerItem className="h-full">
          <Card className="flex h-full flex-col items-center justify-center gap-3 border-accent/40 bg-accent-soft p-8 text-center">
            <GraduationCap className="h-10 w-10 text-accent-strong" aria-hidden="true" />
            <h3 className="text-xl font-extrabold">Whatever your exam — the method is the same</h3>
            <p className="max-w-sm text-sm text-muted">
              Study a topic → quiz it in exam mode → review every mistake → re-study weak areas →
              mixed mock exam. Repeat until your mock scores sit comfortably above the pass mark.
            </p>
            <ButtonLink href="/quiz/setup/mock-exam" variant="accent">
              Take a Mock Exam <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </Card>
        </StaggerItem>
      </StaggerGrid>

      <p className="text-center text-[11px] text-muted">
        Exam information is a general educational summary, not official guidance — always confirm
        with the examining body.
      </p>
    </div>
  );
}
