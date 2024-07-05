import React from 'react';

// クラス名の定数化（DRY原則）
// w-48: 幅を12remに設定
// bg-gray-200: 背景色を灰色に設定
// p-4: パディングを1remに設定
// space-y-2: 子要素の間に0.5remの余白を設定
const SIDEBAR_CLASS = 'w-48 bg-gray-200 p-4 space-y-2';

// w-full: 幅を100%に設定
// text-left: テキストを左揃えに設定
// px-2: 左右のパディングを0.5remに設定
// py-1: 上下のパディングを0.25remに設定
const BUTTON_CLASS = 'w-full text-left px-2 py-1';

// bg-blue-500: 背景色を青に設定
// text-white: テキスト色を白に設定
// rounded: 角を丸く設定
const INBOX_BUTTON_CLASS = `${BUTTON_CLASS} bg-blue-500 text-white rounded`;

const Sidebar = () => {
  return (
    <div className={SIDEBAR_CLASS}>
      <button className={INBOX_BUTTON_CLASS}>受信箱</button>
      <button className={BUTTON_CLASS}>下書き</button>
      <button className={BUTTON_CLASS}>送信済み</button>
      <button className={BUTTON_CLASS}>迷惑メール</button>
      <button className={BUTTON_CLASS}>ごみ箱</button>
      <button className={BUTTON_CLASS}>Deleted M...</button>
    </div>
  );
};

export default Sidebar;
