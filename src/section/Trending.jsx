import React from 'react'
import { trends } from '../assets/images'

const Trending = () => {
  return (
    <section className='flex flex-col justify-start space-y-7 '>
        <h1 className='font-semibold text-2xl ml-1'>Trending</h1>
        <a href="https://www.nike.com/in/t/tatum-2-vortex-pf-basketball-shoes-WWbXXK/FJ6458-300" className='cursor-pointer'><img src={trends} className='w-full h-[600px] rounded-md'/></a>

    </section>
  )
}

export default Trending
