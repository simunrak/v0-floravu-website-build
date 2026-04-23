"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Truck, Clock, MessageCircle, Heart, ArrowUpRight } from "lucide-react"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal"

const services = [
  {
    icon: Truck,
    title: "Brza dostava",
    description:
      "Dostavljamo u Vukovar i Borovo Naselje. Narudžbe zaprimamo do 15:00 sati za dostavu istog dana.",
    href: "/services#dostava",
  },
  {
    icon: MessageCircle,
    title: "Naručite putem Instagrama",
    description:
      "Jednostavno nam pišite na Instagram, dogovorite detalje i mi vam dostavimo biljke na kućnu adresu.",
    href: "/services#narucivanje",
  },
  {
    icon: Heart,
    title: "Kvalitetne biljke",
    description:
      "Sve naše biljke su zdrave, njegovane i spremne za sadnju u vašem domu ili vrtu.",
    href: "/services#kvaliteta",
  },
  {
    icon: Clock,
    title: "Posjetite nas",
    description:
      "Pronađite nas na Gradskoj tržnici Vukovar gdje možete vidjeti cijelu ponudu i odabrati biljke uživo.",
    href: "/contact",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <ScrollReveal>
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Zašto FloraVu
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-balance">Jednostavno do vaših biljaka</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
            >
              Sve usluge
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link href={service.href} className="group block h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-card"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                  <p className="flex-grow text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Saznaj više
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
