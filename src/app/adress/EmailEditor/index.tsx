// app/createEmail/components/EditContact/index.tsx

'use client';

// Reactと必要なフックをインポート
import React, { useState } from 'react';
import { Mail } from '@/app/shared/constants';

// EditContactコンポーネントのプロップスの型定義
type EditContactProps = {
  contact: Mail; // 編集対象の連絡先
  onClose: () => void; // モーダルを閉じる関数
};

// Tailwindクラスの定数
const TAILWIND_CLASSES = {
  // モーダルの背景スタイル
  // 画面全体をカバーし、半透明の背景を設定
  MODAL_BACKDROP:
    'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center',

  // モーダルのコンテンツスタイル
  // 白背景で角丸、パディングを設定
  MODAL_CONTENT: 'bg-white rounded-lg p-6 w-96',

  // 入力フィールドのスタイル
  // 幅いっぱいで、枠線と余白を設定
  INPUT: 'w-full border rounded px-3 py-2 mt-1 mb-4',

  // ボタンの基本スタイル
  // 幅いっぱいで、色と余白、角丸を設定
  BUTTON: 'w-full py-2 px-4 rounded text-white font-bold',
};

// EditContactコンポーネントの定義
const EditContact: React.FC<EditContactProps> = ({ contact, onClose }) => {
  // 編集中の連絡先情報の状態
  const [editedContact, setEditedContact] = useState(contact);

  // 入力変更ハンドラー
  // 入力フィールドの値が変更されたときに状態を更新
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedContact((prev) => ({ ...prev, [name]: value }));
  };

  // 保存ハンドラー
  // 編集した連絡先情報を保存し、モーダルを閉じる
  const handleSave = () => {
    // ここで編集した連絡先情報を保存する処理を実装
    // 例: API呼び出しや状態管理ライブラリを使用して更新
    console.log('Saving contact:', editedContact);
    onClose();
  };

  return (
    <div className={TAILWIND_CLASSES.MODAL_BACKDROP}>
      <div className={TAILWIND_CLASSES.MODAL_CONTENT}>
        <h2 className='text-xl font-bold mb-4'>連絡先を編集</h2>

        {/* 名前入力フィールド */}
        <label className='block'>
          名前:
          <input
            type='text'
            name='name'
            value={editedContact.name}
            onChange={handleChange}
            className={TAILWIND_CLASSES.INPUT}
          />
        </label>

        {/* メールアドレス入力フィールド */}
        <label className='block'>
          メールアドレス:
          <input
            type='email'
            name='email'
            value={editedContact.email}
            onChange={handleChange}
            className={TAILWIND_CLASSES.INPUT}
          />
        </label>

        {/* 保存ボタン */}
        {/* bg-blue-500: 背景色を青に設定 */}
        {/* hover:bg-blue-600: ホバー時に少し濃い青に変更 */}
        <button
          onClick={handleSave}
          className={`${TAILWIND_CLASSES.BUTTON} bg-blue-500 hover:bg-blue-600`}
        >
          保存
        </button>

        {/* キャンセルボタン */}
        {/* bg-gray-300: 背景色をグレーに設定 */}
        {/* hover:bg-gray-400: ホバー時に少し濃いグレーに変更 */}
        {/* mt-2: 上部のマージンを0.5rem（8px）に設定 */}
        <button
          onClick={onClose}
          className={`${TAILWIND_CLASSES.BUTTON} bg-gray-300 hover:bg-gray-400 mt-2`}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default EditContact;
