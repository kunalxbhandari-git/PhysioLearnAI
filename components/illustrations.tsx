/**
 * Curated local educational illustrations — anatomical line-art style.
 * These are the deterministic fallback for the image provider abstraction
 * (lib/images): if a generative image API is configured later it can replace
 * these, but the app is fully functional without one.
 */

const stroke = "var(--ill-stroke)";
const accent = "var(--ill-accent)";
const soft = "var(--ill-soft)";
const label = "var(--ill-label)";

function Label({
  x,
  y,
  children,
  anchor = "start",
}: {
  x: number;
  y: number;
  children: string;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text x={x} y={y} fontSize="11" fill={label} textAnchor={anchor} fontFamily="inherit">
      {children}
    </text>
  );
}

function KneeJoint() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Diagram of the knee joint" className="w-full h-auto">
      {/* Femur */}
      <path d="M175 20 Q170 80 165 110 Q160 135 150 145 Q165 160 200 160 Q235 160 250 145 Q240 135 235 110 Q230 80 225 20" fill={soft} stroke={stroke} strokeWidth="2.5" />
      {/* Femoral condyles */}
      <path d="M150 145 Q145 165 160 172 Q175 178 185 170 M250 145 Q255 165 240 172 Q225 178 215 170" fill="none" stroke={stroke} strokeWidth="2.5" />
      {/* Menisci */}
      <path d="M155 185 Q175 178 195 184 M245 185 Q225 178 205 184" fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round" />
      {/* Tibia */}
      <path d="M150 196 Q200 188 250 196 L245 215 Q240 240 238 280 M162 280 Q160 240 155 215 Z" fill={soft} stroke={stroke} strokeWidth="2.5" />
      <path d="M150 196 Q200 188 250 196" fill="none" stroke={stroke} strokeWidth="2.5" />
      {/* Fibula */}
      <path d="M258 205 Q262 240 260 280 M272 280 Q274 240 268 208" fill="none" stroke={stroke} strokeWidth="2" />
      {/* Patella */}
      <ellipse cx="200" cy="140" rx="20" ry="26" fill="var(--ill-bg)" stroke={stroke} strokeWidth="2.5" />
      {/* Collateral ligaments */}
      <path d="M148 120 Q140 160 152 198" fill="none" stroke={accent} strokeWidth="2.5" strokeDasharray="4 3" />
      <path d="M252 120 Q262 160 256 200" fill="none" stroke={accent} strokeWidth="2.5" strokeDasharray="4 3" />
      {/* Labels */}
      <line x1="222" y1="50" x2="290" y2="50" stroke={label} strokeWidth="1" />
      <Label x={294} y={54}>Femur</Label>
      <line x1="220" y1="140" x2="290" y2="120" stroke={label} strokeWidth="1" />
      <Label x={294} y={124}>Patella</Label>
      <line x1="212" y1="182" x2="290" y2="170" stroke={label} strokeWidth="1" />
      <Label x={294} y={174}>Meniscus</Label>
      <line x1="240" y1="250" x2="300" y2="250" stroke={label} strokeWidth="1" />
      <Label x={304} y={254}>Tibia</Label>
      <line x1="146" y1="160" x2="90" y2="160" stroke={label} strokeWidth="1" />
      <Label x={86} y={164} anchor="end">MCL</Label>
    </svg>
  );
}

