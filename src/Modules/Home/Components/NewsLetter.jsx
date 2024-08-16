import React from 'react'
import { capitalizeWords } from '../../../Common/HelperFunctions/capitalize'

const NewsLetter = () => {
    return (
        <section className='container border-2 border-red-500'>
            <div className='px-[353px] py-16 xl:px-[317px] lg:px-[250px] md:px-[200px] sm:px-[100px] xl:py-[57px] lg:py-[47px] md:py-10 sm:pt-4 text-center'>
                <h3 className='subHeading'>{capitalizeWords('subscribe to our newsletter')}</h3>
                <p className=' font-links font-medium text-xs xl:text-[10px] text-extraLightText'>We’ll keep you in the loop on our best and latest blog posts.</p>
                <form className='mt-12 h-14 xl:mt-11 lg:mt-10 md:mt-9 sm:mt-6 xl:h-[50px] lg:h-10 md:h-9 flex sm:flex-col sm:gap-2 items-center justify-between gap-10 xl:gap-9 lg:gap-6'>
                    <input
                        type="text"
                        id="simple-search"
                        className="searchShadow bg-[#F7F7F7] rounded-full h-full flex-1 text-primary text-sm py-2 px-4 xl:px-3 xl:text-xs lg:px-2 lg:text-[10px] outline-none border-none"
                        placeholder="Enter Your Email Address"
                        autoComplete='off'
                    />
                    <button className='searchShadow xl:h-full lg:h-[34px] py-[13px] px-12 text-xl xl:py-2 xl:px-11 xl:text-base lg:text-xs lg:px-3 lg:py-1 sm:px-4 sm:py-2 rounded-full bg-accent font-links text-bodyColor font-normal'>Subscribe</button>

                </form>
            </div>
        </section>
    )
}

export default NewsLetter