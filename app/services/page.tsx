"use client"

import { motion } from "framer-motion"
import {
  Truck,
  MessageCircle,
  MapPin,
  Clock,
  Heart,
  Leaf,
  Instagram,
  Check,
} from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "dostava",
    icon: Truck,
    title: "Dostava na kućnu adresu",
    description:
      "Dostavljamo vaše biljke direktno na vašu adresu u Vukovaru i Borovu Naselju. Brza i sigurna dostava istog dana za narudžbe zaprimljene do 15:00 sati.",
    features: [
      "Dostava u Vukovar",
      "Dostava u Borovo Naselje",
      "Narudžbe do 15:00",
      "Sigurno pakiranje",
      "Dostava istog dana",
    ],
  },
  {
    id: "narucivanje",
    icon: MessageCircle,
    title: "Naručivanje putem Instagrama",
    description:
      "Jednostavno nam pišite na Instagram, odaberite željene biljke iz naše ponude i dogovorite detalje dostave. Brza i jednostavna komunikacija.",
    features: [
      "Brza komunikacija",
      "Savjeti za odabir",
      "Pregled ponude",
      "Dogovor o terminu",
      "Plaćanje pouzećem",
    ],
  },
  {
    id: "kvaliteta",
    icon: Heart,
    title: "Kvalitetne biljke",
    description:
      "Sve naše biljke su zdrave, njegovane i spremne za sadnju. Pažljivo ih biramo i njegujemo kako bi vam služile godinama.",
    features: [
      "Zdrave sadnice",
      "Pažljivo njegovane",
      "Spremne za sadnju",
      "Raznolik asortiman",
      "Sezonska ponuda",
    ],
  },
  {
    id: "savjeti",
    icon: Leaf,
    title: "Savjeti za njegu",
    description:
      "Uz svaku kupnju dobivate savjete za pravilnu njegu vaših biljaka. Pomoći ćemo vam da vaše biljke rastu zdrave i lijepe.",
    features: [
      "Upute za zalijevanje",
      "Savjeti za položaj",
      "Informacije o gnojidbi",
      "Presađivanje",
      "Rješavanje problema",
    ],
  },
  {
    id: "lokacija",
    icon: MapPin,
    title: "Posjetite nas na tržnici",
    description:
      "Pronađite nas na Gradskoj tržnici Vukovar gdje možete vidjeti cijelu ponudu uživo i odabrati savršene biljke za svoj prostor.",
    features: [
      "Gradska tržnica Vukovar",
      "Pregled uživo",
      "Osobni odabir",
      "Stručni savjeti",
      "Veliki izbor",
    ],
  },
  {
    id: "vrijeme",
    icon: Clock,
    title: "Radno vrijeme",
    description:
      "Posjetite nas tijekom radnog vremena tržnice ili naručite putem Instagrama bilo kada - odgovaramo u najkraćem mogućem roku.",
    features: [
      "Radno vrijeme tržnice",
      "Instagram 24/7",
      "Brzi odgovor",
      "Fleksibilni termini",
      "Vikend dostava",
    ],
  },
]

const processSteps = [
  {
    number: "01",
    title: "Odaberite biljke",
    description: "Pregledajte našu ponudu na Instagramu ili nas posjetite na tržnici i odaberite biljke koje vam se sviđaju.",
  },
  {
    number: "02",
    title: "Kontaktirajte nas",
    description: "Pišite nam na Instagram s popisom željenih biljaka i vašom adresom za dostavu.",
  },
  {
    number: "03",
    title: "Potvrda narudžbe",
    description: "Potvrditi ćemo dostupnost, dogovoriti cijenu i termin dostave koji vam odgovara.",
  },
  {
    number: "04",
    title: "Dostava",
    description: "Vaše biljke pažljivo pakiramo i dostavljamo na vašu adresu u dogovorenom terminu.",
  },
  {
    number: "05",
    title: "Uživajte!",
    description: "Posadite svoje nove biljke i uživajte u zelenom prostoru. Tu smo za sva pitanja o njezi!",
  },
]

export default function ServicesPage() {
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
                  Naše Usluge
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="text-balance">Kako možemo pomoći</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  FloraVu vam nudi jednostavan način da dođete do kvalitetnih biljaka. 
                  Posjetite nas na tržnici ili naručite s dostavom u Vukovaru i Borovu Naselju.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <StaggerItem key={service.id}>
                  <motion.div
                    id={service.id}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group h-full rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-card"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                    <p className="mb-6 text-muted-foreground">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Process Section */}
        <section className="border-y border-border bg-card/20 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <ScrollReveal>
                <span className="text-sm font-medium uppercase tracking-wider text-primary">
                  Kako naručiti
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Jednostavno u 5 koraka
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Naručivanje biljaka nikad nije bilo lakše. Pratite ove korake 
                  i vaše biljke će uskoro biti kod vas.
                </p>
              </ScrollReveal>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <ScrollReveal key={step.number} delay={index * 0.1}>
                    <div
                      className={`relative flex flex-col md:flex-row ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      } items-center gap-8`}
                    >
                      {/* Content */}
                      <div
                        className={`flex-1 ${
                          index % 2 === 0 ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="inline-block rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm"
                        >
                          <span className="text-4xl font-bold text-primary/30">
                            {step.number}
                          </span>
                          <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                          <p className="mt-2 text-muted-foreground">
                            {step.description}
                          </p>
                        </motion.div>
                      </div>

                      {/* Circle */}
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary">
                        <span className="text-lg font-bold text-primary-foreground">
                          {step.number}
                        </span>
                      </div>

                      {/* Spacer */}
                      <div className="hidden flex-1 md:block" />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-card to-accent/10 p-8 text-center sm:p-12 lg:p-16">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

              <div className="relative z-10">
                <ScrollReveal>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Spremni za narudžbu?
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                    Javite nam se na Instagram i dogovorite dostavu vaših novih biljaka. 
                    Radujemo se vašoj poruci!
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <Button asChild size="lg" className="mt-8 h-12 gap-2 px-8">
                    <a 
                      href="https://instagram.com/floravu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-5 w-5" />
                      Naruči na Instagramu
                    </a>
                  </Button>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
