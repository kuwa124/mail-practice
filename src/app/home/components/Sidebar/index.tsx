// ユーザー操作に適応するための定型文
'use client';

// Reactをインポート
import React from 'react';
// Font Awesome アイコンコンポーネントをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 定数とカスタムフックをインポート
import { useSidebar } from '@/app/home/components/Sidebar/useSidebar';
import { BUTTONS, SIDEBAR_CLASS } from './constants';
// useModalフックをインポート
import Modal from '@/app/Modal';
import { useModal } from '@/app/Modal/useModal';

// Sidebarコンポーネントの定義
const Sidebar: React.FC = () => {
  // カスタムフックを使用して状態と機能を取得
  const { setActiveButton, getButtonClass, getIconClass } = useSidebar();
  // useModalフックから準備中モーダルを表示する関数を取得
  const { handlePrepare, closeModal, modalType, handleConfirm } = useModal();

  // ボタンクリック時の処理を関数として定義
  const handleButtonClick = (buttonName: string) => {
    if (buttonName === '受信箱') {
      return setActiveButton(buttonName); // アクティブボタンを設定（早期リターン）
    }
    // ボタンがクリックされたときの処理
    handlePrepare(); // 準備中モーダルを表示
    setActiveButton(buttonName); // アクティブボタンを設定
  };

  return (
    // サイドバーのコンテナ
    <div className={SIDEBAR_CLASS}>
      {BUTTONS.map((button) => (
        <button
          key={button.name} // ボタンのユニークキーとしてbuttonの名前を使用
          className={getButtonClass(button.name)} // ボタンのクラスを動的に取得
          onClick={() => {
            handleButtonClick(button.name);
          }}
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
      {/* モーダルコンポーネント */}
      <Modal
        isOpen={modalType !== null} // モーダルタイプがnullでない場合にモーダルを開く
        onClose={closeModal} // モーダルを閉じる関数
        onConfirm={handleConfirm} // 確認ボタンが押されたときの処理
        modalType={modalType} // モーダルの種類
      />
    </div>
  );
};

// Sidebarコンポーネントのエクスポート
export default Sidebar;
