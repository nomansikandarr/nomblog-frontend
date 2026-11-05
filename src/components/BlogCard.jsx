import React from 'react'

const BlogCard = () => {
  return (
        <div className="rounded-xl border border-[#E2E8F0] bg-white">
            <img className='w-full rounded-t-xl'
                src="https://images.unsplash.com/photo-1790522812136-c50a9789a947?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt="" 
            />
            <div className="flex flex-col gap-3 p-5">
                <div className="flex items-center gap-3">
                    <span className='text-text-primary rounded-sm font-bold text-[10px] uppercase px-2.5 py-0.5 bg-tag-bg tracking-wide'>
                        Design
                    </span>
                    <p className='text-p-color text-[12px]'>5 min read</p>
                </div>
                    <h2 className='text-text-secondary font-bold text-xl'>
                        The Future of Minimalism in Modern Web Design
                    </h2>
                    <p className='text-p-color text-[16px]'>
                        How simple layouts and clean typography are redefining the digital experience for millions of…
                    </p>
                <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <img src="/src/assets/Author.png" width={40} alt="" />
                        <div className="flex flex-col">
                            <p className='text-text-secondary text-[14px] font-semibold'>Alex Rivier</p>
                            <p className='text-p-color text-[10px]'>Oct 24, 2023</p>
                        </div>
                    </div>
                    <img src="/src/assets/save.svg" width={16} alt="" />
                </div>
            </div>

        </div>
  )
}

export default BlogCard