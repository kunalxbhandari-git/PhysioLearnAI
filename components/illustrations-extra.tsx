/**
 * Additional curated educational illustrations (same line-art style as
 * illustrations.tsx). Registered into the shared ILLUSTRATIONS registry.
 */

const stroke = "var(--ill-stroke)";
const accent = "var(--ill-accent)";
const soft = "var(--ill-soft)";
const label = "var(--ill-label)";

function L({ x, y, children, anchor = "start" }: { x: number; y: number; children: string; anchor?: "start" | "middle" | "end" }) {
  return (
    <text x={x} y={y} fontSize="11" fill={label} textAnchor={anchor} fontFamily="inherit">
      {children}
    </text>
  );
}

function RotatorCuff() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Rotator cuff muscles diagram" className="w-full h-auto">
      {/* Scapula posterior view */}
      <path d="M150 60 Q120 70 110 110 Q100 160 120 210 Q140 245 175 240 Q195 200 200 150 Q203 100 190 68 Q170 55 150 60 Z" fill={soft} stroke={stroke} strokeWidth="2.5" />
      {/* Spine of scapula */}
      <path d="M112 108 Q160 96 205 100" fill="none" stroke={stroke} strokeWidth="2.5" />
      {/* Humeral head + shaft */}
      <circle cx="238" cy="118" r="26" fill="var(--ill-bg)" stroke={stroke} strokeWidth="2.5" />
      <path d="M230 142 Q226 190 228 250 M254 138 Q262 190 258 250" fill="none" stroke={stroke} strokeWidth="2.5" />
      {/* Supraspinatus (above spine) */}
      <path d="M126 92 Q165 78 212 100" fill="none" stroke={accent} strokeWidth="6" strokeLinecap="round" />
      {/* Infraspinatus */}
      <path d="M130 150 Q180 130 218 122" fill="none" stroke={accent} strokeWidth="5" strokeLinecap="round" opacity="0.8" />
      {/* Teres minor */}
      <path d="M150 200 Q195 160 222 134" fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      <L x={60} y={80}>Supraspinatus</L>
      <line x1="118" y1="86" x2="128" y2="90" stroke={label} strokeWidth="1" />
      <L x={52} y={152}>Infraspinatus</L>
      <line x1="116" y1="148" x2="128" y2="150" stroke={label} strokeWidth="1" />
      <L x={70} y={214}>Teres minor</L>
      <line x1="134" y1="208" x2="148" y2="202" stroke={label} strokeWidth="1" />
      <line x1="262" y1="108" x2="320" y2="90" stroke={label} strokeWidth="1" />
      <L x={324} y={88}>Humeral head</L>
      <L x={310} y={258}>Subscapularis lies on the</L>
      <L x={310} y={272}>front surface (hidden)</L>
    </svg>
  );
}

function DiscHerniation() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Intervertebral disc herniation diagram" className="w-full h-auto">
      {/* Vertebra above */}
      <rect x="110" y="40" width="150" height="52" rx="10" fill={soft} stroke={stroke} strokeWidth="2.5" />
      {/* Vertebra below */}
      <rect x="110" y="170" width="150" height="52" rx="10" fill={soft} stroke={stroke} strokeWidth="2.5" />
      {/* Healthy disc annulus */}
      <ellipse cx="185" cy="131" rx="80" ry="34" fill="var(--ill-bg)" stroke={stroke} strokeWidth="2.5" />
      <ellipse cx="185" cy="131" rx="52" ry="21" fill="none" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Nucleus bulging posteriorly */}
      <path d="M228 120 Q276 118 284 132 Q276 146 230 143 Q244 131 228 120 Z" fill={accent} opacity="0.85" stroke={stroke} strokeWidth="1.5" />
      {/* Nerve root */}
      <path d="M292 88 Q290 130 296 176 Q300 210 296 240" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      {/* Compression flash */}
      <path d="M284 128 L296 132 M284 138 L295 140" stroke="var(--danger)" strokeWidth="2" strokeLinecap="round" />
      <L x={60} y={68}>Vertebral body</L>
      <line x1="106" y1="64" x2="120" y2="62" stroke={label} strokeWidth="1" />
      <L x={48} y={134}>Annulus fibrosus</L>
      <line x1="104" y1="130" x2="118" y2="130" stroke={label} strokeWidth="1" />
      <L x={140} y={135} anchor="middle">Nucleus</L>
      <line x1="252" y1="112" x2="268" y2="72" stroke={label} strokeWidth="1" />
      <L x={272} y={66}>Herniated nucleus</L>
      <line x1="300" y1="200" x2="330" y2="200" stroke={label} strokeWidth="1" />
      <L x={334} y={204}>Nerve root</L>
    </svg>
  );
}

