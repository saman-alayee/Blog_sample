import '@/styles/globals.css'
import { DesktopFullNav } from '@/components/navbar/desktopNav/DesktopFullNav'
import MobileNav from '@/components/navbar/mobileNav/MobileNav'

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <div className='fixed top-0 z-40'>
        <div className='hidden md:block'>
          <DesktopFullNav />
        </div>
        <MobileNav />
      </div>
      <div className='mt-16'>
        {children}
      </div>
    </main>

  )
}