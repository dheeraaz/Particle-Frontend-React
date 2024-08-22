import React, { useEffect, useState } from 'react'
import { Logo, Navbar, RightNav } from '../Utility/index.js'



const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(true);

  function handleScroll() {
    if(window.scrollY > 320){
      setIsScroll(true);
    }else{
      setIsScroll(false)
    }
  }
  useEffect(() => {
    //this will add scroll eventlistener and its corresponding function to window
    window.addEventListener('scroll', handleScroll);
    //this will remove scroll eventlistener when a component is removed
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <header className={`flex items-center bg-primary transition-all ease-in-out h-24 xl:h-20 z-10 ${isScroll?('sticky top-0 shadow-lg'):('')}`}>
      <div className='container flexVerCenter justify-between'>
        <Logo />
        <Navbar toggleMenu = {toggleMenu}/>
        <RightNav toggleMenu = {toggleMenu} setToggleMenu={setToggleMenu}/>
      </div>
    </header>
  )
}

export default Header