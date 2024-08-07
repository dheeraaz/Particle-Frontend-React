import React from 'react'
import { BlogCard, Breadcrumbs } from '../../../Common/Components'
import { blogContent } from '../../../Constants/contents/blogContents';

const BlogsSubjectPage = () => {
  let pathArray = ["/", "blogs"];
  return (
    <div className='container'>
      <Breadcrumbs path={pathArray} />
      {/* <section className='my-6 xl:my-5 flex justify-between flex-wrap '> */}
      <section className='my-6 xl:my-5 w-full grid grid-cols-4 gap-10 xl:grid-cols-3 xl:gap-9'>
        {blogContent.map((subject, index) => {
          return <BlogCard
            key={index}
            title={subject.subjectTitle}
            titleRight
            imageSrc={subject.subjectCardImage}
            cardExcerpt={subject.subjectExcerpt}
            cardRoute={`/blogs/${subject.subjectTitle.toLowerCase()}`}
          />
        })}
        {blogContent.map((subject, index) => {
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

export default BlogsSubjectPage

