import { Spline_Sans } from 'next/font/google'
import '@/styles/globals.css'
import { DesktopFullNav } from '@/components/navbar/desktopNav/DesktopFullNav'
import MobileNav from '@/components/navbar/mobileNav/MobileNav'


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
      <div className='fixed top-0 z-40'>
        <DesktopFullNav />
        <MobileNav />
      </div>
      <div className='mt-16'>
        {children}
      </div>
    </main>

  )
}