import type { Metadata } from 'next'
import { Lato, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const lato = Lato({
  subsets: ['latin-ext'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'FloraVu — Sadnice cvijeća, Vukovar',
  description: 'FloraVu nudi kvalitetne sadnice cvijeća za vaš vrt u Vukovaru i okolici. Pelargonije, petunije, surfinije i još mnogo više. Besplatna dostava u Vukovaru!',
  keywords: 'sadnice cvijeća, Vukovar, pelargonije, petunije, surfinije, vrt, cvjeće, FloraVu',
  openGraph: {
    title: 'FloraVu — Sadnice cvijeća, Vukovar',
    description: 'Kvalitetne sadnice cvijeća za vaš vrt. Besplatna dostava u Vukovaru!',
    locale: 'hr_HR',
    type: 'website',
  },
  other: {
    'theme-color': '#2d6a4f',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr">
      <body className={`${lato.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
