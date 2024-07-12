// React及び必要な型をインポート
import React from 'react';

// 下書きの型定義
interface Draft {
  id: string; // 下書きの一意識別子
  to: string; // 宛先アドレス
  subject: string; // メールの件名
  body: string; // メール本文
}

// DraftComponentのプロップスの型定義
interface DraftComponentProps {
  drafts: Draft[]; // 表示する下書きの配列
}

// DraftComponentの定義
// React.FC<DraftComponentProps>: Reactの関数コンポーネントで、DraftComponentPropsという型のプロップスを受け取ることを示す
// ({ drafts }): プロップスからdrafts配列を分割代入で取得
const DraftComponent: React.FC<DraftComponentProps> = ({ drafts }) => {
  return (
    <div className='mt-4 space-y-4'>
      <h3 className='font-bold text-lg'>下書き一覧</h3>
      {/* 下書きのリストをマップで展開 */}
      {drafts.map((draft) => (
        // 各下書きのコンテナ
        // 背景色を薄いグレーに設定し、角を丸め、内部にパディングを適用
        <div key={draft.id} className='bg-gray-100 rounded-md p-4'>
          {/* 宛先を表示 */}
          <p className='font-semibold'>宛先: {draft.to}</p>
          {/* 件名を表示 */}
          <p className='font-semibold'>件名: {draft.subject}</p>
          {/* 本文を表示（最初の50文字のみ） */}
          <p className='mt-2'>{draft.body.slice(0, 50)}...</p>
        </div>
      ))}
    </div>
  );
};

// DraftComponentをエクスポート
export default DraftComponent;
