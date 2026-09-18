"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Hand, MousePointerClick, Move3d, RotateCcw } from "lucide-react";
import { Badge, Card, Skeleton } from "@/components/ui";
import type { RegionId } from "@/components/three/anatomy-canvas";
import { cn } from "@/lib/utils";

const AnatomyCanvas = dynamic(() => import("@/components/three/anatomy-canvas"), {
  ssr: false,
  loading: () => <Skeleton className="h-full min-h-[420px] w-full" />,
});

interface RegionInfo {
  name: string;
  structures: string[];
  movements: string[];
  nerves: string[];
  muscles: string[];
  note: string;
  topics: { label: string; href: string }[];
}

const REGIONS: Record<RegionId, RegionInfo> = {
  head: {
    name: "Skull & Cervical Spine",
    structures: ["Cranium, facial bones and mandible (TMJ)", "C1 atlas — 'yes' nodding; C2 axis — 'no' rotation", "C3–C7 vertebrae, discs and facet joints"],
    movements: ["Flexion 45–50°", "Extension 55–70°", "Rotation 80–90° (≈50% at C1–C2)", "Side flexion ~45°"],
    nerves: ["Spinal nerves C1–C8", "Greater occipital nerve (headaches)", "Brachial plexus roots begin at C5"],
    muscles: ["Deep neck flexors (longus colli/capitis)", "Upper trapezius & levator scapulae", "SCM and scalenes", "Suboccipitals"],
    note: "The upper cervical spine provides about half of all neck rotation. Cervical dysfunction refers pain to the head and shoulder — and red-flag screening (arterial, myelopathy, instability) always comes before treatment.",
    topics: [
      { label: "Neck Pain & Cervical Spine", href: "/topics/cervical-spine" },
      { label: "Vestibular & Balance Disorders", href: "/topics/vestibular-rehabilitation" },
    ],
  },
  shoulder: {
    name: "Shoulder Complex",
    structures: ["Glenohumeral ball-and-socket + labrum", "Clavicle with AC & SC joints", "Scapula gliding on the thorax", "Subacromial space & bursa"],
    movements: ["Flexion/abduction 180° (2:1 scapulohumeral rhythm)", "External rotation ~90°", "Internal rotation ~70–90°", "Scapular upward rotation 60°"],
    nerves: ["Axillary nerve (deltoid — vulnerable in dislocation)", "Suprascapular nerve (supra/infraspinatus)", "Long thoracic nerve (serratus — winging)"],
    muscles: ["Rotator cuff — SITS (dynamic stability)", "Deltoid (force couple with cuff)", "Trapezius + serratus anterior (scapular rotation)"],
    note: "The most mobile joint in the body trades stability for mobility — the rotator cuff compresses the head into the socket while deltoid elevates. Lose that force couple and impingement-type pain follows.",
    topics: [
      { label: "Shoulder Complex Anatomy", href: "/topics/shoulder-anatomy" },
      { label: "Rotator Cuff Injuries", href: "/topics/rotator-cuff-injury" },
      { label: "Frozen Shoulder", href: "/topics/frozen-shoulder" },
    ],
  },
  arm: {
    name: "Elbow, Wrist & Hand",
    structures: ["Humeroulnar hinge + radiocapitellar joint", "Proximal/distal radioulnar joints (rotation)", "8 carpal bones, carpal tunnel", "Common flexor & extensor origins"],
    movements: ["Elbow flexion 0–145°", "Pronation/supination ~80–90° each", "Wrist extension ~70°, flexion ~80°", "Functional grip needs ~30° wrist extension"],
    nerves: ["Median (carpal tunnel, thumb opposition)", "Ulnar (cubital tunnel, intrinsics — claw)", "Radial (wrist drop, spiral groove)"],
    muscles: ["Biceps/brachialis, triceps", "Wrist extensors from lateral epicondyle (ECRB — tennis elbow)", "Wrist flexors from medial epicondyle", "Thenar & intrinsic hand muscles"],
    note: "Three nerves rule the hand: median, ulnar, radial — each entrapment has a signature pattern. The lateral epicondyle's common extensor origin is the site of tennis elbow, a load-capacity problem, not inflammation.",
    topics: [
      { label: "Tennis Elbow", href: "/topics/tennis-elbow" },
      { label: "Peripheral Nerve Disorders", href: "/topics/peripheral-nerve-injuries" },
    ],
  },
  thorax: {
    name: "Ribcage & Thorax",
    structures: ["12 rib pairs (1–7 true, 8–10 false, 11–12 floating)", "Sternum: manubrium, body, xiphoid", "Costovertebral & costotransverse joints", "Diaphragm dome beneath"],
    movements: ["Pump-handle motion (upper ribs, sagittal)", "Bucket-handle motion (lower ribs, lateral)", "Thoracic rotation ~35° each way", "Quiet breathing is mostly diaphragm"],
    nerves: ["Intercostal nerves T1–T12", "Phrenic nerve C3–C5 drives the diaphragm ('3, 4, 5 keeps you alive')"],
    muscles: ["Diaphragm (prime mover of breathing)", "Intercostals", "Accessory muscles: scalenes, SCM (used in distress)", "Abdominals (forced expiration & cough)"],
    note: "Rib mechanics power ventilation — restriction here changes breathing and shoulder motion alike. Thoracic mobility contributes substantially to overhead reach and rotation in daily life and sport.",
    topics: [
      { label: "COPD & Pulmonary Rehabilitation", href: "/topics/copd-rehabilitation" },
      { label: "Asthma & Airway Conditions", href: "/topics/asthma-airway-disease" },
      { label: "Acute Care & ICU Physiotherapy", href: "/topics/acute-care-physiotherapy" },
    ],
  },
  spine: {
    name: "Thoracolumbar Spine",
    structures: ["T1–T12 (rib-linked, stiffer) + L1–L5 (large, mobile)", "Intervertebral discs: annulus + nucleus", "Facet joints guide motion direction", "Spinal cord ends ~L1–L2 (cauda equina below)"],
    movements: ["Lumbar flexion 40–60°, extension 20–35°", "Lumbar side flexion ~20°", "Rotation mostly thoracic (lumbar only ~5–7°)"],
    nerves: ["Lumbar plexus L1–L4 (femoral)", "Sacral plexus L4–S3 (sciatic)", "L4/L5/S1 roots — most disc-related radiculopathy"],
    muscles: ["Multifidus & erector spinae", "Transversus abdominis & obliques", "Psoas (hip-spine link)", "Quadratus lumborum"],
    note: "The lumbar spine carries the greatest load, and its discs rely on movement for nutrition — one reason 'motion is lotion' holds. Most low back pain is non-specific and improves with activity, not rest; the exceptions are the red flags.",
    topics: [
      { label: "Low Back Pain", href: "/topics/low-back-pain" },
      { label: "Chronic Pain Science", href: "/topics/chronic-pain" },
    ],
  },
  hip: {
    name: "Pelvis & Hip",
    structures: ["Pelvic ring: two innominates + sacrum (SI joints)", "Deep ball-and-socket hip with labrum", "Femoral neck (fracture site in osteoporosis)", "Greater trochanter — gluteal tendon attachment"],
    movements: ["Flexion 120°+, extension 10–20°", "Abduction ~45°, adduction ~30°", "IR ~35–45° (lost early in hip OA), ER ~45°"],
    nerves: ["Femoral nerve (quads) — refers to anterior thigh/knee", "Sciatic nerve exits under piriformis", "Obturator nerve — groin/inner thigh referral"],
    muscles: ["Gluteus maximus (power) & medius (pelvic stability)", "Iliopsoas (hip flexion)", "Deep rotators incl. piriformis", "Adductors & hamstrings"],
    note: "Hip pathology classically presents as groin pain with early loss of internal rotation, and refers to the knee. Gluteus medius keeps the pelvis level in single-leg stance — its weakness is the Trendelenburg sign and a falls-risk marker.",
    topics: [
      { label: "Hip Pain & Joint Replacement", href: "/topics/hip-conditions" },
      { label: "Gait Analysis & Assessment", href: "/topics/gait-assessment" },
      { label: "Falls Prevention & Balance", href: "/topics/falls-prevention" },
    ],
  },
  knee: {
    name: "Knee & Lower Leg",
    structures: ["Tibiofemoral + patellofemoral joints", "Menisci (load-sharing shock absorbers)", "ACL/PCL (AP stability), MCL/LCL (valgus/varus)", "Patella — largest sesamoid, quads lever arm"],
    movements: ["Flexion 0–135°+", "Extension 0° (screw-home ER locks it)", "PFJ load: stairs 3–4× BW, deep squat 7–8× BW"],
    nerves: ["Tibial nerve (posterior)", "Common fibular nerve around fibular head — foot drop when injured", "Saphenous nerve (medial, sensory)"],
    muscles: ["Quadriceps + VMO (extension, shock absorption)", "Hamstrings (flexion, ACL protection)", "Gastrocnemius crosses the knee", "Popliteus unlocks the joint"],
    note: "The medial compartment takes 60–70% of walking load — why medial OA dominates. Quadriceps strength is the knee's shock absorber and the strongest modifiable factor across knee OA, PFP and ACL rehab alike.",
    topics: [
      { label: "Knee Osteoarthritis", href: "/topics/knee-osteoarthritis" },
      { label: "Patellofemoral Pain", href: "/topics/patellofemoral-pain" },
      { label: "ACL Injury & Rehabilitation", href: "/topics/acl-injury" },
      { label: "Knee Special Tests", href: "/topics/knee-special-tests" },
    ],
  },
  ankle: {
    name: "Ankle & Foot",
    structures: ["Talocrural mortise (tibia + fibula + talus)", "Subtalar joint (inversion/eversion)", "26 bones, medial longitudinal arch", "ATFL/CFL/PTFL laterally, deltoid medially"],
    movements: ["Dorsiflexion 15–20° (10° needed for gait)", "Plantarflexion ~50°", "Inversion ~35°, eversion ~15°", "Windlass: big-toe extension tensions the arch"],
    nerves: ["Tibial nerve (tarsal tunnel)", "Deep fibular nerve (dorsiflexors)", "Superficial fibular nerve (evertors)", "S1 root refers to lateral foot"],
    muscles: ["Gastrocnemius-soleus (push-off power)", "Tibialis anterior (heel-strike control)", "Fibularis longus/brevis (lateral stability)", "Intrinsics support the arch"],
    note: "The ankle is least stable in plantarflexion-inversion — exactly how the ATFL, the most-sprained ligament in the body, gets injured. Balance retraining afterwards is what prevents the next sprain.",
    topics: [
      { label: "Lateral Ankle Sprain", href: "/topics/ankle-sprain" },
      { label: "Foot & Heel Pain", href: "/topics/foot-heel-pain" },
    ],
  },
};

