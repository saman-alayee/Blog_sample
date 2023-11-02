"use client"
import BlogLogo from '../navbar/BlogLogo'
import NavItem from '../navbar/NavItem'
import SocialIcons from './SocialIcons'
const Footer = () => {
  return (
    <div className='w-full md:h-32 flex flex-col md:flex-row justify-center md:justify-around items-center -mt-44 md:-mt-[18.5rem] mb-16 space-y-6 md:space-y-0 md:mb-0 md:p-4'>
      <BlogLogo />
      <NavItem />
      <SocialIcons />
    </div>
  )
}


export default Footer


