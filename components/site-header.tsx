import Link from "next/link";
import { BrandWordmark } from "@/components/brand-wordmark";

const links = [
  { label: "Lead generation", href: "/services/lead-generation" },
  { label: "Software development", href: "/services/web-development" },
  { label: "Technology solutions", href: "/services/ai-automation" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/#about" },
];

function NavLinks() {
  return (
    <>
      {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
      <Link className="nav-cta" href="/contact">Let’s talk <span aria-hidden="true">↗</span></Link>
    </>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Summit Leads home">
        <BrandWordmark className="brand-wordmark" />
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation"><NavLinks /></nav>
      <details className="mobile-nav">
        <summary aria-label="Open navigation menu"><span>Menu</span><span className="menu-glyph" aria-hidden="true"><i /><i /></span></summary>
        <div className="mobile-nav-panel"><NavLinks /></div>
      </details>
    </header>
  );
}
