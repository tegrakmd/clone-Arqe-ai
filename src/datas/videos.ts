/**
 * @module datas/videos
 * Video assets URLs and constants
 */

const STORAGE_BASE =
  "https://arqe-storage-images.nyc3.cdn.digitaloceanspaces.com"

export const HERO_VIDEO =
  `${STORAGE_BASE}/landing-page/hero/video_url/1776517135434_Arqe_reel_8_smaller.mp4` as const

export const COLLECTIONS_VIDEO =
  `${STORAGE_BASE}/landing-page/migrated/collections_landing_compressed.mp4` as const

export const SEARCH_VIDEO =
  `${STORAGE_BASE}/landing-page/migrated/search_compressed.mp4` as const

export const CTA_VIDEO =
  `${STORAGE_BASE}/landing-page/migrated/Gd5sfX1JYNTJcsZSce7DsciNWI_optimized.mp4` as const

/**
 * Video assets registry
 */
export const VIDEOS = {
  HERO: HERO_VIDEO,
  COLLECTIONS: COLLECTIONS_VIDEO,
  SEARCH: SEARCH_VIDEO,
  CTA: CTA_VIDEO,
} as const

export type VideoKey = keyof typeof VIDEOS
export type VideoUrl = (typeof VIDEOS)[VideoKey]
