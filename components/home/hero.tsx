"use client"

import { motion } from "framer-motion"
import { Instagram, MapPin, Clock, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FlowerRise } from "@/components/home/flower-rise"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
        {/* Leaf pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, currentColor 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Decorative flower-rise entrance animation */}
      <FlowerRise />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pt-20 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-primary" />
              Gradska tržnica Vukovar
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-balance">
              Uljepšajte svoj{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  dom i vrt
                </span>
              </span>{" "}
              našim biljkama
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            FloraVu nudi širok izbor kvalitetnih biljaka za sadnju. 
            Dostavljamo u Vukovar i Borovo Naselje — naručite putem Instagrama!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="group relative h-12 overflow-hidden px-8">
              <a 
                href="https://www.instagram.com/flora.vukovar/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Instagram className="h-5 w-5" />
                  Naruči na Instagramu
                </span>
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "linear",
                  }}
                />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 gap-2 border-border/50 bg-card/30 px-8 backdrop-blur-sm hover:bg-card/50"
            >
              <a href="#ponuda">
                Pogledaj ponudu
              </a>
            </Button>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            <div className="flex items-center justify-center gap-3 rounded-xl border border-border bg-card/50 p-4 backdrop-blur-sm">
              <MapPin className="h-6 w-6 text-primary" />
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Lokacija</div>
                <div className="font-semibold">Gradska tržnica Vukovar</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-xl border border-border bg-card/50 p-4 backdrop-blur-sm">
              <Clock className="h-6 w-6 text-primary" />
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Dostava do</div>
                <div className="font-semibold">15:00 sati</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-xl border border-border bg-card/50 p-4 backdrop-blur-sm">
              <Truck className="h-6 w-6 text-primary" />
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Dostavljamo</div>
                <div className="font-semibold">Vukovar & Borovo Naselje</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6 lg:bottom-8"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-1.5"
          >
            <span className="text-xs font-medium text-muted-foreground">Pogledaj više</span>
            <div className="flex flex-col items-center gap-1.5">
              <div className="h-8 w-5 rounded-full border-1.5 border-primary/60 p-1">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="mx-auto h-1.5 w-1.5 rounded-full bg-primary"
                />
              </div>
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-1 w-0.5 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
