'use client'; // クライアントサイドでの実行を明示

// 必要なモジュールとコンポーネントのインポート
import React, { useState } from 'react'; // Reactと状態管理のためのフックをインポート

import { Mail } from '@/app/shared/constants'; // Mail型をインポート

// AdressEditorコンポーネントのプロパティの型定義
type AdressEditorProps = {
  contact: Mail; // 編集対象の連絡先
  onClose: () => void; // 編集を閉じる関数
};

// AdressEditorコンポーネントの定義
export function AdressEditor({
  contact,
  onClose,
}: AdressEditorProps): JSX.Element {
  // 編集用の状態を管理（初期値は渡されたcontact）
  const [editedContact, setEditedContact] = useState<Mail>(contact);

  // 入力フィールドの変更を処理する関数
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // 変更されたフィールドの値を更新
    setEditedContact((prev) => ({ ...prev, [name]: value }));
  };

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // デフォルトのフォーム送信を防止
    // ここで編集した連絡先を保存する処理を実装
    console.log('Saving edited contact:', editedContact);
    onClose(); // 編集モードを閉じる
  };

  return (
    // モーダルの背景：画面全体をカバーし、半透明の背景を設定
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      {/* モーダルのコンテンツ：背景色を白に、角丸と影を適用 */}
      <div className='bg-white rounded-lg shadow-xl p-6 w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-4'>連絡先の編集</h2>
        {/* フォーム：送信時の処理を設定 */}
        <form onSubmit={handleSubmit}>
          {/* 名前入力フィールド：ラベルとテキスト入力を設定 */}
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700'
            >
              名前
            </label>
            <input
              type='text' // テキスト入力フィールドを指定
              id='name' // ラベルとの紐付けのためのID
              name='name' // フォームデータ送信時のキー
              value={editedContact.name} // 入力値
              onChange={handleChange} // 値が変更されたときの処理
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              required // 必須入力フィールドに設定
            />
          </div>
          {/* メールアドレス入力フィールド：ラベルとメール入力を設定 */}
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              メールアドレス
            </label>
            <input
              type='email' // メールアドレス入力フィールドを指定
              id='email' // ラベルとの紐付けのためのID
              name='email' // フォームデータ送信時のキー
              value={editedContact.email} // 入力値
              onChange={handleChange} // 値が変更されたときの処理
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              required // 必須入力フィールドに設定
            />
          </div>
          {/* 電話番号入力フィールド：ラベルとテキスト入力を設定 */}
          <div className='mb-4'>
            <label
              htmlFor='phone'
              className='block text-sm font-medium text-gray-700'
            >
              電話番号
            </label>
            <input
              type='tel' // 電話番号入力フィールドを指定
              id='phone' // ラベルとの紐付けのためのID
              name='phone' // フォームデータ送信時のキー
              value={editedContact.phone || ''} // 入力値（未設定の場合は空文字）
              onChange={handleChange} // 値が変更されたときの処理
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </div>
          {/* その他の情報入力フィールド：ラベルとテキスト入力を設定 */}
          <div className='mb-4'>
            <label
              htmlFor='other'
              className='block text-sm font-medium text-gray-700'
            >
              その他
            </label>
            <input
              type='text' // テキスト入力フィールドを指定
              id='other' // ラベルとの紐付けのためのID
              name='other' // フォームデータ送信時のキー
              value={editedContact.other || ''} // 入力値（未設定の場合は空文字）
              onChange={handleChange} // 値が変更されたときの処理
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </div>
          {/* ボタングループ：要素を右寄せに配置 */}
          <div className='flex justify-end space-x-2'>
            {/* キャンセルボタン：背景色と文字色を設定 */}
            <button
              type='button' // ボタンタイプを指定
              onClick={onClose} // クリック時に編集を閉じる
              className='px-4 py-2 bg-gray-200 text-gray-800 rounded-md'
            >
              キャンセル
            </button>
            {/* 保存ボタン：背景色と文字色を設定 */}
            <button
              type='submit' // 送信ボタンタイプを指定
              className='px-4 py-2 bg-blue-500 text-white rounded-md'
            >
              保存
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}