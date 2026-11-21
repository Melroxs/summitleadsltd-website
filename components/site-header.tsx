import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Lead generation", href: "/services/lead-generation" },
  { label: "Development", href: "/services/web-development" },
  { label: "AI automation", href: "/services/ai-automation" },
  { label: "Our approach", href: "/#approach" },
  { label: "About", href: "/#about" },
];

function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <Link href={link.href} key={link.href}>{link.label}</Link>
      ))}
      <Link className="nav-cta" href="/contact?service=Lead%20Generation">
        Let’s talk <span aria-hidden="true">↗</span>
      </Link>
    </>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Summit Leads home">
        <Image
          src="/images/summit-leads-logo.png"
          alt="Summit Leads mountain logo"
          width={64}
          height={60}
          className="brand-mark"
          priority
        />
        <span className="brand-wordmark">
          <strong>SUMMIT</strong>
          <span>LEADS LTD</span>
        </span>
      </Link>
      <span className="prototype-badge">NON-PRODUCTION PROTOTYPE</span>
      <nav className="desktop-nav" aria-label="Main navigation"><NavLinks /></nav>
      <details className="mobile-nav">
        <summary aria-label="Open navigation menu">
          <span>Menu</span>
          <span className="menu-glyph" aria-hidden="true"><i /><i /></span>
        </summary>
        <div className="mobile-nav-panel"><NavLinks /></div>
      </details>
    </header>
  );
}
