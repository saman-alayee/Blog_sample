"use client"
import { motion } from "framer-motion";
import HeroSearchBar from "../UI/hero/HeroSearchBar";
const HeroContent = () => {
    const titleVariant = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.05
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

    const description: string = 'this is a blog for Education frontEnd and backEnd'
    return (
        <motion.div className='text-center' variants={titleVariant} initial='initial' whileInView='animate'>
            <HeroSearchBar />
            <div className='w-full text-lg mx-auto'>
                {description?.split('').map((item, index) =>
                    <motion.span variants={letterVariant} key={index}>{item}</motion.span>
                )}
            </div>
        </motion.div>
    );
};

export default HeroContent;