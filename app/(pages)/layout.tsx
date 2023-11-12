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
      <div className='mt-16'>
        {children}
      </div>
    </main>

  )
}