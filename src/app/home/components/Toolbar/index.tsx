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
    <div
      // 背景白、影、パディング、Flexboxで中央揃え
      className={`bg-white shadow-md p-2 ${COMMON_STYLES.FLEX_CENTER}`}
    >
      {/* ボタンをマップして表示 */}
      {TOOLBAR_BUTTONS.map((button) => (
        // 各ボタンのコンテナ
        <Link
          // 相対配置、右マージン、Flexboxで中央揃え
          key={button.message}
          className={`relative mr-2 ${COMMON_STYLES.FLEX_CENTER}`}
          href={button.href}
        >
          {/* ボタン要素 */}
          <div
            // 幅・高さ10、Flexboxで中央揃え、角丸、トランジション効果、ホバー時に背景色変更
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
              // アイコンサイズ2xl、ホバー時に青色、それ以外はグレー色
              className={`text-2xl ${
                // ホバー時は青色、それ以外はグレー色を適用
                hoveredButton === button.message
                  ? 'text-blue-500'
                  : 'text-gray-600'
              }`}
            />
          </div>
          {/* ホバー時にメッセージを表示 */}
          {hoveredButton === button.message && (
            // 絶対位置、最前面、背景黒、テキスト白、小サイズテキスト、角丸、パディング、左寄せ、上寄せ、余白
            <div className='absolute z-10 bg-black text-white text-sm rounded py-2 px-3 left-full top-full ml-1 mt-1 whitespace-nowrap'>
              {/* ホバーメッセージのテキストを表示 */}
              {button.message}
            </div>
          )}
        </Link>
      ))}
      {/* 検索バー部分 */}
      <div
        // 左マージン自動、Flexboxで中央揃え
        className='ml-auto flex items-center'
      >
        {/* 'すべて'ドロップダウン */}
        <div
          // フィルター入力のコンテナスタイル
          className='relative'
        >
          {/* フィルター選択入力フィールド */}
          <input
            type='text'
            placeholder='すべて'
            // 境界線、左角丸、パディング、大きめのテキスト
            className='border rounded-l px-3 py-2 text-lg'
            aria-label='フィルター選択'
          />
          {/* ドロップダウンボタン */}
          <button
            // 絶対位置、右寄せ、上下中央揃え、右マージン
            className='absolute right-0 top-1/2 transform -translate-y-1/2 mr-3'
            aria-label='フィルターオプションを開く'
          >
            {/* ドロップダウンアイコン */}
            <FontAwesomeIcon
              // グレーの色、大きめのサイズ
              icon={faChevronDown}
              className='text-gray-400 text-xl'
            />
          </button>
        </div>
        {/* 検索入力フィールド */}
        <div
          // 相対位置、左マージン
          className='relative ml-2'
        >
          {/* 検索入力フィールド */}
          <input
            type='text'
            placeholder='検索'
            // 境界線（上下右）、右角丸、パディング、左側に大きめの余白、大きめのテキスト
            className='border-t border-b border-r rounded-r px-3 py-2 pl-10 text-lg'
            aria-label='検索'
          />
          {/* 検索アイコン */}
          <FontAwesomeIcon
            // 絶対位置、左寄せ、上下中央揃え、グレーの色、大きめのサイズ
            icon={faSearch}
            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl'
          />
          {/* 検索クリアボタン */}
          <button
            // 絶対位置、右寄せ、上下中央揃え
            className='absolute right-3 top-1/2 transform -translate-y-1/2'
            aria-label='検索をクリア'
          >
            {/* クリアアイコン */}
            <FontAwesomeIcon
              // グレーの色、大きめのサイズ
              icon={faTimes}
              className='text-gray-400 text-xl'
            />
          </button>
        </div>
      </div>
    </div>
  );
};

// Toolbarコンポーネントをエクスポート
export default Toolbar;
