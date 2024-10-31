import React, { useState } from 'react'
import { Logo, Navbar, RightNav } from '../Utility/index.js'

import { motion, useScroll, useMotionValueEvent } from "framer-motion"



const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (currScrollPosn) => {
    const prevScrollPosn = scrollY.getPrevious();
    if(currScrollPosn > prevScrollPosn && currScrollPosn > 320){
      setIsHidden(true)
    }else{
      setIsHidden(false)
    }
  })

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease:"easeInOut"}}

      className="flex items-center bg-primary transition-all ease-in-out h-24 xl:h-20 z-10 sticky top-0">
      <div className='container flexVerCenter justify-between'>
        <Logo />
        <Navbar toggleMenu={toggleMenu} />
        <RightNav toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      </div>
    </motion.header>
  )
}

export default Header