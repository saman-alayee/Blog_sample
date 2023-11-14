import React from 'react'

const BlogPost = (props:any) => {
  console.log(props);
  
  const bg='bg-red-500'
  return (
    <div>
      {props.searchParams.Tag}
    </div>
  )
}

export default BlogPost