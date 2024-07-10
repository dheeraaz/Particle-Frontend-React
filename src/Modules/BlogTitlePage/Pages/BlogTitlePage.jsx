import React from 'react'
import { Breadcrumbs } from '../../../Common/Components';
import { useParams } from 'react-router-dom';

const BlogTitlePage = () => {
  const {blogTitle} = useParams();
  let pathArray = ["/", "blogs", blogTitle];
  console.log(blogTitle);
  return (
    <div className='container'>
      <Breadcrumbs path={pathArray} />
      <div className='my-6 flex justify-between'>
        <h2>Blogs Title Page</h2>
      </div>
    </div>
  )
}

export default BlogTitlePage