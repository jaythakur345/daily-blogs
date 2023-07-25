import './globals.css'
import type { Metadata } from 'next'
import { Inter, Manrope, Poppins } from 'next/font/google'
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog App',
  description: 'This is cms appliction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
