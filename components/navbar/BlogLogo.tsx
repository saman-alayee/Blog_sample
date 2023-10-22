import Image from 'next/image'
import React from 'react'

const BlogLogo = () => {
    return (
        <div id='icon' className='flex justify-center items-center ml-0 md:ml-3 mt-2'>
            <Image src={'/images/logo.png'} alt='logo' width={100} height={100} />
        </div>
    )
}

export default BlogLogo
