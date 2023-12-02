import React from 'react'
import CategoryItem from './CategoryItem'
import ParallaxBg from '../paralaxBg/ParallaxBg'

const Category = () => {
  const containerClass: string = 'md:h-[130vh] h-[140vh]'
  const titleClass: string = 'flex justify-center items-center font-bold text-white dark:text-black relative top-[7vh]  font-splinesans z-20 text-3xl md:text-5xl'
  const imgClass: string = 'absolute inset-0 z-0 blur-[10px] min-h-screen'


  return (
    <div className='w-full md:h-[130vh] h-[140vh] overflow-hidden relative grid place-items-center'>
      <ParallaxBg headerTitle={'BLOG-POST'} containerClass={containerClass} titleClass={titleClass} imgClass={imgClass} imageSrc='/images/BLOG-CATEGORY.webp'/>
        <div className='container absolute z-20'>
          <CategoryItem />
        </div>
    </div>
  )
}

export default Category;