'use client';

import { useEffect, useState } from 'react';
import { TbTextRecognition } from 'react-icons/tb';
import { IoIosArrowDown,IoToggle } from 'react-icons/io';
import { LiaToggleOffSolid } from 'react-icons/lia';


const Setting = ({ myStyleStore, setMyStyleStore }) => {
  const [isOpenSetting, setIsOpenSetting] = useState([true]);

  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };

  console.log({ isOpenSetting });
  return (
    <div className='hidden md:block px-3 md:px-4 py-2.5 lg:py-4 bg-white rounded-lg md:rounded-2xl '>
      <div className=' py border-2 p-2.5 border-slate-300 rounded-lg'>
        <button
          onClick={() => setIsOpenSetting(!isOpenSetting)}
          className={`w-full flex items-center justify-between hover:bg-gray-300 rounded-md ${
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
                {myStyleStore?.fontSize || 19}
              </p>
            </div>
            <div className='w-full'>
              {' '}
              <input
                className='mt-5 w-full h-1 custom-range rounded-md bg-slate-400'
                min={12}
                max={25}
                style={{
                  '--range-color': '#E55527',
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
              <select
                name=''
                id=''
                className=' mt-2.5 w-full bg-slate-300 px-3.5 py-2.5 rounded-md font-medium text-sm'
                defaultValue='all vitamin'
              >
                <option value='all vitamin'>All Vitamin</option>
                <option value='others'>Others</option>
              </select>
            </div>

            <div className='mt-5'>
              <button className=' w-full flex justify-between items-center text-sm font-medium py-1.5 '>
                <span className='font-medium text-sm'>Turn Off Subtitle</span>

                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    id='toggle'
                    className='hidden '
                    checked={isChecked}
                    onChange={handleToggleChange}
                  />
                  <label
                    htmlFor='toggle'
                    className={`relative cursor-pointer border border-gray-300  ${
                      isChecked ? 'bg-blue-500' : 'bg-white'
                    } rounded-xl p-0.5 w-8 h-[18px] transition-colors duration-300`}
                  >
                    <span
                      className={`absolute left-0 top-0  ${
                        isChecked ? 'translate-x-full' : 'translate-x-0'
                      } inline-block w-4 h-4 bg-gray-300 rounded-full transition-transform duration-300`}
                    />
                  </label>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setting;