function ShoulderJoint() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Diagram of the shoulder joint" className="w-full h-auto">
      {/* Clavicle */}
      <path d="M60 80 Q140 60 205 78" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      {/* Acromion */}
      <path d="M205 78 Q230 74 240 90 Q244 100 236 106" fill={soft} stroke={stroke} strokeWidth="2.5" />
      {/* Scapula (glenoid + body hint) */}
      <path d="M228 112 Q218 130 220 155 Q222 185 200 230 L170 250 Q195 190 198 150 Q200 125 212 108 Z" fill={soft} stroke={stroke} strokeWidth="2.5" />
      {/* Glenoid fossa */}
      <path d="M226 114 Q234 135 228 158" fill="none" stroke={accent} strokeWidth="3.5" strokeLinecap="round" />
      {/* Humeral head */}
      <circle cx="262" cy="136" r="32" fill="var(--ill-bg)" stroke={stroke} strokeWidth="2.5" />
      {/* Humeral shaft */}
      <path d="M252 166 Q248 210 250 265 M282 160 Q288 210 284 265" fill="none" stroke={stroke} strokeWidth="2.5" />
      {/* Rotator cuff hint (supraspinatus over the top) */}
      <path d="M200 96 Q235 82 268 104" fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round" />
      {/* Subacromial space marker */}
      <path d="M238 104 Q252 98 262 104" fill="none" stroke={label} strokeWidth="1.5" strokeDasharray="3 3" />
      {/* Labels */}
      <line x1="120" y1="70" x2="120" y2="40" stroke={label} strokeWidth="1" />
      <Label x={124} y={38}>Clavicle</Label>
      <line x1="236" y1="88" x2="300" y2="60" stroke={label} strokeWidth="1" />
      <Label x={304} y={58}>Acromion</Label>
      <line x1="262" y1="136" x2="330" y2="136" stroke={label} strokeWidth="1" />
      <Label x={334} y={140}>Humeral head</Label>
      <line x1="232" y1="86" x2="180" y2="120" stroke={label} strokeWidth="1" />
      <Label x={176} y={128} anchor="end">Supraspinatus</Label>
      <line x1="205" y1="215" x2="150" y2="215" stroke={label} strokeWidth="1" />
      <Label x={146} y={219} anchor="end">Scapula</Label>
    </svg>
  );
}

function Spine() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Diagram of the spinal column" className="w-full h-auto">
      {/* Spinal curve */}
      <path d="M200 20 Q188 60 196 100 Q206 150 194 200 Q186 240 200 280" fill="none" stroke={label} strokeWidth="1" strokeDasharray="3 4" />
      {/* Vertebrae */}
      {[30, 55, 80, 105, 130, 158, 186, 214, 242].map((y, i) => {
        const xOff = [0, -6, -4, 2, 5, 0, -6, -4, 2][i];
        const w = 34 + i * 2.2;
        const h = 16 + i * 0.6;
        return (
          <g key={y}>
            <rect x={200 - w / 2 + xOff} y={y} width={w} height={h} rx="5" fill={i === 5 || i === 6 ? "var(--ill-bg)" : soft} stroke={stroke} strokeWidth="2" />
            {i < 8 && (
              <rect x={200 - w / 4 + xOff} y={y + h + 1} width={w / 2} height="6" rx="3" fill={accent} opacity="0.75" />
            )}
          </g>
        );
      })}
      {/* Sacrum */}
      <path d="M180 268 L220 268 L212 296 L188 296 Z" fill={soft} stroke={stroke} strokeWidth="2" />
      {/* Region brackets */}
      <path d="M258 30 L266 30 L266 118 L258 118" fill="none" stroke={label} strokeWidth="1" />
      <Label x={272} y={78}>Cervical / Thoracic</Label>
      <path d="M262 158 L270 158 L270 260 L262 260" fill="none" stroke={label} strokeWidth="1" />
      <Label x={276} y={212}>Lumbar</Label>
      <line x1="205" y1="282" x2="260" y2="288" stroke={label} strokeWidth="1" />
      <Label x={264} y={292}>Sacrum</Label>
      <line x1="182" y1="152" x2="120" y2="140" stroke={label} strokeWidth="1" />
      <Label x={116} y={138} anchor="end">Intervertebral disc</Label>
    </svg>
  );
}

