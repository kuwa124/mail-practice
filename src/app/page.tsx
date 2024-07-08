import Toolbar from ' <prefix>/components/Toolbar';
import Header from ' <prefix>/components/Header';
import Sidebar from ' <prefix>/components/Sidebar';
import MailBox from ' <prefix>/components/MailBox';
import MailView from ' <prefix>/components/MailView';

export default function Home() {
  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      <Header />
      <Toolbar />
      {/* メインコンテンツ */}
      <div className='flex flex-1 overflow-hidden'>
        {/* サイドバー */}
        <Sidebar />
        <MailBox />
        <MailView />
      </div>
    </div>
  );
}
