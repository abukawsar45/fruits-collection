'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';
import { GoSearch } from 'react-icons/go';
import { BsFillSunFill, BsMoon } from 'react-icons/bs';
import { SiNintendoswitch } from 'react-icons/si';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const [isDarkToggled, setIsDarkToggled] = useState(false);
  const [isSwitchToggled, setIsSwitchToggled] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  console.log({isDarkToggled, isSwitchToggled, isOpenMenu})

  return (
    <div className='px-1 md:px-2 lg:px-6 py-3  grid grid-cols-12 gap-2 '>
      <div className='col-span-5'>
        <Image className='h-9' src={logo} alt='logo' />
      </div>
      <div className='col-span-2'>
        <div className='relative flex justify-between items-center'>
          <input
            type='text'
            placeholder='Search Best Food'
            className='  rounded-lg h-10  px-4 text-black  border-2 border-slate-100 hover:border-green-400 hover:transition w-full'
          />
          <button className='absolute right-0 text-red-500 bg-orange-100 border-1 border-red-200 rounded-md m-1'>
            <GoSearch className='text-3xl p-1 rounded' />
          </button>
        </div>
      </div>
      <div className='col-span-5 flex justify-end items-center gap-2 md:gap-4 lg:gap-6'>
        <button
          className={` p-[6px] transition-transform duration-100 border-2  rounded-lg ${
            isDarkToggled ? 'text-red-500 bg-orange-200 border-red-200' : ''
          }`}
          onClick={() => setIsDarkToggled(!isDarkToggled)}
        >
          <>
            {isDarkToggled ? (
              <BsFillSunFill className='text-xl' />
            ) : (
              <BsMoon className='text-xl' />
            )}
          </>
        </button>
        <button
          className={` p-[6px] transition-transform duration-100 border-2  rounded-lg ${
            !isSwitchToggled ? 'text-red-500 bg-orange-200 border-red-200' : ''
          }`}
          onClick={() => setIsSwitchToggled(!isSwitchToggled)}
        >
          <>
            {!isSwitchToggled ? (
              <SiNintendoswitch className='text-xl' />
            ) : (
              <SiNintendoswitch className='text-xl' />
            )}
          </>
        </button>
        <button
          className={` p-[6px] transition-transform duration-100 border-2  rounded-lg ${
            isOpenMenu ? 'text-red-500 bg-orange-200 border-red-200' : ''
          }`}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <>
            <AiOutlineMenu className='text-xl' />
          </>
        </button>
      </div>
    </div>
  );
};

export default Header;