function LigamentGrades() {
  const strand = (x: number, broken: 0 | 1 | 2) => (
    <g transform={`translate(${x} 0)`}>
      <rect x="-28" y="60" width="56" height="26" rx="8" fill={soft} stroke={stroke} strokeWidth="2" />
      <rect x="-28" y="188" width="56" height="26" rx="8" fill={soft} stroke={stroke} strokeWidth="2" />
      {broken === 0 && (
        <>
          <path d="M-14 86 Q-16 136 -14 188 M0 86 Q2 136 0 188 M14 86 Q12 136 14 188" fill="none" stroke={accent} strokeWidth="3.5" strokeLinecap="round" />
        </>
      )}
      {broken === 1 && (
        <>
          <path d="M-14 86 Q-18 136 -14 188 M14 86 Q18 136 14 188" fill="none" stroke={accent} strokeWidth="3.5" strokeLinecap="round" />
          <path d="M0 86 Q3 108 -1 124 M1 150 Q-2 168 0 188" fill="none" stroke="var(--danger)" strokeWidth="3" strokeLinecap="round" />
        </>
      )}
      {broken === 2 && (
        <>
          <path d="M-14 86 Q-20 104 -12 122 M-2 86 Q2 102 -4 118 M12 86 Q16 106 10 120" fill="none" stroke="var(--danger)" strokeWidth="3" strokeLinecap="round" />
          <path d="M-12 188 Q-18 168 -10 154 M2 188 Q-2 170 4 156 M14 188 Q18 166 12 152" fill="none" stroke="var(--danger)" strokeWidth="3" strokeLinecap="round" />
        </>
      )}
    </g>
  );
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Ligament sprain grades diagram" className="w-full h-auto">
      {strand(80, 0)}
      {strand(200, 1)}
      {strand(320, 2)}
      <L x={80} y={246} anchor="middle">Grade I</L>
      <L x={80} y={262} anchor="middle">Stretch, fibres intact</L>
      <L x={200} y={246} anchor="middle">Grade II</L>
      <L x={200} y={262} anchor="middle">Partial tear</L>
      <L x={320} y={246} anchor="middle">Grade III</L>
      <L x={320} y={262} anchor="middle">Complete rupture</L>
      <L x={200} y={30} anchor="middle">Ligament between two bones</L>
    </svg>
  );
}

function Goniometer() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Goniometer measuring knee range of motion" className="w-full h-auto">
      {/* Thigh segment */}
      <path d="M60 120 L210 120 L210 150 L60 150 Z" rx="14" fill={soft} stroke={stroke} strokeWidth="2.5" />
      {/* Shank segment rotated */}
      <g transform="rotate(46 218 138)">
        <rect x="212" y="122" width="150" height="30" rx="12" fill={soft} stroke={stroke} strokeWidth="2.5" />
      </g>
      {/* Goniometer body */}
      <circle cx="218" cy="138" r="34" fill="var(--ill-bg)" stroke={accent} strokeWidth="2.5" />
      <circle cx="218" cy="138" r="4" fill={accent} />
      {/* Protractor ticks */}
      {[0, 30, 60, 90, 120, 150, 180].map((a) => {
        const rad = ((a - 180) * Math.PI) / 180;
        const x1 = 218 + 28 * Math.cos(rad);
        const y1 = 138 + 28 * Math.sin(rad);
        const x2 = 218 + 33 * Math.cos(rad);
        const y2 = 138 + 33 * Math.sin(rad);
        return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth="1.5" />;
      })}
      {/* Stationary arm */}
      <line x1="218" y1="138" x2="110" y2="138" stroke={accent} strokeWidth="3.5" strokeLinecap="round" />
      {/* Moving arm */}
      <line x1="218" y1="138" x2="292" y2="214" stroke={accent} strokeWidth="3.5" strokeLinecap="round" />
      {/* Angle arc */}
      <path d="M186 138 A32 32 0 0 0 240 161" fill="none" stroke="var(--danger)" strokeWidth="2" strokeDasharray="4 3" />
      <L x={150} y={110}>Stationary arm on femur</L>
      <L x={296} y={232}>Moving arm on tibia</L>
      <line x1="218" y1="104" x2="218" y2="70" stroke={label} strokeWidth="1" />
      <L x={222} y={64}>Axis over lateral joint line</L>
      <L x={176} y={176}>~45° flexion</L>
    </svg>
  );
}

