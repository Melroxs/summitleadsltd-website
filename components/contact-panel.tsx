import { ContactForm } from "@/components/contact-form";
import { SectionKicker } from "@/components/section-kicker";

export function ContactPanel({ compact = false, initialService }: { compact?: boolean; initialService?: string }) {
  return (
    <section className={`contact-panel${compact ? " contact-panel--compact" : ""}`} id="contact-form">
      <div className="contact-panel-intro">
        <SectionKicker tone="light">LET’S BUILD YOUR NEXT COMPETITIVE ADVANTAGE</SectionKicker>
        <h2>Let’s build your next<br /><em>competitive advantage.</em></h2>
        <p>Tell us what the next stage of growth needs to look like. Whether you’re focused on attracting the right customers, elevating your digital presence, or making daily operations more intelligent, we’ll start with the outcome.</p>
        <div className="contact-shortcuts">
          <a href="https://wa.me/27739081412?text=Hello%20Summit%20Leads%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">OPEN WHATSAPP CHAT <span aria-hidden="true">↗</span></a>
          <a href="mailto:hello@summitleadsltd.com">hello@summitleadsltd.com</a>
        </div>
      </div>
      <ContactForm initialService={initialService} />
    </section>
  );
}
