import type { Metadata } from "next";

export const brandPreviewImage = "https://summitleadsltd.com/logo-images/background-removed-summit-leads-logo.png";

export function pageMetadata(title: string, description: string): Metadata {
  const shareTitle = `${title} | Summit Leads Ltd`;
  return {
    title,
    description,
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName: "Summit Leads Ltd",
      title: shareTitle,
      description,
      images: [{ url: brandPreviewImage, width: 1461, height: 1380, alt: "Summit Leads mountain logo" }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [brandPreviewImage],
    },
  };
}
