"use client"
import EntryBtn from './EntryBtn'

const LoginBtn = () => {
  return (
    <>

      <div className='h-full flex justify-center items-center'>
        <EntryBtn gradiant={'bg-gradient-to-tr rounded-s-lg'} text={'LogIn'} btnHref='/login'/>
        <EntryBtn gradiant={'bg-gradient-to-tl rounded-e-lg'} text={'SignUp'} btnHref='/SignUp'/>
      </div>

    </>
  )
}

export default LoginBtn;