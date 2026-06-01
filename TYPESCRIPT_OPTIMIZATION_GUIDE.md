/\*\*

- TYPESCRIPT OPTIMIZATION GUIDE - ARQE PROJECT
-
- Ce guide explique les optimisations TypeScript et comment les utiliser
  \*/

// ─────────────────────── TYPES ──────────────────────────

// ✅ Utiliser les types centralisés
import type {
BaseComponentProps,
ButtonProps,
VideoProps,
PageMetadata,
} from "@/types"

// ✅ Créer des interfaces stricts pour les props
interface MyComponentProps extends BaseComponentProps {
title: string
onClick: () => void
}

// ─────────────────────── CONSTANTES ──────────────────────────

// ✅ Utiliser les constantes centralisées
import {
SITE_NAME,
SEO_DEFAULTS,
ANIMATION,
BREAKPOINTS,
} from "@/constants"
import { LogoIcon, HamburgerIcon } from "@/constants/icons"
import { NAVIGATION_ROUTES } from "@/constants/navigation"

// ─────────────────────── VALIDATEURS ──────────────────────────

import {
isDefined,
isString,
isArray,
isProduction,
isCSR,
} from "@/lib/validators"

// ✅ Utiliser les type guards
if (isDefined(value)) {
// `value` n'est pas null/undefined
}

if (isString(data)) {
// `data` est un string
}

// ─────────────────────── ERREURS ──────────────────────────

import { ValidationError, NotFoundError, handleError } from "@/lib/errors"

// ✅ Lancer des erreurs typées
throw new ValidationError("Email invalide", "INVALID_EMAIL")
throw new NotFoundError("User")

// ✅ Gérer les erreurs proprement
try {
// code
} catch (error) {
const { message, code } = handleError(error)
}

// ─────────────────────── MÉTADONNÉES ──────────────────────────

import { generateMetadata } from "@/lib/metadata"

// ✅ Générer les métadonnées pour une page
export const metadata = generateMetadata({
title: "Page Title",
description: "Page description",
keywords: ["key1", "key2"],
ogType: "website",
})

// ─────────────────────── UTILITAIRES ──────────────────────────

import { cn, delay, formatBytes, capitalize, truncate } from "@/lib/utils"

// ✅ Utiliser les utilitaires
const className = cn("px-2", condition && "text-red-500")
await delay(1000)
const size = formatBytes(1024000) // "1 MB"
const text = capitalize("hello") // "Hello"

// ─────────────────────── COMPOSANTS ──────────────────────────

import type { FC } from "react"

// ✅ Typer les composants correctement
interface MyComponentProps {
title: string
onClick: () => void
}

const MyComponent: FC<MyComponentProps> = ({ title, onClick }) => {
return <button onClick={onClick}>{title}</button>
}

// ─────────────────────── HOOKS PERSONNALISÉS ──────────────────────────

import { useAsync } from "@/hooks/useAsync"
import { useScrollspy } from "@/hooks/useScrollspy"

// ✅ Utiliser les hooks personnalisés
const { data, loading, error, execute } = useAsync(
async () => await fetchData(),
{ immediate: true }
)

const { activeId } = useScrollspy({
ids: ["hero", "features", "pricing"],
offset: 100,
})

// ─────────────────────── CONSTANTES VIDÉO ──────────────────────────

import { HERO_VIDEO, COLLECTIONS_VIDEO } from "@/datas/videos"

// ─────────────────────── DONNÉES FAQ ──────────────────────────

import { faqData } from "@/datas/faq-data"
import type { FaqItem, FaqData } from "@/datas/faq.types"

// ─────────────────────── ENVIRONNEMENT ──────────────────────────

import { ENV, isProduction, isDevelopment } from "@/lib/env"

// ✅ Accéder aux variables d'environnement typées
console.log(ENV.SITE_URL)
console.log(ENV.ENABLE_ANALYTICS)

if (isProduction) {
// Code de production
}

// ─────────────────────── LOGGER ──────────────────────────

import { logger } from "@/lib/logger"

// ✅ Utiliser le logger
logger.info("Application démarrée")
logger.error("Une erreur s'est produite", new Error())

// ─────────────────────── BEST PRACTICES ──────────────────────────

// ✅ Toujours typer les props
interface ButtonProps {
variant?: "primary" | "secondary"
size?: "sm" | "md" | "lg"
disabled?: boolean
}

// ✅ Utiliser les union types pour les valeurs limitées
type ThemeMode = "light" | "dark" | "auto"

// ✅ Utiliser les const assertions pour l'immutabilité
const config = {
name: "ARQE",
version: "1.0.0",
} as const

// ✅ Ajouter les JSDoc pour la documentation
/\*\*

- Fetch user data from API
- @param userId - The user ID
- @returns User data or null
  \*/
  function fetchUser(userId: string): Promise<User | null> {
  // implementation
  }

export {}
