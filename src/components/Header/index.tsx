// Header/index.tsx

// ユーザー操作に適応するための定型文
'use client';

// 必要なReactフックとコンポーネントをインポート
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // メールアイコンをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesomeのアイコンを使用するためのコンポーネントをインポート
import Link from 'next/link'; // Next.jsのページ間リンクのためのLinkコンポーネントをインポート
import React from 'react'; // Reactをインポート

// 定数をインポート（ナビゲーションボタン設定、共通スタイル、ホバー背景色）
import { COMMON_STYLES, HOVER_BG, NAV_BUTTONS } from './constants';

// Next.jsの画像最適化コンポーネントをインポート
import Image from 'next/image';

// ヘッダーコンポーネントの定義
const Header: React.FC = () => {
  return (
    // ヘッダー全体のスタイリング
    // 背景はダークグレー、文字は白、パディングを追加、Flexboxで子要素を配置
    <header className='bg-gray-800 text-white p-2 flex items-center justify-between'>
      {/* ロゴとアプリ名の部分 */}
      {/* Flexboxで子要素を横並びに配置し、中央揃え */}
      <div className={`${COMMON_STYLES.FLEX_CENTER} mt-2`}>
        {/* ロゴ（メールアイコン） */}
        {/* 青い背景、角丸、右マージン、Flexboxで中央揃え */}
        <div className='bg-blue-500 p-2 rounded flex items-center justify-center mb-2 mx-2'>
          {/* FontAwesomeIconを使用してメールアイコンを表示 */}
          <FontAwesomeIcon icon={faEnvelope} className='text-xl' />
        </div>
        {/* FSCロゴ画像 */}
        {/* Next.jsのImageコンポーネントを使用して最適化された画像を表示 */}
        <picture className='inline-block filter brightness-200 backdrop-brightness-50'>
          <source type='image/webp' srcSet='/logo.webp' />
          <Image
            src='/logo.png'
            alt='メールのロゴ'
            width={150}
            height={56}
            priority
          />
        </picture>
        {/* アプリ名（'Mail'） */}
        {/* 大きめのフォントサイズ、文字間を広げ、太字 */}
        <span className='text-xl tracking-wider font-bold pt-2'>Mail</span>
      </div>
      {/* ナビゲーションボタンの部分 */}
      {/* Flexboxで子要素を横並びに配置し、間隔を追加 */}
      <nav className='flex items-center space-x-4'>
        {/* NAV_BUTTONS配列をマップして、各ボタンを生成 */}
        {NAV_BUTTONS.map((button) => (
          // 各ボタンのコンテナ
          // Next.jsのLinkコンポーネントを使用してページ間のナビゲーションを実現
          <Link
            key={button.name} // Reactのリストレンダリング用のユニークキー
            href={button.href} // リンクの遷移先
            className={`${COMMON_STYLES.BUTTON} ${HOVER_BG}`} // ボタンのスタイル（共通スタイルとホバー効果を適用）
            aria-label={button.ariaLabel} // スクリーンリーダー用のラベル
          >
            {/* アイコンを表示 */}
            {/* FontAwesomeIconコンポーネントを使用してアイコンを表示 */}
            <FontAwesomeIcon
              icon={button.icon} // 表示するアイコン
              className={COMMON_STYLES.ICON} // アイコンのスタイル
            />
            {/* ボタンのテキスト */}
            {/* ボタンのラベルとしてbuttonオブジェクトのnameプロパティを表示 */}
            {button.name}
          </Link>
        ))}
      </nav>{' '}
    </header>
  );
};

// Headerコンポーネントをエクスポート
export default Header;
