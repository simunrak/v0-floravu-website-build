import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'FloraVu | Biljke za vaš dom i vrt',
  description: 'FloraVu nudi kvalitetne biljke za sadnju u vašem domu i vrtu. Posjetite nas na Gradskoj tržnici Vukovar ili naručite s dostavom do 15:00 u Vukovaru i Borovu Naselju.',
  keywords: 'biljke, sadnice, vrt, dom, Vukovar, Borovo Naselje, tržnica, dostava',
  openGraph: {
    title: 'FloraVu | Biljke za vaš dom i vrt',
    description: 'Kvalitetne biljke s dostavom u Vukovaru i Borovu Naselju.',
    type: 'website',
    locale: 'hr_HR',
  },
}

export const viewport: Viewport = {
  themeColor: '#2d6a4f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
