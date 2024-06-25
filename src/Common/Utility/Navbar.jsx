import React from 'react'
import { HeaderLinks } from '../../Constants/HeaderLinks.jsx'
import { NavLink } from 'react-router-dom'

const MyNavlinksCallback = ({ isActive }) => {
  return ` hover:text-accent ${isActive ? "text-accent" : "text-primary"}`
}

const Navbar = () => {
  return (
    <nav>
      <div className=' font-poppins flex gap-5 font-medium text-base md:hidden'>
        {
          HeaderLinks.map((item)=>{
            return <NavLink key ={item.id} to={item.path} className={MyNavlinksCallback}>{item.name}</NavLink>
          })
        }
      </div>
    </nav>
  )
}

export default Navbar