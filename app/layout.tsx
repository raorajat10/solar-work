// app/layout.tsx

import NavHead from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import Footer from '@/components/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SarvatraEnergy',
  description: 'Reliable solar distribution and installation services',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body>
        <NavHead /> {/* Navbar stays here so it appears on all pages */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
