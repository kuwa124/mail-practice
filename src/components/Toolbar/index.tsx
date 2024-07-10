// ユーザー操作に適応するための定型文
'use client';

// 必要なReactフックとコンポーネントをインポート
import React, { useState } from 'react';
import Link from 'next/link'; // Next.jsのLinkコンポーネントをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faChevronDown,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

// 定数をインポート
import { TOOLBAR_BUTTONS, COMMON_STYLES, HOVER_BG } from './constants';

// Toolbarコンポーネントを定義
const Toolbar: React.FC = () => {
  // ホバー中のボタンのメッセージを管理するstate
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    // ツールバーのメインコンテナ
    <div className={`bg-white shadow-md p-2 ${COMMON_STYLES.FLEX_CENTER}`}>
      {/* ボタンをマップして表示 */}
      {TOOLBAR_BUTTONS.map((button) => (
        // 各ボタンのコンテナ
        <div
          key={button.message}
          className={`relative mr-2 ${COMMON_STYLES.FLEX_CENTER}`}
        >
          {/* Next.jsのLinkコンポーネントを使用してナビゲーションを実装 */}
          <Link href={button.href} passHref>
            {/* ボタン要素 */}
            <div
              className={`w-10 h-10 ${COMMON_STYLES.FLEX_CENTER} ${COMMON_STYLES.ROUNDED} ${COMMON_STYLES.TRANSITION} ${HOVER_BG}`}
              // マウスが入ったときにホバーメッセージを設定
              onMouseEnter={() => setHoveredButton(button.message)}
              // マウスが出たときにホバーメッセージをクリア
              onMouseLeave={() => setHoveredButton(null)}
              role='button'
              aria-label={button.ariaLabel}
            >
              {/* アイコンを表示し、ホバー時に色を変更 */}
              <FontAwesomeIcon
                icon={button.icon}
                className={`text-2xl ${
                  // ホバー時は青色、それ以外はグレー色を適用
                  hoveredButton === button.message
                    ? 'text-blue-500'
                    : 'text-gray-600'
                }`}
              />
            </div>
          </Link>
          {/* ホバー時にメッセージを表示 */}
          {hoveredButton === button.message && (
            <div className='absolute z-10 bg-black text-white text-sm rounded py-2 px-3 left-full top-full ml-1 mt-1 whitespace-nowrap'>
              {/* ホバーメッセージのテキストを表示 */}
              {button.message}
            </div>
          )}
        </div>
      ))}
      {/* 検索バー部分 */}
      <div className={`flex-grow ${COMMON_STYLES.FLEX_CENTER}`}>
        {/* 'すべて'ドロップダウン */}
        <div
          className={`${COMMON_STYLES.FLEX_CENTER} ${COMMON_STYLES.ROUNDED} ${HOVER_BG} px-3 py-2 mr-2 cursor-pointer`}
        >
          {/* 'すべて'テキストを表示 */}
          <span className='mr-2 text-gray-600'>すべて</span>
          {/* ドロップダウンアイコンを表示 */}
          <FontAwesomeIcon icon={faChevronDown} className='text-gray-600' />
        </div>
        {/* 検索入力フィールド */}
        <div
          className={`flex-grow ${COMMON_STYLES.FLEX_CENTER} ${COMMON_STYLES.ROUNDED} border border-gray-300`}
        >
          {/* 検索アイコンを表示 */}
          <FontAwesomeIcon
            icon={faSearch}
            className='text-gray-400 ml-3 mr-2'
          />
          {/* 検索入力フィールドを表示 */}
          <input
            type='text'
            placeholder='検索...'
            className='flex-grow py-2 px-2 outline-none'
          />
          {/* クリアアイコンを表示 */}
          <FontAwesomeIcon
            icon={faTimes}
            className='text-gray-400 mr-3 cursor-pointer'
          />
        </div>
      </div>
    </div>
  );
};

// Toolbarコンポーネントをエクスポート
export default Toolbar;
