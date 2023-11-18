"use client"
import { useState } from 'react'
import DesktopNav from './desktopNav/DesktopNav'
import MobileNav from './mobileNav/MobileNav'
import { CheckWidth } from '../checkWidth'
const NavBar = () => {

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

export default NavBar