function AnkleJoint() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Diagram of the ankle joint and lateral ligaments" className="w-full h-auto">
      {/* Tibia */}
      <path d="M150 20 L150 150 Q150 165 165 168 L185 168 L188 20" fill={soft} stroke={stroke} strokeWidth="2.5" />
      {/* Fibula */}
      <path d="M205 20 L204 160 Q204 175 215 176 Q226 175 226 162 L224 20" fill={soft} stroke={stroke} strokeWidth="2.5" />
      {/* Talus */}
      <path d="M150 180 Q175 168 205 180 Q225 188 228 200 Q210 212 180 210 Q155 206 148 194 Z" fill="var(--ill-bg)" stroke={stroke} strokeWidth="2.5" />
      {/* Calcaneus */}
      <path d="M150 214 Q190 222 225 214 Q245 228 240 248 Q220 262 180 258 Q145 252 138 232 Q140 220 150 214" fill={soft} stroke={stroke} strokeWidth="2.5" />
      {/* Foot / metatarsal hint */}
      <path d="M228 204 Q280 200 330 212 Q334 224 326 230 Q280 224 240 232" fill="none" stroke={stroke} strokeWidth="2" />
      {/* ATFL */}
      <path d="M222 172 Q240 182 236 198" fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round" />
      {/* CFL */}
      <path d="M220 178 Q222 210 212 224" fill="none" stroke={accent} strokeWidth="2.5" strokeDasharray="4 3" strokeLinecap="round" />
      {/* Labels */}
      <line x1="165" y1="60" x2="100" y2="60" stroke={label} strokeWidth="1" />
      <Label x={96} y={64} anchor="end">Tibia</Label>
      <line x1="218" y1="60" x2="280" y2="48" stroke={label} strokeWidth="1" />
      <Label x={284} y={46}>Fibula</Label>
      <line x1="238" y1="188" x2="300" y2="168" stroke={label} strokeWidth="1" />
      <Label x={304} y={166}>ATFL</Label>
      <line x1="216" y1="216" x2="300" y2="252" stroke={label} strokeWidth="1" />
      <Label x={304} y={258}>CFL</Label>
      <line x1="185" y1="196" x2="120" y2="192" stroke={label} strokeWidth="1" />
      <Label x={116} y={196} anchor="end">Talus</Label>
      <line x1="170" y1="244" x2="110" y2="252" stroke={label} strokeWidth="1" />
      <Label x={106} y={256} anchor="end">Calcaneus</Label>
    </svg>
  );
}

function MuscleFiber() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Diagram of muscle structure from muscle to fiber" className="w-full h-auto">
      {/* Whole muscle */}
      <path d="M40 90 Q60 60 130 62 Q190 64 210 92 Q190 120 130 122 Q60 124 40 90 Z" fill={soft} stroke={stroke} strokeWidth="2.5" />
      {/* Tendons */}
      <path d="M40 90 Q24 90 14 84 M40 90 Q24 92 14 98 M210 92 Q226 88 238 84 M210 92 Q226 96 238 100" fill="none" stroke={stroke} strokeWidth="2" />
      {/* Fascicle zoom lines */}
      <line x1="150" y1="112" x2="120" y2="180" stroke={label} strokeWidth="1" strokeDasharray="3 3" />
      <line x1="190" y1="104" x2="330" y2="176" stroke={label} strokeWidth="1" strokeDasharray="3 3" />
      {/* Fascicle cross-section */}
      <ellipse cx="225" cy="216" rx="112" ry="46" fill="var(--ill-bg)" stroke={stroke} strokeWidth="2.5" />
      {/* Fibers inside */}
      {[188, 214, 240, 266].map((x) =>
        [200, 220].map((y) => <circle key={`${x}${y}`} cx={x} cy={y} r="11" fill={soft} stroke={accent} strokeWidth="2" />)
      )}
      <circle cx="152" cy="212" r="11" fill={soft} stroke={accent} strokeWidth="2" />
      <circle cx="298" cy="210" r="11" fill={soft} stroke={accent} strokeWidth="2" />
      {/* Labels */}
      <line x1="120" y1="66" x2="120" y2="36" stroke={label} strokeWidth="1" />
      <Label x={124} y={34}>Muscle belly</Label>
      <line x1="236" y1="86" x2="290" y2="52" stroke={label} strokeWidth="1" />
      <Label x={294} y={50}>Tendon</Label>
      <line x1="240" y1="220" x2="240" y2="278" stroke={label} strokeWidth="1" />
      <Label x={244} y={290}>Muscle fibers within a fascicle</Label>
    </svg>
  );
}

function GaitCycle() {
  const figure = (x: number, phase: number) => {
    // Simple stick figures across the cycle
    const poses = [
      { l1: "M0 44 L-12 78", l2: "M0 44 L14 76", a: "M0 12 L10 34" }, // initial contact
      { l1: "M0 44 L-2 80", l2: "M0 44 L8 72 L2 80", a: "M0 12 L6 36" }, // midstance
      { l1: "M0 44 L-14 74 L-18 80", l2: "M0 44 L12 78", a: "M0 12 L-8 34" }, // push off
      { l1: "M0 44 L-6 70 L-16 74", l2: "M0 44 L10 78", a: "M0 12 L8 34" }, // swing
    ];
    const p = poses[phase];
    return (
      <g transform={`translate(${x} 130)`} stroke={phase === 0 || phase === 1 ? accent : stroke} strokeWidth="3" strokeLinecap="round" fill="none">
        <circle cx="0" cy="0" r="11" fill="var(--ill-bg)" />
        <path d="M0 11 L0 44" />
        <path d={p.a} />
        <path d={p.l1} />
        <path d={p.l2} />
      </g>
    );
  };
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Phases of the gait cycle" className="w-full h-auto">
      <line x1="20" y1="212" x2="380" y2="212" stroke={stroke} strokeWidth="2" />
      {figure(70, 0)}
      {figure(160, 1)}
      {figure(250, 2)}
      {figure(340, 3)}
      <Label x={70} y={236} anchor="middle">Initial contact</Label>
      <Label x={160} y={236} anchor="middle">Midstance</Label>
      <Label x={250} y={236} anchor="middle">Push-off</Label>
      <Label x={340} y={236} anchor="middle">Swing</Label>
      {/* Phase bar */}
      <rect x="40" y="256" width="204" height="10" rx="5" fill={accent} opacity="0.8" />
      <rect x="244" y="256" width="126" height="10" rx="5" fill={soft} stroke={stroke} strokeWidth="1" />
      <Label x={142} y={284} anchor="middle">Stance ~60%</Label>
      <Label x={307} y={284} anchor="middle">Swing ~40%</Label>
    </svg>
  );
}

function NervousSystem() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Diagram of a neuron" className="w-full h-auto">
      {/* Cell body */}
      <path d="M90 130 Q80 100 110 92 Q140 84 152 110 Q168 100 172 122 Q186 128 178 148 Q184 168 162 170 Q150 190 128 178 Q100 184 96 160 Q78 154 90 130 Z" fill={soft} stroke={stroke} strokeWidth="2.5" />
      <circle cx="132" cy="136" r="14" fill="var(--ill-bg)" stroke={stroke} strokeWidth="2" />
      {/* Dendrites */}
      <path d="M92 108 Q70 92 56 96 M104 92 Q96 70 82 62 M150 96 Q152 74 166 66 M88 152 Q64 158 54 172" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      {/* Axon with myelin */}
      <path d="M178 146 Q240 150 300 150" fill="none" stroke={stroke} strokeWidth="2.5" />
      {[196, 226, 256, 286].map((x) => (
        <ellipse key={x} cx={x} cy="150" rx="13" ry="8" fill="var(--ill-bg)" stroke={accent} strokeWidth="2" />
      ))}
      {/* Terminals */}
      <path d="M300 150 Q318 140 332 132 M300 150 Q320 152 336 150 M300 150 Q318 160 332 168" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      {[334, 338, 334].map((x, i) => (
        <circle key={i} cx={x} cy={[130, 150, 170][i]} r="5" fill={accent} />
      ))}
      {/* Labels */}
      <line x1="132" y1="120" x2="132" y2="60" stroke={label} strokeWidth="1" />
      <Label x={136} y={56}>Cell body & nucleus</Label>
      <line x1="240" y1="142" x2="240" y2="104" stroke={label} strokeWidth="1" />
      <Label x={244} y={100}>Myelinated axon</Label>
      <line x1="336" y1="176" x2="320" y2="220" stroke={label} strokeWidth="1" />
      <Label x={316} y={234} anchor="end">Synaptic terminals</Label>
      <line x1="62" y1="94" x2="52" y2="46" stroke={label} strokeWidth="1" />
      <Label x={54} y={40}>Dendrites</Label>
    </svg>
  );
}

