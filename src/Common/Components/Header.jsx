import React from 'react'
import { Logo, Navbar, RightNav } from '../Utility/index.js'


const Header = () => {
  return (
    <header className='mt-12 lg:mt-10'>
      <div className='container flexVerCenter justify-between'>
        <Logo />
        <Navbar />
        <RightNav />
      </div>
    </header>
  )
}

export default Header