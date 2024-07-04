import React from 'react'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-primary'>
            <div className='container flex justify-between items-center'>
                {/* Hero Section - left side */}
                <div>
                    <h2 className='text-white text-[84px] font-bold leading-snug'> <span className='text-accent'>Explore </span>Human Ideas</h2>
                    <button
                        onClick={() => (navigate('/blogs'))}
                        className='w-[196px] h-[66px] mt-16 rounded-[62px] bg-accent font-links font-normal text-xl text-bodyColor'>
                        Start Reading
                    </button>
                </div>
                {/* Hero Section - right */}
                <div className="mt-[117px] mb-[90px]">
                    <img src="/images/hero_section_img.svg" alt="hero_image" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection