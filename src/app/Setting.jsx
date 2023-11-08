'use client';

import { useEffect, useState } from 'react';
import { TbTextRecognition } from 'react-icons/tb';
import { IoIosArrowDown,IoToggle } from 'react-icons/io';
import { LiaToggleOffSolid } from 'react-icons/lia';


const Setting = () => {
  const [isOpenSetting, setIsOpenSetting] = useState([true]);
  const [myStyleStore, setMyStyleStore] = useState({});

  const myCustomStyle = {
    fontSize: 19,
  };

  useEffect(() => {
    setMyStyleStore(myCustomStyle);
  }, []);

  console.log({ isOpenSetting });
  return (
    <div className='hidden md:block bg-white px-3 md:px-4 py-2.5 lg:py-4 rounded-lg md:rounded-2xl '>
      <button
        onClick={() => setIsOpenSetting(!isOpenSetting)}
        className={`w-full flex items-center justify-between ${
          isOpenSetting ? '' : ''
        } `}
      >
        <span className='flex items-center gap-4'>
          <TbTextRecognition
            className={`text-xl ${isOpenSetting ? 'text-red-500' : ''}`}
          />
          <span
            className={`text-sm  ${
              isOpenSetting ? 'font-semibold text-red-500' : ''
            }`}
          >
            Setting
          </span>
        </span>
        <IoIosArrowDown
          className={`text-sm transform ${
            isOpenSetting ? 'rotate-180 text-red-500' : ''
          }`}
        />
      </button>
      {isOpenSetting && (
        <div className='pt-6 px-2.5 pb-2.5 duration-700 ml-1.5'>
          <div className='flex  justify-between items-center'>
            <p className='font-medium text-sm'>Paragraph font size</p>
            <p className='text-xs font-semibold text-red-500'>
              {myStyleStore?.fontSize}
            </p>
          </div>
          <div className='w-full'>
            {' '}
            <input
              className='mt-5 w-full h-1 custom-range rounded-md bg-slate-400'
              min={0}
              max={100}
              style={{
                '--range-color': '#E55527', // Thumb color
                background: 'orange', // Track color
              }}
              value={parseFloat(myStyleStore?.fontSize || 19)}
              onChange={(e) =>
                setMyStyleStore({
                  ...myStyleStore,
                  fontSize: parseFloat(e.target.value),
                })
              }
              type='range'
              name=''
              id=''
            />
          </div>

          <div className='mt-5'>
            <p className='text-sm font-medium'>Choose Vitamin Type</p>
            <button className='mt-2.5 w-full justify-between flex items-center text-xs bg-slate-300 px-3.5 py-2.5 rounded-md '>
              <span className='font-medium text-sm'>All Vitamin</span>

              <IoIosArrowDown className='text-sm' />
            </button>
          </div>
          <div className='mt-5'>
            <button className=' w-full flex justify-between items-center text-sm font-medium py-1.5 '>
              <span className='font-medium text-sm'>Turn Off Subtitle</span>

              <LiaToggleOffSolid className='text-lg' />
              <IoToggle className='text-lg' />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Setting;
