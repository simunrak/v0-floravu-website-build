"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, MapPin, Clock, Truck } from "lucide-react"

const footerLinks = {
  stranice: [
    { label: "Početna", href: "/" },
    { label: "Naše Biljke", href: "/work" },
    { label: "Usluge", href: "/services" },
    { label: "Kontakt", href: "/contact" },
  ],
  info: [
    { label: "Dostava", href: "/services#dostava" },
    { label: "Kako naručiti", href: "/services#narucivanje" },
    { label: "Često pitana pitanja", href: "/contact#faq" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side - CTA */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              <span className="text-balance">Želite naručiti biljke?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-md text-muted-foreground"
            >
              Javite nam se na Instagram i dogovorite svoju narudžbu. 
              Dostavljamo u Vukovar i Borovo Naselje do 15:00 sati.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="https://www.instagram.com/flora.vukovar/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-lg font-semibold text-primary transition-colors hover:text-primary/80"
              >
                <Instagram className="h-5 w-5" />
                Naruči na Instagramu
              </a>
            </motion.div>

            {/* Quick Info */}
            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Lokacija</p>
                  <p className="text-sm text-muted-foreground">Gradska tržnica Vukovar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Dostava do</p>
                  <p className="text-sm text-muted-foreground">15:00 sati</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:col-span-2">
                <Truck className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Područje dostave</p>
                  <p className="text-sm text-muted-foreground">Vukovar i Borovo Naselje</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Stranice
              </h3>
              <ul className="space-y-3">
                {footerLinks.stranice.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Informacije
              </h3>
              <ul className="space-y-3">
                {footerLinks.info.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">
              <span className="text-primary">Flora</span>
              <span className="text-foreground">Vu</span>
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FloraVu. Sva prava pridržana.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/flora.vukovar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
