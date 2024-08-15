import React from 'react'

const ContactForm = () => {
    return (
        <div className='text-sm font-links font-medium'>
            <div>
                <h3 className=' text-[40px] text-accent'>Get In Touch</h3>
                <p className='text-extraLightText mt-2'>Any questions or suggestions? Let us know!</p>
            </div>
            <div className='mt-8'>
                <form action="" className='flex flex-col items-start'>
                    <input type="text" required autoComplete='off' placeholder='Enter Your Name' className='w-[408px] h-[44px] rounded-md border-[0.1px] border-black bg-white px-2 font-light text-[rgba(0, 0, 0, 0.40)]' />
                    <input type="email" required autoComplete='off' placeholder='Enter Your Email' className='mt-7 w-[408px] h-[44px] rounded-md border-[0.1px] border-black bg-white px-2 font-light text-[rgba(0, 0, 0, 0.40)]' />
                    <textarea required autoComplete='off' placeholder='Type Your Message Here...' className='mt-7 w-[408px] h-[132px] pt-[14px] rounded-md border-[0.1px] border-black bg-white px-2 font-light text-[rgba(0, 0, 0, 0.40)]' />
                    <button type="submit" className='mt-7 w-[196px] px-[62px] py-[13px] bg-accent rounded-full text-bodyColor text-xl font-normal hover:tracking-wider transition-all duration-200'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm