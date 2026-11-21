import { portfolioProjects } from "@/lib/content";

function xml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  })[character] ?? character);
}

function makePreviewFallback(title: string, category: string, index: number) {
  const palettes = [
    ["#102b36", "#4e8b88", "#d9c5a0"],
    ["#312b3d", "#9d7c9c", "#ead9cf"],
    ["#182c43", "#648aa8", "#d7b77d"],
    ["#2d3731", "#81977b", "#e4d7bd"],
  ];
  const [deep, accent, soft] = palettes[index % palettes.length];
  const safeTitle = xml(title);
  const safeCategory = xml(category);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720">
    <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${deep}"/><stop offset="1" stop-color="#101820"/></linearGradient><linearGradient id="panel" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${accent}" stop-opacity=".9"/><stop offset="1" stop-color="${soft}" stop-opacity=".65"/></linearGradient></defs>
    <rect width="1200" height="720" fill="url(#bg)"/><circle cx="1000" cy="90" r="290" fill="${accent}" opacity=".16"/><circle cx="110" cy="650" r="260" fill="${soft}" opacity=".1"/>
    <rect x="58" y="48" width="1084" height="624" rx="22" fill="#f7f5ef"/><rect x="58" y="48" width="1084" height="54" rx="22" fill="#e8e6df"/><path d="M58 80h1084v22H58z" fill="#e8e6df"/>
    <circle cx="91" cy="75" r="7" fill="#d58b7b"/><circle cx="116" cy="75" r="7" fill="#d7b66e"/><circle cx="141" cy="75" r="7" fill="#80a58c"/><rect x="420" y="65" width="360" height="20" rx="10" fill="#d5d3cc"/>
    <rect x="92" y="137" width="1016" height="480" rx="12" fill="url(#panel)"/>
    <path d="M92 495c160-145 286-130 430-28 126 90 246 65 586-158v308H92z" fill="${deep}" opacity=".6"/>
    <path d="M92 545c185-95 315-78 470 5 180 96 337 16 546-102v169H92z" fill="#101820" opacity=".55"/>
    <text x="145" y="205" fill="#fff" font-family="Arial,sans-serif" font-size="19" font-weight="700" letter-spacing="5">${safeCategory}</text>
    <text x="145" y="300" fill="#fff" font-family="Arial,sans-serif" font-size="58" font-weight="700">${safeTitle}</text>
    <rect x="145" y="344" width="430" height="5" rx="3" fill="#fff" opacity=".75"/><rect x="145" y="374" width="320" height="5" rx="3" fill="#fff" opacity=".45"/>
    <rect x="145" y="420" width="190" height="48" rx="24" fill="#fff"/><text x="240" y="451" text-anchor="middle" fill="${deep}" font-family="Arial,sans-serif" font-size="15" font-weight="700" letter-spacing="2">EXPLORE CONCEPT</text>
    <text x="1060" y="580" text-anchor="end" fill="#fff" opacity=".85" font-family="Arial,sans-serif" font-size="16" letter-spacing="4">SUMMIT LEADS · PORTFOLIO</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function ConceptShowcase() {
  return (
    <div className="portfolio-grid">
      {portfolioProjects.map((project, index) => (
        <article className={`portfolio-card portfolio-card--${(index % 4) + 1}`} key={project.title}>
          <a className="portfolio-preview" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Preview ${project.title}`}>
            <img
              src={`https://image.thum.io/get/width/1200/crop/720/noanimate/${project.url}`}
              data-fallback={makePreviewFallback(project.title, project.category, index)}
              alt={`${project.title} website preview`}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={(event) => {
                const image = event.currentTarget;
                if (image.dataset.fallbackApplied === "true") return;
                image.dataset.fallbackApplied = "true";
                image.src = image.dataset.fallback ?? "";
              }}
            />
            <span className="portfolio-preview-overlay">LIVE CONCEPT PREVIEW ↗</span>
          </a>
          <div className="portfolio-card-top">
            <span className="portfolio-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="eyebrow">{project.category}</span>
            <span className="portfolio-arrow" aria-hidden="true">↗</span>
          </div>
          <div className="portfolio-card-copy">
            <h3>{project.title}</h3>
            <p>{project.detail}</p>
          </div>
          {"journey" in project && project.journey ? (
            <div className="portfolio-journey">
              <span className="portfolio-mini-label">CUSTOMER JOURNEY</span>
              <div className="portfolio-journey-steps">
                {project.journey.map((step, stepIndex) => <span key={step}>{String(stepIndex + 1).padStart(2, "0")} / {step}</span>)}
              </div>
              <div className="portfolio-service-tags">
                {project.services.map((service) => <span key={service}>{service}</span>)}
              </div>
            </div>
          ) : null}
          <div className="portfolio-card-bottom">
            <span>CONCEPT DEMONSTRATION · NOT CLIENT RESULTS</span>
            <a href={project.url} target="_blank" rel="noopener noreferrer">{project.label} <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      ))}
    </div>
  );
}
