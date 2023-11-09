'use client';

import Image from 'next/image';
import ModalFruitsList from './ModalFruitsList';
import { useEffect, useRef, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { IoIosArrowDown } from 'react-icons/io';
import { PiSquaresFourBold } from 'react-icons/pi';
import orange from '../assets/orange.png';
import apple from '../assets/apple.png';
import avocado from '../assets/avocado.png';
import HomePageContent from './HomePageContent';
import SettingPage from './Setting';

export default function Home() {
  const [isFruitCategory, setIsFruitCategory] = useState('fruits');
  const [isOpenFoodList, setIsOpenFoodList] = useState(false);
   const [myStyleStore, setMyStyleStore] = useState({});

  const foodListRef = useRef(null);

   const myCustomStyle = {
     
   };

   useEffect(() => {
     setMyStyleStore(myCustomStyle);
   }, []);


  useEffect(() => {
    function handleClickOutside(event) {
      if (foodListRef.current && !foodListRef.current.contains(event.target)) {
        setIsOpenFoodList(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <main className='grid grid-cols-12 gap-4 mx-2 md:m-4 '>
      <div
        className='col-span-12 lg:col-span-2 bg-white px-3 md:px-4 py-2.5 lg:py-4 rounded-lg md:rounded-2xl  flex flex-col gap-4'
        ref={foodListRef}
      >
        {/* fruits list for large device */}
        <div className='hidden lg:block'>
          {/* fruits category button */}
          <div className='flex items-center p-1 gap-x-2.5 border-2 border-orange-100 rounded-md'>
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
              <div className='relative flex justify-between items-center py-4'>
                <input
                  type='text'
                  placeholder='Search by Fruits Name'
                  className='  rounded-lg h-8 md:h-10  px-4 text-black  border-2 border-slate-100 hover:border-green-400 hover:transition w-full'
                />
                <button className='absolute right-0 active-button border-1 border-red-100 rounded-md m-1 px-1.5 py-1 '>
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
                  <div className='flex items-center cursor-pointer hover:border-s-2 hover:border-blue-400 rounded-lg px-2.5 py-2 gap-4'>
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
                  <div className='flex items-center cursor-pointer hover:border-s-2 hover:border-blue-400 rounded-lg px-2.5 py-2 gap-4'>
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
                  <div className='flex items-center cursor-pointer hover:border-s-2 hover:border-blue-400 rounded-lg px-2.5 py-2 gap-4'>
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
                  <div className='flex items-center cursor-pointer hover:border-s-2 hover:border-blue-400 rounded-lg px-2.5 py-2 gap-4'>
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
                  <div className='flex items-center cursor-pointer hover:border-s-2 hover:border-blue-400 rounded-lg px-2.5 py-2 gap-4'>
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
                  <div className='flex items-center cursor-pointer hover:border-s-2 hover:border-blue-400 rounded-lg px-2.5 py-2 gap-4'>
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
                  <div className='flex items-center cursor-pointer hover:border-s-2 hover:border-blue-400 rounded-lg px-2.5 py-2 gap-4'>
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
        {/*fruits list for medium or small device */}
        <div className={`block lg:hidden ${isOpenFoodList ? '' : ''}`}>
          <div className='grid grid-cols-12'>
            <div className='col-span-12'>
              {' '}
              <button
                onClick={() => setIsOpenFoodList(!isOpenFoodList)}
                className={`w-full flex items-center justify-between ${
                  isOpenFoodList ? 'opacity-30' : ''
                } `}
              >
                <PiSquaresFourBold className='text-xl active-button' />
                <span className='text-xs font-medium '>Select Food Item</span>
                <IoIosArrowDown className='text-sm' />
              </button>
            </div>
            <div
              className={`${
                isOpenFoodList
                  ? 'absolute top-0 left-0 bg-white rounded-e-lg'
                  : 'hidden'
              } w-5/6  `}
            >
              {
                <ModalFruitsList
                  isFruitCategory={isFruitCategory}
                  setIsOpenFoodList={setIsOpenFoodList}
                  setIsFruitCategory={setIsFruitCategory}
                />
              }
            </div>
          </div>
        </div>
      </div>
      {/* mid part */}
      <div className='w-full col-span-12 lg:col-span-8 bg-white px-3 md:px-4 py-3.5 md:py-5 lg:p-11 rounded-lg md:rounded-2xl '>
        <HomePageContent  myStyleStore={myStyleStore} />
      </div>
      <div className='hidden md:block md:col-span-12 lg:col-span-2'>
        <SettingPage
          myStyleStore={myStyleStore}
          setMyStyleStore={setMyStyleStore}
        />{' '}
      </div>
    </main>
  );
}
