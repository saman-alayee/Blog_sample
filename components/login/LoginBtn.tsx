import React from 'react'
import styles from './login.module.css'
import Link from 'next/link'
const LoginBtn = () => {
  return (
    <>
      <div className='hidden md:flex'>
        <Link href={'/login'} className='bg-gradient-to-tr from-blue-400 to-violet-500 rounded-s-lg text-white p-1 md:text-lg text-sm'>
          <button className={styles.btn}> Login</button>
        </Link>
        <Link href={'/SignUp'} className='bg-gradient-to-tl from-blue-400 to-violet-500 rounded-e-lg text-white p-1 md:text-lg text-sm'>
          <button className={styles.btn}> SignUp</button>
        </Link>
      </div>
      {/* mobile login button */}
      <div className='md:hidden'>
        <Link href={'/login'} className='bg-gradient-to-tr from-blue-400 to-violet-500 rounded-lg text-white p-1 md:text-lg text-sm'>
          <button className={styles.btn}> Login</button>
        </Link>
      </div>
    </>
  )
}

export default LoginBtn;