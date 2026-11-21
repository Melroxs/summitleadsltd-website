import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { ConceptShowcase } from "@/components/concept-showcase";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { webDevelopmentServices } from "@/lib/content";

export const metadata = pageMetadata(
  "Custom Software & Web Application Development",
  "Summit Leads scopes and develops custom web applications, business websites, CRM systems, customer portals, booking platforms, dashboards and database-backed business tools.",
);

const developmentStages = ["DISCOVER", "ARCHITECT", "DESIGN", "DEVELOP", "TEST & DEPLOY", "SUPPORT"];

export default function WebDevelopmentPage() {
  return (
    <div id="top" className="site-shell">
      <SiteHeader />
      <main className="service-page">
        <section className="service-hero service-hero--build">
          <div className="section-inner service-hero-inner">
            <SectionKicker>02 / BUILD · SOFTWARE DEVELOPMENT</SectionKicker>
            <h1>Software built<br />around the way<br /><em>your business works.</em></h1>
            <p>From high-performing business websites to custom web applications, CRM platforms, customer portals and operational dashboards, we help turn business requirements into useful digital products.</p>
            <Link className="button button--primary" href="/contact?service=Software%20Development">DISCUSS A SOFTWARE PROJECT <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="section section--service-detail">
          <div className="section-inner service-detail-grid">
            <div>
              <SectionKicker>SOFTWARE WITH A CLEAR PURPOSE</SectionKicker>
              <h2>Built for the work<br /><em>you need to get done.</em></h2>
              <p className="lead-copy">When a standard tool does not match your process, a purpose-built website or application can bring the experience, data and workflow together.</p>
              <p>We begin by understanding users, business rules, integrations and operational needs. The technical approach and delivery scope are agreed before development begins.</p>
            </div>
            <div className="service-checklist-panel">
              <span className="eyebrow">SOFTWARE DEVELOPMENT CAPABILITIES</span>
              <ul className="service-checklist">
                {webDevelopmentServices.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--demos service-demos">
          <div className="section-inner">
            <SectionKicker index="SELECTED DEMONSTRATIONS">A RANGE OF DIGITAL EXPERIENCES</SectionKicker>
            <div className="section-heading"><h2>Interfaces and systems<br /><em>designed around users.</em></h2><p>Explore illustrative interface concepts and selected in-house product work. Demonstrations are labelled clearly and should not be mistaken for commissioned client projects.</p></div>
            <ConceptShowcase />
          </div>
        </section>

        <section className="section section--service-process">
          <div className="section-inner">
            <SectionKicker>OUR SOFTWARE DELIVERY APPROACH</SectionKicker>
            <h2 className="service-process-heading">Discover. Architect.<br /><em>Develop. Test. Support.</em></h2>
            <ol className="development-steps">
              {developmentStages.map((stage, index) => <li key={stage}><span>0{index + 1}</span>{stage}{index < developmentStages.length - 1 ? <i aria-hidden="true">→</i> : null}</li>)}
            </ol>
          </div>
        </section>

        <section className="service-cta-band">
          <div><span className="eyebrow">CUSTOM SOFTWARE &amp; WEB APPLICATION DEVELOPMENT</span><h2>Have a workflow<br /><em>worth improving?</em></h2></div>
          <Link className="button button--primary" href="/contact?service=Software%20Development">DISCUSS A SOFTWARE PROJECT <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
