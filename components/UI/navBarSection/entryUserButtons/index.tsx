"use client"
import EntryBtn from './EntryBtn'

const LoginBtn = () => {
  return (
    <>

      <div className='h-full flex justify-center items-center'>
        <EntryBtn gradiant={'bg-gradient-to-tr rounded-s-lg'} text={'SignIn'} btnHref='/entryUser/Login'/>
        <EntryBtn gradiant={'bg-gradient-to-tl rounded-e-lg'} text={'SignUp'} btnHref='/entryUser/SignUp'/>
      </div>

    </>
  )
}

export default LoginBtn;