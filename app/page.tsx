import Image from "next/image";
import Link from "next/link";
import { ConceptShowcase } from "@/components/concept-showcase";
import { ContactPanel } from "@/components/contact-panel";
import { EcosystemExplorer } from "@/components/ecosystem-explorer";
import { ProcessTimeline } from "@/components/process-timeline";
import { SectionKicker } from "@/components/section-kicker";
import { ServiceCards } from "@/components/service-cards";
import { SummitMotionGraphic } from "@/components/summit-motion-graphic";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { approachSteps } from "@/lib/content";

const proofPoints = [
  "Commercial thinking before technology",
  "Solutions aligned with business objectives",
  "Integrated digital capabilities",
  "Modern development technologies",
  "Scalable architecture",
  "Practical automation",
  "Clear communication",
  "Long-term digital support",
];

export default function Home() {
  return (
    <div id="top" className="site-shell">
      <SiteHeader />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-image" aria-hidden="true">
            <Image
              src="/manus-storage/summit-northern-lights-globe_4420d71c.webp"
              alt=""
              fill
              priority
              unoptimized
              sizes="(max-width: 800px) 100vw, 58vw"
            />
          </div>
          <div className="hero-grid" aria-hidden="true" />
          <SummitMotionGraphic />
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> SUMMIT LEADS LTD <i>/</i> DIGITAL GROWTH &amp; TECHNOLOGY</p>
            <h1 id="hero-title">Digital growth<br />for ambitious<br /><em>businesses.</em></h1>
            <p className="hero-description">We connect customer acquisition, distinctive digital experiences and intelligent systems—shaped around your commercial ambition and designed to turn attention into opportunity.</p>
            <div className="hero-actions">
              <Link className="button button--primary" href="/contact?service=Lead%20Generation">Let’s discuss your growth <span aria-hidden="true">↗</span></Link>
              <Link className="text-link" href="#capabilities">Explore Our Capabilities <span aria-hidden="true">↓</span></Link>
            </div>
            <div className="hero-signature">
              <span className="signature-mark" aria-hidden="true">S<span>+</span></span>
              <p><strong>A considered digital growth partner.</strong><br />From visibility to revenue.</p>
            </div>
          </div>
          <div className="hero-visual-caption"><span>01 / 03</span> ATTRACT <i /> BUILD <i /> AUTOMATE</div>
          <div className="hero-bottomline"><span>BUILD YOUR PRESENCE</span><span>GENERATE OPPORTUNITIES</span><span>ENGINEER GROWTH ↓</span></div>
        </section>

        <div className="capability-rail" aria-label="Summit Leads capabilities">
          <span>STRATEGY</span><i />
          <span>CUSTOMER ACQUISITION</span><i />
          <span>DIGITAL DEVELOPMENT</span><i />
          <span>AI AUTOMATION</span><i />
          <span>BUSINESS SYSTEMS</span>
        </div>

        <section className="section section--intro" id="approach">
          <div className="section-inner">
            <SectionKicker index="01 / APPROACH">GROWTH IS ENGINEERED</SectionKicker>
            <div className="intro-grid">
              <h2>Growth is not<br />an accident.<br /><em>It is engineered.</em></h2>
              <div className="intro-copy">
                <p>Businesses need more than a website or another marketing campaign. They need connected systems that turn visibility into opportunities, opportunities into customers, and technology into a competitive advantage.</p>
                <p>Summit Leads brings customer acquisition, digital development, and intelligent automation together around what moves your business forward.</p>
                <Link className="inline-link" href="#about">Why Summit Leads <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--capabilities" id="capabilities">
          <div className="section-inner">
            <SectionKicker index="02 / CAPABILITIES">THREE ENGINES. ONE DIRECTION.</SectionKicker>
            <div className="section-heading">
              <h2>One partner.<br /><em>More ways forward.</em></h2>
              <p>Choose the capability that fits your next move. Connect more of the system when you’re ready.</p>
            </div>
            <ServiceCards />
          </div>
        </section>

        <section className="section section--ecosystem" id="system">
          <div className="section-inner">
            <SectionKicker tone="light" index="03 / CONNECTED SYSTEM">ONE CONNECTED SYSTEM. MULTIPLE GROWTH ENGINES.</SectionKicker>
            <div className="ecosystem-heading">
              <div><h2>Visibility to revenue.<br /><em>Connected by design.</em></h2></div>
              <p>Explore how customer acquisition, digital experiences, and automation can work as one system instead of separate projects.</p>
            </div>
            <EcosystemExplorer />
          </div>
        </section>

        <section className="section section--demos" id="portfolio">
          <div className="section-inner">
            <SectionKicker index="04 / SELECTED PORTFOLIO">DIGITAL EXPERIENCES BUILT AROUND BUSINESS</SectionKicker>
            <div className="section-heading">
              <h2>From first impression<br /><em>to customer journey.</em></h2>
              <p>Explore selected website concepts and customer journeys across hospitality, professional services, construction, beauty and lead generation. These are demonstrations of capability, not claims of commissioned client work.</p>
            </div>
            <ConceptShowcase />
          </div>
        </section>

        <section className="section section--about" id="about">
          <div className="section-inner about-layout">
            <div className="about-statement">
              <SectionKicker index="05 / WHY SUMMIT LEADS">BUILT AROUND WHAT MOVES BUSINESS FORWARD</SectionKicker>
              <h2>Commercial thinking<br />before <em>technology.</em></h2>
              <p>More than a website, a campaign, or a software tool. The work starts with the business outcome, then connects the right strategy, technology, and execution to reach it.</p>
              <Link className="button button--outline" href="/contact">Let’s solve something <span aria-hidden="true">↗</span></Link>
            </div>
            <ul className="proof-list">
              {proofPoints.map((point, index) => <li key={point}><span>0{index + 1}</span>{point}<i aria-hidden="true">↗</i></li>)}
            </ul>
          </div>
        </section>

        <section className="section section--process" id="our-process">
          <div className="section-inner">
            <SectionKicker index="06 / OUR PROCESS">CLEAR THINKING. THOUGHTFUL EXECUTION.</SectionKicker>
            <div className="section-heading">
              <h2>From first question<br /><em>to what comes next.</em></h2>
              <p>Good work starts with listening. Then we make a plan, get moving, and keep improving it.</p>
            </div>
            <ProcessTimeline items={approachSteps} />
          </div>
        </section>

        <ContactPanel />
      </main>
      <SiteFooter />
    </div>
  );
}
