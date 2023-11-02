import React from 'react'
import Parallax from './paralax/Paralax'
import Features from './Features'

const AboutUs = () => {

  return (
    <div className='w-full h-[130vh]  overflow-hidden relative -top-24 lg:-top-44 grid place-items-center'>
      <Parallax />
      <div className='absolute z-20 top-56 lg:top-64'>
        <Features />
      </div>
    </div>
  )
}

export default AboutUs