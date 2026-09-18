/** Third batch of curated educational illustrations (same line-art style). */

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

function InnerEar() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Inner ear and vestibular system diagram" className="w-full h-auto">
      {/* Semicircular canals — three loops */}
      <circle cx="150" cy="110" r="52" fill="none" stroke={accent} strokeWidth="7" opacity="0.9" />
      <ellipse cx="185" cy="130" rx="55" ry="34" fill="none" stroke={accent} strokeWidth="7" opacity="0.55" transform="rotate(35 185 130)" />
      <ellipse cx="160" cy="150" rx="50" ry="30" fill="none" stroke={accent} strokeWidth="7" opacity="0.35" transform="rotate(-30 160 150)" />
      {/* Vestibule */}
      <ellipse cx="215" cy="170" rx="30" ry="24" fill={soft} stroke={stroke} strokeWidth="2.5" />
      {/* Cochlea — spiral */}
      <path d="M255 190 Q300 175 305 205 Q308 230 283 233 Q262 235 262 216 Q263 202 278 203 Q287 204 286 214" fill="none" stroke={stroke} strokeWidth="6" strokeLinecap="round" />
      {/* Nerve */}
      <path d="M242 160 Q290 135 340 128" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      {/* Otolith dots in vestibule */}
      {[205, 215, 225].map((x) => (
        <circle key={x} cx={x} cy={168} r="2.5" fill={stroke} />
      ))}
      <line x1="118" y1="70" x2="70" y2="52" stroke={label} strokeWidth="1" />
      <L x={66} y={48} anchor="end">Semicircular canals</L>
      <L x={66} y={62} anchor="end">(detect rotation)</L>
      <line x1="215" y1="182" x2="190" y2="250" stroke={label} strokeWidth="1" />
      <L x={186} y={264} anchor="end">Vestibule — otoliths</L>
      <L x={186} y={278} anchor="end">(detect linear motion & gravity)</L>
      <line x1="292" y1="215" x2="330" y2="250" stroke={label} strokeWidth="1" />
      <L x={334} y={258}>Cochlea (hearing)</L>
      <line x1="320" y1="129" x2="344" y2="129" stroke={label} strokeWidth="1" />
      <L x={330} y={112}>Vestibulocochlear nerve</L>
    </svg>
  );
}

function FractureTypes() {
  const bone = (x: number, path: React.ReactNode) => (
    <g transform={`translate(${x} 0)`}>
      <path d="M-16 60 Q-24 66 -20 76 L-14 190 Q-12 202 0 202 Q12 202 14 190 L20 76 Q24 66 16 60 Q0 54 -16 60 Z" fill={soft} stroke={stroke} strokeWidth="2.5" />
      {path}
    </g>
  );
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Common fracture types diagram" className="w-full h-auto">
      {bone(70, <path d="M-18 120 L18 128" stroke="var(--danger)" strokeWidth="3" fill="none" />)}
      {bone(170, <path d="M-18 110 L18 150" stroke="var(--danger)" strokeWidth="3" fill="none" />)}
      {bone(270, <path d="M-16 112 L6 124 L-8 134 L16 146" stroke="var(--danger)" strokeWidth="3" fill="none" />)}
      {bone(360, (
        <>
          <path d="M-18 118 L18 122 M-16 140 L16 144 M-2 118 L4 142" stroke="var(--danger)" strokeWidth="3" fill="none" />
        </>
      ))}
      <L x={70} y={232} anchor="middle">Transverse</L>
      <L x={170} y={232} anchor="middle">Oblique</L>
      <L x={270} y={232} anchor="middle">Spiral</L>
      <L x={360} y={232} anchor="middle">Comminuted</L>
      <L x={200} y={270} anchor="middle">Fracture pattern reflects the force applied — bending, angulation, torsion or crushing</L>
      <L x={200} y={36} anchor="middle">Common long-bone fracture patterns</L>
    </svg>
  );
}

