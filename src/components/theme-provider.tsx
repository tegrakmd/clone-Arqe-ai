"use client"

import type { FC, ReactNode } from "react"
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useTheme } from "next-themes"

interface CustomThemeProviderProps extends Omit<
  React.ComponentProps<typeof NextThemesProvider>,
  "children"
> {
  children: ReactNode
}

/**
 * ThemeHotkey Component
 * Allows toggling theme with 'D' key when not typing
 */
const ThemeHotkey: FC = () => {
  const { resolvedTheme, setTheme } = useTheme()

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      // Skip if default prevented or key is repeating
      if (event.defaultPrevented || event.repeat) {
        return
      }

      // Skip if modifier keys are pressed
      if (event.metaKey || event.ctrlKey || event.altKey) {
        return
      }

      // Check if the key is 'd'
      if (event.key.toLowerCase() !== "d") {
        return
      }

      // Skip if typing in input-like elements
      if (isTypingTarget(event.target)) {
        return
      }

      // Toggle theme
      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [resolvedTheme, setTheme])

  return null
}

/**
 * Check if target is a typing input element
 */
function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  )
}

/**
 * ThemeProvider Component
 * Provides theme context and hotkey functionality
 */
const ThemeProvider: FC<CustomThemeProviderProps> = ({
  children,
  ...props
}) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <ThemeHotkey />
      {children}
    </NextThemesProvider>
  )
}

export { ThemeProvider }
