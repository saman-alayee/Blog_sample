import styles from './desktopNav.module.css'
import { ThemeSwitcher } from "@/components/themeSwitch"
import BlogLogo from "../BlogLogo"
import NavItem from "../NavItem"
import { DesktopSearchBtn } from "@/components/searchBtn"
import Login from '@/components/login'

export const ContentNav = () => {
    return (
        <div id='navbar' className='w-full h-full flex justify-around items-center'>
            <div>
                <BlogLogo />
            </div>
            <div>
                <NavItem />
            </div>
            <div className='flex space-x-1'>
                <DesktopSearchBtn />
                <input placeholder='search' className={styles.searchBar} />
            </div>
            <div>
                <Login />
            </div>
            <div>
                <ThemeSwitcher />
            </div>
        </div>
    )
}