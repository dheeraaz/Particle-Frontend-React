import React from 'react'
import { useParams } from 'react-router-dom'

const BlogPage = () => {
    const { blogId } = useParams();
  return (
    <div>BlogPage: {blogId}</div>
  )
}

export default BlogPage