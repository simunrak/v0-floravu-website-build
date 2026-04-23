"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  href: string
  size?: "small" | "medium" | "large"
}

interface BentoGridProps {
  projects: Project[]
}

export function BentoGrid({ projects }: BentoGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <BentoCard key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}

interface BentoCardProps {
  project: Project
  index: number
}

function BentoCard({ project, index }: BentoCardProps) {
  const isLarge = project.size === "large"
  const isMedium = project.size === "medium"

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative",
        isLarge && "sm:col-span-2 sm:row-span-2",
        isMedium && "sm:col-span-2 lg:col-span-1"
      )}
    >
      <Link href={project.href} className="block">
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "relative overflow-hidden rounded-2xl border border-border bg-card",
            isLarge ? "aspect-[16/10]" : "aspect-[4/3]"
          )}
        >
          {/* Image */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className={cn("font-bold text-foreground", isLarge ? "text-2xl" : "text-lg")}>
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
              {project.description}
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
              View Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>

          {/* Always visible title bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-4 transition-opacity duration-300 group-hover:opacity-0">
            <h3 className="font-semibold text-foreground">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.category}</p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
