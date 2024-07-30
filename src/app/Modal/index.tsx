// Reactコンポーネントを作成するために必要なモジュールをインポート
import React from 'react';

// 共通の型定義をインポート：ModalTypeを使用するために必要
import { modalContents, ModalProps, ModalType } from '@/app/Modal/constants';

// モーダルコンポーネント：確認ダイアログを表示するポップアップ
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  modalType,
}) => {
  // モーダルが開いていない場合は何も表示しない
  if (!isOpen) return null;

  // modalTypeに基づいて適切なモーダル内容を取得
  const modalContent = modalContents[modalType as Exclude<ModalType, null>];

  return (
    // モーダルの背景：画面全体を覆う半透明のオーバーレイ
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      {/* 
        fixed: 画面に対して固定位置
        inset-0: 上下左右の位置を0に設定（画面全体を覆う）
        bg-black: 背景色を黒に設定
        bg-opacity-50: 背景の不透明度を50%に設定
        flex: フレックスボックスを使用
        items-center: 子要素を垂直方向の中央に配置
        justify-center: 子要素を水平方向の中央に配置
        z-50: 重なり順を最前面に設定
      */}

      {/* モーダルの内容：白背景の角丸コンテナ */}
      <div className='bg-white rounded-lg p-6 max-w-md w-full'>
        {/* 
          bg-white: 背景色を白に設定
          rounded-lg: 大きめの角丸を適用
          p-6: すべての側面に大きめのパディングを適用
          max-w-sm: 最大幅を小さめに設定
          w-full: 幅を親要素いっぱいに設定
        */}

        {/* タイトル：大きめのフォントで強調表示 */}
        <h2 className='text-xl font-bold mb-4'>{modalContent.title}</h2>
        {/* 
          text-xl: フォントサイズを大きく設定
          font-bold: フォントを太字に設定
          mb-4: 下部にマージンを追加
        */}

        {/* 本文：確認メッセージを表示 */}
        <p className='mb-6 whitespace-pre-wrap'>{modalContent.message}</p>
        {/* mb-6: 下部に大きめのマージンを追加 */}

        {/* ボタンコンテナ：キャンセルと確認ボタンを右揃えで配置 */}
        <div className='flex justify-end space-x-4'>
          {/* 
            flex: フレックスボックスを使用
            justify-end: 子要素を右端に配置
            space-x-4: 子要素間に水平方向のスペースを追加
          */}

          {/* 確認ボタン：青色背景で目立つデザイン */}
          {modalContent.confirmButton && (
            <button
              className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-28'
              onClick={onConfirm} // クリック時に確認処理を実行
            >
              {/* 
                px-4: 左右のパディング
                py-2: 上下のパディング
                bg-blue-500: 青色の背景
                text-white: 白色のテキスト
                rounded-md: 中程度の角丸
                hover:bg-blue-600: ホバー時に濃い青に変更
              */}
              {modalContent.confirmButton}
            </button>
          )}

          {/* キャンセルボタン：グレー背景でホバー効果あり */}
          {modalContent.showCancelButton && (
            <button
              className='px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 w-28'
              onClick={onClose} // クリック時にモーダルを閉じる
            >
              {/* 
              px-4: 左右のパディング
              py-2: 上下のパディング
              bg-gray-300: 薄いグレーの背景色
              rounded-md: 中程度の角丸
              hover:bg-gray-400: ホバー時に濃いグレーに変更
            */}
              キャンセル
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Modalコンポーネントをエクスポート
export default Modal;
