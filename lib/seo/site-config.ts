/**
 * Central SEO + GEO configuration for FloraVu.
 *
 * Update NEXT_PUBLIC_SITE_URL in Project Settings → Vars to match your
 * production domain. Geographic data is used for both metadata GEO tags
 * and JSON-LD LocalBusiness structured data so search engines and AI
 * answer engines understand FloraVu is a local florist in Vukovar.
 */
export const siteConfig = {
  name: "FloraVu",
  legalName: "FloraVu",
  title: "FloraVu — Biljke i cvijeće za dom i vrt | Vukovar",
  description:
    "FloraVu je obiteljska cvjećarna na Gradskoj tržnici Vukovar. Sobne biljke, cvjetnice, sadnice, začinsko bilje i dekorativne biljke uz besplatnu dostavu u Vukovar i Borovo Naselje za narudžbe do 15:00 sati. Naručite jednostavno preko Instagrama @flora.vukovar.",
  shortDescription:
    "Biljke, cvijeće i sadnice u Vukovaru — dostava u Vukovar i Borovo Naselje, narudžba preko Instagrama.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://floravu.com",
  locale: "hr_HR",
  language: "hr",
  countryCode: "HR",
  // Vukovar, Vukovar-Syrmia County, Croatia
  geo: {
    latitude: 45.3506,
    longitude: 18.9956,
    streetAddress: "Gradska tržnica Vukovar",
    addressLocality: "Vukovar",
    addressRegion: "Vukovarsko-srijemska županija",
    postalCode: "32000",
    addressCountry: "HR",
  },
  // Hours: market florists in Vukovar typically operate mornings; adjust as needed.
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "15:00" },
    { days: ["Saturday"], opens: "07:00", closes: "13:00" },
  ],
  social: {
    instagram: "https://www.instagram.com/flora.vukovar/",
    instagramHandle: "flora.vukovar",
  },
  areaServed: ["Vukovar", "Borovo Naselje", "Borovo"],
  priceRange: "€€",
  ogImage: "/opengraph-image",
} as const

export type SiteConfig = typeof siteConfig
