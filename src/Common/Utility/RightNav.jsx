import React from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { HiMiniXMark } from "react-icons/hi2";


const RightNav = ({ toggleMenu, setToggleMenu }) => {
  return (
    <div className='flex gap-4 xl:gap-3 lg:gap-2'>
      <form className="sm:hidden flexVerCenter justify-between w-[340px] xl:w-[308px] lg:w-[246px] h-[38px] xl:h-[34px] lg:h-[27px] bg-white rounded-[20px] focus-within:shadow-md">
        <input type="text" id="simple-search" className=" bg-transparent flex-1 text-primary text-sm py-2 pl-4 pr-2 outline-none border-none" placeholder="Search..." autoComplete='off' />

        <button className="bg-transparent pointer-cursor mr-3 xl:mr-2 lg:mr-1 flexVerCenter">
          <img src="/icons/search.svg" alt="search_icon" className='max-h-[24px] max-w-[24px] xl:max-w-5 lg:max-w-5 md:max-w-4 aspect-auto' />
        </button>
      </form>
      <button>
        {/* <img src="./icons/user.svg" alt="user icon"  className='max-w-5 xl:w-[18px] lg:w-[14px] aspect-auto'/> */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.82446 3.66667C8.94041 3.66667 8.09256 4.01786 7.46744 4.64298C6.84232 5.2681 6.49113 6.11594 6.49113 7C6.49113 7.88405 6.84232 8.7319 7.46744 9.35702C8.09256 9.98214 8.94041 10.3333 9.82446 10.3333C10.7085 10.3333 11.5564 9.98214 12.1815 9.35702C12.8066 8.7319 13.1578 7.88405 13.1578 7C13.1578 6.11594 12.8066 5.2681 12.1815 4.64298C11.5564 4.01786 10.7085 3.66667 9.82446 3.66667ZM4.82446 7C4.82446 5.67392 5.35125 4.40215 6.28893 3.46447C7.22661 2.52678 8.49838 2 9.82446 2C11.1505 2 12.4223 2.52678 13.36 3.46447C14.2977 4.40215 14.8245 5.67392 14.8245 7C14.8245 8.32608 14.2977 9.59785 13.36 10.5355C12.4223 11.4732 11.1505 12 9.82446 12C8.49838 12 7.22661 11.4732 6.28893 10.5355C5.35125 9.59785 4.82446 8.32608 4.82446 7ZM6.49113 15.3333C5.82809 15.3333 5.1922 15.5967 4.72336 16.0656C4.25452 16.5344 3.99113 17.1703 3.99113 17.8333C3.99113 18.0543 3.90333 18.2663 3.74705 18.4226C3.59077 18.5789 3.37881 18.6667 3.1578 18.6667C2.93678 18.6667 2.72482 18.5789 2.56854 18.4226C2.41226 18.2663 2.32446 18.0543 2.32446 17.8333C2.32446 16.7283 2.76345 15.6685 3.54485 14.8871C4.32625 14.1057 5.38606 13.6667 6.49113 13.6667H13.1578C14.2629 13.6667 15.3227 14.1057 16.1041 14.8871C16.8855 15.6685 17.3245 16.7283 17.3245 17.8333C17.3245 18.0543 17.2367 18.2663 17.0804 18.4226C16.9241 18.5789 16.7121 18.6667 16.4911 18.6667C16.2701 18.6667 16.0582 18.5789 15.9019 18.4226C15.7456 18.2663 15.6578 18.0543 15.6578 17.8333C15.6578 17.1703 15.3944 16.5344 14.9256 16.0656C14.4567 15.5967 13.8208 15.3333 13.1578 15.3333H6.49113Z" fill="#EBEEF0" />
        </svg>
      </button>
      <button className='hidden md:block' onClick={() => setToggleMenu(!toggleMenu)}>
        {
          toggleMenu ? <HiMenuAlt3 size={20} className=' fill-white' /> : <HiMiniXMark size={20} className=' fill-white' />
        }

      </button>
    </div>
  )
}

export default RightNav