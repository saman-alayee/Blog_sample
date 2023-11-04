import styles from './desktopNav.module.css'
import { ThemeSwitcher } from "@/components/themeSwitch"
import BlogLogo from "../BlogLogo"
import NavItem from "../NavItem"
import { DesktopSearchBtn } from "@/components/searchBtn"

export const ContentNav = () => {
    return (
        <>
            <BlogLogo />
            <div id='navbar' className='flex p-3 mr-4 space-x-3 '>
                <NavItem />
                <ThemeSwitcher />
                <DesktopSearchBtn />
                <input placeholder='search' className={styles.searchBar} />
            </div>
        </>
    )
}