function PainPathway() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Pain pathway from tissue to brain diagram" className="w-full h-auto">
      {/* Brain */}
      <path d="M282 60 Q270 34 296 26 Q318 18 336 30 Q358 24 366 44 Q382 52 374 72 Q380 92 360 96 Q346 108 328 100 Q306 110 294 94 Q276 86 282 60 Z" fill={soft} stroke={stroke} strokeWidth="2.5" />
      <path d="M300 50 Q315 42 330 52 M310 74 Q325 64 344 72" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.6" />
      {/* Spinal cord vertical */}
      <path d="M320 104 Q318 160 316 240" fill="none" stroke={stroke} strokeWidth="7" strokeLinecap="round" opacity="0.85" />
      {/* Peripheral nerve from hand */}
      <path d="M60 240 Q140 250 230 246 Q290 244 314 232" fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round" />
      {/* Ascending signal on cord */}
      <path d="M316 228 Q318 170 319 112" fill="none" stroke={accent} strokeWidth="2.5" strokeDasharray="5 5" />
      {/* Hand with stimulus */}
      <circle cx="52" cy="238" r="16" fill="var(--ill-bg)" stroke={stroke} strokeWidth="2.5" />
      <path d="M36 250 L28 262 M46 254 L44 268 M58 252 L62 266" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      {/* Stimulus flash */}
      <path d="M40 218 L48 228 M52 212 L54 224 M64 216 L60 227" stroke="var(--danger)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Descending modulation arrow */}
      <path d="M330 110 Q338 170 330 226" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeDasharray="4 4" />
      <L x={52} y={200} anchor="middle">Tissue signal</L>
      <L x={150} y={272} anchor="middle">Peripheral nerve (danger message)</L>
      <line x1="316" y1="170" x2="252" y2="150" stroke={label} strokeWidth="1" />
      <L x={248} y={146} anchor="end">Spinal cord — signal can be</L>
      <L x={248} y={160} anchor="end">amplified or dampened here</L>
      <L x={330} y={20}>Brain interprets — pain is</L>
      <L x={330} y={34}>produced here, not in tissue</L>
      <line x1="342" y1="180" x2="376" y2="180" stroke={label} strokeWidth="1" />
      <L x={378} y={170}>Descending</L>
      <L x={378} y={184}>modulation</L>
    </svg>
  );
}

function ProstheticLimb() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Transtibial prosthesis components diagram" className="w-full h-auto">
      {/* Residual limb */}
      <path d="M180 30 Q170 34 170 48 L172 92 Q174 108 188 110 Q204 110 206 94 L208 48 Q208 34 198 30 Q189 27 180 30 Z" fill={soft} stroke={stroke} strokeWidth="2.5" />
      {/* Socket */}
      <path d="M166 96 Q164 130 172 138 Q188 148 204 138 Q212 130 210 96" fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round" />
      {/* Pylon */}
      <rect x="182" y="146" width="14" height="76" rx="5" fill="var(--ill-bg)" stroke={stroke} strokeWidth="2.5" />
      {/* Foot */}
      <path d="M176 224 Q172 238 184 242 L248 246 Q260 244 256 234 Q250 226 232 226 Z" fill={soft} stroke={stroke} strokeWidth="2.5" />
      {/* Alignment line */}
      <line x1="189" y1="24" x2="189" y2="260" stroke={label} strokeWidth="1" strokeDasharray="4 4" />
      <line x1="176" y1="60" x2="120" y2="56" stroke={label} strokeWidth="1" />
      <L x={116} y={60} anchor="end">Residual limb</L>
      <line x1="168" y1="118" x2="120" y2="122" stroke={label} strokeWidth="1" />
      <L x={116} y={126} anchor="end">Socket — the critical</L>
      <L x={116} y={140} anchor="end">interface for comfort</L>
      <line x1="198" y1="182" x2="260" y2="178" stroke={label} strokeWidth="1" />
      <L x={264} y={182}>Pylon</L>
      <line x1="240" y1="236" x2="290" y2="220" stroke={label} strokeWidth="1" />
      <L x={294} y={218}>Energy-storing foot</L>
      <L x={200} y={286} anchor="middle">Transtibial (below-knee) prosthesis — alignment affects gait quality</L>
    </svg>
  );
}

export const EXTRA_ILLUSTRATIONS_2: Record<string, { component: () => React.ReactElement; alt: string }> = {
  "inner-ear": { component: InnerEar, alt: "Inner ear and vestibular system diagram" },
  "fracture-types": { component: FractureTypes, alt: "Common fracture types diagram" },
  "pain-pathway": { component: PainPathway, alt: "Pain pathway diagram" },
  prosthesis: { component: ProstheticLimb, alt: "Transtibial prosthesis components diagram" },
};
