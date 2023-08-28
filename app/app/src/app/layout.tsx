import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// components
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blendify App',
  description: 'Slideshow maker for your memories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
