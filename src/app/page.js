'use client'

import Image from 'next/image';
import { GoSearch } from 'react-icons/go';
import orange from '../assets/orange.png';
import apple from '../assets/apple.png';
import avocado from '../assets/avocado.png';
import { useState } from 'react';

export default function Home() {
  const [isFruitCategory, setIsFruitCategory] = useState('fruits');


  return (
    <main className='grid grid-cols-12 m-4'>
      <div className='col-span-2 bg-white p-4 py-4 rounded-2xl flex flex-col gap-4'>
        {/* fruits category button */}
        <div className='flex items-center p-1 gap-x-1 border-2 border-orange-100 rounded-lg'>
          <button
            onClick={() => setIsFruitCategory('fruits')}
            className={`basis-2/4 font-semibold py-2.5 rounded-lg transition duration-300
            ${isFruitCategory === 'fruits' ? 'active-button' : ''}`}
          >
            Fruits
          </button>
          <button
            onClick={() => setIsFruitCategory('vegitables')}
            className={` basis-2/4 font-semibold py-2.5 rounded-lg transition duration-300
            ${isFruitCategory === 'vegitables' ? 'active-button' : ''}`}
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
                className='  rounded-lg h-8 md:h-10  px-4 text-black  border-2 border-slate-100 hover:border-green-400 hover:transition w-full'
              />
              <button className='absolute right-0 active-button border-1 border-red-100 rounded-md m-1 px-1.5 py-1'>
                <GoSearch className='text-2xl rounded ' />
              </button>
            </div>
            {/* fruits list */}
            <div>
              <p className='font-medium'>Fruits List</p>
              <div className='flex flex-col mt-2.5 gap-3.5 '>
                {/* oranges */}
                <div className='flex items-center border-orange-500 border-2 rounded-lg px-2.5 py-2 gap-4'>
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
                <div className='flex items-center rounded-lg px-2.5 py-2 gap-4'>
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
                <div className='flex items-center rounded-lg px-2.5 py-2 gap-4'>
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
                <div className='flex items-center rounded-lg px-2.5 py-2 gap-4'>
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
                <div className='flex items-center rounded-lg px-2.5 py-2 gap-4'>
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
                <div className='flex items-center rounded-lg px-2.5 py-2 gap-4'>
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
                <div className='flex items-center rounded-lg px-2.5 py-2 gap-4'>
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
                <div className='flex items-center rounded-lg px-2.5 py-2 gap-4'>
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
            <p> Vegitables data comming soon </p>
          </div>
        )}
      </div>
      {/* mid part */}
      <div className='col-span-8'></div>
      <div className='col-span-2'>adsf</div>
    </main>
  );
}
