"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-card to-accent/10 p-8 sm:p-12 lg:p-16">
          {/* Background decoration */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                <span className="text-balance">
                  Ready to bring your vision to life?
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                {"Let's"} collaborate and create something extraordinary. 
                Get in touch to discuss your next project.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="group h-12 px-8">
                  <Link href="/contact">
                    <span className="flex items-center gap-2">
                      Start a Project
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 border-border/50 bg-background/50 px-8 backdrop-blur-sm"
                >
                  <Link href="/work">View Our Work</Link>
                </Button>
              </div>
            </ScrollReveal>

            {/* Trust indicators */}
            <ScrollReveal delay={0.3}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {["A", "B", "C", "D"].map((letter, i) => (
                      <motion.div
                        key={letter}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium"
                      >
                        {letter}
                      </motion.div>
                    ))}
                  </div>
                  <span>50+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.svg
                      key={star}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + star * 0.05 }}
                      className="h-5 w-5 fill-yellow-500 text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </motion.svg>
                  ))}
                  <span className="ml-2">5.0 Average Rating</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
