import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Blog.',
  description: 'paris\' blog.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div>
        <h1>paris' blog.</h1>
        <p>🪐 welcome to my blog! 🚀</p>
      </div>
    </header>
  );

  const footer = (
    <div>
      <p>developed by osuch.dev</p>
    </div>
  )

  return (
    <html lang="en">
      <body className="space-y-8">
        <Link href={"/"}>
          {header}
        </Link>
        {children}
        {footer}
      </body>
    </html>
  )
}
