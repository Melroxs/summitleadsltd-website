import Link from "next/link";
import { SectionKicker } from "@/components/section-kicker";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Privacy Policy — Draft",
  "Draft privacy-policy placeholder for the non-production Summit Leads prototype.",
);

export default function PrivacyPage() {
  return (
    <div id="top" className="site-shell">
      <SiteHeader />
      <main className="policy-page section">
        <div className="section-inner policy-content">
          <SectionKicker>NON-PRODUCTION PROTOTYPE / DRAFT</SectionKicker>
          <h1>Privacy policy<br /><em>draft.</em></h1>
          <p className="policy-notice">This page is a design placeholder for review. It is not legal advice and is not a production-ready privacy policy.</p>
          <h2>Enquiry information</h2>
          <p>The prototype contact form is intended to collect the name, business name, email address, phone number, requested service, optional budget range, and project details needed to respond to an enquiry. Email delivery is disabled until the server-side CHAMPREP integration is configured and tested.</p>
          <h2>Before production</h2>
          <p>Summit Leads should replace this draft with an approved notice that describes the real data controller, lawful basis, purpose, retention period, recipients, data-subject rights, and contact process before enabling public lead capture.</p>
          <Link className="inline-link" href="/contact">Back to contact <span aria-hidden="true">↗</span></Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
