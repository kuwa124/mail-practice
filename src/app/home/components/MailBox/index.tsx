// このファイルをクライアントコンポーネントとして指定
'use client';
// Reactをインポート
import React from 'react';
// カスタムフックをインポート
import { useMailBox } from './useMailBox';
// 型定義とダミーデータをインポート
import { dummyMails } from '@/app/home/components/MailBox/constants';
// MailViewコンポーネントをインポート
import { MailView } from './MailView';

// メールボックスコンポーネント
export function MailBox() {
  // カスタムフックを使用してメールボックスの状態を管理
  const { selectedMail, handleMailClick } = useMailBox();

  // JSXを返す（コンポーネントの見た目を定義）
  return (
    // メールボックス全体のコンテナ
    // grid: グリッドレイアウトを適用
    // grid-cols-4: 4列のグリッドを作成
    // gap-4: グリッドアイテム間の隙間を1rem（16px）に設定
    // h-full: 親要素の高さいっぱいに広げる
    <div className='grid grid-cols-4 gap-4 h-full '>
      {/* メールリストのコンテナ */}
      {/* col-span-1: グリッドの1列分を占める */}
      {/* overflow-auto: コンテンツがはみ出した場合にスクロール可能にする */}
      <div className='col-span-1 container space-y-2 m-2 p-2 rounded bg-gray-300 overflow-auto'>
        {/* メールボックスのタイトル */}
        <h1 className='text-2xl font-bold mb-6 text-gray-800'>受信トレイ</h1>
        {/* メールリスト */}
        <ul>
          {/* dummyMailsの各要素に対してマッピング処理を行う */}
          {dummyMails.map((mail) => (
            <li
              key={mail.id}
              onClick={() => handleMailClick(mail)}
              className={`mb-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer
              ${selectedMail?.id === mail.id ? 'bg-blue-100' : ''}`}
            >
              {/* メール送信者の名前 */}
              <p className='text-lg font-semibold'>{mail.name}</p>

              {/* メールの件名 */}
              <p className='mt-2'>{mail.subject}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* 選択されたメールを表示 */}
      {/* col-span-3: グリッドの3列分を占める（横幅いっぱいに広がる） */}
      {/* h-full: 親要素の高さいっぱいに広げる */}
      <div className='col-span-3 h-full overflow-hidden'>
        <MailView mail={selectedMail} />
      </div>
    </div>
  );
}
