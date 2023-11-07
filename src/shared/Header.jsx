import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';

const Header = () => {
  return (
    <div className='w-full h-[60px] grid  grid-cols-12 max-w-[1920px] '>
      <div className='grid-cols-5'>
        <Image width={72} height={36} src={logo} alt='logo' />
      </div>
      <div className='grid-cols-2'>
        <Image width={72} height={36} src={logo} alt='logo' />
      </div>
      <div className='grid-cols-5'>
        <Image width={72} height={36} src={logo} alt='logo' />
      </div>
      
    </div>
  );
};

export default Header;