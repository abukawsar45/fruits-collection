import React from 'react';
import { BiHomeSmile } from 'react-icons/bi';
import { LuLayoutGrid } from 'react-icons/lu';
import { PiTelegramLogoLight } from 'react-icons/pi';
import { CgMoreO, CgPlayButtonR } from 'react-icons/cg';
import ActiveLink from '../utils/ActiveLink';

const Sidebar = () => {
  return (
    <div className='md:h-screen mx-auto sticky top-0 flex justify-center md:justify-start items-center border-amber-500  '>
      <div className='flex justify-center md:flex-col md:items-center gap-5 py-5'>
        <ActiveLink
          href='/'
          className='p-3 bg-slate-100  rounded-md group hover:bg- text- cursor-pointer transition-all'
        >
          <BiHomeSmile className='text-2xl group-hover:text-blue-500' />
        </ActiveLink>
        <ActiveLink
          href='/menu'
          className='p-3 bg-slate-100 rounded-md group  hover:bg- text- cursor-pointer transition-all'
        >
          <LuLayoutGrid className='text-2xl group-hover:text-blue-500' />
        </ActiveLink>
        <ActiveLink
          href='/message'
          className='p-3 bg-slate-100 rounded-md group hover:bg- text- cursor-pointer transition-all'
        >
          <PiTelegramLogoLight className='text-2xl group-hover:text-blue-500 ' />
        </ActiveLink>
        <ActiveLink
          href='/video'
          className='p-3 bg-slate-100 rounded-md group hover:bg- text- cursor-pointer transition-all'
        >
          <CgPlayButtonR className='text-2xl group-hover:text-blue-500 ' />
        </ActiveLink>
        <ActiveLink
          href='/more'
          className='p-3 bg-slate-100 rounded-md group hover:bg- text- cursor-pointer transition-all'
        >
          <CgMoreO className='text-2xl group-hover:text-blue-500 ' />
        </ActiveLink>
      </div>
    </div>
  );
};

export default Sidebar;
