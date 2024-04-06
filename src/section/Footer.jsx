import React from 'react';
import { footerLogo } from '../assets/images';
import { socialMedia } from '../constants';
import { footerLinks } from '../constants';
import { copyrightSign } from '../assets/icons';

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='#'>
            <img src={footerLogo} width={150} height={46} alt='Footer Logo' />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-10 h-10 bg-slate-gray hover:bg-white rounded-full'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className='text-white font-montserrat text-2xl leading-normal font-medium'>{section.title}</h4>
              <ul>
                {section.links.map((link, index) => (
                  <li key={index} className='mt-3 text-white-400 font-montserrat text-base hover:text-slate-gray cursor-pointer'>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between text-white-400 max-sm:flex-col max-sm:items-center max-sm:gap-2 mt-36'>
        <div className='flex flex-1 justify-start items-start font-montserrat cursor-pointer gap-2 hover:text-slate-gray'>
          <img src={copyrightSign} alt='copyrightsign' width={20} height={20} className='rounded-full m-0'/>
          <p>Copyright All rights reserved</p>
        </div>
        <div className='flex flex-1 justify-end items-end font-montserrat cursor-pointer gap-2 hover:text-slate-gray'>
          <p>Terms And Conditions</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
