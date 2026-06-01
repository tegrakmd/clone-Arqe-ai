"use client"

import type { FC, ReactNode } from "react"
import { useEffect, useRef } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { isCSR } from "@/lib/validators"

// Register ScrollTrigger plugin once
if (isCSR()) {
  gsap.registerPlugin(ScrollTrigger)
}

// Singleton instance for external access
let lenisInstance: Lenis | null = null

/**
 * Get the current Lenis instance
 */
export function getLenis(): Lenis | null {
  return lenisInstance
}

interface LenisProviderProps {
  children: ReactNode
}

export const LenisProvider: FC<LenisProviderProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null)
  const tickerRef = useRef<boolean>(false)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    // Respect user motion preferences
    if (isCSR()) {
      const motionPreference = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      )
      if (motionPreference.matches) {
        return
      }
    }

    // Initialize Lenis with smooth scroll settings
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis
    lenisInstance = lenis

    // Synchronize ScrollTrigger with Lenis scroll events
    const handleScroll = (): void => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      scrollTimeoutRef.current = setTimeout(() => {
        ScrollTrigger.update()
      }, 16)
    }

    lenis.on("scroll", handleScroll)

    // Setup animation frame ticker
    const updateFrame = (time: number): void => {
      lenis.raf(time * 1000)
      if (tickerRef.current) {
        requestAnimationFrame(updateFrame)
      }
    }

    tickerRef.current = true
    requestAnimationFrame(updateFrame)

    // Optimize GSAP ticker
    gsap.ticker.lagSmoothing(0)

    // Initial ScrollTrigger refresh
    ScrollTrigger.refresh()

    // Cleanup function
    return () => {
      tickerRef.current = false

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      lenis.destroy()
      lenisRef.current = null
      lenisInstance = null
    }
  }, [])

  return <>{children}</>
}
