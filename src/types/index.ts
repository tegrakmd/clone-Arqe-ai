/**
 * @module types
 * Central type definitions for the ARQE application
 */

// ─────────────────────── Common Types ──────────────────────
export type ClassNameValue = string | undefined | null | false

export type ReactNodeWithoutChildren = Exclude<
  React.ReactNode,
  React.ReactNode[]
>

// ─────────────────────── Component Props ──────────────────────
export interface BaseComponentProps {
  className?: string
  id?: string
  "data-testid"?: string
}

export interface BaseSectionProps extends BaseComponentProps {
  title?: string
  description?: string
}

// ─────────────────────── UI Props ──────────────────────
export interface ButtonProps extends BaseComponentProps {
  variant?: "default" | "outline" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  isLoading?: boolean
}

// ─────────────────────── Video Props ──────────────────────
export interface VideoProps extends BaseComponentProps {
  src: string
  poster?: string
  priority?: boolean
  eager?: boolean
  active?: boolean
  autoPlay?: boolean
  controls?: boolean
  muted?: boolean
  loop?: boolean
  preload?: "none" | "metadata" | "auto"
}

// ─────────────────────── Layout Props ──────────────────────
export interface LayoutProps {
  children: React.ReactNode
}

// ─────────────────────── SEO Metadata ──────────────────────
export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  author?: string
  ogImage?: string
  ogType?: "website" | "article" | "product"
  canonicalUrl?: string
}

// ─────────────────────── API Response Types ──────────────────────
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
  }
}

export interface PaginationParams {
  page: number
  limit: number
  offset?: number
}

// ─────────────────────── Utility Types ──────────────────────
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}

export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type Maybe<T> = Nullable<Optional<T>>

// ─────────────────────── Async Types ──────────────────────
export interface AsyncState<T> {
  loading: boolean
  error: Error | null
  data: T | null
}
