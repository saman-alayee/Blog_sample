"use client"
import { useState } from 'react'
import LoginButton from '../UI/Button/LoginButton'
import SignUpButton from '../UI/Button/SignUpButton'
const LoginBtn = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const MOBILE_THRESHOLD: number = 768

  function updateSize() {
    setIsMobile(window.innerWidth < MOBILE_THRESHOLD);
  }
  if (typeof window !== 'undefined') {
  window.addEventListener('resize', updateSize);
  }

  return (
    <>
      {isMobile
        ? <LoginButton rounded={'rounded-lg'} />
        : <div className='-space-x-2'> <LoginButton rounded={'rounded-s-lg'} /> <SignUpButton /></div>
      }
    </>
  )
}

export default LoginBtn;