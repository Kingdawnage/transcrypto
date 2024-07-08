import React from 'react';
import uploadIcon from '@/public/icons8-upload-to-cloud-64.png'
import Image from 'next/image';


export default function Transcrypto() {
  return (
    <div className='min-h-[20%] flex flex-col items-center justify-center bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 text-white rounded-2xl p-8'>
      <div className='flex'>
        <div className='flex flex-col space-y-5 items-center'>
            <Image src={uploadIcon} alt='Upload Transcrypto Icon' />
            <h1 className='text-black'>Drag and drop any audio!</h1>
        </div>
      </div>
    </div>
  );
}
