// ユーザー操作に適応するための定型文
'use client';

// Reactコンポーネントを作成するために必要なモジュールをインポート
import React from 'react';

// Font Awesomeアイコンを使用するためのコンポーネントをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// アクションボタン関連の定数をインポート
import {
  ACTION_BUTTON_STYLE, // アクションボタンのスタイル定数
  ACTION_ICONS, // アクションアイコンの設定
  SEND_BUTTON_STYLE, // 送信ボタンのスタイル定数
} from '@/app/createEmail/components/ActionButtons/constants';

// 紙飛行機アイコンと閉じるアイコンをインポート
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';

// モーダルコンポーネントをインポート
import Modal from '@/app/Modal';

// カスタムフックをインポート（アクションボタンの機能を提供）
import { useModal } from '@/app/Modal/useModal';

// ActionButtonsコンポーネント：メール作成画面のアクションボタンを表示
const ActionButtons: React.FC = () => {
  // カスタムフックからモーダル関連の状態と関数を取得
  const {
    modalType,
    handleSendClick,
    handleDiscardClick,
    closeModal,
    handleConfirm,
    handlePrepare,
  } = useModal();

  return (
    // 外側のコンテナ：パディングを追加してボタンを囲む
    <div className='p-2'>
      {/* ヘッダー部分：送信ボタンと各種アクションアイコンを横並びに配置 */}
      <div className='flex items-center space-x-4'>
        {/* 送信ボタン：青色の大きめボタンで目立つデザイン */}
        <button
          // 青色の背景、白色のテキスト、角丸、パディング、ホバー効果を適用
          className={`${SEND_BUTTON_STYLE} text-lg font-semibold`}
          onClick={handleSendClick} // クリック時に送信モーダルを表示
        >
          {/* 紙飛行機アイコンと「送信」テキストを表示 */}
          <FontAwesomeIcon icon={faPaperPlane} className='mr-2' />
          送信
        </button>
        {/* アクションアイコン：各種操作用のアイコンボタンを表示 */}
        {ACTION_ICONS.map((actionIcon) => (
          <button
            key={actionIcon.tooltip}
            // グレーの背景、角丸、パディング、ホバー効果を適用
            className={`${ACTION_BUTTON_STYLE} text-xl`}
            title={actionIcon.tooltip} // マウスオーバー時にツールチップを表示
            onClick={handlePrepare} // クリック時にhandlePrepare関数を実行
          >
            <FontAwesomeIcon icon={actionIcon.icon} />
          </button>
        ))}
        {/* 破棄ボタン */}
        <button
          // グレーの背景、角丸、パディング、ホバー効果を適用
          className={`${ACTION_BUTTON_STYLE} text-xl`}
          title='破棄' // マウスオーバー時にツールチップを表示
          onClick={handleDiscardClick} // クリック時に破棄モーダルを表示
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      {/* モーダルコンポーネント：確認ダイアログを表示 */}
      <Modal
        isOpen={modalType !== null} // モーダルの表示状態を制御
        onClose={closeModal} // モーダルを閉じる関数を指定
        onConfirm={handleConfirm} // 確認ボタンクリック時の処理を指定
        modalType={modalType} // モーダルの種類を指定
      />
      
    </div>
  );
};

// ActionButtonsコンポーネントをエクスポート
export default ActionButtons;
