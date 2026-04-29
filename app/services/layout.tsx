import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbSchema, faqSchema } from "@/lib/seo/structured-data"
import { siteConfig } from "@/lib/seo/site-config"

const title = "Usluge — dostava biljaka u Vukovaru i Borovu Naselju"
const description =
  "FloraVu nudi besplatnu dostavu biljaka i cvijeća u Vukovar i Borovo Naselje, narudžbu preko Instagrama @flora.vukovar i osobni odabir na Gradskoj tržnici Vukovar. Narudžbe do 15:00 sati za istu dostavu."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "dostava biljaka Vukovar",
    "dostava cvijeća Vukovar",
    "dostava Borovo Naselje",
    "narudžba biljaka Instagram",
    "FloraVu usluge",
    "cvjećarna Vukovar dostava",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/services`,
    type: "website",
    locale: "hr_HR",
    siteName: siteConfig.name,
  },
  twitter: { card: "summary_large_image", title, description },
}

const faq = [
  {
    question: "Dostavljate li biljke u Vukovar i Borovo Naselje?",
    answer:
      "Da, FloraVu dostavlja biljke i cvijeće na područje Vukovara i Borova Naselja. Za dostavu istog dana naručite do 15:00 sati preko Instagrama @flora.vukovar.",
  },
  {
    question: "Kako mogu naručiti biljke u FloraVu?",
    answer:
      "Najlakše je putem Instagram poruke na profil @flora.vukovar. Pošaljite što vas zanima, dogovaramo dostupnost, cijenu i termin dostave.",
  },
  {
    question: "Gdje se nalazi FloraVu?",
    answer:
      "FloraVu se nalazi na Gradskoj tržnici Vukovar, gdje možete osobno odabrati sobne biljke, cvjetnice, sadnice i začinsko bilje.",
  },
  {
    question: "Do kada moram naručiti za dostavu istog dana?",
    answer:
      "Sve narudžbe zaprimljene preko Instagrama do 15:00 sati dostavljamo isti dan u Vukovar i Borovo Naselje.",
  },
]

const breadcrumbs = breadcrumbSchema([
  { name: "Početna", url: "/" },
  { name: "Usluge", url: "/services" },
])

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <JsonLd data={faqSchema(faq)} id="ld-services-faq" />
      <JsonLd data={breadcrumbs} id="ld-services-breadcrumb" />
    </>
  )
}
