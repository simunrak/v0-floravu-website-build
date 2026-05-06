import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbSchema } from "@/lib/seo/structured-data"
import { siteConfig } from "@/lib/seo/site-config"

const title = "Kontakt — FloraVu cvjećarna, Gradska tržnica Vukovar"
const description =
  "Kontaktirajte FloraVu — cvjećarnu na Gradskoj tržnici Vukovar. Naručite biljke i cvijeće preko Instagrama @flora.vukovar uz besplatnu dostavu u Vukovar i Borovo Naselje za narudžbe do 15:00."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "FloraVu kontakt",
    "Flora Vukovar Instagram",
    "cvjećarna Vukovar kontakt",
    "Gradska tržnica Vukovar cvjećarna",
    "narudžba biljaka Vukovar",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/contact`,
    type: "website",
    locale: "hr_HR",
    siteName: siteConfig.name,
  },
  twitter: { card: "summary_large_image", title, description },
}

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${siteConfig.url}/contact`,
  name: title,
  description,
  about: { "@id": `${siteConfig.url}/#localbusiness` },
  isPartOf: { "@id": `${siteConfig.url}/#website` },
}

const breadcrumbs = breadcrumbSchema([
  { name: "Početna", url: "/" },
  { name: "Kontakt", url: "/contact" },
])

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <JsonLd data={contactPageSchema} id="ld-contact-page" />
      <JsonLd data={breadcrumbs} id="ld-contact-breadcrumb" />
    </>
  )
}
