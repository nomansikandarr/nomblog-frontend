import React from 'react'
import { PiShareNetwork } from "react-icons/pi";


const Footer = () => {
  return (
    <div className="w-full bg-white border-t-[#E2E8F0]">
      <div className='flex w-full max-w-330 md:items-center mx-auto justify-between px-5 py-10 flex-col md:flex-row gap-5'>
        <img width={120} src="/src/assets/logo.png" alt="" className='cursor-pointer' />
        <ul className='flex gap-2 md:gap-7 text-p-color text-[16px] flex-col md:flex-row'>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Help</li>
          <li>Contact</li>
        </ul>
        <div className="flex items-center w-fit bg-[#F1F5F9] rounded-full p-2.5">
          <PiShareNetwork />
        </div>
      </div>
    </div>
  )
}

export default Footer