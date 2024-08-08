import React from 'react'
import { BlogCard, Breadcrumbs } from '../../../Common/Components'
import { paperContent } from '../../../Constants/contents/paperContent';

const PapersSubjectPage = () => {
  let pathArray = ["/", "papers"];
  return (
    <div className='container'>
      <Breadcrumbs path={pathArray} />
      {/* <section className='my-6 xl:my-5 flex justify-between flex-wrap '> */}
      <section className='my-6 xl:my-5 w-full grid grid-cols-4 gap-10 xl:grid-cols-3 xl:gap-9'>
        {paperContent.map((subject, index) => {
          return <BlogCard
            key={index}
            title={subject.subjectTitle}
            titleRight
            imageSrc={subject.subjectCardImage}
            cardExcerpt={subject.subjectExcerpt}
            cardRoute={`/papers/${subject.subjectTitle.toLowerCase()}`}
          />
        })}
      </section>
    </div>
  )
}

export default PapersSubjectPage

