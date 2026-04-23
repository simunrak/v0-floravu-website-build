"use client"

import { motion } from "framer-motion"
import {
  Palette,
  Code,
  Megaphone,
  Lightbulb,
  Search,
  Smartphone,
  ArrowRight,
  Check,
} from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "We create intuitive, engaging interfaces that delight users and drive conversions. Our design process is rooted in research and validated through testing.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design Systems",
      "Usability Testing",
      "Design Handoff",
    ],
  },
  {
    id: "development",
    icon: Code,
    title: "Web Development",
    description:
      "We build performant, scalable web applications using modern technologies. From marketing sites to complex platforms, we deliver excellence.",
    features: [
      "Next.js & React Applications",
      "Custom CMS Integration",
      "E-commerce Solutions",
      "API Development",
      "Performance Optimization",
    ],
  },
  {
    id: "branding",
    icon: Megaphone,
    title: "Brand Identity",
    description:
      "We craft distinctive brand identities that communicate your values and resonate with your audience. Every element is designed with purpose.",
    features: [
      "Logo Design & Systems",
      "Brand Guidelines",
      "Visual Identity",
      "Brand Messaging",
      "Asset Creation",
    ],
  },
  {
    id: "strategy",
    icon: Lightbulb,
    title: "Digital Strategy",
    description:
      "We develop comprehensive strategies that align your digital presence with business objectives. Data-driven decisions for measurable results.",
    features: [
      "Market Research",
      "Competitive Analysis",
      "User Journey Mapping",
      "Growth Planning",
      "Analytics & Reporting",
    ],
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO & Marketing",
    description:
      "We optimize your digital presence for search engines and develop marketing strategies that increase visibility and drive qualified traffic.",
    features: [
      "Technical SEO Audit",
      "Content Strategy",
      "Link Building",
      "Local SEO",
      "Performance Tracking",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "We create native and cross-platform mobile applications that provide seamless experiences across all devices and operating systems.",
    features: [
      "iOS & Android Apps",
      "React Native Development",
      "App Store Optimization",
      "Push Notifications",
      "Offline Functionality",
    ],
  },
]

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into understanding your business, goals, and target audience through research and stakeholder interviews.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "We develop a comprehensive plan that outlines the approach, timeline, and deliverables for your project.",
  },
  {
    number: "03",
    title: "Design",
    description: "Our designers create stunning visuals and intuitive interfaces that bring your vision to life.",
  },
  {
    number: "04",
    title: "Development",
    description: "Our engineers build robust, scalable solutions using cutting-edge technologies and best practices.",
  },
  {
    number: "05",
    title: "Launch",
    description: "We handle deployment, testing, and optimization to ensure a successful launch and continued growth.",
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
                  Our Services
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="text-balance">Everything you need to succeed online</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  From concept to launch and beyond, we provide end-to-end digital
                  services that help businesses grow and thrive in the digital age.
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
                  Our Process
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  How we work
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Our proven methodology ensures consistent results and a seamless
                  experience from start to finish.
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
                    Ready to get started?
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                    {"Let's"} discuss your project and see how we can help you achieve
                    your goals.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <Button asChild size="lg" className="mt-8 h-12 gap-2 px-8">
                    <Link href="/contact">
                      Get in Touch
                      <ArrowRight className="h-4 w-4" />
                    </Link>
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
