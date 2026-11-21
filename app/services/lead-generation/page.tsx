import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { ProcessTimeline } from "@/components/process-timeline";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { leadGenerationServices } from "@/lib/content";

export const metadata = pageMetadata(
  "B2B Lead Generation & Customer Acquisition",
  "Explore Summit Leads' B2B pipeline-building approach: audience strategy, three campaign angles, creative assets, landing pages, lead capture and sales follow-up.",
);

const stages = [
  { number: "01", title: "Define the target market", copy: "Agree the industries, roles, company profile, and location that matter to your business." },
  { number: "02", title: "Identify ideal prospects", copy: "Set practical criteria for organisations and people who fit the offer." },
  { number: "03", title: "Build targeted prospect lists", copy: "Develop focused research lists to support relevant, considered outreach." },
  { number: "04", title: "Develop campaign angles", copy: "Shape distinct messages and creative assets around customer needs, intent and buying triggers." },
  { number: "05", title: "Capture and qualify enquiries", copy: "Connect each campaign to a relevant landing experience and a clear enquiry or booking path." },
  { number: "06", title: "Deliver opportunities into the sales pipeline", copy: "Connect qualified responses to the client’s CRM and follow-up process." },
];

const campaignAngles = [
  {
    number: "01",
    title: "Storm damage response",
    label: "URGENT NEED · EVENT-DRIVEN DEMAND",
    description: "Reach homeowners after wind or hail events with messaging that explains why visible roof condition does not always reveal the full extent of damage, and encourages a professional inspection.",
    images: [
      ["01 · After the storm", "https://raw.githubusercontent.com/Melroxs/NPP-Campaign/main/NPP%20Storm%20damage%20Campaign/Static%20Ads/1x1/01-after-the-storm.png"],
      ["02 · Hidden damage", "https://raw.githubusercontent.com/Melroxs/NPP-Campaign/main/NPP%20Storm%20damage%20Campaign/Static%20Ads/1x1/02-hidden-damage.png"],
      ["03 · Restoration", "https://raw.githubusercontent.com/Melroxs/NPP-Campaign/main/NPP%20Storm%20damage%20Campaign/Static%20Ads/1x1/03-restoration.png"],
    ],
    video: "https://raw.githubusercontent.com/Melroxs/NPP-Campaign/main/NPP%20Storm%20damage%20Campaign/Video/npp_storm_ad_vertical_720p.mp4",
    landing: "https://npp-campaign-showcase.vercel.app/npp/storm-damage/",
  },
  {
    number: "02",
    title: "Preventative roof inspections",
    label: "PROACTIVE NEED · PROPERTY CARE",
    description: "Position an inspection as a practical way for property owners to understand roof condition early, identify developing issues and make informed maintenance decisions before a small concern becomes more costly.",
    images: [
      ["01 · Inspection concept", "https://raw.githubusercontent.com/Melroxs/NPP-Campaign/main/The_NPP_preventative_roof_inspection_campaign_25MB/npp_static_01_1x1.png"],
      ["02 · Roof condition", "https://raw.githubusercontent.com/Melroxs/NPP-Campaign/main/The_NPP_preventative_roof_inspection_campaign_25MB/npp_static_02_1x1.png"],
      ["03 · Protect the home", "https://raw.githubusercontent.com/Melroxs/NPP-Campaign/main/The_NPP_preventative_roof_inspection_campaign_25MB/npp_static_03_1x1.png"],
    ],
    video: "https://raw.githubusercontent.com/Melroxs/NPP-Campaign/main/The_NPP_preventative_roof_inspection_campaign_25MB/npp_preventative_roof_inspection_9x16_720p.mp4",
    landing: "https://npp-campaign-showcase.vercel.app/npp/preventative-roof-inspections/",
  },
  {
    number: "03",
    title: "Roof repairs & maintenance",
    label: "VISIBLE NEED · SERVICE-LED DEMAND",
    description: "Speak to property owners noticing small signs of wear, missing shingles, leaks or other roof concerns, turning a recognisable problem into a relevant service enquiry.",
    images: [
      ["01 · Small warning signs", "https://raw.githubusercontent.com/Melroxs/NPP-Campaign/main/NPP_Repairs___maintenance_Campaign_25MB/npp_static_1_small_signs_square.png"],
      ["02 · Leak inspection", "https://raw.githubusercontent.com/Melroxs/NPP-Campaign/main/NPP_Repairs___maintenance_Campaign_25MB/npp_static_2_leak_inspection_square.png"],
      ["03 · Home protection", "https://raw.githubusercontent.com/Melroxs/NPP-Campaign/main/NPP_Repairs___maintenance_Campaign_25MB/npp_static_3_home_protection_square.png"],
    ],
    video: "https://raw.githubusercontent.com/Melroxs/NPP-Campaign/main/NPP_Repairs___maintenance_Campaign_25MB/npp_roof_repair_15s_9x16_captioned.mp4",
    landing: "https://npp-campaign-showcase.vercel.app/npp/roof-repairs-maintenance/",
  },
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
              <p className="lead-copy">Summit Leads can help plan and build the operational pieces behind customer acquisition—from market definition and prospect research through campaign creative, landing experiences, capture, qualification and follow-up.</p>
              <p>We build a connected process around the audience and offer. Campaigns, targeting and deliverables are scoped to each client’s needs; we do not promise guaranteed leads, appointments or revenue.</p>
            </div>
            <div className="service-checklist-panel">
              <span className="eyebrow">CAPABILITY AREAS</span>
              <ul className="service-checklist">
                {leadGenerationServices.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section npp-campaign-library">
          <div className="section-inner">
            <SectionKicker>CAMPAIGN CASE STUDY / NEW PARADIGM PROJECTS</SectionKicker>
            <div className="section-heading">
              <h2>Three campaign angles.<br /><em>One connected pipeline.</em></h2>
              <p>For NPP Roofing &amp; Restoration, we developed three distinct campaign concepts, each built around a different homeowner need. Each angle has its own message, creative assets and campaign-specific landing journey—showing how audience insight and relevant creative can work together to generate more meaningful enquiries.</p>
            </div>
            <div className="npp-campaign-intro">
              <p><strong>Our approach:</strong> Start with the customer’s situation, build a message that speaks to that need, create visual assets for the campaign, then connect the ad to a relevant landing page and a clear next action.</p>
              <a className="button button--primary" href="https://npp-campaign-showcase.vercel.app/" target="_blank" rel="noopener noreferrer">EXPLORE THE FULL NPP CAMPAIGN <span aria-hidden="true">↗</span></a>
            </div>
            <div className="npp-angle-grid">
              {campaignAngles.map((campaign) => (
                <article className="npp-angle-card" key={campaign.number}>
                  <div className="npp-angle-top"><span>{campaign.number} / 03</span><span>{campaign.label}</span></div>
                  <h3>{campaign.title}</h3>
                  <p>{campaign.description}</p>
                  <div className="npp-angle-assets">
                    {campaign.images.map(([alt, src]) => (
                      <a href={src} target="_blank" rel="noopener noreferrer" key={src} aria-label={`Open creative: ${alt}`}>
                        <img src={src} alt={`NPP ${campaign.title} — ${alt}`} loading="lazy" />
                      </a>
                    ))}
                  </div>
                  <div className="npp-angle-actions">
                    <a href={campaign.video} target="_blank" rel="noopener noreferrer">VIEW CAMPAIGN VIDEO ↗</a>
                    <a href={campaign.landing} target="_blank" rel="noopener noreferrer">VIEW LANDING JOURNEY ↗</a>
                  </div>
                </article>
              ))}
            </div>
            <div className="npp-campaign-disclaimer">Portfolio demonstration: the NPP showcase illustrates campaign concepts, creative assets and simulated customer journeys. Demo forms and booking steps do not submit live enquiries or create real appointments.</div>
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
            <div className="leads-workspace-preview" aria-label="Illustrative local business lead management workspace preview">
              <div className="leads-preview-topbar"><span className="leads-preview-brand"><i /> SUMMIT / LEADS</span><span>WORKSPACE PREVIEW <b>● CONCEPT</b></span></div>
              <div className="leads-preview-body"><aside className="leads-preview-sidebar"><span className="leads-preview-avatar">SL</span><i className="active" /><i /><i /><i /><i /></aside>
                <div className="leads-preview-main"><div className="leads-preview-heading"><div><small>OVERVIEW / PIPELINE</small><strong>Good morning.</strong><p>Your opportunities, in one place.</p></div><span className="leads-preview-date">TODAY ↗</span></div>
                  <div className="leads-preview-stats"><div><small>OPEN ENQUIRIES</small><strong>24</strong><em>Across your pipeline</em></div><div><small>FOLLOW-UPS DUE</small><strong>08</strong><em>Ready for next action</em></div><div><small>NEW THIS WEEK</small><strong>12</strong><em>Recently received</em></div></div>
                  <div className="leads-preview-table"><div className="leads-preview-tablehead"><span>RECENT ENQUIRIES</span><span>STATUS</span><span>NEXT ACTION</span></div>
                    <div><span><b>Sarah Mitchell</b><small>Website enquiry · 09:42</small></span><i className="status-new">NEW</i><span>Review enquiry ↗</span></div>
                    <div><span><b>James Carter</b><small>Facebook campaign · Yesterday</small></span><i className="status-follow">FOLLOW-UP</i><span>Call prospect ↗</span></div>
                    <div><span><b>Olivia Bennett</b><small>Referral · Yesterday</small></span><i className="status-review">IN REVIEW</i><span>Send estimate ↗</span></div></div></div></div>
              <div className="leads-preview-foot"><span>ILLUSTRATIVE INTERFACE · NOT LIVE CUSTOMER DATA</span><span>LEAD FLOW / 01—03</span></div>
            </div>
          </div>
        </section>

        <section className="section section--service-process">
          <div className="section-inner">
            <SectionKicker index="01—06">FROM TARGET MARKET TO SALES PIPELINE</SectionKicker>
            <div className="section-heading"><h2>A clearer path<br /><em>to opportunity.</em></h2><p>Each stage is shaped around the audience, offer and operating process agreed with the client.</p></div>
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
