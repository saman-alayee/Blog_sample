"use client"
import DesktopNav from './desktopNav/DesktopNav'
import MobileNav from './mobileNav/MobileNav'
import { useState } from "react";


export default function NavBar () {

  let isMob=CheckWidth()
  
  return (
    <nav>
      {isMob
        ? <MobileNav />
        : <DesktopNav />
      }

    </nav>

  )
}

export const CheckWidth = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const MOBILE_THRESHOLD: number = 768

  function updateSize(): void {
    setIsMobile(window.innerWidth < MOBILE_THRESHOLD);
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateSize);
  }
  return isMobile

};