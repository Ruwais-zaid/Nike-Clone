import React from 'react'

const Popular = ({imgURL,name,types,price}) => {
  return (
   <div className='flex flex-1 flex-col w-full max-sm:w-full space-y-2 font-montserrat '>
    <img src={imgURL} className='w-[300px] h-[300px]'/>
    <h2 className="font-semibold ">{name}</h2>
    <h3 className='text-slate-gray font-light'>{types}</h3>
    <p className='font-semibold'>{price}</p>

   </div>
  )
}

export default Popular
