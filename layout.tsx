import type React from "react"
import type { Metadata } from "next"
import { Inter, Lora } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const lora = Lora({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "El Ventorrillo - Restaurante de Cocina Canaria en Los Cristianos, Tenerife",
  description:
    "Restaurante El Ventorrillo, ubicado en Los Cristianos, Tenerife. Ofrecemos auténtica comida tradicional canaria con ingredientes frescos y locales en un ambiente acogedor con vista al mar.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${lora.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
