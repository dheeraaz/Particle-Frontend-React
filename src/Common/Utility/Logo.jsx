import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <div>
      <NavLink to='' >
        <img src="./images/Logo-Full.svg" alt="particle logo" className='max-w-[120px] xl:max-w-[98px] aspect-auto' />
      </NavLink>
    </div>
  )
}

export default Logo