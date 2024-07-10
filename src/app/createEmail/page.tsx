import AttachmentArea from '@/app/createEmail/components/AttachmentArea';
import EmailComposer from '@/app/createEmail/components/EmailComposer';
import Header from '@/components/Header';
import React from 'react';

const createEmail = () => {
  return (
    <div
      // フレックスコンテナ、縦方向に配置、画面全体の高さ、背景色
      className='flex flex-col h-screen bg-gray-100'
    >
      <Header />
      <div
        // フレックスコンテナ、メインコンテンツの高さを埋める、オーバーフロー隠す
        className='flex flex-1 overflow-hidden'
      >
        <EmailComposer />
        <AttachmentArea />
      </div>
    </div>
  );
};

export default createEmail;
