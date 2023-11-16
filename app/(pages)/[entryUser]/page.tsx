import React from 'react'

const Login = ({params}:{params:{entryUser:string}}) => {
  return (
    <div>{params.entryUser}</div>
  )
}

export default Login