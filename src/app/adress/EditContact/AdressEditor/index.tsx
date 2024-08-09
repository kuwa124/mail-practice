'use client'; // クライアントサイドでの実行を明示

import { useAddress } from '@/app/contexts/AddressContext';
// 必要なモジュールとコンポーネントのインポート
import { Mail } from '@/app/shared/constants'; // Mail型をインポート
import React, { useEffect, useState } from 'react'; // React、状態管理、副作用のためのフックをインポート

// デフォルトのユーザーアイコンをインポート
import { faUser } from '@fortawesome/free-solid-svg-icons';

// AdressEditorコンポーネントのプロパティの型定義
type AdressEditorProps = {
  contact: Mail | undefined; // 編集対象の連絡先（新規作成時はundefined）
  onClose: () => void; // 編集を閉じる関数
  isNewContact: boolean; // 新規連絡先作成モードかどうかを示すフラグ
};

// AdressEditorコンポーネントの定義
export function AdressEditor({
  contact,
  onClose,
  isNewContact,
}: AdressEditorProps): JSX.Element {
  // アドレス状態を取得し、更新関数を取得
  const { addresses, setAddresses } = useAddress();

  // 編集用の状態を管理（初期値は渡されたcontactまたは空のオブジェクト）
  const [editedContact, setEditedContact] = useState<Mail>(
    contact || {
      id: 0,
      name: '',
      nameKana: '',
      email: '',
      phone: '',
      other: '',
      icon: faUser,
      date: '',
      sortIndex: 0,
    }
  );

  // 新規作成モードまたは編集対象の連絡先が変更された場合の処理
  useEffect(() => {
    if (isNewContact) {
      // 新規作成モードの場合、空の連絡先データを初期化
      setEditedContact({
        id: Date.now(), // 数値の一時的なIDを生成
        name: '',
        nameKana: '',
        email: '',
        phone: '',
        other: '',
        icon: faUser, // アイコンを設定
        date: new Date().toISOString(), // 現在の日時を文字列として設定
        sortIndex: addresses.length, // 新しい連絡先を最後に追加
      });
    } else if (contact) {
      // 既存の連絡先を編集する場合、その連絡先データをセット
      setEditedContact(contact);
    }
  }, [isNewContact, contact, addresses.length]);

  // 入力フィールドの変更を処理する関数
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // イベントオブジェクトからname（フィールド名）とvalue（入力値）を取得
    const { name, value } = e.target;
    // 変更されたフィールドの値を更新
    setEditedContact((prev) => ({ ...prev, [name]: value }));
  };

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // デフォルトのフォーム送信を防止
    if (isNewContact) {
      // 新規作成モードの場合、新しい連絡先を追加
      setAddresses((prevAddresses) => [...prevAddresses, editedContact]);
    } else {
      // 編集モードの場合、既存の連絡先を更新
      setAddresses((prevAddresses) =>
        prevAddresses.map((addr) =>
          addr.id === editedContact.id ? editedContact : addr
        )
      );
    }
    onClose(); // 編集モードを閉じる
  };

  return (
    // モーダルの背景：画面全体をカバーし、半透明の背景を設定
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      {/* モーダルのコンテンツ：背景色を白に、角丸と影を適用 */}
      <div className='bg-white rounded-lg shadow-xl p-6 w-full max-w-md'>
        {/* タイトル：新規作成か編集かで表示を切り替え */}
        <h2 className='text-2xl font-bold mb-4'>
          {isNewContact ? '新規連絡先の作成' : '連絡先の編集'}
        </h2>
        {/* フォーム：送信時の処理を設定 */}
        <form onSubmit={handleSubmit}>
          {/* 名前入力フィールド：ラベルとテキスト入力を設定 */}
          <div className='mb-4'>
            <label
              htmlFor='name' // 関連する入力フィールドとラベルを紐付け
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
          {/* ふりがな入力フィールド：ラベルとテキスト入力を設定 */}
          <div className='mb-4'>
            <label
              htmlFor='nameKana' // 関連する入力フィールドとラベルを紐付け
              className='block text-sm font-medium text-gray-700'
            >
              ふりがな
            </label>
            <input
              type='text' // テキスト入力フィールドを指定
              id='nameKana' // ラベルとの紐付けのためのID
              name='nameKana' // フォームデータ送信時のキー
              value={editedContact.nameKana} // 入力値
              onChange={handleChange} // 値が変更されたときの処理
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              required // 必須入力フィールドに設定
            />
          </div>
          {/* メールアドレス入力フィールド：ラベルとメール入力を設定 */}
          <div className='mb-4'>
            <label
              htmlFor='email' // 関連する入力フィールドとラベルを紐付け
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
              htmlFor='phone' // 関連する入力フィールドとラベルを紐付け
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
              htmlFor='other' // 関連する入力フィールドとラベルを紐付け
              className='block text-sm font-medium text-gray-700'
            >
              その他
            </label>
            <textarea
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
            {/* 保存/作成ボタン：背景色と文字色を設定 */}
            <button
              type='submit' // 送信ボタンタイプを指定
              className='px-4 py-2 bg-blue-500 text-white rounded-md'
            >
              {/* 新規作成モードか編集モードかでボタンのテキストを切り替え */}
              {isNewContact ? '作成' : '保存'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
