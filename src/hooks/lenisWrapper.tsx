"use client"

import type { FC, ReactNode } from "react"
import { useEffect, useRef } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { isCSR } from "@/lib/validators"

// Enregistrer ScrollTrigger uniquement côté client
if (isCSR()) {
  gsap.registerPlugin(ScrollTrigger)
}

// Instance globale pour y accéder depuis d'autres composants si besoin
let lenisInstance: Lenis | null = null

export function getLenis(): Lenis | null {
  return lenisInstance
}

interface LenisProviderProps {
  children: ReactNode
}

export const LenisProvider: FC<LenisProviderProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Respecter les préférences système de réduction des animations
    if (isCSR()) {
      const motionPreference = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      )
      if (motionPreference.matches) {
        return
      }
    }

    // Initialisation de Lenis
    const lenis = new Lenis({
      lerp: 0.1, // Contrôle la fluidité (0 à 1)
      wheelMultiplier: 1.3, // Vitesse de la molette sur desktop
      smoothWheel: true, // Smooth scroll activé pour la souris

      // --- OPTIMISATION MOBILE ---
      // false = laisse le scroll tactile natif (plus naturel et performant)
      // true = force le smooth scroll de Lenis sur tactile (uniquement si tu as des animations GSAP "scrub" très complexes)
      syncTouch: false,
      touchMultiplier: 2.5,
    })

    lenisRef.current = lenis
    lenisInstance = lenis

    // Synchroniser la position de ScrollTrigger avec le scroll de Lenis
    lenis.on("scroll", ScrollTrigger.update)

    // Utiliser le Ticker de GSAP pour rafraîchir Lenis à chaque frame
    // C'est ce qui garantit qu'il n'y ait aucun "jitter" (saccade) entre le scroll et les animations
    const updateFrame = (time: number): void => {
      // gsap.ticker.time est en secondes, Lenis attend des millisecondes
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateFrame)

    // Empêche GSAP d'essayer de compenser les lags, ce qui perturberait le scroll
    gsap.ticker.lagSmoothing(0)

    // Un léger délai pour s'assurer que le DOM est complètement peint avant de calculer les hauteurs
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    // Nettoyage au démontage du composant
    return () => {
      gsap.ticker.remove(updateFrame)
      lenis.destroy()
      lenisRef.current = null
      lenisInstance = null
    }
  }, [])

  return <>{children}</>
}
