import React from 'react'
import { BlogCard, Breadcrumbs } from '../../../Common/Components'
import { blogContent } from '../../../Constants/contents/blogContents';

const BlogsSubjectPage = () => {
  let pathArray = ["/", "blogs"];
  return (
    <div className='container'>
      <Breadcrumbs path={pathArray} />
      {/* <section className='my-6 xl:my-5 flex justify-between flex-wrap '> */}
      <section className='my-6 xl:my-5 w-full grid grid-cols-4 gap-10 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:gap-9 lg:gap-8 md:gap-7'>
        {blogContent.map((subject, index) => {
          return <div className='sm:w-fit sm:mx-auto' key={index}>
            <BlogCard
              title={subject.subjectTitle}
              titleRight
              imageSrc={subject.subjectCardImage}
              cardExcerpt={subject.subjectExcerpt}
              cardRoute={`/blogs/${subject.subjectTitle.toLowerCase()}`}
            />
          </div>
        })}

        {blogContent.map((subject, index) => {
          return <div className='sm:w-fit sm:mx-auto' key={index}>
            <BlogCard
              title={subject.subjectTitle}
              titleRight
              imageSrc={subject.subjectCardImage}
              cardExcerpt={subject.subjectExcerpt}
              cardRoute={`/blogs/${subject.subjectTitle.toLowerCase()}`}
            />
          </div>
        })}
        
      </section>
    </div>
  )
}

export default BlogsSubjectPage

