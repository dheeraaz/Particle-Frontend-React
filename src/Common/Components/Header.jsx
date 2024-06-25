import React from 'react'
import { Logo, Navbar, RightNav } from '../Utility/index.js'


const Header = () => {
  return (
    <div className='mt-12'>
      <div className='contaiiner flex items-center justify-between'>
        <Logo />
        <Navbar />
        <RightNav />
      </div>
    </div>
  )
}

export default Header