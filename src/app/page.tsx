import Header from '@/components/Header';
import MailBox from '@/app/home/components/MailBox';
import MailView from '@/app/home/components/MailView';
import Sidebar from '@/app/home/components/Sidebar';
import Toolbar from '@/app/home/components/Toolbar';

export default function Home() {
  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      <Header />
      <Toolbar /> {/* メインコンテンツ */}
      <div className='flex flex-1 overflow-hidden'>
        {/* サイドバー */}
        <Sidebar />
        <MailBox />
        <MailView />
      </div>
    </div>
  );
}
