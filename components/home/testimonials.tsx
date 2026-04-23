"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const testimonials = [
  {
    quote:
      "Nexus Studio transformed our digital presence completely. Their attention to detail and creative vision exceeded our expectations. The results speak for themselves.",
    author: "Sarah Chen",
    role: "CEO, TechFlow",
    avatar: "SC",
  },
  {
    quote:
      "Working with the Nexus team was a game-changer for our brand. They understood our vision from day one and delivered a product that truly resonates with our audience.",
    author: "Michael Torres",
    role: "Founder, Elevate",
    avatar: "MT",
  },
  {
    quote:
      "The level of professionalism and creativity is unmatched. They delivered our project ahead of schedule and the quality was exceptional. Highly recommend!",
    author: "Emily Watson",
    role: "CMO, Innovate Inc",
    avatar: "EW",
  },
  {
    quote:
      "From strategy to execution, Nexus Studio delivered excellence at every step. Our conversion rates increased by 150% after the redesign.",
    author: "David Park",
    role: "Director, GrowthLabs",
    avatar: "DP",
  },
]

export function Testimonials() {
  const [current, setCurrent] = React.useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  React.useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="border-y border-border bg-card/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            What our clients say
          </h2>
        </ScrollReveal>

        <div className="relative mt-12">
          <div className="mx-auto max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <Quote className="mx-auto mb-6 h-10 w-10 text-primary/30" />
                <blockquote className="text-xl leading-relaxed text-foreground sm:text-2xl lg:text-3xl">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>
                <div className="mt-8 flex flex-col items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonials[current].author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="h-10 w-10 rounded-full border-border/50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="h-10 w-10 rounded-full border-border/50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
