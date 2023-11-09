"use client"
import { motion } from "framer-motion"
import React, { ReactNode } from 'react'
import styles from './blogsection.module.css'
import Link from "next/link"

const BlogSections = ({ card }: { card: blogCard[] }) => {
    const ContainerVariant = {
        initial: {
            x: '100vw'
        },
        animate: {
            x: 0,
            transition: {
                type: "spring",
                staggerChildren: 0.25,
                when: 'beforeChildren'
            }
        }
    }
    const cardVariant = {
        initial: {
            x: '100vw',
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.25
            }
        }
    }

    return (
        //cardsContainer
        <motion.div className={styles.cardsContainer} variants={ContainerVariant} initial="initial" animate="animate">
            {card.map(item =>
                <Link key={item.label} href={'/Blog/aa'} className="group">
                    {/*cardsBody*/}
                    <motion.div variants={cardVariant} className={`${styles.cardsBody} lg:group-hover:w-56`}>
                        <div className={styles.cardContents}>
                            <div className={`${styles.cardsTitle} lg:group-hover:rotate-0`}>{item.label}</div>
                            <div className={styles.cardsIcons}>{item.icon}</div>
                        </div>
                        <div className={`${styles.bgGradiant} ${item.bgGradiant}`}></div>                    </motion.div>
                </Link>
            )}
        </motion.div>
    )
}

export default BlogSections




