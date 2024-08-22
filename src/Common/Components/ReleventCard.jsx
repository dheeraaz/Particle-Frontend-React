import React from 'react'
import { capitalizeWords } from '../HelperFunctions/capitalize'
import { truncate } from '../HelperFunctions/truncate'
import { useNavigate } from 'react-router-dom'

const ReleventCard = (props) => {
    const { title,imageSrc, date, cardRoute } = props;
    const navigate = useNavigate();
  // checkpoint
    return (
      <div className='lg:h-fit max-w-[507px] xl:max-w-[460px] lg:max-w-[260px] md:max-w-full flex gap-6 xl:gap-5 lg:flex-col lg:gap-2 justify-between items-center rounded-lg cursor-pointer group' onClick={() => navigate(cardRoute)}>
        <div className='rounded-lg max-w-[300px] max-h-40 xl:max-w-[272px] xl:max-h-[145px] md:max-w-[90%] md:max-h-[220px] overflow-hidden lg:w-full lg:max-h-[200px]'>
          <img src={imageSrc} alt={`${title}_img`} className='w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:scale-[1.2]' />
        </div>
        <div className='max-w-[186px] md:max-w-[90%] flex flex-col gap-10 xl:gap-8 lg:flex-col-reverse lg:gap-1 lg:w-full '>
          {/* <h4 className='font-links text-xl xl:text-lg font-medium text-primary group-hover:underline'>{capitalizeWords(title)}</h4> */}
          <h4 className='font-links text-lightText group-hover:text-primary text-lg xl:text-base lg:text-lg font-normal group-hover:underline'>{truncate(capitalizeWords(title),32)}</h4>
          <p className='mt-2 font-links text-sm xl:text-xs font-medium text-extraLightText group-hover:text-primary'>{date}</p>
        </div>
      </div>
    )
}

export default ReleventCard





