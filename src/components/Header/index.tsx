// ユーザー操作に適応するための定型文
'use client';

// Reactをインポート
import React from 'react';

// Font Awesome のコンポーネントをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 定数をインポート
import { BUTTON_CLASS, ICON_CLASS, NAV_BUTTONS } from './constants';

// Next.jsの画像最適化コンポーネントをインポート
import Image from 'next/image';

// 使用するメールアイコン（封筒の形）をインポート
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// ヘッダーコンポーネントの定義
const Header: React.FC = () => {
  return (
    // ヘッダー全体のスタイリング
    // 背景はグレー、文字は白、パディングを追加、Flexboxで子要素を配置
    <header className='bg-gray-800 text-white p-2 flex items-center justify-between'>
      {/* ロゴとアプリ名の部分 */}
      {/* Flexboxで子要素を横並びに配置し、中央揃え */}
      <div className='flex items-center'>
        {/* ロゴ（メールアイコン） */}
        {/* 青い背景、角丸、右マージン、幅16、Flexboxで中央揃え */}
        <div className='bg-blue-500 p-2 rounded mr-4  flex items-center justify-center'>
          {/* FontAwesomeIconを使用してメールアイコンを表示 */}
          <FontAwesomeIcon icon={faEnvelope} className='text-xl' />
        </div>
        {/* FSCロゴ画像 */}
        {/* Next.jsのImageコンポーネントを使用して最適化された画像を表示 */}
        <Image
          src='/fscLogo.WebP'
          alt='FSCロゴ'
          width={45}
          height={25}
          priority
        />
        {/* アプリ名（'Mail'） */}
        {/* 大きめのフォントサイズ、文字間を広げ、太字 */}
        <span className='text-xl tracking-wider font-bold'>Mail</span>
      </div>
      {/* ナビゲーションボタンの部分 */}
      {/* Flexboxで子要素を横並びに配置し、間隔を追加 */}
      <div className='flex items-center space-x-4'>
        {/* NAV_BUTTONS配列をマップして、各ボタンを生成 */}
        {NAV_BUTTONS.map((button) => (
          // ボタンを生成し、ユニークなキーにはbuttonの名前を使用
          <button key={button.name} className={BUTTON_CLASS}>
            {/* FontAwesomeIconコンポーネントを使用してアイコンを表示 */}
            <FontAwesomeIcon icon={button.icon} className={ICON_CLASS} />
            {/* ボタンのラベルとしてbuttonオブジェクトのnameプロパティを表示 */}
            {button.name}
          </button>
        ))}
      </div>
    </header>
  );
};

// Headerコンポーネントをエクスポート
export default Header;
