import React from 'react'

const SubjectDescription = (props) => {
    const {imgSrc, subjectTitle,  description="" } = props
  return (
    <section className='my-6 flex gap-16 xl:my-5 xl:gap-14 justify-between items-center'>
    <div className='w-[547px] h-[278px] xl:w-[496px] xl:h-[252px] rounded-lg'>
      <img src={imgSrc} alt={`${subjectTitle}_img`} className='w-full h-full rounded-lg' />
    </div>
    <div className='flex flex-1 flex-col gap-8 text-justify text-base font-light xl:text-sm xl:gap-7'>
      {description?.map((para, index) => {
        return <p key={index}>{para}</p>
      })}
    </div>
  </section>
  )
}

export default SubjectDescription