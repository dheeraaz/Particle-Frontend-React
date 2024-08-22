import React from 'react'
import { socialLinks } from '../../Constants/socialLinks'

const SocialLinks = () => {
    return (
        <div className="right flex gap-[10px] xl:gap-2 lg:gap-1 justify-end items-center h-6 ">
            {socialLinks.map((obj) =>
                <a key={obj.id} href={obj.href}><img src={obj.src} alt={obj.alt} className='max-w-6 xl:max-w-5 lg:max-w-4 md:max-w-3 aspect-auto'/></a>
            )}
        </div>
    )
}

export default SocialLinks