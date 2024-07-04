import React from 'react'
import { navLinks } from '../../Constants/navLinks.js'
import { NavLink } from 'react-router-dom'

const MyNavlinksCallback = ({ isActive }) => {
  return ` hover:text-accent ${isActive ? "text-accent" : "text-bodyColor"}`
}

const Navbar = () => {
  return (
    <nav>
      <div className='font-links flex gap-5 xl:gap-4 lg:gap-3 font-medium text-base xl:text-sm lg:text-xs md:hidden'>
        {
          // Navbar link are imported from ./Constants/navLinks.js
          // configuring ./Constants/navLinks.js file will automatically sets Navbar link
          navLinks.map((item)=>{
            return <NavLink key ={item.id} to={item.path} className={MyNavlinksCallback}>{item.name.toUpperCase()}</NavLink>
          })
        }
      </div>
    </nav>
  )
}

export default Navbar