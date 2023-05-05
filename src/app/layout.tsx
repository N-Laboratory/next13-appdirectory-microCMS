import './globals.css'
import Header from '@/components/layouts/header/Header'
import Footer from '@/components/layouts/footer/Footer'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#6366F1' },
    { media: '(prefers-color-scheme: dark)', color: '#6366F1' },
    { color: '#6366F1' },
  ],
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja-JP'>
      <body className='flex flex-col min-h-dvh'>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
