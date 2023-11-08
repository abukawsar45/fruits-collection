import React from 'react';
import { BiHomeSmile } from 'react-icons/bi';
import { LuLayoutGrid } from 'react-icons/lu';
import { PiTelegramLogoLight, PiDotsNineBold } from 'react-icons/pi';
import { CgPlayButtonR } from 'react-icons/cg';
import ActiveLink from './ActiveLink';

const Sidebar = () => {
  return (
    <nav className='mx-auto md:py-auto h-14 md:h-screen md:overflow-scroll lg:overflow-hidden top-0 flex justify-center  md:items-center border-amber-500 bottom-0 md:bottom-auto py-2.5'>
      <div className='w-full px-5 md:px-0 flex justify-between md:justify-center md:flex-col md:items-center gap-5'>
        <ActiveLink
          href='/'
          className=' rounded-md group cursor-pointer  hover:transition-all hover:border-2 ease-in hover:ease-in hover:border-sky-200'
        >
          <BiHomeSmile className='text-4xl p-2 group-hover:text-blue-500' />
        </ActiveLink>
        <ActiveLink
          href='/menu'
          className='rounded-md group cursor-pointer  hover:transition-all hover:border-2 ease-in hover:ease-in hover:border-sky-200'
        >
          <LuLayoutGrid className='text-4xl p-2 group-hover:text-blue-500' />
        </ActiveLink>
        <ActiveLink
          href='/message'
          className='rounded-md group cursor-pointer  hover:transition-all hover:border-2 ease-in hover:ease-in hover:border-sky-200'
        >
          <PiTelegramLogoLight className='text-4xl p-2 group-hover:text-blue-500 ' />
        </ActiveLink>
        <ActiveLink
          href='/video'
          className='rounded-md group cursor-pointer  hover:transition-all hover:border-2 ease-in hover:ease-in hover:border-sky-200'
        >
          <CgPlayButtonR className='text-4xl p-2 group-hover:text-blue-500 ' />
        </ActiveLink>
        <ActiveLink
          href='/more'
          className='rounded-md group cursor-pointer  hover:transition-all hover:border-2 ease-in hover:ease-in hover:border-sky-200'
        >
          <PiDotsNineBold className='text-4xl p-2 group-hover:text-blue-500 ' />
        </ActiveLink>
      </div>
    </nav>
  );
};

export default Sidebar;
