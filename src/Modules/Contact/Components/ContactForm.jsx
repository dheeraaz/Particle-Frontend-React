import React from 'react'
import { useForm } from 'react-hook-form';


const ContactForm = () => {
    const { register, handleSubmit,reset ,formState: { errors, }, } = useForm({
        defaultValues: {
            fullname: "",
            email: "",
            message: "",
        }
    });

    const dataSubmit = (data) => {
        try {
            console.log(data)
            reset();
        } catch (error) {
            console.error("Error", error);
        }
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
    
    return (
        <div className='text-sm font-links font-medium'>
            <div>
                <h3 className=' text-[40px] text-accent'>Get In Touch</h3>
                <p className='text-extraLightText mt-2'>Any questions or suggestions? Let us know!</p>
            </div>
            <div className='mt-8'>
                <form action="" onSubmit={handleSubmit(dataSubmit)} className='flex flex-col items-start'>
                    <input type="text" {...register('fullname', { required: "Name Is Required" })} autoComplete='off' placeholder='Enter Your Name' className='w-[408px] h-[44px] rounded-md border-[0.1px] border-black bg-white px-2 font-light text-[rgba(0, 0, 0, 0.40)]' />
                    {errors.fullname && <p className='text-accent'>{errors.fullname.message}</p>}
                    <input type="email" {...register('email', { required: "Email Is Required", pattern: { value: emailRegex, message: "Invalid Email address" } })} autoComplete='off' placeholder='Enter Your Email' className='mt-7 w-[408px] h-[44px] rounded-md border-[0.1px] border-black bg-white px-2 font-light text-[rgba(0, 0, 0, 0.40)]' />
                    {errors.email && <p className='text-accent'>{errors.email.message}</p>}
                    <textarea {...register('message', { required: "Message Is Required" })} autoComplete='off' placeholder='Type Your Message Here...' className='mt-7 w-[408px] h-[132px] pt-[14px] rounded-md border-[0.1px] border-black bg-white px-2 font-light text-[rgba(0, 0, 0, 0.40)]' />
                    {errors.message && <p className='text-accent'>{errors.message.message}</p>}
                    <button type="submit" className='mt-7 w-[196px] px-[62px] py-[13px] bg-accent rounded-full text-bodyColor text-xl font-normal hover:tracking-wider transition-all duration-200'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm