'use client';

// 必要なReactフックとFont Awesomeのコンポーネント・アイコンをインポート
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPen,
  faReply,
  faFlag,
  faTrash,
  faEllipsisH,
  faSearch,
  faChevronDown,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

// Toolbarコンポーネントを定義
const Toolbar: React.FC = () => {
  // ホバー中のボタンのメッセージを管理するstate
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  // ツールバーのボタン情報を定義
  const buttons = [
    {
      icon: faEnvelope,
      message: '新しく届いたメッセージを確認',
      ariaLabel: 'メッセージ確認',
    },
    {
      icon: faPen,
      message: '新しいメッセージを作成',
      ariaLabel: '新規メッセージ',
    },
    { icon: faReply, message: '返信', ariaLabel: '返信' },
    { icon: faFlag, message: 'マークをつける', ariaLabel: 'マーク' },
    { icon: faTrash, message: 'ゴミ箱に移動', ariaLabel: 'ゴミ箱' },
    { icon: faEllipsisH, message: 'その他の操作', ariaLabel: 'その他' },
  ];

  return (
    // ツールバーのメインコンテナ
    <div className='bg-gray-100 p-4 flex items-center'>
      {/* ボタンをマップして表示 */}
      {buttons.map((button, index) => (
        <div key={index} className='relative mr-4'>
          <button
            className='p-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2'
            onMouseEnter={() => setHoveredButton(button.message)}
            onMouseLeave={() => setHoveredButton(null)}
            aria-label={button.ariaLabel}
          >
            {/* アイコンを表示し、ホバー時に色を変更 */}
            <FontAwesomeIcon
              icon={button.icon}
              className={`text-2xl ${
                hoveredButton === button.message
                  ? 'text-blue-500'
                  : 'text-gray-600'
              }`}
            />
          </button>
          {/* ホバー時にメッセージを表示 */}
          {hoveredButton === button.message && (
            <div className='absolute z-10 bg-black text-white text-sm rounded py-2 px-3 left-full top-full ml-1 mt-1 whitespace-nowrap'>
              {button.message}
            </div>
          )}
        </div>
      ))}
      {/* 検索バー部分 */}
      <div className='ml-auto flex items-center'>
        {/* 'すべて'ドロップダウン */}
        <div className='relative'>
          <input
            type='text'
            placeholder='すべて'
            className='border rounded-l px-3 py-2 text-lg'
            aria-label='フィルター選択'
          />
          <button
            className='absolute right-0 top-1/2 transform -translate-y-1/2 mr-3'
            aria-label='フィルターオプションを開く'
          >
            <FontAwesomeIcon
              icon={faChevronDown}
              className='text-gray-400 text-xl'
            />
          </button>
        </div>
        {/* 検索入力フィールド */}
        <div className='relative ml-2'>
          <input
            type='text'
            placeholder='検索'
            className='border-t border-b border-r rounded-r px-3 py-2 pl-10 text-lg'
            aria-label='検索'
          />
          <FontAwesomeIcon
            icon={faSearch}
            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl'
          />
          <button
            className='absolute right-3 top-1/2 transform -translate-y-1/2'
            aria-label='検索をクリア'
          >
            <FontAwesomeIcon icon={faTimes} className='text-gray-400 text-xl' />
          </button>
        </div>
      </div>
    </div>
  );
};

// Toolbarコンポーネントをエクスポート
export default Toolbar;
