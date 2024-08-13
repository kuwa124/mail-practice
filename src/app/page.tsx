// ユーザー操作に適応するための定型文
'use client';

// 必要なコンポーネントとフックをインポート
import { MailBox } from '@/app/home/components/MailBox';
import Sidebar from '@/app/home/components/Sidebar';
import Toolbar from '@/app/home/components/Toolbar';
import Header from '@/components/Header';
import { useState } from 'react';

// ホームページコンポーネントを定義
export default function Home() {
  // フィルター語の状態を管理
  const [searchTerm, setSearchTerm] = useState<string>('');

  // JSXを返す
  return (
    // メインコンテナ
    // flex flex-col: 縦方向のフレックスボックスレイアウト
    // h-screen: 画面の高さいっぱいに広げる
    // bg-gray-100: 薄いグレーの背景色
    <div className='flex flex-col h-screen bg-gray-100'>
      {/* ヘッダーコンポーネント */}
      <Header />
      {/* ツールバーコンポーネント */}
      {/* フィルター語の状態と更新関数を渡す */}
      <Toolbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* メインコンテンツエリア */}
      {/* flex flex-1: 残りのスペースを埋める */}
      {/* overflow-hidden: はみ出た部分を隠す */}
      <div className='flex flex-1 overflow-hidden'>
        {/* サイドバーコンポーネント */}
        <Sidebar />
        {/* メールボックスコンポーネント */}
        {/* flex-1: 残りの横幅全てを占める */}
        {/* h-full: 親要素の高さいっぱいに広げる */}
        {/* overflow-hidden: はみ出た部分を隠す（MailBox内でスクロールを制御する） */}
        <div className='flex-1 h-full overflow-hidden mx-2'>
          {/* フィルター語の状態を渡す */}
          <MailBox searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
}
