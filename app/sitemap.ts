import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const base = siteConfig.url

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { "hr-HR": `${base}/` } },
    },
    {
      url: `${base}/work`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: { "hr-HR": `${base}/work` } },
    },
    {
      url: `${base}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { "hr-HR": `${base}/services` } },
    },
    {
      url: `${base}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: { "hr-HR": `${base}/contact` } },
    },
  ]
}
