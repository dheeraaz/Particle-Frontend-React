import React from 'react'
import LanguageSelector from "./LanguageSelector.jsx"

const RightNav = () => {
  return (
    <div className='flex items-center gap-4'>
      <form className="flex items-center w-[340px]">
        <div className="relative w-full">
          <input type="text" id="simple-search" className="bg-white w-full rounded-[20px] text-primary text-sm outline-accent ps-4 p-2" placeholder="Search..." autoComplete='off' />

          <div className="absolute end-2 inset-y-0 flex items-center ps-3 pointer-events-none">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M16.8279 15.5612C19.0425 12.7586 18.8561 8.67907 16.2684 6.09144C13.4798 3.30285 8.95864 3.30285 6.17006 6.09144C3.38147 8.88003 3.38147 13.4012 6.17006 16.1898C8.75768 18.7774 12.8372 18.9639 15.6398 16.7493L18.6445 19.7539C18.9726 20.082 19.5045 20.082 19.8326 19.7539C20.1606 19.4259 20.1606 18.894 19.8326 18.5659L16.8279 15.5612ZM15.0804 7.27949C17.2128 9.41194 17.2128 12.8693 15.0804 15.0018C12.9479 17.1342 9.49055 17.1342 7.3581 15.0018C5.22565 12.8693 5.22565 9.41194 7.3581 7.27949C9.49055 5.14704 12.9479 5.14704 15.0804 7.27949Z" fill="#4F4F4F" />
            </svg>
          </div>
        </div>
      </form>
      <button>
        <img src="./icons/user.svg" alt="user icon" />
      </button>
      <LanguageSelector />
    </div>
  )
}

export default RightNav