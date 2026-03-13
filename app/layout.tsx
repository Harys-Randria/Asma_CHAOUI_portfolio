import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Asma CHAOUI - Ingénieure DevOps AWS',
  description: 'Portfolio professionnel d\'Asma CHAOUI, ingénieure DevOps AWS expérimentée spécialisée en infrastructure cloud, Infrastructure as Code, automatisation, CI/CD et sécurité.',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      {
        url: '/asma_chaoui.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/asma_chaoui.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/asma_chaoui.jpg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/asma_chaoui.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
