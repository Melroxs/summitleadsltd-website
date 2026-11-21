import { ContactPanel } from "@/components/contact-panel";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contact Summit Leads",
  "Discuss lead generation, custom software development, CRM platforms, technology integrations, cloud deployment configuration and AI automation with Summit Leads Ltd.",
);

type ContactPageProps = { searchParams: Promise<{ service?: string }> };

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { service } = await searchParams;
  return (
    <div id="top" className="site-shell">
      <SiteHeader />
      <main className="page-main">
        <ContactPanel initialService={service} />
      </main>
      <SiteFooter />
    </div>
  );
}
