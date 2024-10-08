import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialLinks } from '../Utility'
import { quickLinks, hotTopics, contacts } from '../../Constants/footerLinks'
import { capitalizeWords } from '../HelperFunctions/capitalize'

const Footer = () => {
  return (
    <footer>
      {/* Top Footer */}
      <div className=' bg-primary py-[90px] lg:py-[78px] md:py-[68px] sm:py-10 font-links'>
        <div className='container flexVerCenter justify-between gap-[133px] xl:gap-[120px] lg:gap-[96px] md:flex-col md:items-center md:gap-4'>
          {/* left */}
          <div className="w-full flex gap-6 xl:gap-5 lg:gap-4 items-center md:justify-center md:border-b-[1px] md:border-white md:py-4 sm:border-b-2  ">
            <NavLink to=''>
              <img src="/images/Logo_Footer.svg" alt="" className='max-w-[98px] xl:max-w-[88px] lg:max-w-[56px] aspect-auto' />
            </NavLink>
            <div>
              <h3 className='text-grayText text-lg xl:text-base lg:text-sm font-semibold '>PARTICLE</h3>
              <p className='footerLinks mt-[10px] lg:mt-2 hover:text-grayText'>Some thing about particle to fill up this space.</p>
            </div>
          </div>
          {/* Right */}
          <div className="flex justify-between gap-[89px] xl:gap-[70px] lg:gap-14 w-full xl:pr-4 lg:pr-2 sm:flex-col sm:items-start sm:justify-center sm:px-0 sm:py-2 sm:gap-3">
            <div className='flex flex-col gap-[10px] sm:border-b-[1px] sm:border-white sm:w-full sm:pb-4' >
              <h4 className='footerHeadings'>Quick Links</h4>
              {quickLinks.map((links) => (
                <a key={links.id} href={links.href} className='footerLinks whitespace-nowrap'>{capitalizeWords(links.linkName)}</a>
              ))}
            </div>
            <div className='flex flex-col gap-[10px] sm:border-b-[1px] sm:border-white sm:w-full sm:pb-4'>
              <h4 className='footerHeadings'>Hot Topics</h4>
              {hotTopics.map((links) => (
                <a key={links.id} href={links.href} className='footerLinks'>{capitalizeWords(links.linkName)}</a>
              ))}
            </div>
            <div className='flex flex-col gap-[10px] sm:border-b-[1px] sm:border-white sm:w-full sm:pb-4'>
              <h4 className='footerHeadings'>Contacts</h4>
              {
                contacts.map((contact) => (
                  <div className='flexVerCenter gap-2' key={contact.id} >
                    <img src={contact.imgSrc} alt={contact.imgAlt} />
                      <a href={contact.href} className='footerLinks whitespace-nowrap xl:whitespace-normal' target='_blank'>{contact.linkName}</a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className='bg-secFooter'>
        <div className='container flexVerCenter justify-between py-[13px]'>
          <div className="left text-[#BDBDBD] text-sm xl:text-xs lg:text-[10px] font-normal">
            {capitalizeWords('© 2023 particle | all rights reserved')}
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}

export default Footer