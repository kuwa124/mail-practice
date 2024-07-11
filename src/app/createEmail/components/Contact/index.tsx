// ユーザー操作に適応するための定型文
'use client';

// Reactをインポート
import React from 'react';
// Contactコンポーネントの定義
const Contact: React.FC = () => {
  return (
    // サイドバーのコンテナ
    // w-48: 幅を12rem（192px）に設定
    // bg-gray-300: 背景色を薄いグレー（#d1d5db）に設定
    // space-y-2: 子要素間の垂直方向の間隔を0.5rem（8px）に設定
    // m-2: 全方向のマージンを0.5rem（8px）に設定
    // p-2: 全方向のパディングを0.5rem（8px）に設定
    // rounded: 角を丸く設定（border-radius: 0.25rem;）
    <div className='w-48 bg-gray-300 space-y-2 m-2 p-2 rounded'></div>
  );
};

// Contactコンポーネントのエクスポート
export default Contact;
