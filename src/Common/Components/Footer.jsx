import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialLinks } from '../Utility'

const Footer = () => {
  return (
    <div>
      {/* Top Footer */}
      <div className=' bg-primary py-[90px] font-links'>
        <div className='container flexVerCenter justify-between gap-[133px]'>
          {/* left */}
          <div className="w-1/2 flex gap-6 items-center">
            <NavLink to=''>
              <img src="/images/Logo_Footer.svg" alt="" />
            </NavLink>
            <div>
              <p className='text-graytext text-lg font-semibold '>PARTICLE</p>
              <p className='footerLinks'>Some thing about particle to fill up this space.</p>
            </div>
          </div>
          {/* Right */}
          <div className="flex justify-between gap-[89px] w-full">
            <div className='flex flex-col gap-[10px]'>
              <p className='footerHeadings'>Quick Links</p>
              <a href="#" className='footerLinks'>Information</a>
              <a href="#" className='footerLinks'>Terms of Service</a>
              <a href="#" className='footerLinks'>Support</a>
              <a href="#" className='footerLinks'>FAQs</a>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <p className='footerHeadings'>Hot Topics</p>
              <a href="#" className='footerLinks'>Climate</a>
              <a href="#" className='footerLinks'>Travel</a>
              <a href="#" className='footerLinks'>Universe</a>
              <a href="#" className='footerLinks'>Food</a>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <p className='footerHeadings'>Contacts</p>
              <div className='flexVerCenter gap-2'>
                <img src="/icons/phone_icon.svg" alt="" />
                <a href="tel:123-456-7890" className='footerLinks'>+977-98XXXXXXXX/ +977-97XXXXXXXX</a>
              </div>
              <div className='flexVerCenter gap-2'>
                <img src="/icons/location_icon.svg" alt="" />
                <a href="https://www.google.com/maps/place/Labim+Mall/@27.6771213,85.3145017,17z/data=!4m14!1m7!3m6!1s0x39eb19eb1dad6439:0xbb1689fdcee3740b!2sLabim+Mall!8m2!3d27.6771166!4d85.3170766!16s%2Fg%2F11h_1kznm2!3m5!1s0x39eb19eb1dad6439:0xbb1689fdcee3740b!8m2!3d27.6771166!4d85.3170766!16s%2Fg%2F11h_1kznm2?entry=ttu" target='_blank' className='footerLinks'>Jwagal, Lalitpur</a>
              </div>
              <div className='flexVerCenter gap-2'>
                <img src="/icons/email.svg" alt="" />
                <a href="mailto:some.mail@gmail.com" target='_blank' className='footerLinks'>some.mail@gmail.com</a>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className='bg-secFooter'>
        <div className='container flexVerCenter justify-between py-[13px]'>
          <div className="left text-[#BDBDBD] text-[14px] font-normal">
            © 2023 Particle | All Rights Reserved
          </div>
          <SocialLinks/>
        </div>
      </div>
    </div>
  )
}

export default Footer