"use client"
import React from 'react';
import { motion } from 'framer-motion';
const TextAnimation = ({title,textClass,staggerTime}:{title:string,textClass?:string,staggerTime:number}) => {

    const titleVariant = {
        animate: {
            transition: {
                staggerChildren: staggerTime
            }
        }
    }
    const letterVariant = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        }
    }

    return (
            <motion.div className={textClass} variants={titleVariant} initial='initial' whileInView='animate'>
                {title?.split('').map((item, index) =>
                    <motion.span variants={letterVariant} key={index}>{item}</motion.span>
                )}
            </motion.div>

    );
};

export default TextAnimation;



