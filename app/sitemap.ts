import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://summitleadsltd.com";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: base + "/services/lead-generation", changeFrequency: "monthly", priority: 0.8 },
    { url: base + "/services/web-development", changeFrequency: "monthly", priority: 0.8 },
    { url: base + "/services/ai-automation", changeFrequency: "monthly", priority: 0.8 },
    { url: base + "/contact", changeFrequency: "monthly", priority: 0.7 },
  ];
}
