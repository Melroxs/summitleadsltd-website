import { portfolioProjects } from "@/lib/content";

export function ConceptShowcase() {
  return (
    <div className="portfolio-grid">
      {portfolioProjects.map((project, index) => (
        <article className={`portfolio-card portfolio-card--${(index % 4) + 1}`} key={project.title}>
          <div className="portfolio-card-top">
            <span className="portfolio-index">0{index + 1}</span>
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
