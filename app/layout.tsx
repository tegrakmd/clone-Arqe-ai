import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar"
import localFont from "next/font/local"
import { LenisProvider } from "@/hooks/lenisWrapper"

const suisseIntl = localFont({
  src: "../fonts/suisse-intl.ttf",
  variable: "--font-suisse-intl",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",

        suisseIntl.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full w-full bg-black">
        <ThemeProvider>
          <LenisProvider>
            {" "}
            <Navbar />
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
