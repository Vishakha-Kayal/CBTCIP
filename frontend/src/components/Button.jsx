import React from 'react'

const Button = ({onHandleClick}) => {
  return (
    <div className='hover:bg-black mt-4 py-2  hover:text-white hover:border-[2px] hover:border-white cursor-pointer transition-all duration-150 ease-in-out text-xl border-[2px] border-black rounded w-[21rem] m-auto flex justify-center items-center mb-4' onClick={onHandleClick}>See More</div>
  )
}

export default Button