import './globals.css'
import Header from '@/components/layouts/header/Header'
import Footer from '@/components/layouts/footer/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja-JP'>
      <body className='flex flex-col min-h-screen'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
