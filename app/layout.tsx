import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar"
import { LenisProvider } from "@/hooks/lenisWrapper"
import { rootMetadata } from "@/lib/metadata"
import { SITE_NAME } from "@/constants"
import type { LayoutProps } from "@/types"
import "./globals.css"

const suisseIntl = localFont({
  src: "../fonts/suisse-intl.ttf",
  variable: "--font-suisse-intl",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
})

export const metadata: Metadata = rootMetadata

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", suisseIntl.variable, "font-sans")}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body className="min-h-full w-full bg-black">
        <LenisProvider>
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  )
}
