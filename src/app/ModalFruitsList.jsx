'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { IoIosArrowDown } from 'react-icons/io';
import { PiSquaresFourBold } from 'react-icons/pi';
import orange from '../assets/orange.png';
import apple from '../assets/apple.png';
import avocado from '../assets/avocado.png';
import HomePageContent from './HomePageContent';

const ModalFruitsList = ({
  isFruitCategory,
  setIsOpenFoodList,
  setIsFruitCategory,
}) => {
  return (
    <div className=' p-4 flex flex-col gap-y-4'>
      {/* fruits category button */}
      <div className='flex items-center p-1 gap-x-2.5 border-2 border-orange-100 rounded-lg'>
        <button
          onClick={() => setIsFruitCategory('fruits')}
          className={`basis-2/4 py-2.5 rounded-lg transition duration-300
            ${
              isFruitCategory === 'fruits' ? 'active-button font-semibold' : ''
            }`}
        >
          Fruits
        </button>
        <button
          onClick={() => setIsFruitCategory('vegitables')}
          className={` basis-2/4 py-2.5 rounded-lg transition duration-300
            ${
              isFruitCategory === 'vegitables'
                ? 'active-button font-semibold'
                : ''
            }`}
        >
          Vegetables
        </button>
      </div>
      {/* search bar */}
      {isFruitCategory === 'fruits' ? (
        <>
          <div className='relative flex justify-between items-center'>
            <input
              type='text'
              placeholder='Search by Fruits Name'
              className='  rounded-lg h-8 md:h-10 px-4 text-black  border-2 border-slate-100 hover:border-green-400 hover:transition w-full'
            />
            <button className='absolute right-0 active-button border-1 border-red-100 rounded-md m-1 px-1.5 py-1'>
              <GoSearch className='text-lg rounded ' />
            </button>
          </div>
          {/* fruits list */}
          <div>
            <p className='font-medium'>Fruits List</p>
            <div className='flex flex-col mt-2.5 gap-1.5 '>
              {/* oranges */}
              <div
                onClick={() => setIsOpenFoodList(false)}
                className='flex items-center cursor-pointer border-orange-500 border-2 rounded-lg px-2.5 py-2 gap-4'
              >
                <div className='flex items-center bg-orange-200 w-10 h-10 rounded-xl my-2 -rotate-45'>
                  <Image
                    width={42}
                    height={42}
                    src={orange}
                    alt=' fruit image '
                    className='rotate-45'
                  />
                </div>
                <div className=''>
                  <p className='font-medium'>Oranges</p>
                  <p className='text-sm text-slate-300'>Vitamin C</p>
                </div>
              </div>

              {/* apple */}
              <div
                onClick={() => setIsOpenFoodList(false)}
                className='flex items-center cursor-pointer hover:border-s-2 hover:border-blue-400 rounded-lg px-2.5 py-2 gap-4'
              >
                <div className='flex items-center bg-orange-200 w-10 h-10 rounded-xl my-2 -rotate-45'>
                  <Image
                    width={42}
                    height={42}
                    src={apple}
                    alt=' fruit image '
                    className=' rotate-45'
                  />
                </div>
                <div className=''>
                  <p className='font-medium'>Apple</p>
                  <p className='text-sm text-slate-300'>Vitamin C</p>
                </div>
              </div>
              {/* avocado */}
              <div
                onClick={() => setIsOpenFoodList(false)}
                className='flex items-center cursor-pointer hover:border-s-2 hover:border-blue-400 rounded-lg px-2.5 py-2 gap-4'
              >
                <div className='flex items-center bg-orange-200 w-10 h-10 rounded-xl my-2 -rotate-45'>
                  <Image
                    width={42}
                    height={42}
                    src={avocado}
                    alt=' fruit image '
                    className='w-10 rotate-45'
                  />
                </div>
                <div className=''>
                  <p className='font-medium'>Avocado</p>
                  <p className='text-sm text-slate-300'>Vitamin B6</p>
                </div>
              </div>
              {/* strawberries */}
              <div
                onClick={() => setIsOpenFoodList(false)}
                className='flex items-center cursor-pointer hover:border-s-2 hover:border-blue-400 rounded-lg px-2.5 py-2 gap-4'
              >
                <div className='flex items-center bg-orange-200 w-10 h-10 rounded-xl my-2 -rotate-45'>
                  <Image
                    width={42}
                    height={42}
                    src={avocado}
                    alt=' fruit image '
                    className='w-10 rotate-45'
                  />
                </div>
                <div className=''>
                  <p className='font-medium'>Strawberries</p>
                  <p className='text-sm text-slate-300'>Vitamin C</p>
                </div>
              </div>
              {/* mangoes */}
              <div
                onClick={() => setIsOpenFoodList(false)}
                className='flex items-center cursor-pointer hover:border-s-2 hover:border-blue-400 rounded-lg px-2.5 py-2 gap-4'
              >
                <div className='flex items-center bg-orange-200 w-10 h-10 rounded-xl my-2 -rotate-45'>
                  <Image
                    width={42}
                    height={42}
                    src={avocado}
                    alt=' fruit image '
                    className='w-10 rotate-45'
                  />
                </div>
                <div className=''>
                  <p className='font-medium'>mangoes</p>
                  <p className='text-sm text-slate-300'>Vitamin A, C</p>
                </div>
              </div>
              {/* blueverries */}
              <div
                onClick={() => setIsOpenFoodList(false)}
                className='flex items-center cursor-pointer hover:border-s-2 hover:border-blue-400 rounded-lg px-2.5 py-2 gap-4'
              >
                <div className='flex items-center bg-orange-200 w-10 h-10 rounded-xl my-2 -rotate-45'>
                  <Image
                    width={42}
                    height={42}
                    src={avocado}
                    alt=' fruit image '
                    className=' rotate-45'
                  />
                </div>
                <div className=''>
                  <p className='font-medium'>Blueverries</p>
                  <p className='text-sm text-slate-300'>Vitamin C, K</p>
                </div>
              </div>
              {/* grapes */}
              <div
                onClick={() => setIsOpenFoodList(false)}
                className='flex items-center cursor-pointer hover:border-s-2 hover:border-blue-400 rounded-lg px-2.5 py-2 gap-4'
              >
                <div className='flex items-center bg-orange-200 w-10 h-10 rounded-xl my-2 -rotate-45'>
                  <Image
                    width={42}
                    height={42}
                    src={avocado}
                    alt=' fruit image '
                    className=' rotate-45'
                  />
                </div>
                <div className=''>
                  <p className='font-medium'>Grapes</p>
                  <p className='text-sm text-slate-300'>Vitamin C, K</p>
                </div>
              </div>
              {/* papayas */}
              <div
                onClick={() => setIsOpenFoodList(false)}
                className='flex items-center cursor-pointer hover:border-s-2 hover:border-blue-400 rounded-lg px-2.5 py-2 gap-4'
              >
                <div className='flex items-center bg-orange-200 w-10 h-10 rounded-xl my-2 -rotate-45'>
                  <Image
                    width={42}
                    height={42}
                    src={avocado}
                    alt=' fruit image '
                    className=' rotate-45'
                  />
                </div>
                <div className=''>
                  <p className='font-medium'>Papayas</p>
                  <p className='text-sm text-slate-300'>Vitamin C, K</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='flex justify-center items-center'>
          <p className='py-5'> Vegitables data comming soon </p>
        </div>
      )}
    </div>
  );
};

export default ModalFruitsList;
