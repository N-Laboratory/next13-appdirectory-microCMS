import './globals.css'
import { Inter, Fira_Code } from 'next/font/google'
import Link from 'next/link'
import type { Metadata } from 'next'
import AnalyticsProvider from '@/features/common/components/AnalyticsProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira' })

export const metadata: Metadata = {
  title: 'N-Laboratory | Engineering the Modern Web',
  description:
    'Next.js、Nuxt.js、Spring Boot、AWS などを中心に、モダンな Web 開発の知見を発信するサイトです。',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

const itemList: { url: string, title: string }[] = [
  {
    url: 'https://github.com/N-Laboratory',
    title: 'GitHub',
  },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="antialiased bg-background text-slate-200 font-sans">
        <header className="fixed top-0 w-full h-[70px] flex items-center justify-between px-[5%] bg-background/80 backdrop-blur-md border-b border-white/5 z-50">
          <div className="text-2xl font-extrabold tracking-tighter">
            <Link href="/">
              N-LAB
            </Link>
            <span className="text-accent">.</span>
          </div>
          <nav>
            <ul className="flex gap-8">
              {itemList.map(item => (
                <li key={item.url}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-sub hover:text-accent transition-colors duration-300"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {children}

        <footer className="text-center py-16 text-slate-500 text-sm border-t border-border mt-16">
          <p>&copy; 2025 N-Laboratory. All Rights Reserved.</p>
        </footer>
        <AnalyticsProvider />
      </body>
    </html>
  )
}

export const viewport = {
  themeColor: '#000000',
}
