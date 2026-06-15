import type { Metadata } from 'next'
import { Montserrat, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nusalogic — Integrated IT Solutions & Educational Hub',
  description:
    'Nusalogic menghadirkan solusi IT terintegrasi mulai dari analisis data strategis, desain UI/UX presisi, hingga program mentoring teknologi berbasis kurikulum kasus nyata.',
  keywords: [
    'IT Solutions',
    'UI/UX Design',
    'Data Analytics',
    'Code Mentor',
    'Nusalogic',
    'Digital Transformation',
  ],
  authors: [{ name: 'Nusalogic' }],
  openGraph: {
    title: 'Nusalogic — Integrated IT Solutions & Educational Hub',
    description:
      'Solusi IT terintegrasi & hub edukasi digital terdepan di Indonesia.',
    type: 'website',
    locale: 'id_ID',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${montserrat.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className="font-inter bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
