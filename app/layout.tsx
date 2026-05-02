import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import '../styles/globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['300', '400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Tahir Ali Orakzai | Software Engineering Student',
  description: 'Personal portfolio of Tahir Ali Orakzai — Software Engineering student at COMSATS University Islamabad Abbottabad Campus. Full-stack developer passionate about building impactful software.',
  keywords: ['Tahir Ali Orakzai', 'Software Engineering', 'COMSATS', 'Abbottabad', 'Portfolio', 'Web Developer', 'Next.js', 'React'],
  authors: [{ name: 'Tahir Ali Orakzai' }],
  openGraph: {
    title: 'Tahir Ali Orakzai | Software Engineering Student',
    description: 'Full-stack developer & software engineering student based in Abbottabad, Pakistan.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tahir Ali Orakzai | Software Engineering Student',
    description: 'Full-stack developer & software engineering student based in Abbottabad, Pakistan.',
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
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0D1117" />
      </head>
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
        <div id="scroll-progress" />
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
