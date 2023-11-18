"use client"
import EntryBtn from '../UI/Button/EntryBtn'

const LoginBtn = () => {
  return (
    <>

      <div className='flex justify-center items-center'>
        <EntryBtn gradiant={'bg-gradient-to-tr rounded-s-lg'} text={'LogIn'}/>
        <EntryBtn gradiant={'bg-gradient-to-tl rounded-e-lg'} text={'SugnUp'}/>
      </div>

    </>
  )
}

export default LoginBtn;