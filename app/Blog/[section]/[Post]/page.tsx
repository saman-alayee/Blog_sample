import LoginUser from '@/lib/LoginUser'
import SignUpUser from '@/lib/SignUpUser'
import React from 'react'

const BlogPost = async (props: any) => {
  const fake=await SignUpUser({email:"x@yahoo.com",password:"112233aa222"})
  
  
  const login=await LoginUser({email:"aa@yahoo.com",password:"112233aa"})




  return (
    <>{JSON.stringify(fake)}</>
  )
}

export default BlogPost