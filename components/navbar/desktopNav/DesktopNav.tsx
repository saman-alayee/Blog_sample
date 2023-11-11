"use client"
import React, { useState } from 'react'
import { DesktopFullNav } from './DesktopFullNav'
import DesktopCenterNav from './DesktopCenterNav'

const DesktopNav = () => {


    const [stick, setStick] = useState<boolean>(false)
    const changeNavMode: () => void = () => {
        console.log(window.scrollY);

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


    return (
        <div className='hidden md:block'>
            {stick ? <DesktopFullNav /> : <DesktopCenterNav />}
        </div>
    )
}

export default DesktopNav;









