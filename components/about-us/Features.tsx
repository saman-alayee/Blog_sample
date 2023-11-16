"use client"
import React, { useRef, useState } from 'react'
import { MotionValue, motion, useScroll, useTransform, useInView } from 'framer-motion'
import styles from './Features.module.css'
import Image from 'next/image'
const Features = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })
    const boxY: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
    const view = useInView(ref, { amount: 0.5 })
    const parentVariant = {
        hidden: {
            opacity:0,
        },
        show: {
            opacity:1,
            transition:{
                duration:0.75,
                when:"beforeChildren"
            }
        }
    }
    return (
        <motion.div className={styles.featuresContainer}
            variants={parentVariant}
            initial='hidden'
            animate={view ? 'show' : ""}
            style={{ y: boxY }}
            ref={ref}
        >

            <motion.div className={styles.textArea} variants={parentVariant} animate="show">
                <h1 className={styles.textAreaHeader}>The purpose of establishing this site</h1>
                <div className={styles.textAreaBody}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repudiandae illum error. Aperiam explicabo sint eaque vitae similique doloremque qui. Amet consequatur voluptates modi, sunt at officiis hic impedit nulla.</div>
            </motion.div>

            <motion.div className={styles.featuresImage} variants={parentVariant} animate="show">
                <Image src={'/images/HERO.jpg'} alt='herr' width={400} height={400} className='h-[100%] mx-auto rounded-lg' />
            </motion.div>



        </motion.div>
    )
}

export default Features