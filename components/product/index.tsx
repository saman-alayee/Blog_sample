import React from 'react'
import ProductItem from './ProductItem'
import ParallaxProduct from './paralax/ParalaxProduct'

const Products = () => {
  return (
    <div className='w-full h-[130vh]  overflow-hidden relative -top-48 lg:-top-[18.5rem] grid place-items-center'>
      <ParallaxProduct />
      <div className='absolute z-20 top-56 lg:top-64'>
        <ProductItem />
      </div>
    </div>
  )
}

export default Products