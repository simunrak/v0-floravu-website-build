import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbSchema } from "@/lib/seo/structured-data"
import { siteConfig } from "@/lib/seo/site-config"

const title = "Naše biljke — sobne, cvjetnice, sadnice i začinsko bilje"
const description =
  "Pregledajte ponudu FloraVu cvjećarne u Vukovaru: sobne biljke, balkonske cvjetnice, vrtne sadnice i začinsko bilje. Kvalitetne biljke s dostavom u Vukovar i Borovo Naselje."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "biljke Vukovar",
    "sobne biljke Vukovar",
    "cvjetnice Vukovar",
    "sadnice Vukovar",
    "začinsko bilje Vukovar",
    "FloraVu ponuda",
    "biljke Borovo Naselje",
  ],
  alternates: { canonical: "/work" },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/work`,
    type: "website",
    locale: "hr_HR",
    siteName: siteConfig.name,
  },
  twitter: { card: "summary_large_image", title, description },
}

const breadcrumbs = breadcrumbSchema([
  { name: "Početna", url: "/" },
  { name: "Naše biljke", url: "/work" },
])

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <JsonLd data={breadcrumbs} id="ld-work-breadcrumb" />
    </>
  )
}
