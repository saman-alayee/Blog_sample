"use client"
import Link from 'next/link'
import styles from './navBar.module.css'
import { usePathname } from 'next/navigation'

const NavItem = () => {
    const pathname = usePathname()


    const navItem: navItem[] = [
        { navItem: 'Home', link: "/" },
        { navItem: 'Contact-Us', link: "/ContactUs" },
        { navItem: "Blog", link: "/Blog" }
    ]

    return (
        <ul className={styles.navContainer}>
            {navItem.map(item =>
                <div key={item.navItem} className='mx-auto'>
                    <li className={`link ${pathname === item.link ? styles.activeNavItem : `group ${styles.NavItem}`}`}>
                        <Link href={item.link}>{item.navItem}</Link>
                        <div className='group-hover:border-b border-b-black dark:border-b-white mx-2 mt-1'></div>
                    </li>
                </div>
            )}
        </ul>
    )
}

export default NavItem


