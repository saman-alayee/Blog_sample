"use client"
import React, { useRef, useState } from 'react'
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion'
import styles from './Features.module.css'
import Image from 'next/image'
const Features = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })
    const boxY: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])

    return (
        <motion.div className={styles.featuresContainer}
            style={{ y: boxY }}
            ref={ref}
        >

            <div className={styles.textArea}>
                <h1 className={styles.textAreaHeader}>The purpose of establishing this site</h1>
                <div className={styles.textAreaBody}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repudiandae illum error. Aperiam explicabo sint eaque vitae similique doloremque qui. Amet consequatur voluptates modi, sunt at officiis hic impedit nulla.</div>
            </div>

            <div className={styles.featuresImage}>
                <Image src={'/images/HERO.jpg'} alt='herr' width={400} height={400} className='h-[100%] mx-auto rounded-lg'/>
            </div>



        </motion.div>
    )
}

export default Features