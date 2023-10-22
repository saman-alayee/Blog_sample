import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import styles from './navbar.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { BiSearchAlt } from 'react-icons/bi'
import { ThemeSwitcher } from '../themeSwitch'
type NavMobileProps = {
    item: string[],
    toggleActive: (arg: string) => void,
    activeNavItem: string,
}

const MobileNav = ({ item, toggleActive, activeNavItem }: NavMobileProps) => {
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
                <div id='icon' className='md:hiden flex justify-center items-center ml-[1vw]'>
                    <Image src={'/images/logo.png'} alt='logo' width={100} height={100} />
                </div>
                <div className='flex'>
                    <button onClick={() => openSearch()} className={styles.searchBtn}><BiSearchAlt /></button>
                    <ThemeSwitcher />
                </div>
                <div>
                    <button onClick={() => openMobileMenu()} className={styles.mobileMenuBtn}><AiOutlineMenu /></button>
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
                        <ul className='flex flex-col justify-center items-center mt-[20vh] text-white'>
                            {item?.map(item =>
                                <li key={item} onClick={() => toggleActive(item)} className={activeNavItem === item ? "text-blue-500 font-bold transition-all duration-300 p-3" : "hover:text-blue-500 p-4"}>{item}</li>
                            )}
                        </ul>
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
                    <div className='flex items-center justify-center mt-24'><input placeholder='search' autoFocus className='outline-none border focus:border-slate-800 w-48 h-10 rounded-md p-4'/></div>
                    <div className='flex justify-center items-center m-3 p-3 space-x-4'>
                    <button onClick={()=>openSearch()} className='text-white'><AiOutlineClose /> </button>
                    <button className='text-white'><BiSearchAlt /></button>
                    </div>
                    </motion.div>
                )}

            </AnimatePresence>
        </>
    )
}
export default MobileNav;

