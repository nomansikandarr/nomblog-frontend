import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { HiOutlineEnvelope, HiOutlineLockClosed } from "react-icons/hi2";



const SignIn = () => {
  return (
    <div className="w-full flex justify-center items-center px-5 h-[78.5vh] shadow-[0px_1px_2px_0px_#0000000D]">
      <div className='bg-white px-5 md:px-10 py-4 md:py-8 border-[#E8DBCE80] rounded-2xl border-t-4 border-t-text-primary w-full max-w-120 h-fit 
                        flex flex-col items-center gap-4 md:gap-5'>
        <img width={105} md:width={140} src="/src/assets/logo.png" alt="" />
        <h1 className='font-bold text-2xl md:text-4xl -mt-3 md:mt-0'>Welcome back</h1>
        <p className='text-[#9C7349] font-medium text-sm md:text-[16px]'>Please enter your details to sign in</p>
        <form className="flex flex-col gap-5 w-full">

          {/* Email address */}
          <div className="flex flex-col gap-0.5">
            <label htmlFor="Email address" className="text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="relative">
              <HiOutlineEnvelope className='absolute top-3 md:top-3.5 left-3.5 w-4 h-4' />
              <input
                type="text"
                id="Email address"
                placeholder="Enter your Email address"
                className="text-[14px] md:text-[16px] border border-gray-300 rounded-lg px-4 pl-10.5 w-full py-2 outline-none focus:border-text-primary"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-0.5">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <p className='text-text-primary font-bold text-[12px] cursor-pointer'>Forgot password?</p>
            </div>
            <div className="relative">
              <HiOutlineLockClosed className='absolute top-3 md:top-3.5 left-3.5 w-4 h-4' />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="text-[14px] md:text-[16px] border border-gray-300 rounded-lg px-4 pl-10.5 w-full py-2 outline-none focus:border-text-primary"
              />
            </div>

          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="bg-text-primary text-white py-2 md:py-3 rounded-lg font-semibold cursor-pointer"
          >
            Sign In
          </button>

        </form>
        <div className="relative flex items-center w-full p-2 md:py-4">
          <hr className='w-full text-[#E8DBCE]' />
          <p className='text-[10px] md:text-[12px] tracking-wide text-[#9C7349] font-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3.5 z-1 bg-white '>OR CONTINUE WITH</p>
        </div>
        <div className="flex w-full gap-4 items-center">
          <button className='flex-1 flex items-center justify-center cursor-pointer gap-1.5 border border-[#E8DBCE] rounded-lg py-2 px-6 text-black text-sm font-medium'>
            <FcGoogle className='w-4 h-4' />
            Google
          </button>
          <button className='flex flex-1 items-center justify-center cursor-pointer gap-1.5 border border-[#E8DBCE] rounded-lg py-2.5 px-6 text-black text-sm font-medium'>
            <img src="/src/assets/fb.svg" alt="" className='w-3.5' />
            Facebook
          </button>
        </div>
        <span className='text-[#9C7349] text-[14px] md:text-[16px] flex gap-2 items-center flex-col md:flex-row'>
          Don't have an account?
          <p className='text-text-primary font-bold cursor-pointer'>Create an account</p>
        </span>
      </div>
    </div>
  )
}

export default SignIn