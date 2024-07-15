import React from 'react'
import { capitalizeWords } from '../HelperFunctions/capitalize'
import { useNavigate } from 'react-router-dom'


const BlogCard = (props) => {
  const { title, titleRight=false, imageSrc, date="", cardExcerpt, cardRoute } = props;
  const navigate = useNavigate();

  return (
    <div className='max-w-[400px] xl:max-w-[360px] rounded-lg cursor-pointer group' onClick={() => navigate(cardRoute)}>
      <div className='rounded-lg w-[400px] h-60  xl:w-[360px] xl:h-[216px] overflow-hidden'>
        <img src={imageSrc} alt={`${title}_img`} className='w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:scale-[1.2]' />
      </div>
      <div className='mt-6 xl:mt-5'>
        <h4 className={`font-links text-lg xl:text-base font-medium text-primary truncate group-hover:underline ${titleRight?"text-right":""}`}>{capitalizeWords(title)}</h4>
        {date && <p className='mt-2 font-links text-xs xl:text-[10px] font-medium text-extraLightText'>{date}</p>}
        <p className='mt-4 xl:mt-3 font-links text-sm xl:text-xs font-light text-justify max-h-[158px] overflow-hidden'>{cardExcerpt}</p>
      </div>
    </div>
  )
}

export default BlogCard