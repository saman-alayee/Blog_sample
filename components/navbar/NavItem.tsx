"use client"
import Link from 'next/link'
import styles from './navBar.module.css'
import { useChangeActive } from 'store/NavItemsZustand'

const NavItem = () => {
    
    const { activeItem, change } = useChangeActive();
    const navItem: navItem[] = [
        { navItem: 'Home', link: "/" },
        { navItem: 'Contact-Us', link: "/ContactUs" },
        { navItem: "Blog", link: "/Blog" }
    ]

    return (
        <ul className={styles.navContainer}>
            {navItem.map(item =>
                <li key={item.navItem} onClick={() => change(item.navItem)} className={activeItem === item.navItem ? styles.activeNavItem : `group ${styles.navItem}`}>
                    <Link href={item.link}>{item.navItem}</Link>
                    <div className='group-hover:border-b border-b-black dark:border-b-white mx-2 mt-1'></div>
                </li>
            )}
        </ul>
    )
}

export default NavItem


