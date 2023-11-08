import Link from 'next/link';
import React from 'react';
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  
} from 'react-icons/fa';
import { PiDotsThreeCircleFill } from 'react-icons/pi';

const HomePageContent = () => {
  return (
    <div className='flex w-full lg:gap-10 '>
      <div className='w-7 '>
        <div className='flex flex-col gap-y-5 lg:mt-5'>
          <Link
            href='#'
            className='flex justify-center items-center w-7 h-7 bg-blue-500 rounded-full'
          >
            <FaFacebook className=' text-white text-sm  ' />
          </Link>
          <Link
            href='#'
            className='flex justify-center items-center w-7 h-7 bg-blue-500 rounded-full'
          >
            <FaLinkedin className=' text-white text-sm  ' />
          </Link>
          <Link
            href='#'
            className='flex justify-center items-center w-7 h-7 bg-blue-500 rounded-full'
          >
            <FaTwitter className=' text-white text-sm  ' />
          </Link>
          <Link
            href='#'
            className='flex justify-center items-center w-7 h-7 bg-blue-500 rounded-full'
          >
            <PiDotsThreeCircleFill className=' text-white text-sm  ' />
          </Link>
        </div>
      </div>
      <div className='bg-red-500 w-full'>sdfg</div>
    </div>
  );
};

export default HomePageContent;