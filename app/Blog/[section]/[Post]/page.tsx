import { getData } from '@/lib/getallmovie'
import React from 'react'

const BlogPost =async (props: any) => {
 const movie:movie[]=await getData()
 console.log(movie);
 

  return (
    <div>
      {props.searchParams.Tag}
      {
        movie?.map(item=>
          <div key={item.id}>{item.title}</div>
          )
      }
    </div>
  )
}

export default BlogPost