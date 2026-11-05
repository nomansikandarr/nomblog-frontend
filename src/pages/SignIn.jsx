import React from 'react'
import { FcGoogle } from "react-icons/fc";


const SignIn = () => {
  return (
    <div className="w-full flex justify-center items-center px-5 h-[78.5vh]">
      <div className='bg-white px-10 py-8 border-[#E8DBCE80] rounded-2xl border-t-4 border-t-text-primary w-full max-w-120 h-fit 
                        flex flex-col items-center gap-5'>
        <img width={140} src="/src/assets/logo.png" alt="" className=' cursor-pointer' />
        <h1 className='font-bold text-4xl'>Welcome back</h1>
        <p className='text-[#9C7349] font-medium text-[16px]'>Please enter your details to sign in</p>
        <form className="flex flex-col gap-5 w-full">

          {/* Email address */}
          <div className="flex flex-col gap-2">
            <label htmlFor="Email address" className="font-medium text-gray-700">
              Email address
            </label>
            <input
              type="text"
              id="Email address"
              placeholder="Enter your Email address"
              className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-text-primary"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-text-primary"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="bg-text-primary text-white py-3 rounded-lg font-semibold cursor-pointer"
          >
            Sign In
          </button>

        </form>
        <div className="relative flex items-center w-full">
          <hr className='w-full text-[#E8DBCE]' />
          <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 z-1 bg-white '>OR CONTINUE WITH</p>
        </div>
        <div className="flex gap-4 items-center">
          <button className=' w-full flex items-center gap-1.5 border border-[#E8DBCE] rounded-lg py-2 px-10 text-black text-sm font-medium'>
            <FcGoogle className='w-4 h-4' />
            Google
          </button>
          <button className='flex items-center gap-1.5 border border-[#E8DBCE] rounded-lg py-2 px-10 text-black text-sm font-medium'>
            <FcGoogle className='w-4 h-4' />
            Facebook
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignIn