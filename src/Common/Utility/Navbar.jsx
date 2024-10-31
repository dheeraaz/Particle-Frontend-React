import React, { useEffect, useState } from 'react'
import { navLinks } from '../../Constants/navLinks.js'
import { NavLink } from 'react-router-dom'

import { motion } from "framer-motion"
import { MdDisabledVisible } from 'react-icons/md'


const MyNavlinksCallback = ({ isActive }) => {
  return ` hover:text-accent ${isActive ? "text-accent" : "text-bodyColor"}`
}

const Navbar = ({ toggleMenu }) => {
  const [isUptoMedium, setIsUptoMedium] = useState(false);

  useEffect(() => {
    function determineScreenSize() {
      let w = document.documentElement.clientWidth;
      setIsUptoMedium(w <= 768);
    }

    determineScreenSize();
    window.addEventListener("resize", determineScreenSize);

    return () => {
      window.removeEventListener("resize", determineScreenSize);
    }
  }, []);

  return (
    <motion.nav 
    variants={isUptoMedium ? {
      visible: { opacity:1,x: 0, },
      hidden: { opacity:0,x: 200 },
    } : {}}
    animate={isUptoMedium && toggleMenu ? "hidden" : "visible"}
    transition={isUptoMedium ? { duration: 0.5, ease:"backOut" } : {}}

    className={`font-links flex gap-5 xl:gap-4 lg:gap-3 font-medium text-base xl:text-sm lg:text-xs ${toggleMenu?"md:hidden":"md:block md:py-10 md:z-50 md:absolute md:top-[60px] md:right-0 md:w-1/2 md:h-fit md:bg-primary"}`}>
      {/* <div className='font-links flex gap-5 xl:gap-4 lg:gap-3 font-medium text-base xl:text-sm lg:text-xs md:hidden'> */}
      <div className={`font-links flex gap-5 xl:gap-4 lg:gap-3 font-medium text-base xl:text-sm lg:text-xs ${toggleMenu?"":"md:flex-col md:justify-center md:items-center md:gap-10 md:text-base"}`}>
        {
          // Navbar link are imported from ./Constants/navLinks.js
          // configuring ./Constants/navLinks.js file will automatically sets Navbar link
          navLinks.map((item)=>{
            return <NavLink key ={item.id} to={item.path} className={MyNavlinksCallback}>{item.name.toUpperCase()}</NavLink>
          })
        }
      </div>
    </motion.nav>
  )
}

export default Navbar