'use client'
import EntryForm from '@/components/login'
import React from 'react'

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Login({ params }: { params: { entryUser: string } }) {
  const userDetails:(arg:FormValues)=>void=(arg)=>{
    console.log('hello from [entryuser]');
    console.log(arg);
  }
  return (
    <div>
      <EntryForm type={params.entryUser} handleSetCookie={userDetails}/>
    </div>
  )
}

