'use client'; // クライアントサイドでの実行を明示

// Reactと必要なフックをインポート
import React, { useState, useEffect } from 'react';

// カスタムフックとアイコンをインポート
import useContacts from '@/components/Contact/useContacts';
import { faUser, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// EmailContextのカスタムフックをインポート
import { useEmailContext } from '@/app/contexts/EmailContext';

// Mail型をインポート（useContacts.tsで定義されているものと同じ）
import { Mail } from '@/app/shared/constants';

// EditContactコンポーネントの定義
export function EditContact() {
  // EmailContextから選択されたメールアドレスを取得
  const { selectedEmail } = useEmailContext();

  // カスタムフックから必要な情報を取得
  const { filteredContacts } = useContacts();

  // 編集対象の連絡先を状態として管理（Mail型を使用）
  const [selectedContact, setSelectedContact] = useState<Mail | null>(null);

  // 選択されたメールアドレスが変更されたときに連絡先を更新
  useEffect(() => {
    // filteredContactsから選択された連絡先を探す
    const contact = filteredContacts.find(
      (c: Mail) => c.email === selectedEmail
    );
    setSelectedContact(contact || null);
  }, [selectedEmail, filteredContacts]);

  // 選択された連絡先がない場合のメッセージ表示
  if (!selectedContact) {
    return (
      // 親要素の高さいっぱいに広げ、中央揃えにする
      <div className='h-full flex items-center justify-center text-gray-500'>
        連絡先を選択するとここに表示されます。
      </div>
    );
  }

  // 選択された連絡先がある場合の表示
  return (
    // 親要素の高さいっぱいに広げ、スクロール可能にし、下部にパディングを追加
    <div className='h-full space-y-4 my-2 bg-white rounded-lg shadow overflow-auto pb-4 p-4'>
      {/* アイコンと名前を横並びに配置 */}
      <div className='flex items-center space-x-4'>
        {/* ユーザーアイコン */}
        <FontAwesomeIcon
          icon={faUser}
          className='text-4xl text-gray-600' /* アイコンのサイズと色を設定 */
        />
        {/* 名前を表示 */}
        <h2 className='text-2xl font-bold'>{selectedContact.name}</h2>
      </div>

      {/* メールアドレスを表示 */}
      <div className='text-gray-600'>{selectedContact.email}</div>

      {/* 編集ボタン */}
      {/* ボタンのスタイルを設定し、ホバー時の効果を追加 */}
      <button className='mt-4 flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'>
        <FontAwesomeIcon icon={faEdit} /* 編集アイコン */ />
        <span>編集</span>
      </button>
    </div>
  );
}
