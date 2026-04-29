"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

/**
 * Decorative entrance animation: hand-drawn line flowers rise from the bottom
 * of the screen and bloom in. Inspired by engraving / botanical line art.
 *
 * Color: inherits from the wrapping element via `currentColor`,
 * which we set to `text-primary` (the same green as the
 * "Naruči na Instagramu" button).
 */

type FlowerKind = "daisy" | "tulip" | "bud" | "sprig"

type FlowerInstance = {
  kind: FlowerKind
  /** Horizontal position in % of viewport width */
  left: number
  /** Scale factor */
  scale: number
  /** Stagger delay in seconds */
  delay: number
  /** Slight rotation in deg, for organic feel */
  rotate?: number
  /** Hide on small screens to keep mobile clean */
  hideOnMobile?: boolean
}

const FLOWERS: FlowerInstance[] = [
  { kind: "sprig", left: 4, scale: 0.9, delay: 0.05, rotate: -6, hideOnMobile: true },
  { kind: "daisy", left: 14, scale: 1, delay: 0.15 },
  { kind: "tulip", left: 26, scale: 0.85, delay: 0.3, rotate: 3, hideOnMobile: true },
  { kind: "bud", left: 38, scale: 1.05, delay: 0.2 },
  { kind: "sprig", left: 50, scale: 0.8, delay: 0.45, rotate: -3, hideOnMobile: true },
  { kind: "daisy", left: 62, scale: 0.9, delay: 0.25 },
  { kind: "tulip", left: 74, scale: 1, delay: 0.4, rotate: -4, hideOnMobile: true },
  { kind: "bud", left: 86, scale: 0.85, delay: 0.35 },
  { kind: "sprig", left: 96, scale: 0.95, delay: 0.5, rotate: 5, hideOnMobile: true },
]

export function FlowerRise() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[55%] overflow-hidden text-primary"
    >
      {/* Soft glow at the base to suggest light/upliftment */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/[0.06] via-primary/[0.02] to-transparent" />

      {FLOWERS.map((f, i) => (
        <Flower key={i} flower={f} reduced={reduced} />
      ))}
    </div>
  )
}

function Flower({ flower, reduced }: { flower: FlowerInstance; reduced: boolean }) {
  const baseDuration = reduced ? 0.01 : 1.6
  const riseDuration = reduced ? 0.01 : 1.4

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: riseDuration,
        delay: reduced ? 0 : flower.delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        left: `${flower.left}%`,
        transform: `translateX(-50%) rotate(${flower.rotate ?? 0}deg)`,
      }}
      className={`absolute bottom-0 origin-bottom ${
        flower.hideOnMobile ? "hidden md:block" : ""
      }`}
    >
      <div
        style={{ transform: `scale(${flower.scale})`, transformOrigin: "bottom center" }}
      >
        <FlowerSVG kind={flower.kind} delay={flower.delay} duration={baseDuration} />
      </div>
    </motion.div>
  )
}

function FlowerSVG({
  kind,
  delay,
  duration,
}: {
  kind: FlowerKind
  delay: number
  duration: number
}) {
  switch (kind) {
    case "daisy":
      return <DaisySVG delay={delay} duration={duration} />
    case "tulip":
      return <TulipSVG delay={delay} duration={duration} />
    case "bud":
      return <BudSVG delay={delay} duration={duration} />
    case "sprig":
      return <SprigSVG delay={delay} duration={duration} />
  }
}

const STROKE = 1.6

/* --------------------------- Individual flowers --------------------------- */

function DaisySVG({ delay, duration }: { delay: number; duration: number }) {
  // Petals positioned around center (50, 70) inside viewBox 100 x 260
  const petals = Array.from({ length: 8 }, (_, i) => i)
  return (
    <svg
      width="110"
      height="260"
      viewBox="0 0 100 260"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="block sm:w-[120px] md:w-[140px]"
    >
      {/* Stem */}
      <motion.path
        d="M50 260 C 50 220, 48 180, 50 140"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration, delay: delay + 0.1, ease: "easeOut" }}
      />
      {/* Leaves */}
      <motion.path
        d="M50 210 C 32 202, 22 210, 18 220 C 30 222, 44 218, 50 214"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: duration * 0.6, delay: delay + 0.4, ease: "easeOut" }}
      />
      <motion.path
        d="M50 178 C 66 170, 78 178, 82 188 C 70 192, 56 188, 50 184"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: duration * 0.6, delay: delay + 0.55, ease: "easeOut" }}
      />
      {/* Petals */}
      {petals.map((i) => (
        <motion.ellipse
          key={i}
          cx="50"
          cy="50"
          rx="6"
          ry="16"
          transform={`rotate(${i * 45} 50 70)`}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: duration * 0.5, delay: delay + 0.7 + i * 0.05, ease: "easeOut" },
            opacity: { duration: 0.2, delay: delay + 0.7 + i * 0.05 },
          }}
        />
      ))}
      {/* Center */}
      <motion.circle
        cx="50"
        cy="70"
        r="6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: delay + 1.1, ease: "easeOut" }}
      />
    </svg>
  )
}

