import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arta Structures | Engineering & Construction Company',
  description: 'Professional engineering design, construction supervision, and project management for residential, commercial, and industrial buildings.',
  keywords: 'construction, engineering, architecture, building design, project management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}