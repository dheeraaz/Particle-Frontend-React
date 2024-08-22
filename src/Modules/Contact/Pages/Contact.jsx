import React from 'react'
import { Breadcrumbs } from '../../../Common/Components';
import ContactForm from '../Components/ContactForm';

const Contact = () => {
  let pathArray = ["/", "contact"];
  return (
    <div className='container'>
      <Breadcrumbs path={pathArray} />
      <section className='w-full rounded-[20px] my-6 bg-[#f7f7f8] _contactShadow flex justify-between sm:flex-col'>
        {/* contact Section - left */}
        <aside className='w-[574px] xl:w-[600px] lg:w-[484px] md:w-[374px] sm:w-full lg:py-[50px] md:py-[30px] sm:px-2 sm:py-6 flex justify-center items-center'>
          <ContactForm />
        </aside>
        {/* contact Section - left */}
        <aside className='sm:hidden w-[706px] xl:w-[560px] lg:w-[440px] md:w-[322px] sm:w-[330px] py-[68px] xl:py-[64px] lg:py-[50px] md:py-[30px] bg-primary rounded-r-[20px] flex items-center justify-center'>
          <img src="/images/contactUsImage.svg" alt="contact_us_img" className='max-w-[504px] max-h-[502px] xl:max-h-[460px] xl:max-w-[460px] lg:max-w-[390px] lg:max-h-[390px] md:max-h-[300px] md:max-w-[300px]' />
        </aside>
      </section>
    </div>
  )
}

export default Contact