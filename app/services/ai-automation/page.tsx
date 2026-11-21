import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { automationServices } from "@/lib/content";

export const metadata = pageMetadata(
  "AI Automation & Business Systems",
  "Connect business tools and streamline repetitive workflows with practical AI automation and custom integrations.",
);

const automationFlow = ["NEW ENQUIRY", "AI QUALIFICATION", "CRM", "FOLLOW-UP", "APPOINTMENT", "SALES PIPELINE"];

export default function AutomationPage() {
  return (
    <div id="top" className="site-shell">
      <SiteHeader />
      <main className="service-page">
        <section className="service-hero service-hero--automate">
          <div className="section-inner service-hero-inner">
            <SectionKicker>03 / AUTOMATE · BUSINESS SYSTEMS</SectionKicker>
            <h1>Intelligence that<br /><em>works behind<br />your business.</em></h1>
            <p>Use intelligent systems to streamline repetitive tasks, connect disconnected platforms, and improve the workflows that keep your business moving.</p>
            <Link className="button button--primary" href="/contact?service=AI%20Automation">EXPLORE AI AUTOMATION <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="section section--workflow">
          <div className="section-inner">
            <SectionKicker>CONNECTED ENQUIRY WORKFLOW</SectionKicker>
            <div className="section-heading"><h2>From first message<br /><em>to the sales pipeline.</em></h2><p>Automation should make a useful process more consistent—not add complexity for its own sake.</p></div>
            <ol className="automation-flow">
              {automationFlow.map((step, index) => <li key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < automationFlow.length - 1 ? <i aria-hidden="true">→</i> : null}</li>)}
            </ol>
          </div>
        </section>

        <section className="section section--service-detail">
          <div className="section-inner service-detail-grid">
            <div>
              <SectionKicker>PRACTICAL INTELLIGENCE</SectionKicker>
              <h2>Systems that<br /><em>work behind the scenes.</em></h2>
              <p className="lead-copy">Automate repeatable steps, connect platforms, and give teams a clearer view of what needs attention.</p>
            </div>
            <div className="service-checklist-panel">
              <span className="eyebrow">AUTOMATION CAPABILITIES</span>
              <ul className="service-checklist">
                {automationServices.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="service-cta-band">
          <div><span className="eyebrow">AI AUTOMATION &amp; BUSINESS SYSTEMS</span><h2>Make routine work<br /><em>flow better.</em></h2></div>
          <Link className="button button--primary" href="/contact?service=AI%20Automation">EXPLORE AI AUTOMATION <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
