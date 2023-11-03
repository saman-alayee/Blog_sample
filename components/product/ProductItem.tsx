"use client"
import React, { useRef } from 'react'
import { MotionValue, motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'
import styles from './Product.module.css'

const ProductItem = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })
    const boxY: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
    const view = useInView(ref, { amount: 0.2 })
    const parentVariant = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.75,
                when: "beforeChildren"
            }
        }
    }
    const card: string[] = ["FrontEnd", "BackEnd"]
    return (
        <motion.div className={styles.ProductContainer}
            variants={parentVariant}
            initial='hidden'
            animate={view ? 'show' : ""}
            style={{ y: boxY }}
            ref={ref}
        >
            <div className={styles.cardContainer}>
                {
                    card.map(item =>
                        <div className={styles.cardBody} key={item}>
                            <div className={styles.cardElements}>
                                <Image alt='' src={'/images/HERO.jpg'} width={400} height={400} className={styles.cardImg} />
                                <h1 className={styles.cardTitle}>{item}</h1>
                                <motion.button
                                    className={styles.cardBtn}
                                >SHOW MORE</motion.button>
                            </div>
                        </div>

                    )
                }
            </div>


        </motion.div >
    )
}

export default ProductItem;


/*

                            <div className='flex flex-col justify-center items-center md:space-y-8 space-y-4'>
                                <Image alt='' src={'/images/HERO.jpg'} width={400} height={400} className='w-[60vw] h-[20vh] md:h-auto md:w-auto rounded-lg' />
                                <h1 className='md:text-7xl text-3xl'>{item}</h1>
                                <motion.button
                                    className='md:p-4 p-2 text-sm md:text-xl rounded-lg dark:bg-black/90 bg-white/90 dark:text-white text-black hover:text-white hover:bg-violet-600 active:bg-violet-700 dark:hover:bg-violet-600 dark:active:bg-violet-700  transition-all duration-400'
                                >SHOW MORE</motion.button>
                            </div>




                                <div className='flex flex-col justify-center items-center md:space-y-8 space-y-4'>
                                <Image alt='' src={'/images/HERO.jpg'} width={400} height={400} className='w-[60vw] h-[20vh] md:h-auto md:w-auto rounded-lg' />
                                <h1 className='md:text-7xl text-3xl'>{item}</h1>
                                <motion.button
                                    className='md:p-4 p-2 text-sm md:text-xl rounded-lg dark:bg-black/90 bg-white/90 dark:text-white text-black hover:text-white hover:bg-violet-600 active:bg-violet-700 dark:hover:bg-violet-600 dark:active:bg-violet-700  transition-all duration-400'
                                >SHOW MORE</motion.button>
*/