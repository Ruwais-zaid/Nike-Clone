import React from 'react'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'
import Button from '../components/Button'
const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div
       className='flex-1 '>
        <img src={offer} width={773} height={687} className='object-contain w-full'/>
       </div>
       <div className='flex flex-1 flex-col'>
    <h1 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red'>Special </span>
          <span className='text-coral-red'>Offer </span>
          </h1><p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style,our meticulously crafted footwear
          is designed to elevate your experience providing you with unmatched quality,innovation,and a touch of elegance</p>
          <p className='mt-6 lg:max-w-lg info-text'>No matter what he's up against,Jayson always find a way.A way to the basket.A way to his dreams.A way to make the game of his own.With the 
          lightweight and efficient design,his next generation shoes keeps this energy up for your next move.</p>
          <div className='mt-11 flex flex-wrap gap-4'>
          <Button label="Shop now " iconUrl={arrowRight}/>
          <button className='border rounded-full p-4 py-4 font-montserrat font-semibold text-lg  bg-white border-slate=gray text-slate-gray'>Learn more</button>
          </div>
          
    

    </div>

    </section>
  )
}

export default SpecialOffer
