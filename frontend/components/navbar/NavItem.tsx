"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './navBar.module.css'

const NavItem = () => {
    const [activeNavItem, setActiveNavItem] = useState<string>('Home')

    const toggleActive: (arg: string) => void = (arg) => {
        setActiveNavItem(arg)
    }
    const navItem: navItem[] = [
        { navItem: 'Home', link: "/" },
        { navItem: 'ContactUs', link: "/ContactUs" },
        { navItem: "Blog", link: "/Blog" }
    ]

    return (
        <ul className={styles.navContainer}>
            {navItem.map(item =>
                <li key={item.navItem} onClick={() => toggleActive(item.navItem)} className={activeNavItem === item.navItem ? styles.activeNavItem : styles.navItem}>
                    <Link href={item.link}>{item.navItem}</Link>
                </li>
            )}
        </ul>
    )
}

export default NavItem



