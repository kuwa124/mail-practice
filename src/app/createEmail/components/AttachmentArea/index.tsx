// React をインポート
import React from 'react';

// AttachmentAreaコンポーネントの型定義
type AttachmentAreaProps = {
  // 将来的にpropsが必要になった場合のために空のオブジェクトを定義
};

// 添付ファイルエリアを表示するコンポーネント
const AttachmentArea: React.FC<AttachmentAreaProps> = () => {
  return (
    // 添付ファイルエリア全体のコンテナ
    <div
      // 幅を設定し、背景色をグレーに、余白と角丸を適用
      className='w-64 bg-gray-300 space-y-2 mx-2 mt-2 p-2 rounded'
    >
      {/* 添付ファイル欄 */}
      <div
        // 上部に余白を追加し、薄いグレーの背景と角丸を適用
        className='mt-4 p-4 bg-gray-100 rounded-md'
      >
        {/* 説明文 */}
        <p
          // 小さめのフォントサイズでグレーの文字色を設定し、下部に余白を追加
          className='text-sm text-gray-600 mb-2'
        >
          ファイルをドラッグ＆ドロップするか、クリップボードから画像を貼り付けてください
        </p>

        {/* 添付ファイル選択ボタン */}
        <button
          // パディング、角丸、白文字、フォーカス時のアウトライン無し、グレーの背景色とホバー時の色変化を設定
          className='py-2 px-4 rounded text-white focus:outline-none bg-gray-500 hover:bg-gray-600'
        >
          添付ファイル
        </button>

        {/* ファイルサイズ制限の説明文 */}
        <p
          // 極小のフォントサイズでグレーの文字色を設定し、上部に余白を追加
          className='text-xs text-gray-500 mt-2'
        >
          添付可能なファイルは最大で20 MBです。
        </p>
        <p
          // 極小のフォントサイズで濃いグレーの文字色を設定し、太字にする
          className='text-xs text-gray-600 font-bold'
        >
          ※練習用の為、添付機能はございません。
        </p>
      </div>
    </div>
  );
};

// AttachmentAreaコンポーネントをエクスポート
export default AttachmentArea;
