/**
 * @module lib/metadata
 * Utilities for generating structured metadata for SEO and sharing
 */

import type { Metadata } from "next"
import { SITE_NAME, SITE_URL, SEO_DEFAULTS } from "@/constants"
import type { PageMetadata } from "@/types"

/**
 * Generate Next.js Metadata object from PageMetadata
 */
export function generateMetadata(config: PageMetadata): Metadata {
  const title = config.title || SEO_DEFAULTS.title
  const description = config.description || SEO_DEFAULTS.description
  const keywords = config.keywords
    ? Array.from(config.keywords)
    : Array.from(SEO_DEFAULTS.keywords)
  const canonicalUrl = config.canonicalUrl || SITE_URL

  return {
    title,
    description,
    keywords,
    authors: [{ name: config.author || SEO_DEFAULTS.author }],
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    openGraph: {
      title,
      description,
      type: (config.ogType as any) || "website",
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: config.ogImage
        ? [
            {
              url: config.ogImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: config.ogImage ? [config.ogImage] : undefined,
    },
  }
}

/**
 * Default root metadata
 */
export const rootMetadata: Metadata = generateMetadata({
  title: SEO_DEFAULTS.title,
  description: SEO_DEFAULTS.description,
  keywords: Array.from(SEO_DEFAULTS.keywords),
  author: SEO_DEFAULTS.author,
  ogType: "website",
})
