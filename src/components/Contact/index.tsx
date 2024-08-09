// ユーザー操作に対応するための定型文
'use client';

// 必要なモジュールとコンポーネントのインポート
import { useAddress } from '@/app/contexts/AddressContext';
import { Mail } from '@/app/shared/constants';
import {
  faSearch,
  faUser,
  faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useMemo } from 'react';
import useContacts from './useContacts';

// Contactsコンポーネントの定義
const Contacts: React.FC = () => {
  const { addresses } = useAddress(); // カスタムフックからロジックと状態を取得
  const {
    searchTerm, // 検索ワードの状態
    setSelectedEmail, // 選択されたメールの状態を更新する関数
    handleInputChange, // 検索ワード入力時の処理
    handleClear, // 検索ワードをクリアする処理
    handleKeyDown, // キー押下時の処理
  } = useContacts();

  // ふりがな順に並び替える関数
  const sortByNameKana = (addresses: Mail[]): Mail[] => {
    return [...addresses].sort((a, b) =>
      a.nameKana.localeCompare(b.nameKana, 'ja')
    );
  };

  // ふりがな順にソートされた連絡先リストをメモ化
  const sortedAddresses = useMemo(() => sortByNameKana(addresses), [addresses]);

  // 検索ワードに基づいて連絡先をフィルタリング
  const filteredContacts = useMemo(
    () =>
      sortedAddresses.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [sortedAddresses, searchTerm]
  );

  return (
    // 連絡先リストのコンテナ
    // 幅を60単位に設定し、背景色を薄いグレーに、要素間の上下マージンを2単位、パディングを2単位、角丸を適用
    <div className='w-60 bg-gray-300 space-y-2 m-2 p-2 rounded h-full'>
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
          {/* アイコンの色をグレーに設定 */}
          <FontAwesomeIcon icon={faXmarkCircle} className='text-gray-400' />
        </button>
      </div>
      {/* 連絡先リスト */}
      <ul>
        {filteredContacts.map((contact) => (
          // 各連絡先項目
          // 横並びに配置し、要素間隔を2単位、上下パディングを2単位、カーソルをポインターに、ホバー時に背景色を薄いグレーに設定
          <li
            key={contact.id}
            className='flex items-center space-x-2 py-2 pl-2 cursor-pointer hover:bg-gray-200'
            onClick={() => setSelectedEmail(contact.email)} // クリックで連絡先を選択
          >
            {/* ユーザーアイコン */}
            {/* アイコンの色とサイズを設定 */}
            <FontAwesomeIcon icon={faUser} className='text-gray-600 text-lg' />
            {/* 連絡先名 */}
            <span>{contact.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Contactsコンポーネントをエクスポート
export default Contacts;
