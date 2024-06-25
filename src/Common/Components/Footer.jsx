import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      {/* Top Footer */}
      <div className='primfooter bg-primary py-[90px] font-poppins'>
        <div className='contaiiner flex items-center justify-between gap-[133px]'>

          <div className="left w-1/2 flex gap-6 items-center">
            <NavLink to=''>
              <img src="/images/Logo_Footer.svg" alt="" />
            </NavLink>
            <div>
              <p className='text-graytext text-lg font-semibold '>PARTICLE</p>
              <p className='text-graytext text-sm font-normal'>Some thing about particle to fill up this space.</p>
            </div>
          </div>

          <div className="right flex justify-between gap-[89px] w-full">
            <div className='flex flex-col gap-[10px]'>
              <p className='text-[#F2F2F2] text-lg font-medium'>Quick Links</p>
              <a href="#" className='text-graytext text-sm font-normal'>Information</a>
              <a href="#" className='text-graytext text-sm font-normal'>Terms of Service</a>
              <a href="#" className='text-graytext text-sm font-normal'>Support</a>
              <a href="#" className='text-graytext text-sm font-normal'>FAQs</a>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <p className='text-[#F2F2F2] text-lg font-medium'>Hot Topics</p>
              <a href="#" className='text-graytext text-sm font-normal'>Climate</a>
              <a href="#" className='text-graytext text-sm font-normal'>Travel</a>
              <a href="#" className='text-graytext text-sm font-normal'>Universe</a>
              <a href="#" className='text-graytext text-sm font-normal'>Food</a>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <p className='text-[#F2F2F2] text-lg font-medium'>Contacts</p>
              <div className='flex items-center gap-2'>
                <img src="/icons/phone_icon.svg" alt="" />
                <a href="tel:123-456-7890" className='text-graytext text-sm font-normal'>+977-98XXXXXXXX/ +977-97XXXXXXXX</a>
              </div>
              <div className='flex items-center gap-2'>
                <img src="/icons/location_icon.svg" alt="" />
                <a href="#" className='text-graytext text-sm font-normal'>Jwagal, Lalitpur</a>
              </div>
              <div className='flex items-center gap-2'>
                <img src="/icons/email.svg" alt="" />
                <a href="mailto:some.mail@gmail.com" target='_blank' className='text-graytext text-sm font-normal'>some.mail@gmail.com</a>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className='secfooter bg-secfooter'>
        <div className='contaiiner flex items-center justify-between py-[13px]'>
          <div className="left text-[#BDBDBD] text-[14px] font-normal">
            © 2023 Particle | All Rights Reserved
          </div>
          <div className="right flex gap-[10px] justify-end items-center h-6 ">
            <a href="#"><img src="/icons/facebook_logo.svg" alt="facebook-logo" /></a>
            <a href="#"><img src="/icons/instagram_logo.svg" alt="facebook-logo" /></a>
            <a href="#"><img src="/icons/tiktok_logo.svg" alt="instagram-logo" /></a>
            <a href="#"><img src="/icons/Youtube_logo.svg" alt="facebook-logo" /></a>
            <a href="#"><img src="/icons/Twitter_logo.svg" alt="facebook-logo" /></a>
            <a href="#"><img src="/icons/linkedin_logo.svg" alt="facebook-logo" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer