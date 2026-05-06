"use client"

import { motion } from "framer-motion"
import { Instagram, MapPin, Clock, Truck } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Instagram,
    label: "Instagram",
    value: "@flora.vukovar",
    href: "https://www.instagram.com/flora.vukovar/",
    description: "Naš glavni kanal za narudžbe",
  },
  {
    icon: MapPin,
    label: "Lokacija",
    value: "Gradska tržnica Vukovar",
    href: "https://maps.google.com/?q=Gradska+trznica+Vukovar",
    description: "Posjetite nas i odaberite biljke uživo",
  },
  {
    icon: Clock,
    label: "Dostava do",
    value: "15:00 sati",
    href: null,
    description: "Za narudžbe istog dana",
  },
  {
    icon: Truck,
    label: "Područje dostave",
    value: "Vukovar i Borovo Naselje",
    href: null,
    description: "Dostavljamo samo na ova područja",
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <ScrollReveal>
                <span className="text-sm font-medium uppercase tracking-wider text-primary">
                  Kontakt
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="text-balance">Javite nam se</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Želite naručiti biljke ili imate pitanja? Javite nam se na Instagram 
                  ili nas posjetite na Gradskoj tržnici Vukovar.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item, index) => (
                <ScrollReveal key={item.label} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/50"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block text-lg font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-lg font-semibold">{item.value}</p>
                    )}
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Instagram CTA */}
            <ScrollReveal delay={0.4}>
              <div className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-accent/5 p-8 text-center sm:p-12">
                <Instagram className="mx-auto h-12 w-12 text-primary" />
                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Naručite putem Instagrama
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                  Najjednostavniji način za narudžbu je putem Instagrama. 
                  Pošaljite nam poruku s popisom željenih biljaka i vašom adresom, 
                  a mi ćemo se pobrinuti za ostatak.
                </p>
                <Button asChild size="lg" className="mt-8 h-12 px-8">
                  <a 
                    href="https://www.instagram.com/flora.vukovar/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Instagram className="mr-2 h-5 w-5" />
                    Pošalji poruku na Instagram
                  </a>
                </Button>
              </div>
            </ScrollReveal>

            {/* Map Section */}
            <ScrollReveal delay={0.5}>
              <div className="mt-16">
                <h2 className="mb-6 text-2xl font-bold">Pronađite nas</h2>
                <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-card/50">
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                    <div className="text-center">
                      <MapPin className="mx-auto h-16 w-16 text-primary/50" />
                      <p className="mt-4 text-xl font-semibold">Gradska tržnica Vukovar</p>
                      <p className="mt-2 text-muted-foreground">
                        Posjetite nas i odaberite biljke uživo
                      </p>
                      <Button asChild variant="outline" className="mt-6">
                        <a 
                          href="https://maps.google.com/?q=Gradska+trznica+Vukovar" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Otvori u Google Maps
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="border-t border-border bg-card/20 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <ScrollReveal>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Često postavljena pitanja
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mt-4 text-muted-foreground">
                  Imate pitanja? Ovdje su odgovori na najčešća pitanja naših kupaca.
                </p>
              </ScrollReveal>
            </div>

            <div className="mx-auto mt-12 max-w-3xl">
              {[
                {
                  q: "Kako mogu naručiti biljke?",
                  a: "Najjednostavnije je putem Instagrama. Pošaljite nam poruku s popisom željenih biljaka i vašom adresom za dostavu. Također nas možete posjetiti uživo na Gradskoj tržnici Vukovar.",
                },
                {
                  q: "Koja su područja dostave?",
                  a: "Dostavljamo isključivo u Vukovar i Borovo Naselje. Nažalost, trenutno ne dostavljamo u druga mjesta.",
                },
                {
                  q: "Do koliko sati primam narudžbe za dostavu istog dana?",
                  a: "Narudžbe zaprimamo do 15:00 sati za dostavu istog dana. Narudžbe nakon 15:00 sati bit će dostavljene sljedeći radni dan.",
                },
                {
                  q: "Kako plaćam narudžbu?",
                  a: "Plaćanje je pouzećem prilikom preuzimanja narudžbe. Gotovina ili kartica - kako vam više odgovara.",
                },
                {
                  q: "Mogu li doći osobno odabrati biljke?",
                  a: "Naravno! Posjetite nas na Gradskoj tržnici Vukovar gdje možete vidjeti cijelu ponudu i odabrati biljke uživo uz naše savjete.",
                },
                {
                  q: "Nudite li savjete za njegu biljaka?",
                  a: "Da! Uz svaku kupnju dobivate savjete za pravilnu njegu vaših biljaka. Možete nas pitati i naknadno putem Instagrama.",
                },
              ].map((faq, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="border-b border-border py-6">
                    <h3 className="font-semibold">{faq.q}</h3>
                    <p className="mt-2 text-muted-foreground">{faq.a}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
