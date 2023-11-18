"use client"
import React from 'react'

const BlogPost = (props:any) => {
  console.log(props);
  const url=process.env.MOVIE_API
  console.log(process.env.NEXT_APP_ROUTE);
  
  const bg='bg-red-500'
  return (
    <div>
      {props.searchParams.Tag}
    </div>
  )
}

export default BlogPost