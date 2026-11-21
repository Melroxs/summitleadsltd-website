type BrandWordmarkProps = { className?: string };

export function BrandWordmark({ className = "" }: BrandWordmarkProps) {
  return (
    <svg
      className={`summit-wordmark ${className}`.trim()}
      viewBox="170 60 560 250"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Summit Leads Ltd"
      focusable="false"
    >
      <defs>
        <linearGradient id="summit-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff0b0" />
          <stop offset=".22" stopColor="#e8c765" />
          <stop offset=".48" stopColor="#b98a22" />
          <stop offset=".72" stopColor="#e0b94e" />
          <stop offset="1" stopColor="#80580d" />
        </linearGradient>
        <linearGradient id="summit-silver" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".55" stopColor="#dfe6ee" />
          <stop offset="1" stopColor="#a9b6c6" />
        </linearGradient>
        <filter id="summit-emboss" x="-15%" y="-25%" width="130%" height="165%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.8" result="blur" />
          <feOffset in="blur" dx="0" dy="4" result="shadow" />
          <feComponentTransfer in="shadow" result="shadow-dark">
            <feFuncA type="linear" slope=".85" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="shadow-dark" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g transform="translate(450 185) scale(.66) translate(-450 -185)">
        <g textAnchor="middle" filter="url(#summit-emboss)">
          <text x="450" y="223" fill="#4a3205" stroke="#4a3205" strokeWidth="5" strokeLinejoin="round">
            <tspan fontFamily="'Great Vibes', cursive" fontSize="250">S</tspan>
            <tspan fontFamily="'Pinyon Script', cursive" fontSize="150" dx="-6">ummit</tspan>
          </text>
          <text x="450" y="221" fill="url(#summit-gold)" stroke="#f6df9a" strokeWidth="2" strokeOpacity=".82" paintOrder="stroke fill">
            <tspan fontFamily="'Great Vibes', cursive" fontSize="250">S</tspan>
            <tspan fontFamily="'Pinyon Script', cursive" fontSize="150" dx="-6">ummit</tspan>
          </text>
        </g>
        <path d="M270 236 C370 226 530 226 630 235 C530 232 370 234 270 236Z" fill="url(#summit-gold)" filter="url(#summit-emboss)" />
        <text x="380" y="262" textAnchor="start" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="700" fontSize="32" letterSpacing="3" wordSpacing="10" fill="url(#summit-silver)" stroke="#ffffff" strokeWidth="1.1" paintOrder="stroke fill" filter="url(#summit-emboss)">LEADS LTD</text>
      </g>
    </svg>
  );
}
