"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Clock, ArrowRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@nexusstudio.com",
    href: "mailto:hello@nexusstudio.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#map",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri, 9AM-6PM PST",
    href: null,
  },
]

export default function ContactPage() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formState.name.trim()) {
      newErrors.name = "Name is required"
    }
    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formState.subject.trim()) {
      newErrors.subject = "Subject is required"
    }
    if (!formState.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

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
                  Contact Us
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="text-balance">{"Let's"} start a conversation</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Have a project in mind? {"We'd"} love to hear about it. Drop us a
                  message and {"we'll"} get back to you within 24 hours.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <ScrollReveal>
                  <h2 className="text-2xl font-bold">Get in touch</h2>
                  <p className="mt-4 text-muted-foreground">
                    Fill out the form or reach out directly. We&apos;re here to help
                    bring your ideas to life.
                  </p>
                </ScrollReveal>

                <div className="mt-8 space-y-6">
                  {contactInfo.map((item, index) => (
                    <ScrollReveal key={item.label} delay={index * 0.1}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-4"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="font-medium text-foreground hover:text-primary"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-medium">{item.value}</p>
                          )}
                        </div>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>

                {/* Map placeholder */}
                <ScrollReveal delay={0.4}>
                  <div
                    id="map"
                    className="mt-10 aspect-video overflow-hidden rounded-2xl border border-border bg-card/50"
                  >
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                      <div className="text-center">
                        <MapPin className="mx-auto h-10 w-10 text-primary/50" />
                        <p className="mt-2 text-sm text-muted-foreground">
                          San Francisco, CA
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <ScrollReveal>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm sm:p-8 lg:p-10"
                  >
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-12 text-center"
                      >
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                          <Send className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="mt-6 text-2xl font-bold">Message sent!</h3>
                        <p className="mt-2 text-muted-foreground">
                          Thanks for reaching out. {"We'll"} get back to you soon.
                        </p>
                        <Button
                          onClick={() => setIsSubmitted(false)}
                          variant="outline"
                          className="mt-6"
                        >
                          Send another message
                        </Button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                          {/* Name */}
                          <div className="space-y-2">
                            <label
                              htmlFor="name"
                              className="text-sm font-medium text-foreground"
                            >
                              Name
                            </label>
                            <Input
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              className={cn(
                                "h-12 bg-background/50",
                                errors.name && "border-destructive"
                              )}
                            />
                            {errors.name && (
                              <p className="text-sm text-destructive">{errors.name}</p>
                            )}
                          </div>

                          {/* Email */}
                          <div className="space-y-2">
                            <label
                              htmlFor="email"
                              className="text-sm font-medium text-foreground"
                            >
                              Email
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formState.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                              className={cn(
                                "h-12 bg-background/50",
                                errors.email && "border-destructive"
                              )}
                            />
                            {errors.email && (
                              <p className="text-sm text-destructive">{errors.email}</p>
                            )}
                          </div>
                        </div>

                        {/* Subject */}
                        <div className="space-y-2">
                          <label
                            htmlFor="subject"
                            className="text-sm font-medium text-foreground"
                          >
                            Subject
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            placeholder="Project inquiry"
                            className={cn(
                              "h-12 bg-background/50",
                              errors.subject && "border-destructive"
                            )}
                          />
                          {errors.subject && (
                            <p className="text-sm text-destructive">{errors.subject}</p>
                          )}
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                          <label
                            htmlFor="message"
                            className="text-sm font-medium text-foreground"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            placeholder="Tell us about your project..."
                            rows={6}
                            className={cn(
                              "flex w-full rounded-lg border border-input bg-background/50 px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                              errors.message && "border-destructive"
                            )}
                          />
                          {errors.message && (
                            <p className="text-sm text-destructive">{errors.message}</p>
                          )}
                        </div>

                        {/* Submit */}
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="group w-full h-12"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                                className="h-4 w-4 rounded-full border-2 border-current border-t-transparent"
                              />
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              Send Message
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                          )}
                        </Button>
                      </form>
                    )}
                  </motion.div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t border-border bg-card/20 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <ScrollReveal>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Frequently asked questions
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mt-4 text-muted-foreground">
                  {"Can't"} find what {"you're"} looking for? Reach out to us directly.
                </p>
              </ScrollReveal>
            </div>

            <div className="mx-auto mt-12 max-w-3xl">
              {[
                {
                  q: "What is your typical project timeline?",
                  a: "Project timelines vary based on scope and complexity. A typical website takes 4-8 weeks, while larger applications may take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
                },
                {
                  q: "Do you work with clients remotely?",
                  a: "Absolutely! We work with clients worldwide. We use modern collaboration tools and maintain clear communication throughout the project, regardless of location.",
                },
                {
                  q: "What is your pricing structure?",
                  a: "We offer both project-based and retainer pricing depending on your needs. We'll discuss your requirements and provide a detailed proposal with transparent pricing.",
                },
                {
                  q: "Do you provide ongoing support?",
                  a: "Yes, we offer maintenance and support packages to keep your digital products running smoothly. This includes updates, security patches, and feature enhancements.",
                },
              ].map((faq, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="border-b border-border py-6">
                    <h3 className="font-semibold">{faq.q}</h3>
                    <p className="mt-2 text-muted-foreground">{faq.a}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
