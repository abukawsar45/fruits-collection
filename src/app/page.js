import Image from 'next/image';
import { GoSearch } from 'react-icons/go';

export default function Home() {
  return (
    <main className='grid grid-cols-12 m-4'>
      <div className='col-span-2 bg-white p-4 py-4 rounded-2xl'>
        <div className='flex items-center p-1 gap-x-2.5 border-2 border-orange-100 rounded-lg'>
          <button
            className=' basis-2/4 text-sm py-2.5 rounded-lg
            active-button
           '
          >
            Fruits
          </button>
          <button
            className=' basis-2/4 text-sm rounded-lg
            
           '
          >
            Vegetables
          </button>
        </div>
        {/* input field */}
        <div className='relative flex justify-between items-center'>
          <input
            type='text'
            placeholder='Search Best Food'
            className='  rounded-lg h-8 md:h-10  px-4 text-black  border-2 border-slate-100 hover:border-green-400 hover:transition w-full'
          />
          <button className='absolute right-0 active-button border-1 border-red-200 rounded-md m-1'>
            <GoSearch className='text-2xl md:text-3xl p-1 rounded' />
          </button>
        </div>
      </div>
      {/* mid part */}
      <div className='col-span-8'></div>
      <div className='col-span-2'>adsf</div>
    </main>
  );
}
