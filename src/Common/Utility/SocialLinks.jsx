import React from 'react'
import { socialLinks } from '../../Constants/socialLinks'

const SocialLinks = () => {
    return (
        <div className="right flex gap-[10px] justify-end items-center h-6 ">
            {socialLinks.map((obj) =>
                <a key={obj.id} href={obj.href}><img src={obj.src} alt={obj.alt} /></a>
            )}
        </div>
    )
}

export default SocialLinks