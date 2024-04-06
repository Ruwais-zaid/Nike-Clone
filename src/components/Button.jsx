import React from 'react'

const Button = ({label,iconUrl}) => {
  return (
   <button className='flex justify-center items-center gap-2 p-4 py-2 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red'>
    {label}
    <img src={iconUrl} alt='arrow right' className='ml-2 rounded-full w-5 h-5'/>

   </button>
      
    
  )
}

export default Button
