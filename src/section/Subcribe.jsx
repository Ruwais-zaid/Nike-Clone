import React from 'react'

const Subcribe = () => {
  return (
    <section  className='max-container flex justify-between items-center max-lg:flex-col gap-10'>
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
        Sign Up for
        <span className='text-coral-red'> Updates </span>& Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full items-center max-sm:flex-col gap-5 p-2.5 h-14 sm:border sm:border-slate-gray mx-auto  rounded-full'>
        <input type='text' placeholder='subcribe@nike.com' className='input'/>
        <div className='flex max-sm:justify-end items-center max-sm:w-full justify-end mt-[-1.3rem] '>
          <button type='submit' className=' p-4 py-2 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red'>Sign Up</button>
        </div>
      </div>
    </section>
  )
}

export default Subcribe
