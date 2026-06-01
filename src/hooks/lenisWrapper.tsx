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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      if (mediaQuery.matches) {
        return
      }
    }
    // 1. Initialisation avec des réglages plus "smooth"
    const lenis = new Lenis({
      duration: 1.5, // Augmenté de 1.2 à 1.5 pour plus d'inertie
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Courbe exponentielle classique
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1, // Si c'est trop lent, augmente à 1.2 ou 1.5
      touchMultiplier: 2, // Meilleure réactivité sur mobile
    })

    lenisRef.current = lenis
    lenisInstance = lenis

    // 2. Synchronisation ScrollTrigger
    // Dit à ScrollTrigger de mettre à jour ses calculs quand Lenis scroll
    lenis.on("scroll", ScrollTrigger.update)

    // 3. Boucle d'animation (Ticker) optimisée
    // On utilise le ticker de GSAP pour piloter Lenis. C'est CRUCIAL pour la synchro.
    const update = (time: number) => {
      lenis.raf(time * 1000)
    }

    // On ajoute la fonction au ticker GSAP.
    // Le lagSmoothing(0) est vital pour éviter des sauts lors de calculs lourds.
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    // Initial refresh pour s'assurer que tout est calé au chargement
    ScrollTrigger.refresh()

    return () => {
      // Nettoyage propre
      gsap.ticker.remove(update)
      lenis.destroy()
      lenisRef.current = null
      lenisInstance = null
    }
  }, [])

  return <>{children}</>
}
