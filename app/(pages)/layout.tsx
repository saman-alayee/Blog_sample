import { Spline_Sans } from 'next/font/google'
import '@/styles/globals.css'


const spline_sans = Spline_Sans({
  subsets: ['latin'],
  variable: '--font-spline-sans',
})

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <main>
          {children}
        </main>

  )
}