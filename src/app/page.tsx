import Header from "@/components/Header";
import MailBox from "@/components/MailBox";
import MailView from "@/components/MailView";
import Sidebar from "@/components/Sidebar";
import Toolbar from "@/components/Toolbar";

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
