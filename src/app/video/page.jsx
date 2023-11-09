'use client'

import { useState, useEffect } from 'react';

const SimplePage = () => {
  const [backgroundColor, setBackgroundColor] = useState('#29e31c');
  const [centerColor, setCenterColor] = useState('#e91616');
  const [intervalId, setIntervalId] = useState(null);

  const randomColor = () => {
    const symbols = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color = color + symbols[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleRandomColor = () => {
    setBackgroundColor(randomColor());
    setCenterColor(randomColor());
  };

  const startColorChange = () => {
    const id = setInterval(handleRandomColor, 3000);
    setIntervalId(id);
  };

  const stopColorChange = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  useEffect(() => {
    startColorChange();

    return () => {
      stopColorChange();
    };
  }, []); 

  return (
    <div className='my-2 md:my-12 mx-2 md:mx-12 z-0 bg-white  pb-20'>
      <div className='md:text-center mb-4'>
        <p className='pt-2 md:pt-5 lg:pt-7'>
          The colors will change automatically every 3 seconds. Click the Stop
          button to turn off automatic color change
        </p>
        <div className='mt-2 md:mt-3 lg:mt-5 flex justify-center items-center space-x-4'>
          <button
            className='px-3 py-1 bg-lime-500 hover:bg-lime-600 rounded-lg text-slate-700 font-bold hover:text-white'
            onClick={handleRandomColor}
          >
            Change Color
          </button>
          <button
            className='px-3 py-1 text-white hover:text-black bg-red-500 hover:bg-red-600 rounded-lg font-bold'
            onClick={stopColorChange}
          >
            Stop
          </button>
        </div>
      </div>
      <div className='mt-3 md:mt-6 lg:mt-10 flex justify-center'>
        <div
          className='w-80 md:w-[600px] lg:w-[1000px] h-56 md:h-[400px] lg:h-[600px] relative flex justify-center items-center rounded-md md:rounded-lg'
          style={{ background: backgroundColor }}
        >
          <div
            style={{ background: centerColor }}
            className='rounded-full w-24 md:w-40  lg:w-72 h-24 md:h-40 lg:h-72'
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SimplePage;
