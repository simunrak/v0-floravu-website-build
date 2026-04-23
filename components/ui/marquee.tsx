"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  pauseOnHover?: boolean
  reverse?: boolean
  speed?: "slow" | "normal" | "fast"
}

const speedMap = {
  slow: "40s",
  normal: "25s",
  fast: "15s",
}

export function Marquee({
  children,
  className,
  pauseOnHover = true,
  reverse = false,
  speed = "normal",
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--gap:2rem] [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
        style={{
          animationDuration: speedMap[speed],
        }}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
        style={{
          animationDuration: speedMap[speed],
        }}
        aria-hidden="true"
      >
        {children}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - var(--gap)));
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  )
}
