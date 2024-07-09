// src/pages/createEmail/CreateEmail.tsx
import Header from '@/components/Header';
import NewMessage from '@/components/NewMessage';

export default function Home() {
  const handleClose = () => {
    console.log('Close button clicked');
    // ここで必要な閉じる操作を実装します
  };

  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      <Header />
      <NewMessage /> {/* onCloseプロパティを渡す */}
    </div>
  );
}
