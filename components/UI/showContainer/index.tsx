"use client"
import React, { useRef } from 'react';
import { MotionValue, motion, useInView, useScroll, useTransform } from 'framer-motion';
const ShowContainer = ({ children}: { children: React.ReactNode }) => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })
    const boxY: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
    const view = useInView(ref, { amount: 0.5 })
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

    return (
        <motion.div
            variants={parentVariant}
            initial='hidden'
            animate={view ? 'show' : ""}
            style={{ y: boxY }}
            ref={ref}
        >
            <motion.div variants={parentVariant}>
                 {children}
            </motion.div>

        </motion.div>

    );
};

export default ShowContainer;



