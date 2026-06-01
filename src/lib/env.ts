/**
 * @module lib/env
 * Environment variable validation and access
 */

/**
 * Get environment variable with type safety
 */
export function getEnv(key: string, defaultValue?: string): string {
  const value = process.env[key]

  if (!value && !defaultValue) {
    throw new Error(`Missing required environment variable: ${key}`)
  }

  return value ?? defaultValue ?? ""
}

/**
 * Get optional environment variable
 */
export function getOptionalEnv(key: string): string | undefined {
  return process.env[key]
}

/**
 * Environment configuration
 */
export const ENV = {
  // App
  NODE_ENV: getEnv("NODE_ENV", "development"),
  SITE_URL: getEnv("NEXT_PUBLIC_SITE_URL", "http://localhost:3000"),

  // Features
  ENABLE_ANALYTICS: getOptionalEnv("NEXT_PUBLIC_ENABLE_ANALYTICS") === "true",
  ENABLE_SENTRY: getOptionalEnv("NEXT_PUBLIC_ENABLE_SENTRY") === "true",

  // External Services
  STORAGE_BUCKET:
    getOptionalEnv("NEXT_PUBLIC_STORAGE_BUCKET") ??
    "arqe-storage-images.nyc3.cdn.digitaloceanspaces.com",
} as const

export const isProduction = ENV.NODE_ENV === "production"
export const isDevelopment = ENV.NODE_ENV === "development"
export const isTest = ENV.NODE_ENV === "test"
