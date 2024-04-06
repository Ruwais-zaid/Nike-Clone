import React from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    <header className='px-8 py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container '>
        <a href='/'>
          <img src={headerLogo} alt='Logo' width={130} height={29} />
        </a>
        <ul className='flex justify-center items-center gap-16 max-lg:hidden'>
          <li className='font-montserrat leading-normal text-lg text-slate-gray'><a href='#'>Home</a></li>
          <li className="font-montserrat leading-normal text-lg text-slate-gray"><a href='#'>About Us</a></li>
          <li className="font-montserrat leading-normal text-lg text-slate-gray"><a href='#'>Products</a></li>
          <li className="font-montserrat leading-normal text-lg text-slate-gray"><a href='#'>Contact Us</a></li>
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="Hamburger"  width={25} height={25}/>
        </div>
      </nav>
    </header>
  )
}

export default Nav
