import EmailComposer from '@/app/createEmail/components/EmailComposer';
import Header from '@/components/Header';
import React from 'react';

const createEmail = () => {
  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      <Header />
      <EmailComposer />
    </div>
  );
};

export default createEmail;
