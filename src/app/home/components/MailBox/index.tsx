// src/app/home/components/MailBox/index.tsx
'use client'; // クライアントサイドでの実行を明示

// 必要なモジュールとフックをインポート
import React, { useState } from 'react';
import { Mail } from '@/app/shared/constants'; // Mail型をインポート
import { MailView } from './MailView'; // MailViewコンポーネントをインポート
import { useAddress } from '@/app/contexts/AddressContext';

// メールボックスコンポーネント
export function MailBox() {
  // useAddressフックを使用してアドレス状態を取得
  const { addresses } = useAddress();

  // 選択されたメールの状態を管理
  const [selectedMail, setSelectedMail] = useState<Mail | null>(null);

  // メールをクリックした時の処理
  const handleMailSelect = (mail: Mail) => {
    setSelectedMail(mail); // クリックされたメールを選択状態にする
  };

  // JSXを返す（コンポーネントの見た目を定義）
  return (
    // メールボックス全体のコンテナ
    <div className='grid grid-cols-4 gap-4 h-full'>
      {/* グリッドレイアウトを適用し、4列で隙間を設定。高さを親要素いっぱいに */}

      {/* メールリストのコンテナ */}
      <div className='col-span-1 container space-y-2 my-2 p-2 rounded bg-gray-300 overflow-auto'>
        {/* グリッドの1列分を占め、縦方向に間隔を設定。背景色とスクロール可能に */}

        {/* メールボックスのタイトル */}
        <h1 className='text-2xl font-bold mb-6 text-gray-800'>受信トレイ</h1>

        {/* メールリスト */}
        <ul>
          {/* addressesの各要素に対してマッピング処理を行う */}
          {addresses.map((mail: Mail) => (
            <li
              key={mail.id} // リストの各項目を一意に識別するためのキー
              onClick={() => handleMailSelect(mail)} // クリック時のイベントハンドラ
              className={`mb-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer
              ${selectedMail?.id === mail.id ? 'bg-blue-100' : ''}`}
              // スタイリング：余白、境界線、角丸、ホバー効果、選択時の背景色変更
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
      <div className='col-span-3 h-full overflow-hidden'>
        {/* グリッドの3列分を占め、高さを親要素いっぱいに。オーバーフローを隠す */}
        <MailView mail={selectedMail} />
      </div>
    </div>
  );
}
