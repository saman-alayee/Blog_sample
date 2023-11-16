'use client'
import React, { useRef } from 'react'
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion'
import styles from './ParallaxBg.module.css'
import { BiSearchAlt } from 'react-icons/bi'

interface parallax{
    headerTitle:string,
    containerClass:string,
    titleClass:string,
    imgClass:string,
    searchBar:boolean
}

const ParallaxBg = ({headerTitle,containerClass,titleClass,imgClass,searchBar}:parallax) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })
    const bgY: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const textY: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

    return (
        <div
            ref={ref}
            className='w-full h-screen overflow-hidden relative inset-0 grid place-items-center'
        >
            <motion.h1
                style={{ y: textY }}
                className='flex flex-col justify-center items-center font-bold text-white dark:text-black relative font-splinesans z-20 text-7xl md:text-9xl '>
                <div>BLOG</div>
                <div className='md:text-xl text-sm font-semibold p-4 flex rounded-lg'>
                    <input type="text" placeholder='search' className='text-black dark:text-white outline-none p-3 rounded-s-lg' />
                    <div className='bg-gradient-to-tr from-blue-400 to-violet-500 hover:to-violet-600 p-2 flex justify-center items-center rounded-e-lg cursor-pointer transition-all duration-300'>
                        <button className='md:text-2xl text-xl'><BiSearchAlt /></button>
                    </div>
                </div>
            </motion.h1>

            <motion.div
                id={styles.para}
                className='absolute inset-0 z-0 grayscale-[50%]'
                style={{ y: bgY }}>
            </motion.div>
        </div>
    )
}

export default ParallaxBg


{/*
                initial={{ y: -60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 2 }}

*/}