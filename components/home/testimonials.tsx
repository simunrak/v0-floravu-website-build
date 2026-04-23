"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const testimonials = [
  {
    quote:
      "Prekrasne biljke i odlična usluga! Dostava je bila brza, a sve sadnice su bile u savršenom stanju. Preporučujem svima!",
    author: "Ana K.",
    role: "Vukovar",
    avatar: "AK",
  },
  {
    quote:
      "Konačno kvalitetne biljke dostupne lokalno. Komunikacija putem Instagrama je bila super jednostavna, a biljke su predivne.",
    author: "Marko P.",
    role: "Borovo Naselje",
    avatar: "MP",
  },
  {
    quote:
      "Kupila sam začinsko bilje i cvjetnice za balkon. Sve je procvjetalo i izgleda fenomenalno. Hvala FloraVu!",
    author: "Ivana M.",
    role: "Vukovar",
    avatar: "IM",
  },
  {
    quote:
      "Jako sam zadovoljna s kupljenim sadnicama. Osoblje na tržnici je ljubazno i daje odlične savjete za njegu biljaka.",
    author: "Petra S.",
    role: "Vukovar",
    avatar: "PS",
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
            Recenzije
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Što kažu naši kupci
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
              aria-label="Prethodna recenzija"
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
                  aria-label={`Idi na recenziju ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="h-10 w-10 rounded-full border-border/50"
              aria-label="Sljedeća recenzija"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
