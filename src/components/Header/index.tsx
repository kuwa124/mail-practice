// ユーザー操作に適応するための定型文
'use client';

// Reactをインポート
import React from 'react';

// Font Awesome のコンポーネントをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 定数をインポート
import {
  BUTTON_CLASS,
  ICON_CLASS,
  NAV_BUTTONS,
  LOGO_ICON,
  APP_NAME,
} from './constants';

// Next.jsの画像最適化コンポーネントをインポート
import Image from 'next/image';

// ヘッダーコンポーネントの定義
const Header: React.FC = () => {
  return (
    // ヘッダー全体のスタイリング
    // 背景はグレー、文字は白。
    // 子要素は中央揃えで左右に配置。
    <header className='bg-gray-800 text-white p-2 flex items-center justify-between'>
      {/* ロゴとアプリ名の部分 */}
      <div className='flex items-center'>
        {/* ロゴ（メールアイコン） */}
        <div className='bg-blue-500 p-1 rounded mr-2'>
          <FontAwesomeIcon icon={LOGO_ICON} className='w-10 h-10' />
        </div>{' '}
        {/* FSCロゴ画像 */}
        {/* 画像の幅20、高さ10、優先度高で読み込み */}
        <Image
          src='/fscLogo.WebP'
          alt='FSCロゴ'
          width={78}
          height={52}
          priority
        />
        {/* アプリ名 */}
        <span className='text-xl font-bold ml-2'>{APP_NAME}</span>
      </div>
      {/* ナビゲーションボタンの部分 */}
      <div className='flex items-center space-x-4'>
        {
          /*
            NAV_BUTTONS配列をマップして、各ボタンを生成する。
            flex: このdivをフレックスボックスコンテナにする。
            items-center: フレックスボックスの子要素（アイテム）を中央に揃える。
            space-x-4: 子要素の間に標準の間隔を設定する（x軸方向にスペースを設定）。
          */
          NAV_BUTTONS.map((button) => (
            // ボタンを生成し、ユニークなキーにはbuttonの名前を使用する。
            <button key={button.name} className={BUTTON_CLASS}>
              {/*
                FontAwesomeIconコンポーネントを使用してアイコンを表示。
                iconプロパティはbuttonオブジェクトのiconプロパティから取得。
              */}
              <FontAwesomeIcon icon={button.icon} className={ICON_CLASS} />
              {/*
                ボタンのラベルとしてbuttonオブジェクトのnameプロパティを表示。
              */}
              {button.name}
            </button>
          ))
        }
      </div>{' '}
    </header>
  );
};

export default Header;
