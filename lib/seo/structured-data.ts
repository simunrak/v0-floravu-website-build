import { siteConfig } from "@/lib/seo/site-config"

/**
 * JSON-LD structured data for FloraVu.
 *
 * - LocalBusiness / Florist: critical for local SEO + Google Maps + AI engines.
 * - Organization: brand graph entity.
 * - WebSite: enables sitelinks search box (and helps GEO/AI engines).
 *
 * Reference: https://schema.org/Florist
 */

const dayMap: Record<string, string> = {
  Monday: "Mo",
  Tuesday: "Tu",
  Wednesday: "We",
  Thursday: "Th",
  Friday: "Fr",
  Saturday: "Sa",
  Sunday: "Su",
}

const openingHoursSpecification = siteConfig.openingHours.map((slot) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: slot.days.map((d) => `https://schema.org/${d}`),
  opens: slot.opens,
  closes: slot.closes,
}))

const openingHoursShort = siteConfig.openingHours
  .map((slot) => `${slot.days.map((d) => dayMap[d]).join(",")} ${slot.opens}-${slot.closes}`)
  .join(", ")

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Florist", "Store"],
  "@id": `${siteConfig.url}/#localbusiness`,
  name: siteConfig.name,
  alternateName: ["Flora Vukovar", "Flora.Vukovar"],
  description: siteConfig.description,
  url: siteConfig.url,
  image: [`${siteConfig.url}/opengraph-image`],
  logo: `${siteConfig.url}/icon.svg`,
  priceRange: siteConfig.priceRange,
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Bank transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.geo.streetAddress,
    addressLocality: siteConfig.geo.addressLocality,
    addressRegion: siteConfig.geo.addressRegion,
    postalCode: siteConfig.geo.postalCode,
    addressCountry: siteConfig.geo.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${siteConfig.geo.streetAddress}, ${siteConfig.geo.addressLocality}`,
  )}`,
  areaServed: siteConfig.areaServed.map((city) => ({
    "@type": "City",
    name: city,
    containedInPlace: {
      "@type": "Country",
      name: "Croatia",
      identifier: "HR",
    },
  })),
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    geoRadius: 15000,
  },
  openingHoursSpecification,
  openingHours: openingHoursShort,
  sameAs: [siteConfig.social.instagram],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: siteConfig.social.instagram,
      availableLanguage: ["Croatian", "Bosnian", "Serbian", "English"],
      areaServed: siteConfig.countryCode,
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Dostava biljaka u Vukovar i Borovo Naselje",
        description:
          "Besplatna dostava biljaka i cvijeća u Vukovar i Borovo Naselje za narudžbe zaprimljene do 15:00 sati.",
        areaServed: siteConfig.areaServed,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Sobne biljke",
        category: "Houseplants",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Vrtne sadnice i cvjetnice",
        category: "Garden plants",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Začinsko bilje",
        category: "Herbs",
      },
    },
  ],
  knowsLanguage: ["hr", "en"],
  slogan: "Uljepšajte svoj dom i vrt našim biljkama",
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/icon.svg`,
  },
  sameAs: [siteConfig.social.instagram],
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.shortDescription,
  inLanguage: "hr-HR",
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  }
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}
