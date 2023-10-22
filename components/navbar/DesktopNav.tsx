"use client"
import React, { useState } from 'react'
import { ThemeSwitcher } from '../themeSwitch'
import Image from 'next/image'
import styles from './navbar.module.css'
import { BiSearchAlt } from 'react-icons/bi'

type NavProps = {
    item: string[],
    toggleActive: (arg: string) => void,
    activeNavItem: string,
}

const DesktopNav = ({ item, toggleActive, activeNavItem }: NavProps) => {
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
                <div id='icon' className='flex mt-1 items-center ml-[1vw]'>
                    <Image src={'/images/logo.png'} alt='logo' width={100} height={100} />
                </div>
                <div id='navbar'>
                    <ul className="flex gap-4 text-lg mr-[2vw]">
                        {item?.map(item =>
                            <li key={item} onClick={() => toggleActive(item)} className={activeNavItem === item ? "text-blue-500 font-bold transition-all duration-300" : "hover:text-blue-500 transition-all duration-300"}>{item}</li>
                        )}
                        <ThemeSwitcher />
                        <button className={styles.searchBtn}><BiSearchAlt /></button>
                        <input placeholder='search' className={styles.searchBar} />

                    </ul>
                </div>
            </div>
        </div >
    )
}

export default DesktopNav