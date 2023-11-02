"use client"
import React from 'react'
import { motion } from 'framer-motion'
import BlogLogo from '../navbar/BlogLogo'
import { FaTelegram } from 'react-icons/fa'
import { BsInstagram } from "react-icons/bs"
import { FaYahoo } from "react-icons/fa"
const Footer = () => {
  const FooterItem: string[] = ['Home', 'Contact-Us', 'Blog']
  return (
    <div className='w-full md:h-32 flex flex-col md:flex-row justify-center md:justify-around items-center -mt-44 md:-mt-[18.5rem] mb-16 space-y-6 md:space-y-0 md:mb-0 md:p-4'>
      <div>
        <BlogLogo />
      </div>
      <div>
        <ul className='flex flex-row space-x-4 font-bold text-xl '>
          {FooterItem.map(item =>
            <li className='group cursor-pointer' key={item}>
              <div className='hover:text-blue-500 transition-all duration-400'>{item}</div>
              <div className='group-hover:border-b border-b-black dark:border-b-white mx-2 mt-1'></div>
            </li>
          )}
        </ul>
      </div>
      <div className='flex flex-row space-x-4'>
        <div className='text-3xl hover:text-blue-500 cursor-pointer'><FaTelegram /></div>
        <div className='text-3xl hover:text-red-500 cursor-pointer'><BsInstagram /></div>
        <div className='text-3xl hover:text-purple-500 cursor-pointer'><FaYahoo /></div>
      </div>
    </div>
  )
}


export default Footer