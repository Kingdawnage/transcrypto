import React from 'react';
import uploadIcon from '@/public/icons8-upload-to-cloud-64.png'
import Image from 'next/image';
import openai from '@/app/utils/openai';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    name: string,
};


export default async function Transcrypto(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: 'what is 50 minus 10'
    });
    res.status(200).json(completion);
    // receive some user data, ask chat gpt something here @Kingdawnage

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
