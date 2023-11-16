"use client"
import BlogLogo from '../navbar/blogLogo'
import NavItem from '../navbar/navItem'
import SocialIcons from './SocialIcons'
const Footer = () => {
  return (
    <div className='w-full flex flex-col justify-center md:items-center md:flex-row  md:justify-around space-y-6 md:space-y-0 p-4 mt-[6vh] md:mt-0'>
      <BlogLogo />
      <NavItem />
      <SocialIcons />
    </div>
  )
}


export default Footer
