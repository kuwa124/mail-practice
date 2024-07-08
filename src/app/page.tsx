import Header from ' <prefix>/components/Header/Header';
import Sidebar from ' <prefix>/components/Sidebar/Sidebar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      <Header />

      {/* メインコンテンツ */}
      <div className='flex flex-1 overflow-hidden'>
        {/* サイドバー */}
        <Sidebar />
      </div>
    </div>
  );
}
