import Image from 'next/image'
import React from 'react'

const BlogLogo = () => {
    return (
        <div id='icon' className='flex justify-center items-center ml-0 md:ml-8 mt-1'>
            <Image src={'/images/logo.png'} alt='logo' width={100} height={100} priority={true}/>
        </div>
    )
}

export default BlogLogo