function ResistanceBand() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Resistance band external rotation exercise" className="w-full h-auto">
      {/* Figure: side of trunk */}
      <circle cx="150" cy="66" r="20" fill="var(--ill-bg)" stroke={stroke} strokeWidth="2.5" />
      <path d="M150 86 L150 190 M150 190 L128 258 M150 190 L172 258" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      {/* Upper arm pinned to side, elbow at 90 */}
      <path d="M150 112 L156 158" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      {/* Forearm start position (dashed) */}
      <path d="M156 158 L206 162" stroke={label} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 4" />
      {/* Forearm rotated outward */}
      <path d="M156 158 L226 128" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      <circle cx="230" cy="126" r="6" fill={accent} />
      {/* Band anchored at right */}
      <path d="M232 128 Q290 140 340 150" fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round" />
      <rect x="338" y="120" width="10" height="60" rx="3" fill={soft} stroke={stroke} strokeWidth="2" />
      {/* Motion arrow */}
      <path d="M212 166 Q232 156 238 138" fill="none" stroke="var(--danger)" strokeWidth="2" strokeLinecap="round" />
      <path d="M234 146 L238 136 L228 138" fill="none" stroke="var(--danger)" strokeWidth="2" strokeLinecap="round" />
      <L x={60} y={150}>Elbow at 90°,</L>
      <L x={60} y={164}>towel roll optional</L>
      <line x1="128" y1="152" x2="146" y2="146" stroke={label} strokeWidth="1" />
      <L x={286} y={110}>Rotate out against band</L>
      <L x={330} y={200}>Anchor</L>
    </svg>
  );
}

function HeartDiagram() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Heart and circulation diagram" className="w-full h-auto">
      {/* Heart outline */}
      <path d="M200 250 Q120 195 108 140 Q100 96 136 82 Q168 70 196 100 Q222 68 258 80 Q296 94 288 142 Q276 200 200 250 Z" fill={soft} stroke={stroke} strokeWidth="2.5" />
      {/* Septum */}
      <path d="M198 102 Q200 170 200 240" fill="none" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Chambers hints */}
      <path d="M132 128 Q166 132 194 128 M206 126 Q244 122 278 130" fill="none" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Aorta */}
      <path d="M212 92 Q214 56 196 44 Q216 28 240 40 Q262 50 258 76" fill="none" stroke={accent} strokeWidth="6" strokeLinecap="round" />
      {/* Pulse line across */}
      <path d="M40 260 H130 l10 0 6-18 8 34 7-26 5 10 12 0 H360" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      <L x={92} y={112}>Right side:</L>
      <L x={92} y={126}>to the lungs</L>
      <line x1="140" y1="118" x2="156" y2="120" stroke={label} strokeWidth="1" />
      <L x={306} y={112}>Left side:</L>
      <L x={306} y={126}>to the body</L>
      <line x1="302" y1="118" x2="272" y2="124" stroke={label} strokeWidth="1" />
      <line x1="238" y1="38" x2="290" y2="34" stroke={label} strokeWidth="1" />
      <L x={294} y={38}>Aorta</L>
    </svg>
  );
}

