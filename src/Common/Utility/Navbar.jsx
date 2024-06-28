import React from 'react'
import { headerLinks } from '../../Constants/headerLinks.js'
import { NavLink } from 'react-router-dom'

const MyNavlinksCallback = ({ isActive }) => {
  return ` hover:text-accent ${isActive ? "text-accent" : "text-primary"}`
}

const Navbar = () => {
  return (
    <nav>
      <div className='font-links flex gap-5 xl:gap-4 lg:gap-3 font-medium text-base xl:text-sm lg:text-xs md:hidden'>
        {
          // Navbar link and route are imported from ./Constants/headerLinks.js
          // configuring ./Constants/headerLinks.js file will automatically sets the route, Navbar link
          headerLinks.map((item)=>{
            return <NavLink key ={item.id} to={item.path} className={MyNavlinksCallback}>{item.name.toUpperCase()}</NavLink>
          })
        }
      </div>
    </nav>
  )
}

export default Navbar