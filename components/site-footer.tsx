import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand-block">
          <Image src="/logo-images/background-removed-summit-leads-logo.png" alt="Summit Leads logo" width={148} height={130} className="footer-logo" />
          <p>Business growth, software development and connected technology solutions.</p>
        </div>
        <div className="footer-column">
          <span className="eyebrow">CAPABILITIES</span>
          <Link href="/services/lead-generation">Lead generation &amp; sales</Link>
          <Link href="/services/web-development">Software development</Link>
          <Link href="/services/ai-automation">Technology solutions &amp; AI</Link>
        </div>
        <div className="footer-column">
          <span className="eyebrow">EXPLORE</span>
          <Link href="/#portfolio">Portfolio</Link>
          <Link href="/#about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/terms">Terms of service</Link>
        </div>
        <div className="footer-column footer-contact">
          <span className="eyebrow">START A CONVERSATION</span>
          <a href="mailto:hello@summitleadsltd.com">hello@summitleadsltd.com</a>
          <a href="https://wa.me/27739081412?text=Hello%20Summit%20Leads%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">WhatsApp +27 73 908 1412 ↗</a>
          <span>summitleadsltd.com</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} SUMMIT LEADS LTD</span>
        <span>Selected work includes in-house products, campaign experiences and clearly labelled demonstrations.</span>
        <Link href="#top">BACK TO TOP ↑</Link>
      </div>
    </footer>
  );
}
