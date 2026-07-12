import { bannerAuth } from '@/constants/images';
import Header from '@/components/common/header/Header';
import Image from 'next/image';
import React, { PropsWithChildren } from 'react';

function AuthLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className='flex h-screen flex-row w-full'>
        <div className='flex-2 hidden md:block'>
          <Image
            src={bannerAuth}
            alt='banner'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='flex-1 pt-[58px] overflow-y-auto'>{children}</div>
      </div>
    </>
  );
}

export default AuthLayout;
