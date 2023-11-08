'use client'


import Link from 'next/link';
import React from 'react';
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
    <div className='flex w-full lg:gap-10 '>
      {/* social link */}
      <div className='w-7 '>
        <div className='flex flex-col gap-y-5 lg:mt-5'>
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
      <div className=' w-full'>
        <div className='flex  '>
          <div className='basis-2/4'>
            <h3 className='text-4xl font-black'>
              Health benefits of an avocado
            </h3>
            <div className='mt-[30px]'>
              <p className=' font-bold text-lg'>Supports eye health: </p>
              <p className='mt-[15px] text-sm'>
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.
              </p>
            </div>
            <div className='mt-[30px]'>
              <p className=' font-bold text-lg'>Supports eye health: </p>
              <p className='mt-[15px] text-sm'>
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.
              </p>
            </div>
          </div>
          <div className='basis-2/4'>
            <Image
              src={avocadoImage}
              alt='avocado image'
              className='w-full rounded-3xl '
            />
          </div>
          <div></div>
        </div>
        <div className='mt-10'>
          <p className=' font-bold text-lg'>Supports eye health: </p>
          <p className='mt-[15px] text-sm'>
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
        <div className='mt-10'>
          <Image
            src={appleImage}
            alt='apple image'
            className='w-full rounded-3xl'
          />
        </div>
        <div className='mt-16'>
        <p className='text-lg font-black'>Health benefits of an avocado</p>
          <Rating className='mt-2.5'
            style={{ maxWidth: 250 }}
            value={rating}
            onChange={setRating}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;