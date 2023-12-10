"use client"
import React, { useRef } from 'react';
import { MotionValue, motion, useInView, useScroll, useTransform } from 'framer-motion';
const ShowContainer = ({ children}: { children: React.ReactNode }) => {

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
            animate="show"
        >
            <motion.div variants={parentVariant}>
                 {children}
            </motion.div>

        </motion.div>

    );
};

export default ShowContainer;



