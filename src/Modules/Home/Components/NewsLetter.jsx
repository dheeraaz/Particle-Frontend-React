import React from 'react'
import { capitalizeWords } from '../../../Common/HelperFunctions/capitalize'

const NewsLetter = () => {
    return (
        <div className='container'>
            <div className='px-[353px] py-16 text-center'>
                <h3 className='subHeading'>{capitalizeWords('subscribe to our NewsLetter')}</h3>
                <p className=' font-links font-medium text-xs text-extraLightText'>We’ll keep you in the loop on our best and latest blog posts.</p>
                <div className='mt-12 h-14 w-full flex items-center justify-between gap-10'>
                    <input
                        type="text"
                        id="simple-search"
                        className="searchShadow bg-[#F7F7F7] rounded-[51px] h-full flex-1 text-primary text-sm py-2 px-4 outline-none border-none"
                        placeholder="Enter Your Email Address"
                        autoComplete='off'
                    />
                    <button className='searchShadow py-[13px] px-12 rounded-[51px] bg-accent font-links text-xl text-bodyColor font-normal'>Subscribe</button>

                </div>
            </div>
        </div>
    )
}

export default NewsLetter