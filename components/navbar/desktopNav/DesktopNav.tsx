"use client"
import React, { useState } from 'react'
import { DesktopFullNav } from '@/components/navbar/desktopNav/DesktopFullNav'
import DesktopCenterNav from '@/components/navbar/desktopNav/DesktopCenterNav'
import { usePathname } from 'next/navigation'

const DesktopNav = () => {

    const pathname = usePathname()
    const [stick, setStick] = useState<boolean>(false)
    const changeNavMode: () => void = () => {
        if (window.scrollY > 65) {
            setStick(true)
        }
        else {
            setStick(false)
        }
    }
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', changeNavMode)
    }

    if (pathname === '/') {
        return (
            <div className='hidden md:block'>
                {stick ? <DesktopFullNav /> : <DesktopCenterNav />}
            </div>
        )
    } else {
        return (
            <>
                <DesktopFullNav />
            </>
        )
    }

}

export default DesktopNav;