function TulipSVG({ delay, duration }: { delay: number; duration: number }) {
  return (
    <svg
      width="100"
      height="240"
      viewBox="0 0 100 240"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="block sm:w-[110px] md:w-[120px]"
    >
      {/* Stem */}
      <motion.path
        d="M50 240 L 50 110"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration, delay: delay + 0.1, ease: "easeOut" }}
      />
      {/* Leaf */}
      <motion.path
        d="M50 200 C 28 188, 18 160, 22 130 C 38 152, 48 178, 50 200"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: duration * 0.7, delay: delay + 0.45, ease: "easeOut" }}
      />
      {/* Tulip cup outer */}
      <motion.path
        d="M28 110 C 28 78, 40 60, 50 56 C 60 60, 72 78, 72 110 C 64 96, 58 110, 50 110 C 42 110, 36 96, 28 110 Z"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: duration * 0.9, delay: delay + 0.8, ease: "easeOut" },
          opacity: { duration: 0.3, delay: delay + 0.8 },
        }}
      />
      {/* Inner petal hint */}
      <motion.path
        d="M50 56 C 48 76, 50 96, 50 110"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: duration * 0.5, delay: delay + 1.2, ease: "easeOut" }}
      />
    </svg>
  )
}

function BudSVG({ delay, duration }: { delay: number; duration: number }) {
  return (
    <svg
      width="100"
      height="250"
      viewBox="0 0 100 250"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="block sm:w-[110px] md:w-[125px]"
    >
      {/* Stem */}
      <motion.path
        d="M50 250 C 50 210, 52 180, 50 130"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration, delay: delay + 0.1, ease: "easeOut" }}
      />
      {/* Right leaf */}
      <motion.path
        d="M50 195 C 70 184, 84 192, 88 206 C 72 210, 58 204, 50 200"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: duration * 0.6, delay: delay + 0.45, ease: "easeOut" }}
      />
      {/* Left small leaf */}
      <motion.path
        d="M50 165 C 36 158, 26 162, 22 172 C 32 178, 44 174, 50 170"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: duration * 0.6, delay: delay + 0.6, ease: "easeOut" }}
      />
      {/* Rose-bud spiral */}
      <motion.path
        d="M50 130
           C 42 122, 32 118, 32 102
           C 32 86, 50 82, 56 96
           C 60 84, 74 90, 68 106
           C 74 112, 68 128, 50 130 Z"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: duration * 0.9, delay: delay + 0.9, ease: "easeOut" },
          opacity: { duration: 0.3, delay: delay + 0.9 },
        }}
      />
      {/* Inner curl */}
      <motion.path
        d="M44 116 C 50 110, 58 110, 60 118"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: duration * 0.5, delay: delay + 1.4, ease: "easeOut" }}
      />
    </svg>
  )
}

function SprigSVG({ delay, duration }: { delay: number; duration: number }) {
  return (
    <svg
      width="80"
      height="200"
      viewBox="0 0 80 200"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="block sm:w-[90px] md:w-[100px]"
    >
      {/* Main stem */}
      <motion.path
        d="M40 200 C 38 160, 42 120, 40 70"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration, delay: delay + 0.1, ease: "easeOut" }}
      />
      {/* Leaves alternating */}
      {[
        { d: "M40 170 C 22 162, 14 168, 12 180 C 24 184, 36 178, 40 174", del: 0.4 },
        { d: "M40 145 C 56 138, 66 144, 68 156 C 56 160, 44 154, 40 150", del: 0.55 },
        { d: "M40 118 C 24 112, 16 118, 14 128 C 26 132, 36 126, 40 122", del: 0.7 },
        { d: "M40 92 C 54 86, 64 92, 66 102 C 54 106, 44 100, 40 96", del: 0.85 },
      ].map((leaf, i) => (
        <motion.path
          key={i}
          d={leaf.d}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: duration * 0.55, delay: delay + leaf.del, ease: "easeOut" }}
        />
      ))}
      {/* Tip bud */}
      <motion.circle
        cx="40"
        cy="64"
        r="4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: delay + 1.05, ease: "easeOut" }}
      />
    </svg>
  )
}
