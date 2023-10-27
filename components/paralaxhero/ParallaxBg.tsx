'use client'
import React, { useRef } from 'react'
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion'
import styles from './ParallaxBg.module.css'
import Image from 'next/image'

const ParallaxBg = () => {
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
            className='w-full h-screen overflow-hidden relative top-0 grid place-items-center'
        >
            <motion.h1
                style={{ y: textY }}
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 2, delay: 1 }}
                className='flex justify-center items-center font-bold text-white dark:text-black relative font-splinesans z-20 text-7xl md:text-9xl '>
                BLOG
            </motion.h1>

            <motion.div
                id={styles.para}
                className='absolute inset-0 z-0'
                style={{ y: bgY }}>
            </motion.div>
        </div>
    )
}

export default ParallaxBg