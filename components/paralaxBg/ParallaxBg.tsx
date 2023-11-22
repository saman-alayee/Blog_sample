'use client'
import React, { useRef } from 'react'
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion'
import styles from './ParallaxBg.module.css'
import { BiSearchAlt } from 'react-icons/bi'
import HeroSearchBar from '../UI/hero/HeroSearchBar'
import HeroContent from '../hero/HeroContent'

interface parallax {
    headerTitle?: string,
    containerClass: string,
    titleClass: string,
    imgClass: string,
    searchBar?: boolean
}

const ParallaxBg = ({ headerTitle, containerClass, titleClass, imgClass, searchBar }: parallax) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })
    const bgY: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const textY: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

    const titleVariant = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    }
    const letterVariant = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                type: "tween",
            }
        }
    }

    return (
        <div
            ref={ref}
            className={`w-full relative inset-0 ${containerClass}`}
        >
            <motion.div
                style={{ y: textY }}
                className={titleClass}
            >
                <motion.div
                    variants={titleVariant} initial='initial' whileInView='animate'
                >

                    {headerTitle?.split('').map((item, index) =>
                        <motion.span variants={letterVariant} key={index}>{item}</motion.span>
                    )}

                </motion.div>
                <div>
                    {searchBar && <HeroContent />}
                </div>

            </motion.div>

            <motion.div
                id={styles.para}
                className={imgClass}
                style={{ y: bgY }}>
            </motion.div>
        </div>
    )
}

export default ParallaxBg
