"use client"
import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { LazyVideo } from "@/components/LazyVideo"

// ───────────────────────────── Types ─────────────────────────────
interface CreativeWorkItem {
  id: string
  type: "image" | "video"
  src: string
  alt: string
  title: string
}

// ──────────────────────────── Données ────────────────────────────
const GAP = 22
const ITEM_ASPECT = 285.566 / 206.667
const DESKTOP_BREAKPOINT = 1024
const VISIBLE_MOBILE = 2
const VISIBLE_DESKTOP = 4.1

const creativeWorksData: CreativeWorkItem[] = [
  {
    id: "developer",
    type: "image",
    src: "/1.jpg",
    alt: "CEO",
    title: "Web Developer Tegra Kmd",
  },

  {
    id: "web",
    type: "video",
    src: "https://arqe-storage-images.nyc3.cdn.digitaloceanspaces.com/landing-page/creative_work/media_library/1776514619977_web_mobile_2_smaller.mp4",
    alt: "Web, E-Commerce Design, UI/UX",
    title: "Web, E-Commerce Design, UI/UX",
  },
  {
    id: "branding",
    type: "video",
    src: "https://arqe-storage-images.nyc3.cdn.digitaloceanspaces.com/landing-page/creative_work/media_library/1776514808782_branding_mobile_3_smaller.mp4",
    alt: "Branding, Identity & Art Direction",
    title: "Branding, Identity & Art Direction",
  },
  {
    id: "social",
    type: "image",
    src: "https://arqe-storage-images.nyc3.cdn.digitaloceanspaces.com/landing-page/creative_work/media_library/1776514616001_Social_Content.webp",
    alt: "Social Content",
    title: "Social Content",
  },
  {
    id: "campaigns",
    type: "image",
    src: "https://arqe-storage-images.nyc3.cdn.digitaloceanspaces.com/landing-page/creative_work/media_library/1776514578239_Campaigns___Advertising.webp",
    alt: "Campaigns & Advertising",
    title: "Campaigns & Advertising",
  },
  {
    id: "presentations",
    type: "video",
    src: "https://arqe-storage-images.nyc3.cdn.digitaloceanspaces.com/landing-page/creative_work/media_library/1776514610940_presentation_mobile_smaller.mp4",
    alt: "Presentations",
    title: "Presentations",
  },
  {
    id: "moodboard",
    type: "image",
    src: "https://arqe-storage-images.nyc3.cdn.digitaloceanspaces.com/landing-page/creative_work/media_library/1776514606019_Moodboard.webp",
    alt: "Moodboard & Pitches",
    title: "Moodboard & Pitches",
  },
]

// Trois jeux pour l'effet de boucle infinie
const tripleData: CreativeWorkItem[] = [
  ...creativeWorksData,
  ...creativeWorksData,
  ...creativeWorksData,
]

const TOTAL_ORIGINAL = creativeWorksData.length // 7
const START_INDEX = TOTAL_ORIGINAL // on commence au 1er élément du set du milieu

