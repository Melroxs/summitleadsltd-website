import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand-block">
          <Image src="/images/summit-leads-logo.png" alt="Summit Leads logo" width={132} height={125} className="footer-logo" />
          <p>Building the systems behind ambitious business growth.</p>
        </div>
        <div className="footer-column">
          <span className="eyebrow">CAPABILITIES</span>
          <Link href="/services/lead-generation">Lead generation</Link>
          <Link href="/services/web-development">Website development</Link>
          <Link href="/services/ai-automation">AI automation</Link>
        </div>
        <div className="footer-column">
          <span className="eyebrow">EXPLORE</span>
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy policy <small>draft</small></Link>
          <Link href="/terms">Terms of service <small>draft</small></Link>
        </div>
        <div className="footer-column footer-contact">
          <span className="eyebrow">START A CONVERSATION</span>
          <a href="mailto:hello@summitleadsltd.com">hello@summitleadsltd.com</a>
          <a href="https://wa.me/27739081412" target="_blank" rel="noopener noreferrer">WhatsApp +27 73 908 1412 ↗</a>
          <span>summitleadsltd.com</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} SUMMIT LEADS LTD</span>
        <span>This is a non-production design prototype. It does not replace the live website.</span>
        <Link href="#top">BACK TO TOP ↑</Link>
      </div>
    </footer>
  );
}
