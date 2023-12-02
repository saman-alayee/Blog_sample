"use client"
import Link from 'next/link'
import styles from './navItem.module.css'
import { usePathname } from 'next/navigation'
import TextAnimation from '../../textAnimation/TextAnimation'

const NavItem = ({ toggle }: { toggle?: voidFunc }) => {
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
                    <li className={`link ${pathname === item.link ? styles.activeNavItem : `group ${styles.NavItem}`}`} onClick={() => typeof toggle != 'undefined' ? toggle() : ""}>
                        <Link href={item.link} className='hover:text-blue-500'>                
                        <TextAnimation title={item.navItem} staggerTime={0.07}/>
                        </Link>
                    </li>
                </div>
            )}
        </ul>
    )
}

export default NavItem