// ─────────────────────────── Composant ───────────────────────────
const CreativeWork = () => {
  const [currentIndex, setCurrentIndex] = useState(START_INDEX)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [containerWidth, setContainerWidth] = useState(0)
  const [visibleCount, setVisibleCount] = useState(VISIBLE_MOBILE)
  const containerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const itemWidth =
    containerWidth > 0
      ? (containerWidth - (visibleCount - 1) * GAP) / visibleCount
      : 206.667
  const itemHeight = itemWidth * ITEM_ASPECT
  const itemTotalWidth = itemWidth + GAP

  // ---- Mesure conteneur + nombre d'éléments visibles ----
  useEffect(() => {
    const updateLayout = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth)
      }
      setVisibleCount(
        window.innerWidth >= DESKTOP_BREAKPOINT
          ? VISIBLE_DESKTOP
          : VISIBLE_MOBILE
      )
    }
    updateLayout()
    window.addEventListener("resize", updateLayout)
    return () => window.removeEventListener("resize", updateLayout)
  }, [])

  // ---- Auto-play ----
  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 2800)
  }, [])

  useEffect(() => {
    startInterval()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [startInterval])

  // ---- Gestion du retour à la boucle centrale (wrapping) ----
  useEffect(() => {
    if (currentIndex >= TOTAL_ORIGINAL * 2) {
      // Trop à droite → on revient au set du milieu sans animation
      const timeout = setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(currentIndex - TOTAL_ORIGINAL)
        requestAnimationFrame(() => setIsTransitioning(true))
      }, 400)
      return () => clearTimeout(timeout)
    } else if (currentIndex < TOTAL_ORIGINAL) {
      // Trop à gauche → on revient au set du milieu sans animation
      const timeout = setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(currentIndex + TOTAL_ORIGINAL)
        requestAnimationFrame(() => setIsTransitioning(true))
      }, 400)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex])

  // ---- Navigation ----
  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1)
    startInterval()
  }

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1)
    startInterval()
  }

  // ---- Décalage : afficher visibleCount éléments (2 mobile, 4 desktop) ----
  const visibleWidth = visibleCount * itemWidth + (visibleCount - 1) * GAP
  const translateX =
    containerWidth > 0
      ? -(currentIndex * itemTotalWidth) + (containerWidth - visibleWidth) / 2
      : 0

  const isItemActive = (index: number) =>
    index >= currentIndex && index < currentIndex + visibleCount

  const isItemNearActive = (index: number) =>
    index >= currentIndex - 1 && index < currentIndex + visibleCount + 1

  // ───────────────────────── Rendu ─────────────────────────
  return (
    <section id="creative_work" className="pb-[100px] sm:pb-[230px]">
      {/* En-tête */}
      <div className="mb-10 flex flex-col items-center gap-[5px] px-6 sm:mb-14">
        <h2
          className="text-center text-[30px] leading-[34px] tracking-[-0.4px] text-[#fafafa]"
          style={{ fontWeight: 600 }}
        >
          Production-ready
        </h2>
        <p className="max-w-[270px] text-center text-[16px] leading-[1.2] text-[#a1a1a1] sm:max-w-[360px]">
          <span>Visuals designed for campaigns,</span>
          <span>
            <br />
            products, and stories.
          </span>
        </p>
      </div>

      {/* Carrousel */}
      <div style={{ maxWidth: 1160, margin: "0px auto", overflow: "hidden" }}>
        <div
          ref={containerRef}
          style={{
            overflow: "hidden",
            paddingLeft: 20,
            paddingRight: 20,
            touchAction: "pan-y",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: GAP,
              paddingBottom: 16,

              willChange: "transform",
              transform: `translateX(${translateX}px)`,
              transition: isTransitioning ? "transform 0.4s ease-out" : "none",
            }}
          >
            {tripleData.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                style={{
                  flexShrink: 0,
                  width: itemWidth,
                  cursor: "pointer",
                  opacity: isItemActive(index) ? 1 : 0.4,
                  transition: "opacity 0.4s ease-out",
                }}
              >
                {/* Média */}
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    backgroundColor: "#1a1a1a",
                    width: itemWidth,
                    height: itemHeight,
                    borderRadius: 10,
                  }}
                >
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1024px) 45vw, 275px"
                      className="object-cover"
                      loading={item.id === "developer" ? "eager" : "lazy"}
                    />
                  ) : isItemNearActive(index) ? (
                    <LazyVideo
                      src={item.src}
                      autoPlay
                      loop
                      active={isItemActive(index)}
                      className="size-full object-cover"
                    />
                  ) : (
                    <div className="size-full bg-[#1a1a1a]" aria-hidden />
                  )}
                </div>

                {/* Titre */}
                <h3
                  className="mt-3 text-sm text-foreground sm:mt-[15px] sm:text-base"
                  style={{
                    lineHeight: 1.4,
                    color: "#fafafa",
                  }}
                >
                  <span>{item.title}</span>
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Boutons de navigation */}
        <div className="mt-[20px] flex justify-end gap-2 px-5 sm:gap-[10px] sm:px-8 lg:px-0">
          <button
            onClick={handlePrev}
            className="flex h-[34px] w-[34px] items-center justify-center rounded-[4px] bg-[#1C1C1C] text-white"
            aria-label="Previous"
            tabIndex={0}
            style={{
              borderWidth: "medium",
              borderStyle: "none",
              borderColor: "currentcolor",
              borderImage: "initial",
              cursor: "pointer",
            }}
          >
            <svg
              className="h-[18px] w-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="flex h-[34px] w-[34px] items-center justify-center rounded-[4px] bg-[#1C1C1C] text-white"
            aria-label="Next"
            tabIndex={0}
            style={{
              borderWidth: "medium",
              borderStyle: "none",
              borderColor: "currentcolor",
              borderImage: "initial",
              cursor: "pointer",
            }}
          >
            <svg
              className="h-[18px] w-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default CreativeWork
