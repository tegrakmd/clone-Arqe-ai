/**
 * @module datas/faq.types
 * FAQ-related type definitions
 */

/**
 * Individual FAQ item
 */
export interface FaqItem {
  /** Unique identifier for the FAQ item */
  id: string

  /** Question text */
  question: string

  /** Answer text */
  answer: string
}

/**
 * FAQ category containing multiple items
 */
export interface FaqCategory {
  /** Unique identifier for the category */
  id: string

  /** Display label for the category */
  label: string

  /** FAQ items in this category */
  items: readonly FaqItem[]
}

/**
 * Complete FAQ data structure
 */
export interface FaqData {
  /** FAQ section title */
  title: string

  /** FAQ categories */
  categories: readonly FaqCategory[]
}

/**
 * Props for FAQ section component
 */
export interface FaqSectionProps {
  /** Optional custom class name */
  className?: string

  /** FAQ data to display */
  data?: FaqData
}

/**
 * Props for individual FAQ item component
 */
export interface FaqItemProps {
  /** FAQ item data */
  item: FaqItem

  /** Whether the item is currently expanded */
  isOpen: boolean

  /** Callback when item is toggled */
  onToggle: () => void
}
