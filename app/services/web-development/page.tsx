import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { ConceptShowcase } from "@/components/concept-showcase";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { webDevelopmentServices } from "@/lib/content";

export const metadata = pageMetadata(
  "Website & Application Development",
  "Premium websites and custom web applications designed to establish authority, communicate value, and turn attention into action.",
);

const developmentStages = ["DISCOVER", "DESIGN", "DEVELOP", "DEPLOY", "OPTIMISE"];

export default function WebDevelopmentPage() {
  return (
    <div id="top" className="site-shell">
      <SiteHeader />
      <main className="service-page">
        <section className="service-hero service-hero--build">
          <div className="section-inner service-hero-inner">
            <SectionKicker>02 / BUILD · DIGITAL DEVELOPMENT</SectionKicker>
            <h1>Your website should be<br /><em>a powerful digital<br />asset.</em></h1>
            <p>We create premium digital experiences engineered to establish authority, communicate value, and turn attention into action.</p>
            <Link className="button button--primary" href="/contact?service=Website%20Development">LET’S BUILD SOMETHING POWERFUL <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="section section--service-detail">
          <div className="section-inner service-detail-grid">
            <div>
              <SectionKicker>BUILT FOR YOUR NEXT MOVE</SectionKicker>
              <h2>Digital experiences<br /><em>with a clear job.</em></h2>
              <p className="lead-copy">Build the website, application, or business system that helps people understand your offer and take the right next step.</p>
            </div>
            <div className="service-checklist-panel">
              <span className="eyebrow">DEVELOPMENT CAPABILITIES</span>
              <ul className="service-checklist">
                {webDevelopmentServices.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--demos service-demos">
          <div className="section-inner">
            <SectionKicker index="CONCEPT STUDIES">A RANGE OF DIGITAL EXPERIENCES</SectionKicker>
            <div className="section-heading"><h2>Designed around<br /><em>what users need.</em></h2><p>These are illustrative interface concepts for the prototype. They are not completed projects or client work.</p></div>
            <ConceptShowcase />
          </div>
        </section>

        <section className="section section--service-process">
          <div className="section-inner">
            <SectionKicker>OUR DEVELOPMENT APPROACH</SectionKicker>
            <h2 className="service-process-heading">Discover. Design.<br /><em>Develop. Deploy. Optimise.</em></h2>
            <ol className="development-steps">
              {developmentStages.map((stage, index) => <li key={stage}><span>0{index + 1}</span>{stage}{index < developmentStages.length - 1 ? <i aria-hidden="true">→</i> : null}</li>)}
            </ol>
          </div>
        </section>

        <section className="service-cta-band">
          <div><span className="eyebrow">WEBSITE &amp; APPLICATION DEVELOPMENT</span><h2>Let’s build<br /><em>something powerful.</em></h2></div>
          <Link className="button button--primary" href="/contact?service=Website%20Development">LET’S BUILD SOMETHING POWERFUL <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
