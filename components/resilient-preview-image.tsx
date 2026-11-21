"use client";

type Props = {
  src: string;
  alt: string;
  fallbackTitle: string;
  fallbackLabel: string;
  index?: number;
  className?: string;
};

function xml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;",
  })[character] ?? character);
}

function makeFallback(title: string, label: string, index: number) {
  const palettes = [["#102b36", "#4e8b88", "#d9c5a0"], ["#312b3d", "#9d7c9c", "#ead9cf"], ["#182c43", "#648aa8", "#d7b77d"], ["#2d3731", "#81977b", "#e4d7bd"]];
  const [deep, accent, soft] = palettes[index % palettes.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${deep}"/><stop offset="1" stop-color="#101820"/></linearGradient><linearGradient id="panel" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${accent}" stop-opacity=".9"/><stop offset="1" stop-color="${soft}" stop-opacity=".65"/></linearGradient></defs><rect width="1200" height="720" fill="url(#bg)"/><circle cx="1000" cy="90" r="290" fill="${accent}" opacity=".16"/><circle cx="110" cy="650" r="260" fill="${soft}" opacity=".1"/><rect x="58" y="48" width="1084" height="624" rx="22" fill="#f7f5ef"/><rect x="58" y="48" width="1084" height="54" rx="22" fill="#e8e6df"/><circle cx="91" cy="75" r="7" fill="#d58b7b"/><circle cx="116" cy="75" r="7" fill="#d7b66e"/><circle cx="141" cy="75" r="7" fill="#80a58c"/><rect x="420" y="65" width="360" height="20" rx="10" fill="#d5d3cc"/><rect x="92" y="137" width="1016" height="480" rx="12" fill="url(#panel)"/><path d="M92 495c160-145 286-130 430-28 126 90 246 65 586-158v308H92z" fill="${deep}" opacity=".6"/><path d="M92 545c185-95 315-78 470 5 180 96 337 16 546-102v169H92z" fill="#101820" opacity=".55"/><text x="145" y="205" fill="#fff" font-family="Arial,sans-serif" font-size="19" font-weight="700" letter-spacing="5">${xml(label)}</text><text x="145" y="300" fill="#fff" font-family="Arial,sans-serif" font-size="58" font-weight="700">${xml(title)}</text><rect x="145" y="344" width="430" height="5" rx="3" fill="#fff" opacity=".75"/><rect x="145" y="374" width="320" height="5" rx="3" fill="#fff" opacity=".45"/><rect x="145" y="420" width="190" height="48" rx="24" fill="#fff"/><text x="240" y="451" text-anchor="middle" fill="${deep}" font-family="Arial,sans-serif" font-size="15" font-weight="700" letter-spacing="2">EXPLORE CONCEPT</text><text x="1060" y="580" text-anchor="end" fill="#fff" opacity=".85" font-family="Arial,sans-serif" font-size="16" letter-spacing="4">SUMMIT LEADS · PORTFOLIO</text></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function ResilientPreviewImage({ src, alt, fallbackTitle, fallbackLabel, index = 0, className }: Props) {
  return <img
    src={src}
    alt={alt}
    className={className}
    loading="lazy"
    decoding="async"
    referrerPolicy="no-referrer"
    onError={(event) => {
      const image = event.currentTarget;
      if (image.dataset.fallbackApplied === "true") return;
      image.dataset.fallbackApplied = "true";
      image.src = makeFallback(fallbackTitle, fallbackLabel, index);
    }}
  />;
}
