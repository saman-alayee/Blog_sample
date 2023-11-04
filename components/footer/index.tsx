"use client"
import BlogLogo from '../navbar/BlogLogo'
import NavItem from '../navbar/NavItem'
import SocialIcons from './SocialIcons'
const Footer = () => {
  return (
    <div className='w-full flex flex-col justify-center md:items-center md:flex-row  md:justify-around space-y-6 md:space-y-0 p-8 mt-8 md:mt-0'>
      <BlogLogo />
      <NavItem />
      <SocialIcons />
    </div>
  )
}


export default Footer
