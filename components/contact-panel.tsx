import { ContactForm } from "@/components/contact-form";
import { SectionKicker } from "@/components/section-kicker";

export function ContactPanel({ compact = false, initialService }: { compact?: boolean; initialService?: string }) {
  return (
    <section className={`contact-panel${compact ? " contact-panel--compact" : ""}`} id="contact-form">
      <div className="contact-panel-intro">
        <SectionKicker tone="light">LET’S BUILD YOUR NEXT COMPETITIVE ADVANTAGE</SectionKicker>
        <h2>Let’s build your next<br /><em>competitive advantage.</em></h2>
        <p>Tell us what your business needs next. We can help with customer acquisition, custom software development, CRM and business systems, technology integrations, cloud and deployment configuration, or practical AI automation. We start by understanding the outcome and assessing the right scope.</p>
        <div className="contact-shortcuts">
          <a href="https://wa.me/27739081412?text=Hello%20Summit%20Leads%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">OPEN WHATSAPP CHAT <span aria-hidden="true">↗</span></a>
          <a href="mailto:hello@summitleadsltd.com">hello@summitleadsltd.com</a>
        </div>
      </div>
      <ContactForm initialService={initialService} />
    </section>
  );
}
