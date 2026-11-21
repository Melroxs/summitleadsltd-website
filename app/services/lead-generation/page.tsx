import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { ProcessTimeline } from "@/components/process-timeline";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { leadGenerationServices } from "@/lib/content";

export const metadata = pageMetadata(
  "B2B Lead Generation & Customer Acquisition",
  "Find the right prospects, build focused outreach and turn customer interest into a structured sales pipeline.",
);

const stages = [
  { number: "01", title: "Define the target market", copy: "Agree the industries, roles, company profile, and location that matter to your business." },
  { number: "02", title: "Identify ideal prospects", copy: "Set practical criteria for organisations and people who fit the offer." },
  { number: "03", title: "Build targeted prospect lists", copy: "Develop focused research lists to support relevant, considered outreach." },
  { number: "04", title: "Initiate outreach", copy: "Prepare outreach infrastructure and campaign messaging around the agreed audience." },
  { number: "05", title: "Capture and qualify enquiries", copy: "Create a clear way to collect interest and understand fit before handoff." },
  { number: "06", title: "Deliver opportunities into the sales pipeline", copy: "Connect qualified responses to the client’s CRM and follow-up process." },
];

export default function LeadGenerationPage() {
  return (
    <div id="top" className="site-shell">
      <SiteHeader />
      <main className="service-page">
        <section className="service-hero service-hero--lead">
          <div className="section-inner service-hero-inner">
            <SectionKicker>01 / ATTRACT · CUSTOMER ACQUISITION</SectionKicker>
            <h1>More than leads.<br /><em>Real business<br />opportunities.</em></h1>
            <p>We identify the businesses and decision-makers worth reaching, build focused prospect lists and create a clear route from first contact to qualified sales opportunity.</p>
            <Link className="button button--primary" href="/contact?service=Lead%20Generation">BUILD YOUR CUSTOMER PIPELINE <span aria-hidden="true">↗</span></Link>
            <span className="service-hero-footnote">Scoped around your market, audience, and goals.</span>
          </div>
        </section>

        <section className="section section--service-detail">
          <div className="section-inner service-detail-grid">
            <div>
              <SectionKicker>THE ACQUISITION SYSTEM</SectionKicker>
              <h2>Build a pipeline<br /><em>with intention.</em></h2>
              <p className="lead-copy">Summit Leads can help plan and build the operational pieces behind customer acquisition—from prospect research through capture, qualification, and follow-up.</p>
              <p>Campaigns, targeting, and deliverables are scoped to each client’s needs. We do not promise guaranteed leads, appointments, or revenue.</p>
            </div>
            <div className="service-checklist-panel">
              <span className="eyebrow">CAPABILITY AREAS</span>
              <ul className="service-checklist">
                {leadGenerationServices.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--service-detail npp-campaign-feature">
          <div className="section-inner service-detail-grid">
            <div>
              <SectionKicker>CAMPAIGN SHOWCASE / NPP</SectionKicker>
              <h2>See lead generation<br /><em>in the real world.</em></h2>
              <p className="lead-copy">Explore the NPP Roofing &amp; Restoration campaign journey: from choosing a service need to submitting an enquiry and moving towards an inspection. It demonstrates how a focused campaign can connect the customer journey with lead capture and follow-up.</p>
              <a className="button button--primary" href="https://npp-campaign-showcase.vercel.app/" target="_blank" rel="noopener noreferrer">VIEW THE NPP CAMPAIGN <span aria-hidden="true">↗</span></a>
            </div>
            <a className="npp-campaign-preview" href="https://npp-campaign-showcase.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Open NPP campaign showcase">
              <img src="https://image.thum.io/get/width/1400/crop/850/noanimate/https://npp-campaign-showcase.vercel.app/" alt="NPP Roofing and Restoration lead generation campaign preview" loading="lazy" />
              <span>OPEN CAMPAIGN SHOWCASE ↗</span>
            </a>
          </div>
        </section>

                <section className="section section--service-detail leads-workspace-feature">
          <div className="section-inner service-detail-grid">
            <div>
              <SectionKicker>LEAD WORKSPACE / LOCAL BUSINESS</SectionKicker>
              <h2>From new enquiry<br /><em>to next action.</em></h2>
              <p className="lead-copy">See a practical lead-management experience for local businesses. The showcase demonstrates how prospect and enquiry information can be brought into one workspace, making it easier to review opportunities and keep follow-up moving.</p>
              <a className="button button--primary" href="https://summit-local-beauty-demos.vercel.app/leads" target="_blank" rel="noopener noreferrer">EXPLORE THE LEADS WORKSPACE <span aria-hidden="true">↗</span></a>
            </div>
            <a className="leads-workspace-preview" href="https://summit-local-beauty-demos.vercel.app/leads" target="_blank" rel="noopener noreferrer" aria-label="Open the local business leads workspace">
              <img src="https://image.thum.io/get/width/1400/crop/850/noanimate/https://summit-local-beauty-demos.vercel.app/leads" alt="Local business leads workspace preview" loading="lazy" />
              <span>OPEN LEADS WORKSPACE ↗</span>
            </a>
          </div>
        </section>

<section className="section section--service-process">
          <div className="section-inner">
            <SectionKicker index="01—06">FROM TARGET MARKET TO SALES PIPELINE</SectionKicker>
            <div className="section-heading"><h2>A clearer path<br /><em>to opportunity.</em></h2><p>Each stage is shaped around the audience, offer, and operating process agreed with the client.</p></div>
            <ProcessTimeline items={stages} />
          </div>
        </section>

        <section className="service-cta-band">
          <div><span className="eyebrow">LEAD GENERATION &amp; CUSTOMER ACQUISITION</span><h2>Make the next<br /><em>conversation count.</em></h2></div>
          <Link className="button button--primary" href="/contact?service=Lead%20Generation">BUILD YOUR CUSTOMER PIPELINE <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
