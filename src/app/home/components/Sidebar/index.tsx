// ユーザー操作に適応するための定型文
'use client';

// Reactをインポート
import React from 'react';
// Font Awesome アイコンコンポーネントをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 定数とカスタムフックをインポート
import { SIDEBAR_CLASS, BUTTONS } from './constants';
import { useSidebar } from '@/app/home/components/Sidebar/useSidebar';

// Sidebarコンポーネントの定義
const Sidebar: React.FC = () => {
  // カスタムフックを使用して状態と機能を取得
  const { setActiveButton, getButtonClass, getIconClass } = useSidebar();

  return (
    // サイドバーのコンテナ
    <div className={SIDEBAR_CLASS}>
      {BUTTONS.map((button) => (
        <button
          key={button.name} // ボタンのユニークキーとしてbuttonの名前を使用
          className={getButtonClass(button.name)} // ボタンのクラスを動的に取得
          onClick={() => setActiveButton(button.name)} // ボタンがクリックされたときにアクティブにする関数を呼び出す
        >
          {/*
            FontAwesomeIconコンポーネントを使用してアイコンを表示。
            iconプロパティはbuttonオブジェクトのiconプロパティから取得。
            classNameには動的に取得したアイコンクラスを適用。
          */}
          <FontAwesomeIcon
            icon={button.icon}
            className={getIconClass(button.name)}
          />
          {/* ボタンのラベルとしてbuttonオブジェクトのnameプロパティを表示 */}
          {button.name}
        </button>
      ))}
    </div>
  );
};

// Sidebarコンポーネントのエクスポート
export default Sidebar;
