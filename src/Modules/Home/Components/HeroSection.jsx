import React from 'react'
import { useNavigate } from 'react-router-dom';
import { blogContent } from '../../../Constants/contents/blogContents';

const HeroSection = () => {
    const navigate = useNavigate();
    
    let latestBlogID = blogContent.at(-1).chapters.at(-1).id;
    let latestBlogChapter = blogContent.at(-1).subjectTitle.toLowerCase();
    return (
        <section className='bg-primary'>
            <div className='container flex justify-between items-center'>
                {/* Hero Section - left side */}
                <div>
                    <h2 className='text-white text-[84px] xl:text-[70px] font-bold leading-snug'> <span className='text-accent'>Explore </span>Human Ideas</h2>
                    <button
                        onClick={() => (navigate(`/blogs/${latestBlogChapter}/${latestBlogID}`))}
                        className='w-[196px] h-[66px] mt-16 xl:w-[162px] xl:h-[55px] xl:mt-[50px] rounded-full bg-accent font-links font-normal text-xl xl:text-lg text-bodyColor'>
                        Start Reading
                    </button>
                </div>
                {/* Hero Section - right */}
                <div className="mt-[117px] mb-[90px] max-w-[600px] max-h-[500px] xl:max-w-[496px]">
                    <img src="/images/hero_section_img.svg" alt="hero_image" className='w-full h-full'/>
                </div>
            </div>
        </section>
    )
}

export default HeroSection