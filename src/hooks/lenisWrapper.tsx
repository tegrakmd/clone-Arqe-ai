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
  // const tickerRef = useRef<boolean>(false)
  // const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

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

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 2.2, // Note: l'option 'duration' est souvent ignorée dans les versions récentes au profit de 'lerp'
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.3,
      touchMultiplier: 2.5,
      syncTouch: true,
      syncTouchLerp: 0.075,
      lerp: 0.1,
    })

    lenisRef.current = lenis
    lenisInstance = lenis

    // Synchronisation de ScrollTrigger avec Lenis
    lenis.on("scroll", ScrollTrigger.update)

    // Utiliser le Ticker de GSAP pour rafraîchir Lenis (Meilleure pratique)
    const updateFrame = (time: number): void => {
      // gsap.ticker donne le temps en secondes, lenis a besoin de millisecondes
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateFrame)

    // Optimize GSAP ticker for smooth performance
    gsap.ticker.lagSmoothing(0)

    // Initial ScrollTrigger refresh
    ScrollTrigger.refresh()

    // Cleanup function
    return () => {
      gsap.ticker.remove(updateFrame) // Retirer l'événement GSAP
      lenis.destroy()
      lenisRef.current = null
      lenisInstance = null
    }
  }, [])

  return <>{children}</>
}
