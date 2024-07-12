// ユーザー操作に適応するための定型文
'use client';

// 必要なコンポーネントとアイコンのインポート
import React from 'react'; // Reactをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Font Awesome コンポーネントをインポート
import {
  ACTION_BUTTON_STYLE,
  ACTION_ICONS,
  SEND_BUTTON_STYLE,
} from '@/app/createEmail/components/ActionButtons/constants';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useActionButtons } from '@/app/createEmail/components/ActionButtons/useActionButtons';
import Modal from '@/app/createEmail/components/ActionButtons/Modal';

const ActionButtons: React.FC = () => {
  const { isModalOpen, handleSubmit, closeModal, confirmSend } =
    useActionButtons();

  return (
    <div className='p-2'>
      {/* ヘッダー部分：送信ボタンと各種アクションアイコン */}
      {/* フレックスコンテナ、アイテムを左揃え、アイテム間のスペース */}
      <div className='flex items-center space-x-4'>
        {/* 送信ボタン */}
        {/* 青色の送信ボタン、大きめフォント、太字 */}
        <button
          className={`${SEND_BUTTON_STYLE} text-lg font-semibold`}
          onClick={handleSubmit}
        >
          {/* 紙飛行機アイコンと「送信」テキスト */}
          <FontAwesomeIcon icon={faPaperPlane} className='mr-2' />
          送信
        </button>
        {/* Font Awesomeを使用したアクションアイコン */}
        {ACTION_ICONS.map((actionIcon, index) => (
          // アクションボタン：グレーのホバー効果、大きめアイコン
          <button
            key={index}
            className={`${ACTION_BUTTON_STYLE} text-xl`}
            title={actionIcon.tooltip}
          >
            {/* アクションアイコン */}
            <FontAwesomeIcon icon={actionIcon.icon} />
          </button>
        ))}
      </div>
      {/* モーダルコンポーネント */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmSend}
      />
    </div>
  );
};

export default ActionButtons;
