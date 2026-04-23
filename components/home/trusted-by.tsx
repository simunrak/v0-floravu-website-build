"use client"

import { Marquee } from "@/components/ui/marquee"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Flower2, TreeDeciduous, Shrub, Leaf, Sprout, FlowerIcon } from "lucide-react"

const categories = [
  { name: "Sobne biljke", icon: Flower2 },
  { name: "Vrtne biljke", icon: TreeDeciduous },
  { name: "Grmlje", icon: Shrub },
  { name: "Začinsko bilje", icon: Leaf },
  { name: "Sadnice povrća", icon: Sprout },
  { name: "Cvjetnice", icon: FlowerIcon },
]

export function TrustedBy() {
  return (
    <section id="ponuda" className="border-y border-border bg-card/20 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="mb-10 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Naš asortiman
          </p>
        </ScrollReveal>

        <Marquee speed="slow" pauseOnHover>
          {categories.map((category) => (
            <div
              key={category.name}
              className="mx-8 flex h-12 items-center justify-center gap-3 px-4"
            >
              <category.icon className="h-5 w-5 text-primary" />
              <span className="text-lg font-medium tracking-wide text-muted-foreground/80 transition-colors hover:text-foreground">
                {category.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
