import styles from './content.module.css'
import { ThemeSwitcher } from "@/components/UI/navBarSection/themeSwitch"
import BlogLogo from "@/components/UI/navBarSection/blogLogo"
import NavItem from "../navItem"
import { DesktopSearchBtn } from "@/components/UI/navBarSection/searchBtn"
import LoginBtn from '@/components/login/LoginBtn'

export const ContentNav = () => {
    return (
        <div id='navbar' className='w-full h-full flex justify-around items-center'>
            <div>
                <BlogLogo />
            </div>
            <div className='flex'>
                <NavItem />
            </div>
            <div className='flex space-x-1'>
                <DesktopSearchBtn />
                <input placeholder='search' className={styles.searchBar} />
            </div>
            <div>
                <LoginBtn />
            </div>
            <div>
                <ThemeSwitcher />
            </div>
        </div>
    )
}