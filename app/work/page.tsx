"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Instagram } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BentoGrid, type Project } from "@/components/work/bento-grid"
import { ProjectFilter } from "@/components/work/project-filter"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Button } from "@/components/ui/button"

const projects: Project[] = [
  {
    id: "1",
    title: "Sobne biljke",
    description: "Prekrasne biljke za unutarnje prostore koje će uljepšati vaš dom. Od fiksusa do monstera, imamo sve što trebate.",
    image: "/images/projects/project-1.jpg",
    tags: ["Sobne", "Dekorativne"],
    category: "Sobne",
    href: "#",
    size: "large",
  },
  {
    id: "2",
    title: "Cvjetnice",
    description: "Šarene cvjetnice za balkon i vrt. Petunije, surfinije, pelargonije i mnoge druge.",
    image: "/images/projects/project-2.jpg",
    tags: ["Cvjetnice", "Balkon"],
    category: "Cvjetnice",
    href: "#",
    size: "small",
  },
  {
    id: "3",
    title: "Začinsko bilje",
    description: "Svježe začinsko bilje za vašu kuhinju. Bosiljak, menta, ružmarin, timijan i druge.",
    image: "/images/projects/project-3.jpg",
    tags: ["Začini", "Kuhinja"],
    category: "Začinsko",
    href: "#",
    size: "small",
  },
  {
    id: "4",
    title: "Vrtne biljke",
    description: "Kvalitetne sadnice za vaš vrt. Grmlje, trajnice i sezonsko cvijeće.",
    image: "/images/projects/project-4.jpg",
    tags: ["Vrt", "Trajnice"],
    category: "Vrtne",
    href: "#",
    size: "medium",
  },
  {
    id: "5",
    title: "Sadnice povrća",
    description: "Zdrave sadnice povrća za vaš vrt. Rajčice, paprike, krastavci i mnoge druge.",
    image: "/images/projects/project-5.jpg",
    tags: ["Povrće", "Vrt"],
    category: "Povrće",
    href: "#",
    size: "small",
  },
  {
    id: "6",
    title: "Sukulenti i kaktusi",
    description: "Jednostavne za održavanje biljke koje ne zahtijevaju puno pažnje. Idealne za početnike.",
    image: "/images/projects/project-6.jpg",
    tags: ["Sukulenti", "Sobne"],
    category: "Sobne",
    href: "#",
    size: "large",
  },
]

const categories = ["Sve", "Sobne", "Cvjetnice", "Začinsko", "Vrtne", "Povrće"]

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = React.useState("Sve")

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "Sve") return projects
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Naše Biljke
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-balance">Pogledajte našu ponudu</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Pronađite savršene biljke za svoj dom i vrt. Za narudžbu, javite nam se na Instagram 
                ili nas posjetite na Gradskoj tržnici Vukovar.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Filter & Grid */}
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-10">
                <ProjectFilter
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                />
              </div>
            </ScrollReveal>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <BentoGrid projects={filteredProjects} />
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-card/20 py-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Želite naručiti?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-4 text-lg text-muted-foreground">
                Javite nam se na Instagram i dogovorite svoju narudžbu. Dostavljamo u Vukovar i Borovo Naselje.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Button asChild size="lg" className="mt-8 h-12 px-8">
                <a 
                  href="https://instagram.com/floravu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Naruči na Instagramu
                </a>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
