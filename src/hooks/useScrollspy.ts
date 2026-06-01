/**
 * @module hooks/useScrollspy
 * Hook for scroll spy functionality
 */

import { useEffect, useState, useCallback } from "react"

interface UseScrollspyOptions {
  /** IDs to track */
  ids: string[]

  /** Offset from top (px) */
  offset?: number

  /** Callback when active ID changes */
  onActiveIdChange?: (id: string) => void
}

/**
 * Hook to track which section is currently visible
 *
 * @example
 * ```tsx
 * const { activeId } = useScrollspy({
 *   ids: ['hero', 'features', 'pricing'],
 *   offset: 100,
 * })
 * ```
 */
export function useScrollspy({
  ids,
  offset = 0,
  onActiveIdChange,
}: UseScrollspyOptions) {
  const [activeId, setActiveId] = useState<string>("")

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + offset

    const activeElement = ids.find((id) => {
      const element = document.getElementById(id)
      if (!element) return false

      const elementTop = element.offsetTop
      const elementBottom = elementTop + element.offsetHeight

      return scrollPosition >= elementTop && scrollPosition < elementBottom
    })

    if (activeElement && activeElement !== activeId) {
      setActiveId(activeElement)
      onActiveIdChange?.(activeElement)
    }
  }, [ids, activeId, offset, onActiveIdChange])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return { activeId }
}
