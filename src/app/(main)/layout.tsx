import Footer from '@/components/common/Footer';
import Header from '@/components/common/header/Header';
import React, { PropsWithChildren } from 'react';
import ChatWidget from '../../components/ChatWidget/ChatWidget';

function MainLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default MainLayout;
