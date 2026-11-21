import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { automationServices } from "@/lib/content";

export const metadata = pageMetadata(
  "Technology Solutions, Integrations & AI Automation",
  "Technology assessment, API and database integrations, cloud hosting and deployment configuration, authentication, business systems and practical AI automation from Summit Leads Ltd.",
);

const technologyFlow = ["ASSESS THE ENVIRONMENT", "MAP SYSTEMS & DATA", "CONNECT PLATFORMS", "AUTOMATE WORKFLOWS", "TEST & DOCUMENT", "SUPPORT & IMPROVE"];

export default function AutomationPage() {
  return (
    <div id="top" className="site-shell">
      <SiteHeader />
      <main className="service-page">
        <section className="service-hero service-hero--automate">
          <div className="section-inner service-hero-inner">
            <SectionKicker>03 / CONNECT · TECHNOLOGY SOLUTIONS</SectionKicker>
            <h1>Make your technology<br /><em>work as one system.</em></h1>
            <p>We help businesses assess their digital environment, connect the platforms they rely on and improve the workflows between them—from API and database integrations to cloud deployment configuration and practical AI automation.</p>
            <Link className="button button--primary" href="/contact?service=Technology%20Solutions%20%26%20Infrastructure">DISCUSS YOUR TECHNOLOGY NEEDS <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="section section--workflow">
          <div className="section-inner">
            <SectionKicker>FROM TECHNICAL ASSESSMENT TO WORKING SYSTEM</SectionKicker>
            <div className="section-heading"><h2>Understand the stack.<br /><em>Connect the moving parts.</em></h2><p>We start with the current environment and the business requirement. Recommendations and migration work are scoped to the systems, access, dependencies and risks involved.</p></div>
            <ol className="automation-flow">
              {technologyFlow.map((step, index) => <li key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < technologyFlow.length - 1 ? <i aria-hidden="true">→</i> : null}</li>)}
            </ol>
          </div>
        </section>

        <section className="section section--service-detail">
          <div className="section-inner service-detail-grid">
            <div>
              <SectionKicker>TECHNOLOGY THAT SERVES THE BUSINESS</SectionKicker>
              <h2>Connect the tools.<br /><em>Improve the workflow.</em></h2>
              <p className="lead-copy">Technology should reduce friction, not create another layer of complexity. We help plan and implement the integrations, infrastructure configuration and automation needed to make business systems work together.</p>
              <p>Every environment is different. Existing platforms, access permissions, data quality, service-provider requirements and operational risk are reviewed before any production change or migration is agreed. Specialist support may be recommended for complex or regulated environments.</p>
            </div>
            <div className="service-checklist-panel">
              <span className="eyebrow">TECHNOLOGY SOLUTIONS CAPABILITIES</span>
              <ul className="service-checklist">
                {automationServices.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="service-cta-band">
          <div><span className="eyebrow">TECHNOLOGY SOLUTIONS, INTEGRATIONS &amp; AI</span><h2>Make your systems<br /><em>work better together.</em></h2></div>
          <Link className="button button--primary" href="/contact?service=Technology%20Solutions%20%26%20Infrastructure">DISCUSS YOUR TECHNOLOGY NEEDS <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
