import Header from '@/components/Header';
import Contact from '@/components/Contact';
import EditContact from '@/app/adress/EmailEditor';
import EditComponent from '@/app/adress/EditComponent';

export default function Adress() {
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
        <div>
          <Contact />
          <EditComponent />
        </div>
        {/* <EditContact  /> */}
      </div>
    </div>
  );
}
