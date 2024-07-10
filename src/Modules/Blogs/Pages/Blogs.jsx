import React from 'react'
import { BlogCard, Breadcrumbs } from '../../../Common/Components'
import { blogContent } from '../../../Constants/contents/blogContents';

const Blogs = () => {
  let pathArray = ["/", "blogs"];
  return (
    <div className='container'>
      <Breadcrumbs path={pathArray} />
      <div className='my-6 flex justify-between flex-wrap gap-10'>
        {blogContent.map((subject,index) => {
          return <BlogCard
            key={index}
            title={subject.subjectTitle}
            titleRight
            imageSrc={subject.subjectCardImage}
            cardExcerpt={subject.subjectExcerpt}
            cardRoute={`/blogs/${subject.subjectTitle.toLowerCase()}`}
          />
        })}
      </div>
    </div>
  )
}

export default Blogs

