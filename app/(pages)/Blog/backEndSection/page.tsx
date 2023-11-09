import BlogSections from '@/components/blogSection'
import React from 'react'
import { BiLogoJavascript } from 'react-icons/bi'
import {SiMysql} from 'react-icons/si'
import {DiNodejs} from 'react-icons/di'
import {SiExpress} from 'react-icons/si'
const BackEnd = () => {
  const card: blogCard[] =
    [
      { label: 'JS', icon: <BiLogoJavascript />, bgGradiant:'bg-gradient-to-b from-yellow-300 to-yellow-700' },
      { label: 'MYSQL', icon: <SiMysql />, bgGradiant:'bg-gradient-to-b from-sky-300 to-sky-700' },
      { label: 'NODEJS', icon: <DiNodejs />, bgGradiant:'bg-gradient-to-b from-green-300 to-green-700' },
      { label: 'EXPRESS-JS', icon: <SiExpress />, bgGradiant:'bg-gradient-to-b from-blue-300 to-blue-700' },

    ]
  return (
    <div>
      <BlogSections card={card} />
    </div>
  )
}

export default BackEnd