import React from 'react'
import RecentBlogs from '../Components/RecentBlogs';
import HeroSection from '../Components/HeroSection';
import NewsLetter from '../Components/NewsLetter';

const Home = () => {
  return (
    <>
      <HeroSection />
      <RecentBlogs />
      <hr className='h-0.5 bg-hrLineBg' />
      <NewsLetter />
    </>
  )
}

export default Home