function Lungs() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Diagram of the lungs and airways" className="w-full h-auto">
      {/* Trachea */}
      <path d="M192 20 L192 92 M208 20 L208 92" stroke={stroke} strokeWidth="2.5" fill="none" />
      {[30, 44, 58, 72].map((y) => (
        <line key={y} x1="190" y1={y} x2="210" y2={y} stroke={stroke} strokeWidth="1.5" />
      ))}
      {/* Bronchi */}
      <path d="M192 92 Q170 108 152 124 M208 92 Q230 108 248 124" stroke={stroke} strokeWidth="2.5" fill="none" />
      {/* Left lung (viewer right, with cardiac notch) */}
      <path d="M246 112 Q292 106 312 160 Q328 210 310 250 Q290 274 262 264 Q240 254 238 210 Q236 160 246 112 Z" fill={soft} stroke={stroke} strokeWidth="2.5" />
      {/* Right lung */}
      <path d="M154 112 Q108 106 88 160 Q72 210 90 250 Q110 274 138 264 Q160 254 162 210 Q164 160 154 112 Z" fill={soft} stroke={stroke} strokeWidth="2.5" />
      {/* Fissures */}
      <path d="M92 186 Q124 176 158 190 M104 232 Q128 220 156 230" fill="none" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M244 190 Q272 178 308 190" fill="none" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Bronchial tree hints */}
      <path d="M152 124 Q140 150 130 180 M152 124 Q150 160 148 200 M248 124 Q260 150 270 180 M248 124 Q250 160 252 200" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" />
      {/* Diaphragm */}
      <path d="M80 268 Q200 240 320 268" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeDasharray="6 4" />
      {/* Labels */}
      <line x1="200" y1="40" x2="270" y2="36" stroke={label} strokeWidth="1" />
      <Label x={274} y={40}>Trachea</Label>
      <line x1="236" y1="112" x2="300" y2="84" stroke={label} strokeWidth="1" />
      <Label x={304} y={82}>Main bronchus</Label>
      <line x1="120" y1="200" x2="52" y2="200" stroke={label} strokeWidth="1" />
      <Label x={48} y={204} anchor="end">Lobes</Label>
      <line x1="200" y1="250" x2="200" y2="290" stroke={label} strokeWidth="1" />
      <Label x={204} y={294}>Diaphragm</Label>
    </svg>
  );
}

import { EXTRA_ILLUSTRATIONS } from "./illustrations-extra";
import { EXTRA_ILLUSTRATIONS_2 } from "./illustrations-extra2";

export const ILLUSTRATIONS: Record<string, { component: () => React.ReactElement; alt: string }> = {
  ...EXTRA_ILLUSTRATIONS,
  ...EXTRA_ILLUSTRATIONS_2,
  "knee-joint": { component: KneeJoint, alt: "Knee joint anatomy diagram" },
  "shoulder-joint": { component: ShoulderJoint, alt: "Shoulder joint anatomy diagram" },
  spine: { component: Spine, alt: "Spinal column diagram" },
  "ankle-joint": { component: AnkleJoint, alt: "Ankle joint and lateral ligament diagram" },
  "muscle-fiber": { component: MuscleFiber, alt: "Muscle structure diagram" },
  "gait-cycle": { component: GaitCycle, alt: "Gait cycle phases diagram" },
  "nervous-system": { component: NervousSystem, alt: "Neuron structure diagram" },
  lungs: { component: Lungs, alt: "Lungs and airways diagram" },
};

export function Illustration({ name }: { name: string }) {
  const entry = ILLUSTRATIONS[name];
  if (!entry) return null;
  const Cmp = entry.component;
  return <Cmp />;
}
