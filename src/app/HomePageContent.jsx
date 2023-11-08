'use client'


import Link from 'next/link';
import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  
} from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import Image from 'next/image';
import avocadoImage from '../assets/avocado-sideImage.png';
import appleImage from '../assets/apple-image.png';

const HomePageContent = () => {
  const [rating, setRating] = useState(4); 
  

  return (
    <div className='flex flex-col md:flex-row w-full md:gap-3 lg:gap-10 '>
      {/* social link */}
      <div className='md:w-7 order-2 lg:order-1'>
        <div className='flex md:flex-col  gap-5 mt-6 md:mt-5'>
          <Link
            href='#'
            className='flex justify-center items-center w-7 h-7 bg-blue-600 rounded-full'
          >
            <FaFacebook className=' text-white text-sm  ' />
          </Link>
          <Link
            href='#'
            className='flex justify-center items-center w-7 h-7 bg-sky-700 rounded-full'
          >
            <FaLinkedin className=' text-white text-sm  ' />
          </Link>
          <Link
            href='#'
            className='flex justify-center items-center w-7 h-7 bg-blue-500 rounded-full'
          >
            <FaTwitter className=' text-white text-sm  ' />
          </Link>
          <Link
            href='#'
            className='flex justify-center items-center w-7 h-7 bg-orange-600 rounded-full'
          >
            <BsThreeDots className=' text-white text-sm  ' />
          </Link>
        </div>
      </div>
      {/* home page main content */}
      <div className=' w-full order-1 md:order-2'>
        <div className='flex flex-col md:flex-row '>
          <div className='w-full md:basis-2/4'>
            <h3 className='text-2xl lg:text-4xl font-black'>
              Health benefits of an avocado
            </h3>
            <div className='mt-[30px]'>
              <p className=' font-bold text-sm md:text-lg'>
                Supports eye health:{' '}
              </p>
              <p className='mt-2.5 md:mt-[15px] text-xs md:text-sm'>
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.
              </p>
            </div>
            <div className='mt-[30px]'>
              <p className=' font-bold text-sm md:text-lg'>
                Supports eye health:{' '}
              </p>
              <p className='mt-2.5 md:mt-[15px] text-xs md:text-sm'>
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.
              </p>
            </div>
          </div>
          <div className='w-full md:basis-2/4 mt-[30px]'>
            <Image
              src={avocadoImage}
              alt='avocado image'
              className='w-full rounded-lg md:rounded-3xl h-32 md:h-auto object-cover '
            />
          </div>
        </div>
        <div className=' mt-6 md:mt-10'>
          <p className=' font-bold text-sm md:text-lg'>Supports eye health: </p>
          <p className='mt-2.5 md:mt-[15px] text-xs md:text-sm'>
            Spinach contains high levels of vitamin A and other antioxidants
            that help maintain healthy vision and protect against age-related
            macular degeneration.. Spinach contains high levels of vitamin A and
            other antioxidants that help maintain healthy vision and protect
            against age-related macular degeneration.. Spinach contains high
            levels of vitamin A and other antioxidants that help maintain
            healthy vision and protect against age-related macular
            degeneration.. Spinach contains high levels of vitamin A and other
            antioxidants that help maintain healthy vision and protect against
            age-related macular degeneration.. Spinach contains high levels of
            vitamin A and other antioxidants that help maintain healthy vision
            and protect against age-related macular degeneration.. Spinach
            contains high levels of vitamin A and other antioxidants that help
            maintain healthy vision and protect against age-related macular
            degeneration.. Spinach contains high levels of vitamin A and other
            antioxidants that help maintain healthy vision and protect against
            age-related macular degeneration..
          </p>
        </div>
        <div className='mt-6 md:mt-10'>
          <div className='flex flex-col md:flex-row md:items-center md:gap-x-11'>
            <div className='w-full md:basis-2/4'>
              <Image
                src={appleImage}
                alt='apple image'
                className='w-full rounded-lg md:rounded-3xl h-32 md:h-auto object-cover '
              />
            </div>
            <div className='w-full md:basis-2/4 mt-6 md:mt-0'>
              <p className=' font-bold text-sm md:text-lg'>Supports eye health: </p>
              <p className='mt-2.5 md:mt-[15px] text-xs md:text-sm'>
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.. Spinach contains high levels
                of vitamin A and other antioxidants that help maintain healthy
                vision and protect against age-related macular degeneration..
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.. Spinach contains high levels
                of vitamin A and other antioxidants that help maintain healthy
              </p>
            </div>
          </div>
        </div>
        {/* rating */}
        <div className='mt-11  md:mt-16'>
          <p className='text-lg font-black'>Was this helpful?</p>
          <Rating
            className='mt-2.5'
            style={{ maxWidth: 180 }}
            value={rating}
            onChange={setRating}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;