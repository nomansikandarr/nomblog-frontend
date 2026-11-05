import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogCard from '../components/BlogCard'

const Home = () => {
  return (
    <>
      <Header />
      <div className="w-full max-w-330 mx-auto px-5">
        <div className="flex flex-col gap-2 py-10">
          <h1 className='text-text-secondary font-extrabold text-4xl'>Explore</h1>
          <p className='text-p-color text-[18px]'>Discover the best stories from our creative community.</p>
        </div>
        <div className="flex flex-col gap-10 py-10 md:py-20">
          <div className="flex gap-3.5 flex-wrap">
            <button className='bg-text-primary px-3 py-1 rounded-full text-[16px] text-white cursor-pointer'>
              For You
            </button>
            <button className='bg-[#F1F5F9] px-3 py-1 rounded-full text-[16px] text-[#475569] cursor-pointer'>
              Design
            </button>
            <button className='bg-[#F1F5F9] px-3 py-1 rounded-full text-[16px] text-[#475569] cursor-pointer'>
              Technology
            </button>
            <button className='bg-[#F1F5F9] px-3 py-1 rounded-full text-[16px] text-[#475569] cursor-pointer'>
              Productivity
            </button>
            <button className='bg-[#F1F5F9] px-3 py-1 rounded-full text-[16px] text-[#475569] cursor-pointer'>
              Development
            </button>
            <button className='bg-[#F1F5F9] px-3 py-1 rounded-full text-[16px] text-[#475569] cursor-pointer'>
              Lifestyle
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home