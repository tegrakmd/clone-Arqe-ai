/**
 * @module lib/validators
 * Type-safe validation functions and schemas
 */

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export function isProduction(): boolean {
  return process.env.NODE_ENV === "production"
}

export function isDevelopment(): boolean {
  return process.env.NODE_ENV === "development"
}

export function isSSR(): boolean {
  return typeof window === "undefined"
}

export function isCSR(): boolean {
  return typeof window !== "undefined"
}

/**
 * Type guard to check if value is not null or undefined
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

/**
 * Type guard to check if value is a string
 */
export function isString(value: unknown): value is string {
  return typeof value === "string"
}

/**
 * Type guard to check if value is a number
 */
export function isNumber(value: unknown): value is number {
  return typeof value === "number" && !isNaN(value)
}

/**
 * Type guard to check if value is an object
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

/**
 * Type guard to check if value is an array
 */
export function isArray<T = unknown>(value: unknown): value is Array<T> {
  return Array.isArray(value)
}
