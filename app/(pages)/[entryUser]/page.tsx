import EntryForm from '@/components/login'
import React from 'react'

const Login = ({ params }: { params: { entryUser: string } }) => {
  return (
    <div>
      <EntryForm type={params.entryUser} />
    </div>
  )
}

export default Login