"use client"

import { Marquee } from "@/components/ui/marquee"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const clients = [
  { name: "Google", logo: "GOOGLE" },
  { name: "Microsoft", logo: "MICROSOFT" },
  { name: "Spotify", logo: "SPOTIFY" },
  { name: "Airbnb", logo: "AIRBNB" },
  { name: "Stripe", logo: "STRIPE" },
  { name: "Slack", logo: "SLACK" },
  { name: "Notion", logo: "NOTION" },
  { name: "Figma", logo: "FIGMA" },
]

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-card/20 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="mb-10 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Trusted by industry leaders
          </p>
        </ScrollReveal>

        <Marquee speed="slow" pauseOnHover>
          {clients.map((client) => (
            <div
              key={client.name}
              className="mx-8 flex h-12 items-center justify-center px-4"
            >
              <span className="text-xl font-bold tracking-widest text-muted-foreground/60 transition-colors hover:text-muted-foreground">
                {client.logo}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
