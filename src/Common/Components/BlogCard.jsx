import React from 'react'
import { capitalizeWords } from '../HelperFunctions/capitalize'
import { useNavigate } from 'react-router-dom'


const BlogCard = (props) => {
  const { title, titleRight = false, imageSrc, date = "", cardExcerpt, cardRoute } = props;
  const navigate = useNavigate();

  return (
    // every card is given with max-width for flexible width managed by grid itself
    // for image, width is set to card width whereas height is provided with some values for making all the images with the same size
    <div className='max-w-[400px] rounded-lg cursor-pointer group' onClick={() => navigate(cardRoute)}>
      <div className='rounded-lg w-full h-44 xl:h-[218px] overflow-hidden'>
        <img src={imageSrc} alt={`${title}_img`} className='w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:scale-[1.2]' />
      </div>
      <div className='mt-6 xl:mt-5'>
        <h4 className={`font-links text-lg xl:text-base font-medium text-primary truncate group-hover:underline ${titleRight ? "text-right" : ""}`}>{capitalizeWords(title)}</h4>
        {date && <p className='mt-2 font-links text-xs xl:text-[10px] font-medium text-extraLightText'>{date}</p>}
        <div className='mt-2 xl:mt-1.5'>
          {cardExcerpt.map((excerpt, index) =>
            <p key={index} className=' font-links text-sm  font-light text-justify'>{excerpt}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogCard