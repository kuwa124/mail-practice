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
        {/* handleMailClickを渡して、メール選択時の挙動を制御 */}
        <MailBox />
      </div>
    </div>
  );
}
