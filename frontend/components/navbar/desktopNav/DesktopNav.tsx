"use client"
import React, { useState } from 'react'
import { ThemeSwitcher } from '@/components/themeSwitch'
import Image from 'next/image'
import styles from './desktopNav.module.css'
import { DesktopSearchBtn } from '@/components/searchBtn'
import NavItem from '../NavItem'
import BlogLogo from '../BlogLogo'

const DesktopNav = () => {
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
    return (
        <div id='mediumNavBar' className={stick ? styles.fullNavDesktop : `${styles.centerNavDesktop} animate-fadeInItem`} >
            <div className={stick ? `${styles.desktopNavContent} animate-fadeInItem` : styles.desktopNavContent}>
                <BlogLogo />
                <div id='navbar' className='flex p-3 space-x-3 '>
                    <NavItem />
                    <ThemeSwitcher />
                    <DesktopSearchBtn />
                    <input placeholder='search' className={styles.searchBar} />
                </div>
            </div>
        </div >
    )
}

export default DesktopNav