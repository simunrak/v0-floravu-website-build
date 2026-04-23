"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BentoGrid, type Project } from "@/components/work/bento-grid"
import { ProjectFilter } from "@/components/work/project-filter"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const projects: Project[] = [
  {
    id: "1",
    title: "FinanceFlow",
    description: "A comprehensive fintech platform with real-time analytics and portfolio management for modern investors.",
    image: "/images/projects/project-1.jpg",
    tags: ["UI/UX", "Development", "Mobile"],
    category: "Development",
    href: "/work/financeflow",
    size: "large",
  },
  {
    id: "2",
    title: "Luxe Fashion",
    description: "Premium e-commerce experience for a luxury fashion brand with immersive product showcases.",
    image: "/images/projects/project-2.jpg",
    tags: ["E-commerce", "Branding"],
    category: "Design",
    href: "/work/luxe-fashion",
    size: "small",
  },
  {
    id: "3",
    title: "Vertex Studio",
    description: "Complete brand identity and visual system for an innovative creative agency.",
    image: "/images/projects/project-3.jpg",
    tags: ["Branding", "Identity"],
    category: "Branding",
    href: "/work/vertex-studio",
    size: "small",
  },
  {
    id: "4",
    title: "DataViz Pro",
    description: "Enterprise analytics dashboard with advanced data visualization and reporting capabilities.",
    image: "/images/projects/project-4.jpg",
    tags: ["UI/UX", "Development", "SaaS"],
    category: "Development",
    href: "/work/dataviz-pro",
    size: "medium",
  },
  {
    id: "5",
    title: "Mindful",
    description: "Wellness and meditation app designed to promote mental health and daily mindfulness practices.",
    image: "/images/projects/project-5.jpg",
    tags: ["Mobile", "UI/UX"],
    category: "Design",
    href: "/work/mindful",
    size: "small",
  },
  {
    id: "6",
    title: "Prestige Properties",
    description: "Luxury real estate platform showcasing premium properties with immersive virtual tours.",
    image: "/images/projects/project-6.jpg",
    tags: ["Development", "UI/UX"],
    category: "Development",
    href: "/work/prestige-properties",
    size: "large",
  },
]

const categories = ["All", "Design", "Development", "Branding"]

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = React.useState("All")

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "All") return projects
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
                Our Work
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-balance">Selected projects</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Explore our portfolio of award-winning digital experiences, brand
                identities, and innovative solutions crafted for industry leaders.
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
                Have a project in mind?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-4 text-lg text-muted-foreground">
                {"Let's"} work together to bring your vision to life.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start a Project
              </motion.a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
