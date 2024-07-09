import React from 'react'
import { capitalizeWords } from '../HelperFunctions/capitalize'
import { Link } from 'react-router-dom'


const BlogCard = (props) => {
  const {title,imageSrc, date, cardExcerpt, cardRoute} = props;
  
  return (
    <div className='cardShadow w-[400px] pb-[18px] bg-bodyColor rounded-lg'>
      <img src={imageSrc} alt="React_Image" className=' w-full object-cover rounded-lg' />
      <div className='mt-2 px-6 py-4'>
        <h4 className='font-links text-lg font-medium text-primary'>{capitalizeWords(title)}</h4>
        <p className='mt-2 font-links text-xs font-medium text-extraLightText'>{date}</p>
        <p className='mt-4 font-links text-sm font-light text-justify h-[156px] overflow-hidden'>{cardExcerpt}</p>
      </div>
      <div className='px-6'>
        <Link to={cardRoute} className='flex gap-2 items-center justify-end'>
          <p className='font-links text-sm font-medium'>Read More</p>
          <img src="/icons/right_arrow.svg" alt="right_arrow" />
        </Link>
      </div>
    </div>
  )
}

export default BlogCard