import React from 'react'
import { SlBell } from "react-icons/sl";


const Header = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-[1320px] mx-auto py-5 px-5">
      <img width={140} src="/src/assets/logo.png" alt="" className=' cursor-pointer' />
      <div className="flex items-center gap-4">
        <SlBell className='w-5 h-5 cursor-pointer' />
        <button className='bg-text-primary px-4 py-1.5 rounded-lg font-bold text-[16px] text-white tracking-wide cursor-pointer'>
          Write a Post
        </button>
        <img src="/src/assets/profile.png" alt="" className='border-[#E2E8F0] rounded-full w-9 cursor-pointer' />

      </div>
    </div>
  )
}

export default Header