import React from 'react'
import { useNavigate } from 'react-router-dom'
import { capitalizeWords } from '../HelperFunctions/capitalize';

const ContentLink = (props) => {
    const navigate = useNavigate();
    const {contentRoute, contentTitle} = props;
    return (
        <div onClick={() => navigate(contentRoute)} className='h-11 font-links text-lightText hover:text-black text-xl xl:h-10 xl:text-lg font-normal flex items-center justify-between border-b-[1px] border-divDividerBg hover:border-black cursor-pointer group'>
            <h4 className='flex-1 truncate pr-5'>{capitalizeWords(contentTitle)}</h4>
            {/* <img src="/icons/right_arrow.svg" alt="right_arrow_img" className='group-hover:translate-x-2 transition-all duration-200 max-w-[27px] max-h-[24px] xl:max-w-[24px] xl:max-h-[22]' /> */}
            <svg
                className='text-lightText group-hover:text-black group-hover:translate-x-2 transition-all duration-200 max-w-[24px] max-h-[25px] xl:max-w-[22px] xl:max-h-[20]'
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2929 5.23185C12.6834 4.84133 13.3166 4.84133 13.7071 5.23185L20.7071 12.2319C21.0976 12.6224 21.0976 13.2556 20.7071 13.6461L13.7071 20.6461C13.3166 21.0366 12.6834 21.0366 12.2929 20.6461C11.9024 20.2556 11.9024 19.6224 12.2929 19.2319L17.5858 13.939H4C3.44772 13.939 3 13.4913 3 12.939C3 12.3867 3.44772 11.939 4 11.939H17.5858L12.2929 6.64607C11.9024 6.25554 11.9024 5.62238 12.2929 5.23185Z"
                    className="fill-current" />
            </svg>
        </div>
    )
}

export default ContentLink