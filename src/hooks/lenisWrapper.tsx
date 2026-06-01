"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// On enregistre le plugin une seule fois
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Singleton pattern pour l'accès externe si nécessaire
let lenisInstance: Lenis | null = null

export function getLenis() {
  return lenisInstance
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const tickerRef = useRef<boolean>(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      if (mediaQuery.matches) {
        return
      }
    }
    // 1. Initialisation avec des réglages plus "smooth"
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis
    lenisInstance = lenis

    // 2. Synchronisation ScrollTrigger sans bloquer à chaque frame
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null
    lenis.on("scroll", () => {
      if (scrollTimeout) clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        ScrollTrigger.update()
      }, 16)
    })

    // 3. Ticker optimisé - utiliser requestAnimationFrame directement
    const updateFrame = (time: number) => {
      lenis.raf(time * 1000)
      if (tickerRef.current) {
        requestAnimationFrame(updateFrame)
      }
    }

    tickerRef.current = true
    requestAnimationFrame(updateFrame)
    gsap.ticker.lagSmoothing(0)

    // Initial refresh
    ScrollTrigger.refresh()

    return () => {
      // Nettoyage propre
      tickerRef.current = false
      if (scrollTimeout) clearTimeout(scrollTimeout)
      lenis.destroy()
      lenisRef.current = null
      lenisInstance = null
    }
  }, [])

  return <>{children}</>
}
