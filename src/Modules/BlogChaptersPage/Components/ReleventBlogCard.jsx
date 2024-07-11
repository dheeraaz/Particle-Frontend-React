import React from 'react'
import { capitalizeWords } from '../../../Common/HelperFunctions/capitalize'
import { useNavigate } from 'react-router-dom'

const ReleventBlogCard = (props) => {
    const { title,imageSrc, date, cardRoute } = props;
    const navigate = useNavigate();
  
    return (
      <div className='w-[507px] flex gap-6 justify-between items-center rounded-lg cursor-pointer group' onClick={() => navigate(cardRoute)}>
        <div className='rounded-lg w-[300px] h-40 overflow-hidden'>
          <img src={imageSrc} alt={`${title}_img`} className='w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:scale-[1.2]' />
        </div>
        <div className='w-[186px] flex flex-col gap-12'>
          <h4 className='font-links text-2xl font-medium text-primary group-hover:underline'>{capitalizeWords(title)}</h4>
          <p className='mt-2 font-links text-sm font-medium text-extraLightText'>{date}</p>
        </div>
      </div>
    )
}

export default ReleventBlogCard





