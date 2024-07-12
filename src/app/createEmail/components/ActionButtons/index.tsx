// ユーザー操作に適応するための定型文
'use client';

import React from 'react'; // Reactをインポート

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Font Awesome コンポーネントをインポート

import {
  ACTION_BUTTON_STYLE, // アクションボタンのスタイル定数をインポート
  ACTION_ICONS, // アクションアイコンの設定をインポート
  SEND_BUTTON_STYLE, // 送信ボタンのスタイル定数をインポート
} from '@/app/createEmail/components/ActionButtons/constants';

import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons'; // 紙飛行機アイコンとバツ印アイコンをインポート


import { useActionButtons } from '@/app/createEmail/components/ActionButtons/useActionButtons'; // カスタムフックをインポート

import Modal from '@/app/createEmail/components/ActionButtons/Modal/Send'; // 送信モーダルコンポーネントをインポート

// ActionButtonsコンポーネント：React関数コンポーネントとして定義
const ActionButtons: React.FC = () => {
  // カスタムフックからモーダル関連の状態と関数を取得
  const { isModalOpen, handleSubmit, closeModal } = useActionButtons();

  return (
    // 外側のコンテナ：パディングを追加
    <div className='p-2'>
      {/* ヘッダー部分：送信ボタンと各種アクションアイコン */}
      {/* フレックスコンテナ、アイテムを左揃え、アイテム間のスペース */}
      <div className='flex items-center space-x-4'>
        {/* 送信ボタン */}
        {/* 青色の送信ボタン、大きめフォント、太字 */}
        <button
          className={`${SEND_BUTTON_STYLE} text-lg font-semibold`} // スタイルを適用
          onClick={handleSubmit} // クリック時のハンドラを設定
        >
          {/* 紙飛行機アイコンと「送信」テキスト */}
          <FontAwesomeIcon icon={faPaperPlane} className='mr-2' />{' '}
          {/* アイコンの右側にマージンを追加 */}
          送信
        </button>
        {/* Font Awesomeを使用したアクションアイコン */}
        {ACTION_ICONS.map((actionIcon) => (
          // アクションボタン：グレーのホバー効果、大きめアイコン
          <button
            key={actionIcon.tooltip} // Reactのリストレンダリング用のkey
            className={`${ACTION_BUTTON_STYLE} text-xl`} // スタイルを適用
            title={actionIcon.tooltip} // ツールチップを設定
          >
            {/* アクションアイコン */}
            <FontAwesomeIcon icon={actionIcon.icon} />
          </button>
        ))}
        <button
          className={`${ACTION_BUTTON_STYLE} text-xl`} // スタイルを適用
          title='閉じる' // ツールチップを設定
        >
          {/* アクションアイコン */}
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      {/* モーダルコンポーネント */}
      <Modal
        isOpen={isModalOpen} // モーダルの表示状態
        onClose={closeModal} // モーダルを閉じる関数
      />
    </div>
  );
};

// ActionButtonsコンポーネントをエクスポート
export default ActionButtons;
