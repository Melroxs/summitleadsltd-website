import type { Metadata, Viewport } from "next";
import { brandPreviewImage } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Summit Leads | Digital Growth & Technology",
    template: "%s | Summit Leads",
  },
  description: "Build your presence, generate opportunities, and engineer growth with connected digital strategy, development, and automation.",
  applicationName: "Summit Leads Prototype",
  robots: { index: false, follow: false, nocache: true },
  openGraph: {
    type: "website",
    siteName: "Summit Leads",
    title: "Summit Leads | Digital Growth & Technology",
    description: "Build your presence. Generate opportunities. Engineer growth.",
    images: [{ url: brandPreviewImage, width: 1461, height: 1380, alt: "Summit Leads mountain logo" }],
  },
  twitter: {
    card: "summary",
    title: "Summit Leads | Digital Growth & Technology",
    description: "Build your presence. Generate opportunities. Engineer growth.",
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
      <body>{children}</body>
    </html>
  );
}
