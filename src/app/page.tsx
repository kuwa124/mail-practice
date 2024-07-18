// 必要なコンポーネントとフックをインポート
import React from 'react';
import Header from '@/components/Header';
import Toolbar from '@/app/home/components/Toolbar';
import Sidebar from '@/app/home/components/Sidebar';
import { MailBox } from '@/app/home/components/MailBox';

// ホームページコンポーネントを定義
export default function Home() {
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
      <Toolbar />
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
          <MailBox />
        </div>
      </div>
    </div>
  );
}
