'use client'
import React, { useRef } from 'react'
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion'
import styles from './ParallaxProduct.module.css'

const ParallaxProduct = () => {
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
            className='w-full md:h-[130vh] h-[140vh] relative inset-0'
        >
            <motion.h1
                style={{ y: textY }}
                className='flex justify-center items-center font-bold text-white dark:text-black relative top-[7vh]  font-splinesans z-20 text-3xl md:text-5xl '>
                BLOG-POST
            </motion.h1>

            <motion.div
                id={styles.para}
                className='absolute inset-0 z-0 blur-[10px] min-h-screen'
                style={{ y: bgY }}>
            </motion.div>
        </div>
    )
}

export default ParallaxProduct;


