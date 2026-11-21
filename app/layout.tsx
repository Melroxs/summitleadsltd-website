import type { Metadata, Viewport } from "next";
import { brandPreviewImage } from "@/lib/metadata";
import "./globals.css";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Summit Leads Ltd",
  url: "https://summitleadsltd.com",
  logo: "https://summitleadsltd.com/logo-images/summit-leads-logo.png",
  email: "hello@summitleadsltd.com",
  description: "Summit Leads Ltd helps businesses grow through lead generation, custom software development, technology integrations and practical AI automation.",
  knowsAbout: [
    "Business growth strategy",
    "B2B lead generation",
    "Sales enablement systems",
    "Custom software development",
    "Web application development",
    "CRM systems and business dashboards",
    "API and database integrations",
    "Cloud hosting and deployment configuration",
    "AI automation and business process automation"
  ]
};

export const metadata: Metadata = {
  title: {
    default: "Summit Leads Ltd | Software Development, Technology & Lead Generation",
    template: "%s | Summit Leads Ltd",
  },
  description: "Summit Leads Ltd connects business growth with custom software development, web applications, CRM systems, technology integrations, AI automation and targeted lead generation.",
  metadataBase: new URL("https://summitleadsltd.com"),
  applicationName: "Summit Leads Ltd",
  keywords: [
    "software development company",
    "custom software development",
    "web application development",
    "business website development",
    "CRM development",
    "custom CRM systems",
    "business dashboards",
    "technology solutions",
    "API integration",
    "database integration",
    "cloud hosting and deployment",
    "AI automation",
    "business process automation",
    "B2B lead generation",
    "sales enablement",
    "Summit Leads Ltd"
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Summit Leads Ltd",
    title: "Summit Leads Ltd | Software Development, Technology & Lead Generation",
    description: "Custom software, connected technology and customer acquisition systems built around business outcomes.",
    url: "https://summitleadsltd.com",
    images: [{ url: brandPreviewImage, width: 1461, height: 1380, alt: "Summit Leads mountain logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Leads Ltd | Software Development & Technology Solutions",
    description: "Custom software, connected technology and customer acquisition systems built around business outcomes.",
    images: [brandPreviewImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#02030A",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        {children}
      </body>
    </html>
  );
}
