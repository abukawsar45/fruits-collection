import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';

const Header = () => {
  return (
    <div className=' flex flex-row justify-center max-w-[1920px] '>
      <div className='basis-2/5 bg-red-400'>
        {/* <Image width={72} height={36} src={logo} alt='logo' /> */}
        <p>asdf</p>
      </div>
      <div className='basis-1/5 bg-red-600'>
        {/* <Image width={72} height={36} src={logo} alt='logo' /> */}
        <p>asdfaf</p>
      </div>
      <div className='basis-2/5 bg-red-800'>
        {/* <Image width={72} height={36} src={logo} alt='logo' /> */}
        <p>asdfa</p>
      </div>
    </div>
  );
};

export default Header;