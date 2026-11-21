export function SummitMotionGraphic() {
  return (
    <div className="hero-motion-graphic" aria-hidden="true">
      <svg viewBox="0 0 600 600" focusable="false">
        <defs>
          <radialGradient id="summit-motion-glow">
            <stop offset="0%" stopColor="var(--aurora-emerald)" stopOpacity=".18" />
            <stop offset="52%" stopColor="var(--aurora-teal)" stopOpacity=".08" />
            <stop offset="100%" stopColor="var(--logo-background)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="summit-motion-trace" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--aurora-teal)" stopOpacity=".12" />
            <stop offset="55%" stopColor="var(--aurora-emerald)" stopOpacity=".9" />
            <stop offset="100%" stopColor="var(--aurora-violet)" stopOpacity=".45" />
          </linearGradient>
        </defs>

        <circle className="motion-halo" cx="300" cy="300" r="238" fill="url(#summit-motion-glow)" />
        <g className="motion-orbit motion-orbit--emerald">
          <ellipse cx="300" cy="300" rx="246" ry="168" fill="none" stroke="var(--aurora-emerald)" strokeOpacity=".4" strokeWidth="1" strokeDasharray="2 11" />
        </g>
        <g className="motion-orbit motion-orbit--violet">
          <ellipse cx="300" cy="300" rx="196" ry="120" fill="none" stroke="var(--aurora-cyan)" strokeOpacity=".3" strokeWidth=".8" transform="rotate(-33 300 300)" />
        </g>
        <ellipse cx="300" cy="300" rx="133" ry="213" fill="none" stroke="var(--aurora-violet)" strokeOpacity=".18" strokeWidth=".7" transform="rotate(54 300 300)" />
        <circle cx="300" cy="300" r="104" fill="none" stroke="var(--aurora-teal)" strokeOpacity=".16" strokeWidth=".7" />

        <path className="motion-trace" pathLength="1" d="M112 404 C174 392 190 331 239 337 C300 344 314 272 360 274 C412 275 433 212 494 186" fill="none" stroke="url(#summit-motion-trace)" strokeWidth="1.8" strokeLinecap="round" />
        <path className="motion-trace motion-trace--secondary" pathLength="1" d="M147 450 C224 423 260 389 297 361 C349 321 380 325 441 292" fill="none" stroke="var(--aurora-cyan)" strokeOpacity=".38" strokeWidth=".8" strokeLinecap="round" />

        <circle className="motion-node motion-node--one" cx="112" cy="404" r="3.5" fill="var(--aurora-emerald)" />
        <circle className="motion-node motion-node--two" cx="239" cy="337" r="3" fill="var(--aurora-cyan)" />
        <circle className="motion-node motion-node--three" cx="360" cy="274" r="4" fill="var(--aurora-teal)" />
        <circle className="motion-node motion-node--four" cx="494" cy="186" r="3" fill="var(--aurora-violet)" />

        <g className="motion-float motion-float--one">
          <circle cx="438" cy="126" r="7" fill="none" stroke="var(--aurora-violet)" strokeOpacity=".7" strokeWidth="1" />
          <circle cx="438" cy="126" r="2" fill="var(--aurora-cyan)" />
        </g>
        <g className="motion-float motion-float--two">
          <circle cx="157" cy="236" r="5" fill="none" stroke="var(--aurora-emerald)" strokeOpacity=".6" strokeWidth="1" />
          <circle cx="157" cy="236" r="1.5" fill="var(--aurora-teal)" />
        </g>

        <path d="M123 470 H477" stroke="var(--aurora-cyan)" strokeOpacity=".2" strokeWidth=".7" />
        <path d="M146 482 H257 M271 482 H350 M365 482 H456" stroke="var(--aurora-emerald)" strokeOpacity=".38" strokeWidth="1" />
        <path d="M161 486 V478 M177 484 V480 M193 486 V478 M209 484 V480 M225 486 V478 M385 486 V478 M401 484 V480 M417 486 V478 M433 484 V480" stroke="var(--aurora-violet)" strokeOpacity=".32" strokeWidth=".7" />
      </svg>
    </div>
  );
}
