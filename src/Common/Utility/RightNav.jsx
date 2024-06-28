import React from 'react'

const RightNav = () => {
  return (
    <div className='flex gap-4 xl:gap-3 lg:gap-2'>
      <form className="flexVerCenter justify-between w-[340px] xl:w-[308px] lg:w-[246px] h-[38px] xl:h-[34px] lg:h-[27px] bg-white rounded-[20px] focus-within:shadow-md">
        <input type="text" id="simple-search" className=" bg-transparent flex-1 text-primary text-sm py-2 pl-4 pr-2 outline-none border-none" placeholder="Search..." autoComplete='off' />

        <button className=" bg-transparent pointer-cursor mr-3 xl:mr-2 lg:mr-1">
          <svg className='max-h-[24px] max-w-[24px] xl:max-h-[20px] lg:max-[w-20px] aspect-auto' viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.8279 15.5612C19.0425 12.7586 18.8561 8.67907 16.2684 6.09144C13.4798 3.30285 8.95864 3.30285 6.17006 6.09144C3.38147 8.88003 3.38147 13.4012 6.17006 16.1898C8.75768 18.7774 12.8372 18.9639 15.6398 16.7493L18.6445 19.7539C18.9726 20.082 19.5045 20.082 19.8326 19.7539C20.1606 19.4259 20.1606 18.894 19.8326 18.5659L16.8279 15.5612ZM15.0804 7.27949C17.2128 9.41194 17.2128 12.8693 15.0804 15.0018C12.9479 17.1342 9.49055 17.1342 7.3581 15.0018C5.22565 12.8693 5.22565 9.41194 7.3581 7.27949C9.49055 5.14704 12.9479 5.14704 15.0804 7.27949Z" fill="#4F4F4F" />
          </svg>
        </button>
      </form>
      <button>
        <img src="./icons/user.svg" alt="user icon"  className='max-w-5 xl:w-[18px] lg:w-[14px] aspect-auto'/>
      </button>
    </div>
  )
}

export default RightNav