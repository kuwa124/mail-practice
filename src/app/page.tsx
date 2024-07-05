import Header from ' <prefix>/components/Header';
import Sidebar from ' <prefix>/components/Sidebar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      <Header />

      {/* メインコンテンツ */}
      <div className='flex flex-1 overflow-hidden'>
        {/* サイドバー */}
        <Sidebar />
        {/* メールリスト */}
        <main className='flex-1 p-4'>
          <div className='bg-white shadow rounded'>
            <div className='border-b p-2 flex justify-between items-center'>
              <div className='flex space-x-2'>
                {/* メールアクションアイコン */}
                {['envelope', 'reply', 'reply-all', 'forward', 'flag'].map(
                  (icon, index) => (
                    <button key={index} className='p-1'>
                      <Image
                        src={`/${icon}-icon.png`}
                        alt={icon}
                        width={20}
                        height={20}
                      />
                    </button>
                  )
                )}
              </div>
              <div className='flex items-center'>
                <span className='mr-2'>すべて</span>
                <Image
                  src='/dropdown-icon.png'
                  alt='Dropdown'
                  width={16}
                  height={16}
                />
              </div>
            </div>
            <div className='p-2'>
              <p className='text-sm text-gray-600'>461通の1通目から50通目</p>
              {/* メールリストの項目 */}
              {[...Array(6)].map((_, index) => (
                <div key={index} className='border-b py-2 flex justify-between'>
                  <div>
                    <div>名前</div>
                    <div>件名</div>
                  </div>
                  <div>日付、時間</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
