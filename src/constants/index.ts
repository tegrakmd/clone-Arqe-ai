/**
 * @module constants
 * Application-wide constants and configuration values
 */

export const SITE_NAME = "ARQE" as const
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arqe.app"
export const SITE_DESCRIPTION =
  "Browse & download curated AI visuals — royalty free, 4K, created with intent."

// ─────────────────────── SEO Constants ──────────────────────
export const SEO_DEFAULTS = {
  title: `${SITE_NAME} - Art Directed Stock Library`,
  description: SITE_DESCRIPTION,
  keywords: [
    "stock library",
    "AI visuals",
    "royalty free",
    "4K images",
    "art direction",
  ],
  author: "ARQE Team",
} as const

// ─────────────────────── API Constants ──────────────────────
export const API_ROUTES = {
  BASE: "/api",
  AUTH: "/api/auth",
  IMAGES: "/api/images",
  VIDEOS: "/api/videos",
  USERS: "/api/users",
} as const

// ─────────────────────── Storage Keys ──────────────────────
export const STORAGE_KEYS = {
  THEME: "arqe-theme",
  PREFERENCES: "arqe-preferences",
  RECENT_SEARCHES: "arqe-recent-searches",
} as const

// ─────────────────────── Animation Constants ──────────────────────
export const ANIMATION = {
  DURATION: {
    FAST: 0.2,
    NORMAL: 0.3,
    SLOW: 0.5,
  },
  EASING: {
    EASE_IN: "easeIn",
    EASE_OUT: "easeOut",
    EASE_IN_OUT: "easeInOut",
  },
} as const

// ─────────────────────── Breakpoints ──────────────────────
export const BREAKPOINTS = {
  MOBILE: 320,
  TABLET: 768,
  DESKTOP: 1024,
  WIDE: 1440,
} as const

// ─────────────────────── Z-Index ──────────────────────
export const Z_INDEX = {
  DROPDOWN: 100,
  STICKY: 200,
  FIXED: 300,
  MODAL_BACKDROP: 400,
  MODAL: 500,
  TOOLTIP: 600,
} as const

// ─────────────────────── Time Constants ──────────────────────
export const TIME = {
  MS_PER_SECOND: 1000,
  MS_PER_MINUTE: 60000,
  MS_PER_HOUR: 3600000,
} as const

// ─────────────────────── Cache Constants ──────────────────────
export const CACHE = {
  ONE_HOUR: 3600,
  ONE_DAY: 86400,
  ONE_WEEK: 604800,
  ONE_MONTH: 2592000,
} as const
