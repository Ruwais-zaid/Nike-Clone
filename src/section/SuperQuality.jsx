import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'
import { arrowRight } from '../assets/icons'
const SuperQuality = () => {
  return (
   <section id="about-us" className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
    <div className='flex flex-1 flex-col'>
    <h1 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
         We provide you <span className='text-coral-red'>Super </span>
          <br />
          <span className='text-coral-red'>Quality </span>
          Shoes
          </h1><p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style,our meticulously crafted footwear
          is designed to elevate your experience providing you with unmatched quality,innovation,and a touch of elegance</p>
          <p className='mt-6 lg:max-w-lg info-text'>Our dedication to details and excellence ensures your satisfaction</p>
          <div className='mt-11'>
          <Button label="View Details " iconUrl={arrowRight}/>
          </div>
          <div className='flex justify-end items-center flex-1 absolute '>
            <img src={shoe8} alt="shoe8" width={517} height={522} className='object-contain relative left-[700px]'/>
            
          </div>
    

    </div>

   </section>
  )
}
export default SuperQuality