import React from 'react'
import Parallax from './paralax/Paralax'
import Features from './Features'

const AboutUs = () => {
  return (
    <div className='w-full h-[120vh]  overflow-hidden relative grid place-items-center'>
      <Parallax />
      <div className='absolute z-20'>
        <Features />
      </div>
    </div>
  )
}

export default AboutUs