import React from 'react'; // Reactをインポート

// モーダルコンポーネントのプロップスの型定義
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

// モーダルコンポーネント
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  // モーダルが開いていない場合は何も表示しない
  if (!isOpen) return null;

  return (
    // モーダルの背景：画面全体を覆う半透明のオーバーレイ
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      {/* モーダルの内容：白背景、角丸、パディング */}
      <div className='bg-white rounded-lg p-6 max-w-sm w-full'>
        <h2 className='text-xl font-bold mb-4'>メール送信の確認</h2>
        <p className='mb-6'>
          メッセージを送信しますか？
          <br />
          ※実際には送信されません。
        </p>
        <div className='flex justify-end space-x-4'>
          {/* キャンセルボタン：グレー背景 */}
          <button
            className='px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400'
            onClick={onClose}
          >
            キャンセル
          </button>
          {/* 確認ボタン：青色背景 */}
          <button
            className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
            onClick={onConfirm}
          >
            送信
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
