'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';
import { GoSearch } from 'react-icons/go';
import { BsFillSunFill, BsMoon } from 'react-icons/bs';
import { SiNintendoswitch } from 'react-icons/si';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isDarkToggled, setIsDarkToggled] = useState(false);
  const [isSwitchToggled, setIsSwitchToggled] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  console.log({isDarkToggled, isSwitchToggled, isOpenMenu, isShowMenu})

  const navData = (
    <>
      <div className='flex flex-col md:flex-row justify-end items-center gap-2 md:gap-4 lg:gap-6'>
        <button
          className={` p-[6px] transition-transform duration-100 border-2  rounded-lg ${
            isDarkToggled ? '' : 'active-button border-red-200'
          }`}
          onClick={() => setIsDarkToggled(!isDarkToggled)}
        >
          <>
            {isDarkToggled ? (
              <BsMoon className='text-xl' />
            ) : (
              <BsFillSunFill className='text-xl' />
            )}
          </>
        </button>
        <button
          className={` p-[6px] transition-transform duration-100 border-2  rounded-lg ${
            !isSwitchToggled ? 'active-button border-red-200' : ''
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
          className={`hidden md:block p-[6px] transition-transform duration-100 border-2  rounded-lg ${
            isOpenMenu ? 'active-button border-red-200' : ''
          }`}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <>
            <AiOutlineMenu className='text-xl' />
          </>
        </button>
      </div>
    </>
  );

  return (
    <div className='px-1 md:px-2 lg:px-6 py-[10px] md:py-3 grid grid-cols-12 gap-2 '>
      <div className='col-span-6 md:col-span-5'>
        <Image className='h-8 md:h-9' src={logo} alt='logo' />
      </div>
      <div className='col-span-5 md:col-span-2'>
        <div className='relative flex justify-between items-center'>
          <input
            type='text'
            placeholder='Search Best Food'
            className='  rounded-lg h-8 md:h-10  px-4 text-black  border-2 border-slate-100 hover:border-green-400 hover:transition w-full'
          />
          <button className='absolute right-0 active-button border-1 border-red-200 rounded-md m-1'>
            <GoSearch className='text-2xl md:text-3xl p-1 rounded' />
          </button>
        </div>
      </div>
      <div className='col-span-1 md:col-span-5 '>
        <div className='hidden md:block'>{navData}</div>
        <div className=' md:hidden flex flex-col justify-end items-center gap-4 relative'>
          <button
            className={`h-8  p-[6px] transition-transform duration-100 border  rounded-lg ${
              isShowMenu
                ? 'text-slate-100 hover:text-white bg-red-500 hover:bg-red-700 border-red-200'
                : ''
            }`}
          >
            <>
              {!isShowMenu && (
                <AiOutlineMenu
                  onClick={() => setIsShowMenu(true)}
                  className='text-xl'
                />
              )}
              {isShowMenu && (
                <AiOutlineClose
                  onClick={() => setIsShowMenu(false)}
                  className='text-xl'
                />
              )}
            </>
          </button>
          {
            <div
              className={`absolute transition-all  ${
                isShowMenu ? 'duration-300 top-16 ' : 'duration-300 -top-40 '
              }`}
            >
              {navData}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;