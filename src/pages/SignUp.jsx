import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { HiOutlineEnvelope, HiOutlineLockClosed } from "react-icons/hi2";
import { ImArrowRight2 } from "react-icons/im";



const SignUp = () => {
  return (
    <div className="w-full flex justify-center items-center px-5 py-10 lg:h-[78.5vh]">
      <div className="flex flex-wrap md:flex-nowrap items-stretch shadow-[0px_1px_2px_0px_#0000000D] border border-[#E2E8F0] rounded-xl">
        <div className="relative rounded-br-xl md:rounded-br-none md:rounded-tl-xl order-2 md:order-1 rounded-bl-xl bg-[#F27F0D1A] bg-[linear-gradient(135deg,rgba(242,127,13,0.2)_0%,rgba(242,127,13,0)_100%)] 
                      px-5 md:px-10 py-8 w-full max-w-120 
                      flex flex-col items-start justify-center gap-4 md:gap-5">
          <img src="/src/assets/shape.svg" alt=""
            className='absolute bottom-0 right-0'
          />
          <img src="/src/assets/write.svg" alt="" width={35} />
          <h1 className='font-bold text-2xl md:text-4xl -mt-3 md:mt-0'>Start your writing journey today.</h1>
          <p className='text-[#475569] text-sm md:text-[16px]'>
            Join thousands of creators sharing their stories with the world on nomBlog.
          </p>
          <div className="flex gap-3 md:gap-6 flex-col mt-5">
            <div className="flex items-center gap-4">
              <img width={10} src="/src/assets/fast.svg" alt="" className='w-8 h-8 bg-[#F27F0D33] rounded-full p-2.5' />
              <p className='font-medium text-text-secondary font-[14px]'>Fast and responsive editor</p>
            </div>
            <div className="flex items-center gap-4">
              <img width={10} src="/src/assets/deep.svg" alt="" className='w-8 h-8 bg-[#F27F0D33] rounded-full p-2.5' />
              <p className='font-medium text-text-secondary font-[16px]'>Deep audience insights</p>
            </div>
            <div className="flex items-center gap-4">
              <img width={10} src="/src/assets/globe.svg" alt="" className='w-8 h-8 bg-[#F27F0D33] rounded-full p-2.5' />
              <p className='font-medium text-text-secondary font-[16px]'>Custom domain support</p>
            </div>
          </div>
        </div>
        <div className='bg-white order-1 rounded-tr-xl rounded-tl-xl md:rounded-tl-none md:rounded-br-xl px-5 lg:px-10 py-8 border-[#E8DBCE80] w-full max-w-120 
                        flex flex-col items-start justify-center gap-4 md:gap-5'>
          <h1 className='font-bold text-2xl md:text-2xl -mt-3 md:mt-0'>Create an account</h1>
          <p className='text-p-color text-sm md:text-[16px]'>Enter your details to get started.</p>
          <form className="flex flex-col gap-5 w-full">
            {/* Full name */}
            <div className="flex flex-col gap-0.5">
              <label htmlFor="Full name" className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                placeholder="John Doe"
                className="text-[14px] md:text-[16px] border border-gray-300 rounded-lg px-4 w-full py-2 outline-none focus:border-text-primary"
              />
            </div>
            {/* Email address */}
            <div className="flex flex-col gap-0.5">
              <label htmlFor="Email address" className="text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="text"
                id="Email address"
                placeholder="john@example.com"
                className="text-[14px] md:text-[16px] border border-gray-300 rounded-lg px-4 w-full py-2 outline-none focus:border-text-primary"
              />
            </div>

            {/* Password */}
            <div className="flex gap-4">
              <div className="flex flex-col gap-0.5">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="*********"
                  className="text-[14px] md:text-[16px] border border-gray-300 rounded-lg px-4 w-full py-2 outline-none focus:border-text-primary"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="*********"
                  className="text-[14px] md:text-[16px] border border-gray-300 rounded-lg px-4 w-full py-2 outline-none focus:border-text-primary"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" className='accent-[#F27F0D]' />
              <label htmlFor="accept terms" className="text-[12px] text-gray-700">
                I agree to the <a href='#' className='text-text-primary'>Terms of Service</a> and <a href='#' className='text-text-primary'>Privacy Policy</a>.
              </label>
            </div>
            {/* Sign In Button */}
            <button
              type="submit"
              className="bg-text-primary text-white py-2 md:py-3 rounded-lg font-semibold cursor-pointer
                        flex items-center justify-center gap-2"
            >
              Create Account
              <ImArrowRight2 className='mt-0.5' />
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
          <span className='text-[#9C7349] text-[14px] md:text-[16px] flex gap-2 items-center flex-row'>
            Don't have an account?
            <p className='text-text-primary text-[14px] font-bold cursor-pointer'>Login</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SignUp