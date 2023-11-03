import React from 'react'
import ProductItem from './ProductItem'
import ParallaxProduct from './paralax/ParalaxProduct'

const Products = () => {
  return (
    <div className='w-full md:h-[130vh] h-[140vh]  overflow-hidden relative grid place-items-center'>
      <ParallaxProduct />
      <div className='absolute z-20'>
        <ProductItem />
      </div>
    </div>
  )
}

export default Products