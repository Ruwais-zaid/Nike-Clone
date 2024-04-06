import React from 'react';
import { products } from '../constants/index';
import Popular from '../components/Popular';

const PopularProducts = () => {
  return (
    <section className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5 space-y-[0rem]'>
        <h3 className='text-md font-bold mx-auto'>Feel the Unreal</h3>
        <span className='xl:bg-white xl:whitespace-nowrap font-bold xl:text-[72px] mx-auto'>AIR MAX DN</span>
        <p className='mx-auto text-[14px] font-montserrat text-slate-gray'>The next generation Air technology is here</p>
        <button className='flex justify-center items-center gap-2 mx-auto p-3 w-[10] h-10 border font-montserrat text-md leading-none bg-black rounded-full text-white border-none'>Shop Now</button>

        <div className='mt-16 grid lg:grid-cols-4 md:grid-col-3 sm:grid-col-2 grid-col-1 sm:gap-4 gap-14 '>
          {products.map((prod, index) => (
            <Popular key={index} {...prod} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
