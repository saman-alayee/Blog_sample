'use client'
import DesktopNav from './desktopNav/DesktopNav'
import MobileNav from './mobileNav/MobileNav'
const NavBar = () => {
  return (
    <nav className='w-full absolute'>
      <DesktopNav/>
      <MobileNav />
    </nav>

  )
}

export default NavBar

