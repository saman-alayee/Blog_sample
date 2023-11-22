"use client"
import BlogLogo from '../UI/blogLogo'
import NavItem from '@/components/UI/navBarSection/navItem'
import SocialIcons from './SocialIcons'
import { ThemeSwitcher } from '../UI/themeSwitch'
const Footer = () => {
  return (
    <div className='w-full flex flex-col justify-center md:items-center md:flex-row  md:justify-between space-y-4 p-4 md:space-y-0'>
      <div className='order-1 flex justify-center items-center w-28 h-12 mx-auto md:mx-0'>
        <BlogLogo />
      </div >
      <div className='order-3 md:order-2'>
        <SocialIcons />
      </div>
      <div className='order-2 md:order-3 md:mx-3'>
        <ThemeSwitcher />
      </div>
    </div>
  )
}


export default Footer
