import React from 'react'
import Features from './Features'
import ParallaxBg from '../paralaxBg/ParallaxBg'

const AboutUs = () => {
  const containerClass:string='h-[120vh]'
  const titleClass:string='flex justify-center items-center font-bold text-white dark:text-black relative top-[9vh]  font-splinesans z-20 text-3xl md:text-5xl'
  const imgClass:string='absolute inset-0 z-0 blur-[10px] min-h-screen'
  
  return (
    <div className='w-full h-[120vh]  overflow-hidden relative grid place-items-center'>
      <ParallaxBg headerTitle={'ABOUT-US'} containerClass={containerClass} titleClass={titleClass} imgClass={imgClass}/>
      <div className='absolute z-20'>
        <Features />
      </div>
    </div>
  )
}

export default AboutUs