function BrainDiagram() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Brain with middle cerebral artery territory" className="w-full h-auto">
      {/* Brain outline (lateral) */}
      <path d="M96 168 Q80 120 116 88 Q150 58 210 56 Q276 54 308 92 Q334 124 320 160 Q336 176 322 192 Q306 208 280 204 Q262 226 228 222 Q210 236 186 228 Q160 238 140 220 Q108 214 100 190 Q92 180 96 168 Z" fill={soft} stroke={stroke} strokeWidth="2.5" />
      {/* Sulci hints */}
      <path d="M150 92 Q168 108 158 130 M204 76 Q214 100 202 124 M256 78 Q262 104 250 126 M290 104 Q290 130 274 148" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.6" />
      {/* Lateral fissure */}
      <path d="M136 168 Q190 148 244 152" fill="none" stroke={stroke} strokeWidth="2" />
      {/* MCA territory highlight */}
      <ellipse cx="212" cy="150" rx="74" ry="46" fill={accent} opacity="0.22" />
      <path d="M148 172 Q166 150 190 146 M190 146 Q214 128 238 132 M190 146 Q212 156 236 166" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      {/* Cerebellum + brainstem */}
      <path d="M282 206 Q310 214 306 234 Q288 252 258 242 Q246 230 254 218" fill={soft} stroke={stroke} strokeWidth="2" />
      <path d="M236 226 Q234 252 240 272" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      <line x1="212" y1="150" x2="140" y2="60" stroke={label} strokeWidth="1" />
      <L x={64} y={54}>Middle cerebral artery</L>
      <L x={64} y={68}>territory (most strokes)</L>
      <line x1="292" y1="228" x2="336" y2="240" stroke={label} strokeWidth="1" />
      <L x={340} y={244}>Cerebellum</L>
    </svg>
  );
}

function WalkingAids() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Walking aid height fitting diagram" className="w-full h-auto">
      {/* Person */}
      <circle cx="150" cy="52" r="18" fill="var(--ill-bg)" stroke={stroke} strokeWidth="2.5" />
      <path d="M150 70 L150 170 M150 170 L132 262 M150 170 L168 262" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      {/* Arm slightly bent holding cane */}
      <path d="M150 96 L192 132 L204 158" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      {/* Cane */}
      <path d="M204 160 L204 262" stroke={accent} strokeWidth="4.5" strokeLinecap="round" />
      <path d="M196 158 Q204 150 212 158" fill="none" stroke={accent} strokeWidth="4.5" strokeLinecap="round" />
      {/* Wrist crease line */}
      <line x1="204" y1="158" x2="290" y2="158" stroke={label} strokeWidth="1" strokeDasharray="4 3" />
      <L x={294} y={154}>Handle at wrist crease</L>
      <L x={294} y={168}>with arm relaxed</L>
      {/* Elbow angle */}
      <path d="M186 128 A22 22 0 0 1 200 148" fill="none" stroke="var(--danger)" strokeWidth="2" strokeDasharray="3 3" />
      <L x={230} y={120}>Elbow ~20–30° bend</L>
      <line x1="226" y1="124" x2="204" y2="134" stroke={label} strokeWidth="1" />
      {/* Ground */}
      <line x1="60" y1="264" x2="360" y2="264" stroke={stroke} strokeWidth="2" />
      <L x={70} y={286}>Cane held on the side opposite the painful leg</L>
    </svg>
  );
}

export const EXTRA_ILLUSTRATIONS: Record<string, { component: () => React.ReactElement; alt: string }> = {
  "rotator-cuff": { component: RotatorCuff, alt: "Rotator cuff muscles diagram" },
  "disc-herniation": { component: DiscHerniation, alt: "Disc herniation diagram" },
  "ligament-grades": { component: LigamentGrades, alt: "Ligament sprain grades diagram" },
  goniometer: { component: Goniometer, alt: "Goniometer range of motion measurement diagram" },
  "resistance-band": { component: ResistanceBand, alt: "Resistance band exercise diagram" },
  heart: { component: HeartDiagram, alt: "Heart and circulation diagram" },
  brain: { component: BrainDiagram, alt: "Brain with MCA territory diagram" },
  "walking-aids": { component: WalkingAids, alt: "Walking aid fitting diagram" },
};
