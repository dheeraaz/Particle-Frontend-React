import React from 'react'
import { capitalizeWords } from '../../../Common/HelperFunctions/capitalize'

const NewsLetter = () => {
    return (
        <section className='container'>
            <div className='px-[353px] py-16 xl:px-[317px] xl:py-[57px] text-center'>
                <h3 className='subHeading'>{capitalizeWords('subscribe to our newsletter')}</h3>
                <p className=' font-links font-medium text-xs xl:text-[10px] text-extraLightText'>We’ll keep you in the loop on our best and latest blog posts.</p>
                <div className='mt-12 h-14 xl:mt-11 xl:h-[50px] w-full flex items-center justify-between gap-10 xl:gap-9'>
                    <input
                        type="text"
                        id="simple-search"
                        className="searchShadow bg-[#F7F7F7] rounded-full h-full flex-1 text-primary text-sm py-2 px-4 xl:px-3 xl:text-xs outline-none border-none"
                        placeholder="Enter Your Email Address"
                        autoComplete='off'
                    />
                    <button className='searchShadow h-full py-[13px] px-12 text-xl xl:py-2 xl:px-11 xl:text-base rounded-full bg-accent font-links   text-bodyColor font-normal'>Subscribe</button>

                </div>
            </div>
        </section>
    )
}

export default NewsLetter