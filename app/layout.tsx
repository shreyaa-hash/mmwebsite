import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { Geist, Geist_Mono } from "next/font/google" // switched to supported font loader
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Machine Magnets - AI & ML Club | NIET",
  description: "Official website of Machine Magnets, the AI and Machine Learning community at NIET College",
  generator: "v0.app",
  icons: {
    icon: "/club logo.jpg",
    shortcut: "/club logo.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen flex flex-col`}>
        <Suspense fallback={null}>
          <main className="flex-1">{children}</main>
        </Suspense>
        {/* Minimal footer to ensure proper bottom spacing across screen sizes */}
        <footer className="border-t bg-white">
          <div className="container mx-auto px-4 py-4 text-center text-sm text-muted-foreground">
            © 2025 Machine Magnets Club, NIET
          </div>
        </footer>
      </body>
    </html>
  )
}
