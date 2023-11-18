"use client"
import { useState, useLayoutEffect } from 'react'
import DesktopNav from './desktopNav/DesktopNav'
import MobileNav from './mobileNav/MobileNav'
const NavBar = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const MOBILE_THRESHOLD: number = 768

  function updateSize() {
    setIsMobile(window.innerWidth < MOBILE_THRESHOLD);
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateSize);
  }


  return (
    <nav>
      {isMobile
        ? <MobileNav />
        : <DesktopNav />
      }

    </nav>

  )
}

export default NavBar

