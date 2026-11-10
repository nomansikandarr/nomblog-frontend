import React from 'react'
import { PiShareNetwork } from 'react-icons/pi'

const PostDetailPage = () => {
  return (
    <div className="py-20 px-5 w-full max-w-330 flex flex-col mx-auto gap-6 items-center">
      <img
        src="https://images.pexels.com/photos/35872023/pexels-photo-35872023.jpeg" alt=""
        className='rounded-xl h-55 md:h-107 w-full object-cover object-center'
      />
      <div className="flex flex-col gap-5 max-w-[1000px]">
        <div className="flex items-center gap-3">
          <span className='text-text-primary rounded-sm font-bold text-[10px] uppercase px-2.5 py-0.5 bg-tag-bg tracking-wide'>
            Design
          </span>
          <p className='text-p-color text-[12px]'>5 min read</p>
        </div>
      
      <h1 className='text-text-secondary font-bold text-2xl md:text-4xl'>The Future of Minimalist
        Interface Design in the AI Era</h1>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <img src="/src/assets/Author.png" width={40} alt="" />
          <div className="flex flex-col">
            <p className='text-text-secondary text-[14px] font-semibold'>Alex Rivier</p>
            <p className='text-p-color text-[10px]'>Oct 24, 2023</p>
          </div>
        </div>
        <div className="flex gap-4">
          <PiShareNetwork />
          <img src="/src/assets/save.svg" width={16} alt="" />
        </div>
      </div>
      <p className='text-text-secondary font-medium text=[16px] md:text-[18px]'>"Minimalism is not the lack of something. It is simply the perfect amount of
        something." — This philosophy is being redefined as we move towards
        ambient computing.</p>
      <p className='text-[16px] md:text-[18px]'>In the rapidly evolving landscape of digital products, minimalism has shifted from a
        mere aesthetic choice to a functional necessity. This article explores how reduced
        cognitive load and high-contrast typography define the next generation of user
        experiences.
        In the rapidly evolving landscape of digital products, minimalism has shifted from a
        mere aesthetic choice to a functional necessity. This article explores how reduced
        cognitive load and high-contrast typography define the next generation of user
        experiences.
        In the rapidly evolving landscape of digital products, minimalism has shifted from a
        mere aesthetic choice to a functional necessity. This article explores how reduced
        cognitive load and high-contrast typography define the next generation of user
        experiences.
        In the rapidly evolving landscape of digital products, minimalism has shifted from a
        mere aesthetic choice to a functional necessity. This article explores how reduced
        cognitive load and high-contrast typography define the next generation of user
        experiences.</p>
        </div>
    </div>
  )
}

export default PostDetailPage