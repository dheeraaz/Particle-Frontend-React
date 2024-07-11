import React from 'react'
import { capitalizeWords } from '../HelperFunctions/capitalize'
import { Link, useNavigate } from 'react-router-dom'


const BlogCard = (props) => {
  const { title, titleRight=false, imageSrc, date="", cardExcerpt, cardRoute } = props;
  const navigate = useNavigate();

  return (
    <div className='w-[400px] rounded-lg cursor-pointer group' onClick={() => navigate(cardRoute)}>
      <div className='rounded-lg w-full h-60 overflow-hidden'>
        <img src={imageSrc} alt={`${title}_img`} className='w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:scale-[1.2]' />
      </div>
      <div className='mt-2 pt-4'>
        <h4 className={`font-links text-lg font-medium text-primary truncate group-hover:underline ${titleRight?"text-right":""}`}>{capitalizeWords(title)}</h4>
        {date && <p className='mt-2 font-links text-xs font-medium text-extraLightText'>{date}</p>}
        <p className='mt-4 font-links text-sm font-light text-justify max-h-[158px] overflow-hidden'>{cardExcerpt}</p>
      </div>
    </div>
  )
}

export default BlogCard