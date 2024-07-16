// ユーザー操作に対応するための定型文
'use client';

// Reactと必要なコンポーネントをインポート
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faXmarkCircle,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

// 連絡先の情報を定義する型
// name: 連絡先の名前（文字列）
type Contact = {
  name: string;
};

// 連絡先リストのデータ
const contacts: Contact[] = [
  { name: '山田 太郎' },
  { name: '飯塚 花子' },
  { name: '福岡 一郎' },
];

// Contactsコンポーネントの定義
const Contacts: React.FC = () => {
  return (
    // 連絡先リストのコンテナ
    // w-48: 幅を12rem（192px）に設定
    // bg-gray-300: 背景色を薄いグレー（#d1d5db）に設定
    // space-y-2: 子要素間の上下の間隔を0.5rem（8px）に設定
    // m-2: 外側の余白を全方向に0.5rem（8px）設定
    // p-2: 内側の余白を全方向に0.5rem（8px）設定
    // rounded: 角を少し丸くする
    <div className='w-48 bg-gray-300 space-y-2 m-2 p-2 rounded'>
      {/* タイトル */}
      {/* font-bold: 文字を太字にする */}
      {/* text-sm: 文字サイズを小さめに設定 */}
      <h2 className='font-bold text-sm'>連絡先</h2>

      {/* 検索バー */}
      {/* relative: 子要素の絶対位置指定の基準点とする */}
      {/* flex: 子要素を横並びに配置 */}
      {/* items-center: 子要素を垂直方向に中央揃え */}
      {/* bg-gray-100: 背景色を薄いグレーに設定 */}
      {/* border: 枠線を追加 */}
      {/* rounded: 角を丸くする */}
      <div className='relative flex items-center bg-gray-100 border rounded'>
        {/* 検索アイコン */}
        {/* p-2: 内側の余白を全方向に0.5rem（8px）設定 */}
        <button className='p-2'>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        {/* 検索入力フィールド */}
        {/* flex-grow: 余白を最大限に広げる */}
        {/* p-2: 内側の余白を全方向に0.5rem（8px）設定 */}
        {/* pr-8: 右側の内側の余白を2rem（32px）に設定し、クリアアイコンのスペースを確保 */}
        {/* bg-transparent: 背景を透明にする */}
        {/* outline-none: フォーカス時の枠線を消す */}
        <input
          className='flex-grow p-2 pr-8 bg-transparent outline-none'
          type='text'
          placeholder='検索'
        />
        {/* クリアアイコン（円形） */}
        {/* absolute: 絶対位置指定 */}
        {/* right-0: 右端に配置 */}
        {/* top-1/2: 上端から50%の位置に配置 */}
        {/* -translate-y-1/2: Y軸方向に自身の高さの半分だけ上に移動（垂直中央揃え） */}
        {/* p-2: 内側の余白を全方向に0.5rem（8px）設定 */}
        <button className='absolute right-0 top-1/2 -translate-y-1/2 p-2'>
          <FontAwesomeIcon icon={faXmarkCircle} className='text-gray-400' />
        </button>
      </div>

      {/* 連絡先リスト */}
      <ul>
        {contacts.map((contact, index) => (
          // 各連絡先項目
          // flex: 子要素を横並びに配置
          // items-center: 子要素を垂直方向に中央揃え
          // space-x-2: 子要素間の左右の間隔を0.5rem（8px）に設定
          // py-2: 上下のパディングを0.5rem（8px）に設定
          <li key={index} className='flex items-center space-x-2 py-2'>
            {/* ユーザーアイコン */}
            {/* text-gray-600: アイコンの色を灰色に設定 */}
            {/* text-lg: アイコンのサイズを少し大きめに設定 */}
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
