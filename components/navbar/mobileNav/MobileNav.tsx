"use client"
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import styles from './mobileNav.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { BiSearchAlt } from 'react-icons/bi'
import { ThemeSwitcher } from '@/components/themeSwitch'
import { MobileSearchBtn } from '@/components/searchBtn'
import NavItem from '../NavItem'
import BlogLogo from '../BlogLogo'


const MobileNav = () => {
    const [mobileMenuToggle, setMobileMenuToggle] = useState<boolean>(false)
    const [searchBar, setSearchBar] = useState<boolean>(false)

    const openMobileMenu: () => void = () => {
        setMobileMenuToggle(!mobileMenuToggle)
    }
    const openSearch: () => void = () => {
        setSearchBar(!searchBar)
    }
    const menuVar = {
        initial: {
            scaleY: 0
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                duration: 0.5,
            }
        }
    }
    return (
        <>
            <div id='mobileNavBar' className={styles.mobileNav}>
                <div className='w-1/3 flex justify-start'>
                    <BlogLogo />
                </div>

                <div className='w-1/3 flex justify-center'>
                    <MobileSearchBtn openSearch={openSearch} />
                    <ThemeSwitcher />
                </div>
                <div className='w-1/3 flex justify-end'>
                    {mobileMenuToggle === false && <button onClick={() => openMobileMenu()} className={styles.mobileMenuBtn}><AiOutlineMenu /></button>}
                </div>
            </div>
            <AnimatePresence>
                {mobileMenuToggle && (
                    <motion.div
                        className={styles.mobileMenu}
                        variants={menuVar}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                    >
                        <div onClick={() => openMobileMenu()} className={styles.inMenuBtn}><AiOutlineClose /> </div>
                        <NavItem toggle={openMobileMenu}/>
                    </motion.div>
                )}

                {searchBar && (
                    <motion.div
                        className={styles.seachPage}
                        variants={menuVar}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                    >
                        <div className='flex items-center justify-center mt-24'><input placeholder='search' autoFocus className='outline-none border focus:border-slate-800 w-48 h-10 rounded-md p-4' /></div>
                        <div className='flex justify-center items-center m-3 p-3 space-x-4'>
                            <button onClick={() => openSearch()} className='text-white'><AiOutlineClose /> </button>
                            <button className='text-white'><BiSearchAlt /></button>
                        </div>
                    </motion.div>
                )}

            </AnimatePresence>
        </>
    )
}
export default MobileNav;