const ORDER: RegionId[] = ["head", "shoulder", "arm", "thorax", "spine", "hip", "knee", "ankle"];

export function AnatomyViewer() {
  const [selected, setSelected] = useState<RegionId | null>(null);
  const [hovered, setHovered] = useState<RegionId | null>(null);
  const info = selected ? REGIONS[selected] : null;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_380px]">
      {/* 3D viewport */}
      <Card className="relative overflow-hidden">
        <div className="h-[440px] sm:h-[540px]">
          <AnatomyCanvas selected={selected} onSelect={setSelected} onHover={setHovered} />
        </div>
        <div className="pointer-events-none absolute left-4 top-4 flex flex-col gap-1.5 text-xs text-muted">
          <span className="flex items-center gap-1.5 rounded-full bg-surface/85 px-2.5 py-1 backdrop-blur">
            <RotateCcw className="h-3 w-3" aria-hidden="true" /> Drag to rotate · scroll to zoom
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-surface/85 px-2.5 py-1 backdrop-blur">
            <MousePointerClick className="h-3 w-3" aria-hidden="true" /> Click a region — the camera
            flies to it
          </span>
        </div>
        {/* Hover label */}
        <div
          className={cn(
            "pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-fg shadow-lg transition-all duration-200",
            hovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          )}
          aria-hidden="true"
        >
          <span className="flex items-center gap-1.5">
            <Hand className="h-3.5 w-3.5" /> {hovered ? REGIONS[hovered].name : ""}
          </span>
        </div>
      </Card>

      {/* Info panel */}
      <div className="space-y-4">
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

        {!info && (
          <Card className="flex flex-col items-center gap-3 p-8 text-center">
            <Move3d className="h-10 w-10 text-accent-strong" aria-hidden="true" />
            <h2 className="text-lg font-extrabold">Explore the skeleton</h2>
            <p className="text-sm text-muted">
              The model is rotating — click any bone (or a chip above) and the camera will fly to
              that region with its full clinical breakdown: structures, movements, nerve supply,
              key muscles and the topics to study.
            </p>
          </Card>
        )}

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

            <h3 className="mt-4 text-sm font-bold">Movements & norms</h3>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {info.movements.map((m, i) => (
                <Badge key={i} variant="accent">
                  {m}
                </Badge>
              ))}
            </div>

            <h3 className="mt-4 text-sm font-bold">Nerve supply highlights</h3>
            <ul className="mt-1.5 space-y-1 text-sm leading-relaxed">
              {info.nerves.map((n, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" aria-hidden="true" />
                  {n}
                </li>
              ))}
            </ul>

            <h3 className="mt-4 text-sm font-bold">Key muscles</h3>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {info.muscles.map((m, i) => (
                <span key={i} className="rounded-full bg-surface-2 px-2.5 py-1 text-xs font-semibold text-muted">
                  {m}
                </span>
              ))}
            </div>

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
