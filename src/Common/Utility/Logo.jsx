import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <NavLink to='' >
      <div className='flex gap-1 items-end'>
        <img src="/images/Logo-Full.svg" alt="particle logo" className='max-w-[28px] xl:max-w-[24px] aspect-auto' />
        <h1 className='text-bodyColor font-links font-medium text-xl'>Particle</h1>
      </div>
    </NavLink>
  )
}

export default Logo