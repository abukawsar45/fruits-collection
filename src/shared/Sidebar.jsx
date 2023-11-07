import React from 'react';
import { BiHomeSmile } from 'react-icons/bi';
import { LuLayoutGrid } from 'react-icons/lu';
import { PiTelegramLogoLight } from 'react-icons/pi';
import { CgMoreO, CgPlayButtonR } from 'react-icons/cg';
import ActiveLink from '@/app/utils/ActiveLink';

const Sidebar = () => {
  return (
    <div className='mx-auto py-10 md:py-auto h-[56px] md:h-screen md:overflow-scroll lg:overflow-hidden top-0 flex justify-center  md:items-center border-amber-500 bottom-0 md:bottom-auto  '>
      <div className='flex justify-center md:flex-col md:items-center gap-5 py-5'>
        <ActiveLink
          href='/'
          className='p-3  rounded-md group cursor-pointer hover:transition-all hover:border-2 ease-in hover:ease-in hover:border-sky-200'
        >
          <BiHomeSmile className='text-2xl group-hover:text-blue-500' />
        </ActiveLink>
        <ActiveLink
          href='/menu'
          className='p-3 rounded-md group  cursor-pointer hover:transition-all hover:border-2 ease-in hover:ease-in hover:border-sky-200'
        >
          <LuLayoutGrid className='text-2xl group-hover:text-blue-500' />
        </ActiveLink>
        <ActiveLink
          href='/message'
          className='p-3 rounded-md group cursor-pointer hover:transition-all hover:border-2 ease-in hover:ease-in hover:border-sky-200'
        >
          <PiTelegramLogoLight className='text-2xl group-hover:text-blue-500 ' />
        </ActiveLink>
        <ActiveLink
          href='/video'
          className='p-3 rounded-md group cursor-pointer hover:transition-all hover:border-2 ease-in hover:ease-in hover:border-sky-200'
        >
          <CgPlayButtonR className='text-2xl group-hover:text-blue-500 ' />
        </ActiveLink>
        <ActiveLink
          href='/more'
          className='p-3 rounded-md group cursor-pointer hover:transition-all hover:border-2 ease-in hover:ease-in hover:border-sky-200'
        >
          <CgMoreO className='text-2xl group-hover:text-blue-500 ' />
        </ActiveLink>
      </div>
    </div>
  );
};

export default Sidebar;
