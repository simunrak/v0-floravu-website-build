import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/home/hero"
import { TrustedBy } from "@/components/home/trusted-by"
import { ServicesPreview } from "@/components/home/services-preview"
import { Testimonials } from "@/components/home/testimonials"
import { CTA } from "@/components/home/cta"
import { JsonLd } from "@/components/seo/json-ld"
import { faqSchema } from "@/lib/seo/structured-data"
import { siteConfig } from "@/lib/seo/site-config"

const homeFaq = [
  {
    question: "Što je FloraVu?",
    answer:
      "FloraVu je cvjećarna na Gradskoj tržnici Vukovar koja nudi sobne biljke, cvjetnice, vrtne sadnice i začinsko bilje, uz besplatnu dostavu u Vukovar i Borovo Naselje.",
  },
  {
    question: "Kako mogu naručiti biljke?",
    answer:
      "Najlakše preko Instagrama @flora.vukovar — pošaljite poruku s vrstom biljke koja vas zanima i dogovaramo dostupnost te termin dostave.",
  },
  {
    question: "Kamo dostavljate biljke?",
    answer:
      "Dostavljamo na područje Vukovara i Borova Naselja. Narudžbe zaprimljene do 15:00 sati isporučujemo isti dan.",
  },
  {
    question: "Koje biljke imate u ponudi?",
    answer:
      "U ponudi su sobne biljke, cvjetnice za balkon i vrt, vrtne sadnice te svježe začinsko bilje. Asortiman se mijenja sezonski — najsvježija ponuda je na Instagramu @flora.vukovar.",
  },
]

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.url}/#webpage`,
  url: siteConfig.url,
  name: siteConfig.title,
  description: siteConfig.description,
  inLanguage: "hr-HR",
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: { "@id": `${siteConfig.url}/#localbusiness` },
  primaryImageOfPage: `${siteConfig.url}/opengraph-image`,
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <ServicesPreview />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <JsonLd data={webPageSchema} id="ld-home-webpage" />
      <JsonLd data={faqSchema(homeFaq)} id="ld-home-faq" />
    </>
  )
}
