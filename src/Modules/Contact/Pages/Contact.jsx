import React from 'react'
import { Breadcrumbs } from '../../../Common/Components';
import ContactForm from '../Components/ContactForm';

const Contact = () => {
  let pathArray = ["/", "contact"];
  return (
    <div className='container'>
      <Breadcrumbs path={pathArray} />
      <section className='w-full h-[640px] rounded-[20px] my-6 bg-[#f7f7f8] _contactShadow flex justify-between'>
        {/* contact Section - left */}
        <aside className='w-[574px] pl-[64px] flex items-center'>
          <ContactForm />
        </aside>
        {/* contact Section - left */}
        <aside className='w-[706px] bg-primary rounded-r-[20px] flex items-center justify-center'>
          <img src="/images/contactUsImage.svg" alt="contact_us_img" className='max-w-[504px] max-h-[502px]' />
        </aside>
      </section>
    </div>
  )
}

export default Contact