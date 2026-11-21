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
  "Custom software shaped around real workflows",
  "Connected systems and practical integrations",
  "Customer acquisition and sales enablement",
  "Modern, maintainable web experiences",
  "AI and automation applied with purpose",
  "Clear scope and communication",
  "Ongoing improvement and technical support",
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
            <p className="eyebrow"><span className="status-dot" /> SUMMIT LEADS LTD <i>/</i> BUSINESS GROWTH &amp; TECHNOLOGY</p>
            <h1 id="hero-title">Business growth.<br />Software that works.<br /><em>Technology that connects.</em></h1>
            <p className="hero-description">We help businesses attract customers, build better digital experiences and connect the systems behind their operations. From focused lead generation and sales workflows to custom web applications, CRM platforms, integrations and practical AI automation, we build around the outcomes that move business forward.</p>
            <div className="hero-actions">
              <Link className="button button--primary" href="/contact">Let’s discuss your project <span aria-hidden="true">↗</span></Link>
              <Link className="text-link" href="#capabilities">Explore Our Capabilities <span aria-hidden="true">↓</span></Link>
            </div>
            <div className="hero-signature">
              <span className="signature-mark" aria-hidden="true">S<span>+</span></span>
              <p><strong>A business growth &amp; technology partner.</strong><br />From customer acquisition to connected systems.</p>
            </div>
          </div>
          <div className="hero-visual-caption"><span>01 / 03</span> ATTRACT <i /> BUILD <i /> CONNECT</div>
          <div className="hero-bottomline"><span>GROW YOUR CUSTOMER BASE</span><span>BUILD THE RIGHT SOFTWARE</span><span>CONNECT YOUR SYSTEMS ↓</span></div>
        </section>

        <div className="capability-rail" aria-label="Summit Leads capabilities">
          <span>BUSINESS GROWTH</span><i />
          <span>LEAD GENERATION</span><i />
          <span>SOFTWARE DEVELOPMENT</span><i />
          <span>TECHNOLOGY INTEGRATION</span><i />
          <span>AI AUTOMATION</span>
        </div>

        <section className="section section--intro" id="approach">
          <div className="section-inner">
            <SectionKicker index="01 / APPROACH">GROWTH IS ENGINEERED</SectionKicker>
            <div className="intro-grid">
              <h2>Growth is not<br />an accident.<br /><em>It is engineered.</em></h2>
              <div className="intro-copy">
                <p>Businesses need more than isolated tools. They need the right customers to discover them, a digital experience that earns trust, and technology that helps people do their work well.</p>
                <p>Summit Leads connects customer acquisition, custom software development and practical technology solutions—from websites and business applications to CRM systems, integrations and automation.</p>
                <Link className="inline-link" href="#about">Why Summit Leads <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--capabilities" id="capabilities">
          <div className="section-inner">
            <SectionKicker index="02 / CORE SERVICES">GROWTH, SOFTWARE &amp; TECHNOLOGY</SectionKicker>
            <div className="section-heading">
              <h2>One partner.<br /><em>Three connected capabilities.</em></h2>
              <p>Choose the capability that fits your next move. Connect more of the system as your business evolves.</p>
            </div>
            <ServiceCards />
          </div>
        </section>

        <section className="section section--about" id="software-and-technology">
          <div className="section-inner about-layout">
            <div className="about-statement">
              <SectionKicker index="03 / SOFTWARE &amp; TECHNOLOGY">BUILT AROUND YOUR BUSINESS</SectionKicker>
              <h2>Software that works.<br />Systems that <em>connect.</em></h2>
              <p>When off-the-shelf tools do not fit the way your business operates, we help scope and build the right digital solution. That can mean a customer portal, booking platform, CRM, operational dashboard, custom web application or a set of integrations that bring existing tools together.</p>
              <p>We assess the requirements before recommending an approach, with attention to usability, maintainability, data flows and the infrastructure needed to run the solution.</p>
              <Link className="button button--outline" href="/services/web-development">Explore software development <span aria-hidden="true">↗</span></Link>
            </div>
            <ul className="proof-list">
              <li><span>01</span>Custom web applications &amp; portals<i aria-hidden="true">↗</i></li>
              <li><span>02</span>CRM platforms &amp; business dashboards<i aria-hidden="true">↗</i></li>
              <li><span>03</span>API, database &amp; platform integrations<i aria-hidden="true">↗</i></li>
              <li><span>04</span>Cloud hosting &amp; deployment configuration<i aria-hidden="true">↗</i></li>
              <li><span>05</span>AI workflows &amp; process automation<i aria-hidden="true">↗</i></li>
              <li><span>06</span>Technical assessment &amp; ongoing support<i aria-hidden="true">↗</i></li>
            </ul>
          </div>
        </section>

        <section className="section section--ecosystem" id="system">
          <div className="section-inner">
            <SectionKicker tone="light" index="04 / CONNECTED SYSTEM">ONE CONNECTED SYSTEM. MULTIPLE GROWTH ENGINES.</SectionKicker>
            <div className="ecosystem-heading">
              <div><h2>Visibility to revenue.<br /><em>Connected by design.</em></h2></div>
              <p>Explore how customer acquisition, digital experiences, software, and automation can work as one system instead of separate projects.</p>
            </div>
            <EcosystemExplorer />
          </div>
        </section>

        <section className="section section--demos" id="portfolio">
          <div className="section-inner">
            <SectionKicker index="05 / SELECTED PORTFOLIO">DIGITAL EXPERIENCES BUILT AROUND BUSINESS</SectionKicker>
            <div className="section-heading">
              <h2>From first impression<br /><em>to connected operations.</em></h2>
              <p>Explore selected demonstrations, in-house product work and campaign experiences. The portfolio includes Atlas AI OS, an AI-powered restoration workflow platform, the NPP roofing and restoration campaign, and illustrative website and application concepts. Demonstrations are identified as such and are not presented as commissioned client results.</p>
            </div>
            <ConceptShowcase />
          </div>
        </section>

        <section className="section section--about" id="about">
          <div className="section-inner about-layout">
            <div className="about-statement">
              <SectionKicker index="06 / WHY SUMMIT LEADS">BUSINESS OUTCOMES FIRST</SectionKicker>
              <h2>Commercial thinking<br />before <em>technology.</em></h2>
              <p>More than a website, a campaign, or a software tool. We start with the business outcome, then shape the right strategy, technology and delivery approach around it.</p>
              <Link className="button button--outline" href="/contact">Let’s solve something <span aria-hidden="true">↗</span></Link>
            </div>
            <ul className="proof-list">
              {proofPoints.map((point, index) => <li key={point}><span>0{index + 1}</span>{point}<i aria-hidden="true">↗</i></li>)}
            </ul>
          </div>
        </section>

        <section className="section section--process" id="our-process">
          <div className="section-inner">
            <SectionKicker index="07 / OUR PROCESS">CLEAR THINKING. THOUGHTFUL EXECUTION.</SectionKicker>
            <div className="section-heading">
              <h2>From first question<br /><em>to what comes next.</em></h2>
              <p>We understand the goal, assess the existing environment, agree the right scope, build and test the solution, then support the next stage as your business evolves.</p>
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
