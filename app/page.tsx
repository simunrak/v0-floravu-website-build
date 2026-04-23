import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/home/hero"
import { TrustedBy } from "@/components/home/trusted-by"
import { ServicesPreview } from "@/components/home/services-preview"
import { Testimonials } from "@/components/home/testimonials"
import { CTA } from "@/components/home/cta"

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
    </>
  )
}
