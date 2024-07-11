import {
  faFileAlt,
  faPaperclip,
  faPaperPlane,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// アクションアイコンの設定
const actionIcons = [
  { icon: faFileAlt, tooltip: '下書きとして保存' },
  { icon: faPaperclip, tooltip: '添付ファイル' },
  { icon: faTimes, tooltip: '破棄' },
];

const ActionButtons = () => {
  return (
    <div
      //パディング
      className=' p-2 '
    >
      {/* ヘッダー部分：送信ボタンと各種アクションアイコン */}
      <div
        // フレックスコンテナ、アイテムを左揃え、間隔下、アイテム間のスペース
        className='flex items-center  space-x-4'
      >
        {/* 送信ボタン */}
        <button
          // 青色の送信ボタンスタイル、ボタンの基本スタイル：パディング、角丸、白文字、大きめフォント、太字
          className='px-6 py-3 rounded-md text-white text-lg font-semibold bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none'
        >
          <FontAwesomeIcon icon={faPaperPlane} className='mr-2' />
          送信
        </button>
        {/* Font Awesomeを使用したアクションアイコン */}
        {actionIcons.map((item, index) => (
          <button
            key={index}
            // アクションボタンのスタイル：パディング、大きめアイコン
            className='p-3 text-xl hover:bg-gray-100 rounded-full focus:ring-2 focus:ring-gray-300 focus:outline-none'
            title={item.tooltip}
          >
            <FontAwesomeIcon icon={item.icon} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActionButtons;
