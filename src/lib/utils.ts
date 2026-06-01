/**
 * @module lib/utils
 * Common utility functions
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge Tailwind CSS class names with proper conflict resolution
 * Combines clsx for conditional classes and twMerge to handle Tailwind conflicts
 *
 * @param inputs - Class values to merge
 * @returns Merged class string
 *
 * @example
 * ```tsx
 * const className = cn("px-2 py-1", "px-4") // "py-1 px-4" (px-2 is overridden)
 * const conditional = cn("px-2", condition && "text-red-500")
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Delay execution with async/await
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after delay
 *
 * @example
 * ```tsx
 * await delay(1000) // Wait 1 second
 * ```
 */
export async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Format bytes to human-readable size
 * @param bytes - Number of bytes
 * @param decimals - Number of decimal places
 * @returns Formatted string (e.g., "1.5 MB")
 */
export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return "0 Bytes"

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

/**
 * Capitalize first letter of string
 * @param str - String to capitalize
 * @returns Capitalized string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Truncate string to specified length
 * @param str - String to truncate
 * @param length - Maximum length
 * @param suffix - Suffix to add (default: "...")
 * @returns Truncated string
 */
export function truncate(str: string, length: number, suffix = "..."): string {
  if (str.length <= length) return str
  return str.slice(0, length - suffix.length) + suffix
}
