"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MousePointerClick, RotateCcw } from "lucide-react";
import { Card, Skeleton } from "@/components/ui";
import type { RegionId } from "@/components/three/anatomy-canvas";
import { cn } from "@/lib/utils";

const AnatomyCanvas = dynamic(() => import("@/components/three/anatomy-canvas"), {
  ssr: false,
  loading: () => <Skeleton className="h-full min-h-[420px] w-full" />,
});

interface RegionInfo {
  name: string;
  structures: string[];
  note: string;
  topics: { label: string; href: string }[];
}

const REGIONS: Record<RegionId, RegionInfo> = {
  head: {
    name: "Skull & Cervical Spine",
    structures: ["Cranium and mandible", "C1 (atlas) and C2 (axis)", "Cervical vertebrae C3–C7"],
    note: "The upper cervical spine provides ~50% of neck rotation (C1–C2). Cervical dysfunction can refer pain to the head and shoulder — always screened in headache and shoulder presentations.",
    topics: [{ label: "Low Back Pain (spine principles)", href: "/topics/low-back-pain" }],
  },
  shoulder: {
    name: "Shoulder Complex",
    structures: ["Glenohumeral joint", "Clavicle (AC & SC joints)", "Scapula and scapulothoracic articulation", "Rotator cuff attachment sites"],
    note: "The most mobile joint in the body trades stability for mobility — the rotator cuff and scapular muscles provide dynamic control. Scapulohumeral rhythm is roughly 2:1 (GH : scapulothoracic).",
    topics: [
      { label: "Shoulder Complex Anatomy", href: "/topics/shoulder-anatomy" },
      { label: "Rotator Cuff Injuries", href: "/topics/rotator-cuff-injury" },
    ],
  },
  arm: {
    name: "Elbow, Wrist & Hand",
    structures: ["Humerus, radius and ulna", "Elbow hinge + radioulnar rotation", "Carpal bones and hand"],
    note: "The common extensor origin at the lateral epicondyle is the site of tennis elbow — a degenerative tendinopathy of ECRB, managed with progressive loading.",
    topics: [{ label: "Tennis Elbow", href: "/topics/tennis-elbow" }],
  },
  thorax: {
    name: "Ribcage & Thorax",
    structures: ["12 rib pairs and sternum", "Costovertebral joints", "Intercostals and diaphragm beneath"],
    note: "Rib mechanics (pump-handle and bucket-handle motion) drive ventilation. Thoracic mobility also contributes substantially to shoulder elevation and rotation.",
    topics: [{ label: "COPD & Pulmonary Rehabilitation", href: "/topics/copd-rehabilitation" }],
  },
  spine: {
    name: "Thoracolumbar Spine",
    structures: ["Thoracic vertebrae T1–T12", "Lumbar vertebrae L1–L5", "Intervertebral discs and facet joints"],
    note: "The lumbar spine carries the greatest load; discs are avascular and rely on movement for nutrition. Most low back pain is non-specific and responds to graded activity, not rest.",
    topics: [{ label: "Low Back Pain", href: "/topics/low-back-pain" }],
  },
  hip: {
    name: "Pelvis & Hip",
    structures: ["Pelvic ring and sacrum", "Ball-and-socket hip joints", "Femur (strongest bone in the body)"],
    note: "Hip pathology commonly refers pain to the anterior thigh and knee. Hip abductor strength controls pelvic stability in single-leg stance — the basis of the Trendelenburg sign.",
    topics: [{ label: "Gait Analysis & Assessment", href: "/topics/gait-assessment" }],
  },
  knee: {
    name: "Knee & Lower Leg",
    structures: ["Tibiofemoral and patellofemoral joints", "Patella (largest sesamoid bone)", "Tibia and fibula"],
    note: "The medial compartment carries 60–70% of load in walking — why medial knee OA is most common. The quadriceps are the knee's main dynamic shock absorber.",
    topics: [
      { label: "Knee Osteoarthritis", href: "/topics/knee-osteoarthritis" },
      { label: "Knee Special Tests", href: "/topics/knee-special-tests" },
      { label: "ACL Injury & Rehabilitation", href: "/topics/acl-injury" },
    ],
  },
  ankle: {
    name: "Ankle & Foot",
    structures: ["Talocrural (ankle) joint", "Talus and calcaneus", "26 bones per foot"],
    note: "The ATFL is the most commonly injured ligament in the body — sprained in inversion + plantarflexion, when the joint is least stable. Balance retraining prevents recurrence.",
    topics: [{ label: "Lateral Ankle Sprain", href: "/topics/ankle-sprain" }],
  },
};

const ORDER: RegionId[] = ["head", "shoulder", "arm", "thorax", "spine", "hip", "knee", "ankle"];

export function AnatomyViewer() {
  const [selected, setSelected] = useState<RegionId | null>("shoulder");
  const info = selected ? REGIONS[selected] : null;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
      {/* 3D viewport */}
      <Card className="relative overflow-hidden">
        <div className="h-[420px] sm:h-[520px]">
          <AnatomyCanvas selected={selected} onSelect={setSelected} />
        </div>
        <div className="pointer-events-none absolute left-4 top-4 flex flex-col gap-1.5 text-xs text-muted">
          <span className="flex items-center gap-1.5 rounded-full bg-surface/85 px-2.5 py-1 backdrop-blur">
            <RotateCcw className="h-3 w-3" aria-hidden="true" /> Drag to rotate · scroll to zoom
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-surface/85 px-2.5 py-1 backdrop-blur">
            <MousePointerClick className="h-3 w-3" aria-hidden="true" /> Click a body region to explore
          </span>
        </div>
      </Card>

      {/* Info panel */}
      <div className="space-y-4">
        {/* Region chips */}
        <div className="flex flex-wrap gap-1.5">
          {ORDER.map((id) => (
            <button
              key={id}
              onClick={() => setSelected(id)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                selected === id
                  ? "bg-primary text-primary-fg"
                  : "border border-border bg-surface text-muted hover:border-accent"
              )}
            >
              {REGIONS[id].name}
            </button>
          ))}
        </div>

        {info && (
          <Card className="p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-accent-strong">Selected region</p>
            <h2 className="mt-1 text-xl font-extrabold">{info.name}</h2>
            <h3 className="mt-4 text-sm font-bold">Key structures</h3>
            <ul className="mt-1.5 space-y-1 text-sm leading-relaxed">
              {info.structures.map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
            <h3 className="mt-4 text-sm font-bold">Clinical note</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink/85">{info.note}</p>
            <h3 className="mt-4 text-sm font-bold">Study this region</h3>
            <div className="mt-2 space-y-1.5">
              {info.topics.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="flex items-center justify-between rounded-xl bg-accent-soft px-3 py-2 text-sm font-semibold text-accent-strong transition-colors hover:bg-accent hover:text-white"
                >
                  {t.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
