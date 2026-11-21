import { conceptDemos } from "@/lib/content";

function DemoWindow({ index }: { index: number }) {
  return (
    <div className={`demo-window demo-window--${index + 1}`} aria-hidden="true">
      <div className="demo-window-bar"><span /><span /><span /><i>CONCEPT / 0{index + 1}</i></div>
      <div className="demo-window-content">
        {index === 0 ? <>
          <div className="demo-nav-line" />
          <div className="demo-hero-line demo-hero-line--long" />
          <div className="demo-hero-line demo-hero-line--short" />
          <div className="demo-action" />
          <div className="demo-side-orb" />
        </> : index === 1 ? <>
          <div className="demo-calendar-head" />
          <div className="demo-calendar-grid">{Array.from({ length: 12 }, (_, cell) => <span key={cell} />)}</div>
        </> : index === 2 ? <>
          <div className="demo-product-row"><span /><span /><span /></div>
          <div className="demo-product-lines"><i /><i /><i /></div>
        </> : index === 3 ? <>
          <div className="demo-metric-row"><span /><span /><span /></div>
          <div className="demo-chart"><i /><i /><i /><i /><i /><i /><i /></div>
        </> : <>
          <div className="demo-portal-nav" />
          <div className="demo-portal-card"><i /><i /><i /></div>
          <div className="demo-portal-card demo-portal-card--small" />
        </>}
      </div>
    </div>
  );
}

export function ConceptShowcase() {
  return (
    <div className="concept-grid">
      {conceptDemos.map((demo, index) => (
        <article className={`concept-card concept-card--${index + 1}`} key={demo.title}>
          <DemoWindow index={index} />
          <div className="concept-meta">
            <div><span className="eyebrow">{demo.category}</span><h3>{demo.title}</h3></div>
            <span className="concept-label">CONCEPT DEMO</span>
          </div>
          <p>{demo.detail} <strong>Conceptual demonstration — not client work.</strong></p>
        </article>
      ))}
    </div>
  );
}
