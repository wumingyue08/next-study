/*
 * @Author: wumingyue
 * @Date: 2024-12-16 20:45:55
 * @Desc: 
 */
import React from 'react';
import Image from 'next/image';
// import homeSrc from '/public/home.jpg';

export default function Page() {
  return (
    <div>
      <div className='h-screen relative'>
        <div className='absolute inset-0 '>
          {/* <img
            src="https://image.16pic.com/00/53/26/16pic_5326734_s.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          /> */}
          {/* <Image src={homeSrc} fill style={{ objectFit: 'cover' }} /> */}
          <div className='absolute inset-0 bg-gradient-to-r from-gray-950'></div>
        </div>
        <div className='flex justify-center pt-48'>
          <h1 className='text-white text-6xl'>
            内容
          </h1>
        </div>
      </div>

    </div>
  )
}
