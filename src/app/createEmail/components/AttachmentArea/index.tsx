// AttachmentArea.tsx
import React from 'react';

// ボタンのベーススタイル：パディング、角丸、白文字、フォーカス時のアウトライン無し
const BUTTON_BASE = 'py-2 px-4 rounded text-white focus:outline-none';

const AttachmentArea: React.FC = () => {
  return (
    // 添付ファイルエリア全体のコンテナ
    <div
      // 幅48、グレーの背景、要素間の垂直方向のスペース、マージン、パディング、角丸
      className='w-48 bg-gray-300 space-y-2 m-2 p-2 rounded'
    >
      {/* 添付ファイル欄 */}
      <div
        // 上マージン、パディング、薄いグレーの背景、中程度の角丸
        className='mt-4 p-4 bg-gray-100 rounded-md'
      >
        {/* 説明文 */}
        <p
          // 小さいテキストサイズ、グレーの文字色、下マージン
          className='text-sm text-gray-600 mb-2'
        >
          ファイルをドラッグ＆ドロップするか、クリップボードから画像を貼り付けてください
        </p>

        {/* 添付ファイル選択ボタン */}
        <button
          // ボタンのベーススタイルにグレーの背景色とホバー時の色変化を追加
          className={`${BUTTON_BASE} bg-gray-500 hover:bg-gray-600`}
        >
          添付ファイル
        </button>

        {/* ファイルサイズ制限の説明文 */}
        <p
          // 最小のテキストサイズ、グレーの文字色、上マージン
          className='text-xs text-gray-500 mt-2'
        >
          添付可能なファイルは最大で20 MBです。
        </p>
      </div>
    </div>
  );
};

export default AttachmentArea;
