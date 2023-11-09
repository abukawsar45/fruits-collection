import React from 'react';
import emptyImage from '../../assets/empty-image.png';
import Image from 'next/image';

const MenuPage = () => {
  return (
    <div className='md:mt-3 md:mx-[17px] bg-white h-screen mt-[60px] md:order-2 rounded-lg flex flex-col justify-center items-center '>
      <Image src={emptyImage} alt='empty-image' />
      <h3 className='mt-4 md:mt-10 text-xl md:text-3xl font-semibold md:font-bold'>
        This page is empty
      </h3>
    </div>
  );
};

export default MenuPage;