import React from 'react'
import { BlogCard, Breadcrumbs } from '../../../Common/Components'
import { blogContent } from '../../../Constants/contents/blogContents';

const Blogs = () => {
  let pathArray = ["/", "blogs"];
  return (
    <div className='container'>
      <Breadcrumbs path={pathArray} />
      <section className='my-6 xl:my-5 flex justify-center flex-wrap gap-10 xl:gap-9'>
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
      </section>
    </div>
  )
}

export default Blogs

