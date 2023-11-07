import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';
import { GoSearch } from 'react-icons/go';

const Header = () => {
  return (
    <div className='lg:px-6 lg:py-3  grid grid-cols-12 gap-2 '>
      <div className='col-span-5'>
        <Image className='h-9' src={logo} alt='logo' />
      </div>
      <div className='col-span-2'>
        <div className='relative flex justify-between items-center'>
          <input
            type='text'
            placeholder='Search Best Food'
            className='  rounded-lg px-4 py-3 text-black  border-2 border-slate-100   w-full'
          />
          <button className='absolute right-0  bg-black  text-white rounded-lg p-1 border-2 border-slate-100 mr-1'>
            <GoSearch className='text-2xl ' />
          </button>
        </div>
      </div>
      <div className='col-span-5'>
        <Image className='h-9' src={logo} alt='logo' />
      </div>
    </div>
  );
};

export default Header;