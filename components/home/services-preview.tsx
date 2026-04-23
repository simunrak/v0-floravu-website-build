"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Palette, Code, Megaphone, Lightbulb, ArrowUpRight } from "lucide-react"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal"

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting intuitive interfaces and seamless user experiences that delight customers and drive engagement.",
    href: "/services#design",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building performant, scalable web applications using cutting-edge technologies and best practices.",
    href: "/services#development",
  },
  {
    icon: Megaphone,
    title: "Brand Identity",
    description:
      "Creating distinctive brand identities that resonate with your audience and stand out in the market.",
    href: "/services#branding",
  },
  {
    icon: Lightbulb,
    title: "Digital Strategy",
    description:
      "Developing comprehensive digital strategies that align with your business goals and drive growth.",
    href: "/services#strategy",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <ScrollReveal>
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              What We Do
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-balance">Services tailored to your vision</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
            >
              View all services
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
                    Learn more
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
