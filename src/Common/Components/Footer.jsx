import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialLinks } from '../Utility'
import { quickLinks, hotTopics, contacts } from '../../Constants/footerLinks'
import { capitalizeWords } from '../HelperFunctions/capitalize'

const Footer = () => {
  return (
    <footer>
      {/* Top Footer */}
      <div className=' bg-primary py-[90px] font-links'>
        <div className='container flexVerCenter justify-between gap-[133px]'>
          {/* left */}
          <div className="w-1/2 flex gap-6 items-center">
            <NavLink to=''>
              <img src="/images/Logo_Footer.svg" alt="" />
            </NavLink>
            <div>
              <h3 className='text-grayText text-lg font-semibold '>PARTICLE</h3>
              <p className='footerLinks mt-[10px]'>Some thing about particle to fill up this space.</p>
            </div>
          </div>
          {/* Right */}
          <div className="flex justify-between gap-[89px] w-full">
            <div className='flex flex-col gap-[10px]'>
              <h4 className='footerHeadings'>Quick Links</h4>
              {quickLinks.map((links) => (
                <a key={links.id} href={links.href} className='footerLinks'>{capitalizeWords(links.linkName)}</a>
              ))}

            </div>
            <div className='flex flex-col gap-[10px]'>
              <h4 className='footerHeadings'>Hot Topics</h4>
              {hotTopics.map((links) => (
                <a key={links.id} href={links.href} className='footerLinks'>{capitalizeWords(links.linkName)}</a>
              ))}
            </div>
            <div className='flex flex-col gap-[10px]'>
              <h4 className='footerHeadings'>Contacts</h4>
              {
                contacts.map((contact) => (
                  <div className='flexVerCenter gap-2' key={contact.id} >
                    <img src={contact.imgSrc} alt={contact.imgAlt} />
                    <a href={contact.href} className='footerLinks' target='_blank'>{contact.linkName}</a>
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
          <div className="left text-[#BDBDBD] text-[14px] font-normal">
            © 2023 Particle | All Rights Reserved
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}

export default Footer