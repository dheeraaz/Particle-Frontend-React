import React, { useEffect, useState } from 'react'
import { Logo, Navbar, RightNav } from '../Utility/index.js'


const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  function handleScroll() {
    if(window.scrollY > 120){
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
    <header className={`flex items-center bg-primary transition-all ease-in-out ${isScroll?(' h-16 sticky top-0 shadow-lg'):('h-24')}`}>
      <div className='container flexVerCenter justify-between'>
        <Logo />
        <Navbar />
        <RightNav />
      </div>
    </header>
  )
}

export default Header