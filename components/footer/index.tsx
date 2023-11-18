"use client"
import BlogLogo from '../UI/navBarSection/blogLogo'
import NavItem from '@/components/UI/navBarSection/navItem'
import SocialIcons from './SocialIcons'
const Footer = () => {
  return (
    <div className='w-full flex flex-col justify-center md:items-center md:flex-row  md:justify-around space-y-6 md:space-y-0 mt-[6vh] md:mt-0'>
      <div className='flex justify-center items-center w-28 h-28'>
      <BlogLogo />
      </div>
      <NavItem textSize={'text-sm'}/>
      <SocialIcons />
    </div>
  )
}


export default Footer
