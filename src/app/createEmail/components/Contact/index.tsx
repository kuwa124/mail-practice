// ユーザー操作に対応するための定型文
'use client';

// Reactをインポート
import React from 'react';
// React: Reactライブラリをインポート

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// FontAwesomeIcon: FontAwesomeアイコンコンポーネントをインポート
import {
  faSearch,
  faXmarkCircle,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
// faSearch: 検索アイコン
// faXmarkCircle: バツ印の円形アイコン
// faUser: ユーザーアイコン

// カスタムフックをインポート
import useContacts from './useContacts';

// Contactsコンポーネントの定義
const Contacts: React.FC = () => {
  // カスタムフックを使用してロジックと状態を取得
  const {
    searchTerm,
    setSelectedEmail,
    handleInputChange,
    handleClear,
    handleKeyDown,
    filteredContacts,
  } = useContacts();

  return (
    // 連絡先リストのコンテナ
    // 幅を設定し、背景色を薄いグレーに、余白と角丸を適用
    <div className='w-60 bg-gray-300 space-y-2 m-2 p-2 rounded'>
      {/* タイトル */}
      {/* 文字を太字に、サイズを小さめに設定 */}
      <h2 className='font-bold text-sm'>連絡先</h2>
      {/* 検索バー */}
      {/* 相対配置、子要素を横並びに中央揃え、背景色と枠線を設定 */}
      <div className='relative flex items-center bg-gray-100 border rounded'>
        {/* 検索アイコン */}
        {/* パディングを設定 */}
        <button className='p-2'>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        {/* 検索入力フィールド */}
        {/* 幅を最大に広げ、右側にクリアアイコンのスペースを確保 */}
        <input
          className='flex-grow p-2 pr-8 bg-transparent outline-none'
          type='text' // テキスト入力フィールドを指定
          placeholder='検索' // プレースホルダーテキストを設定
          value={searchTerm} // 入力値を状態と紐付け
          onChange={handleInputChange} // 入力変更時のハンドラーを設定
          onKeyDown={handleKeyDown} // キー押下時のハンドラーを設定
        />
        {/* クリアアイコン（円形） */}
        {/* 絶対配置で右端に配置し、垂直方向に中央揃え */}
        <button
          className='absolute right-0 top-1/2 -translate-y-1/2 p-2'
          onClick={handleClear} // クリックでクリア処理を実行
        >
          <FontAwesomeIcon icon={faXmarkCircle} className='text-gray-400' />
        </button>
      </div>
      {/* 連絡先リスト */}
      <ul>
        {filteredContacts.map((mail) => (
          // 各連絡先項目
          // 横並びに配置し、要素間隔と上下パディングを設定
          <li
            key={mail.id}
            className='flex items-center space-x-2 py-2 cursor-pointer hover:bg-gray-200'
            onClick={() => setSelectedEmail(mail.email)} // クリックで連絡先を選択
          >
            {/* ユーザーアイコン */}
            {/* アイコンの色とサイズを設定 */}
            <FontAwesomeIcon icon={faUser} className='text-gray-600 text-lg' />
            {/* 連絡先名 */}
            <span>{mail.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Contactsコンポーネントをエクスポート
export default Contacts;
