import React from 'react';

// クラス名の定数化（DRY原則）
const SIDEBAR_CLASS = 'w-48 bg-gray-200 p-4 space-y-2';
// w-48: 幅を12remに設定
// bg-gray-200: 背景色を灰色に設定
// p-4: パディングを1remに設定
// space-y-2: 子要素の間に0.5remの余白を設定

const BUTTON_CLASS = 'sidebar-button';
// カスタムクラスを使用
// w-full: 幅を100%に設定
// text-left: テキストを左揃えに設定
// px-2: 左右のパディングを0.5remに設定
// py-1: 上下のパディングを0.25remに設定
// rounded: 角を丸く設定
// transition-colors: 色の変化をアニメーション化
// duration-200: アニメーションの持続時間を200msに設定
// hover:bg-blue-500: ホバー時に背景色を青に設定
// hover:text-white: ホバー時にテキスト色を白に設定

const Sidebar = () => {
  return (
    <div className={SIDEBAR_CLASS}>
      <button className={BUTTON_CLASS}>受信箱</button>
      <button className={BUTTON_CLASS}>下書き</button>
      <button className={BUTTON_CLASS}>送信済み</button>
      <button className={BUTTON_CLASS}>迷惑メール</button>
      <button className={BUTTON_CLASS}>ごみ箱</button>
      <button className={BUTTON_CLASS}>Delete</button>
    </div>
  );
};

export default Sidebar;
