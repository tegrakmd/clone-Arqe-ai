"use client"

import type { FC, VideoHTMLAttributes } from "react"
import { useEffect, useRef, useState } from "react"

interface LazyVideoProps extends Omit<
  VideoHTMLAttributes<HTMLVideoElement>,
  "children"
> {
  /** Video source URL */
  src: string

  /** Load immediately (hero / above-the-fold content) */
  priority?: boolean

  /** Load as soon as the component mounts (e.g., carousel duplicates) */
  eager?: boolean

  /** Controls playback state when loaded */
  active?: boolean
}

/**
 * Lazy-loading video component with intersection observer
 * Optimizes performance by deferring video loading until visible
 *
 * @example
 * ```tsx
 * <LazyVideo
 *   src="/video.mp4"
 *   priority={false}
 *   active={true}
 *   className="w-full h-auto"
 * />
 * ```
 */
export const LazyVideo: FC<LazyVideoProps> = ({
  src,
  priority = false,
  eager = false,
  active = true,
  className,
  autoPlay,
  ...props
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState<boolean>(priority || eager)

  // Setup intersection observer for lazy loading
  useEffect(() => {
    // Skip observer if already loading
    if (priority || eager) return

    const videoElement = videoRef.current
    if (!videoElement) return

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          intersectionObserver.disconnect()
        }
      },
      { rootMargin: "300px" }
    )

    intersectionObserver.observe(videoElement)

    return () => {
      intersectionObserver.disconnect()
    }
  }, [priority, eager])

  // Handle playback based on active state
  useEffect(() => {
    const videoElement = videoRef.current
    if (!videoElement || !shouldLoad) return

    const handlePlayback = async (): Promise<void> => {
      try {
        if (active && autoPlay !== false) {
          await videoElement.play()
        } else {
          videoElement.pause()
        }
      } catch (error) {
        // Playback might be blocked by browser policy
        console.debug("Video playback control:", error)
      }
    }

    void handlePlayback()
  }, [active, autoPlay, shouldLoad])

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      preload={priority || eager ? "auto" : "none"}
      aria-hidden="true"
      inert
      className={className}
      {...props}
    >
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  )
}
