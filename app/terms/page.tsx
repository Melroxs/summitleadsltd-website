import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Terms of Service — Draft",
  "Draft terms-of-service placeholder for the non-production Summit Leads prototype.",
);

export default function TermsPage() {
  return (
    <div id="top" className="site-shell">
      <SiteHeader />
      <main className="policy-page section">
        <div className="section-inner policy-content">
          <SectionKicker>NON-PRODUCTION PROTOTYPE / DRAFT</SectionKicker>
          <h1>Terms of service<br /><em>draft.</em></h1>
          <p className="policy-notice">This page is a design placeholder for review. It is not legal advice and does not create production-ready terms.</p>
          <h2>Service scope</h2>
          <p>Lead-generation, development, automation, timing, deliverables, fees, and support arrangements should be agreed in a written scope before work begins. No guarantee of leads, appointments, revenue, or business results is made by this prototype.</p>
          <h2>Before production</h2>
          <p>Replace this draft with terms reviewed and approved for Summit Leads’ actual contracting, payment, intellectual-property, limitation-of-liability, and jurisdiction requirements.</p>
          <Link className="inline-link" href="/contact">Back to contact <span aria-hidden="true">↗</span></Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
