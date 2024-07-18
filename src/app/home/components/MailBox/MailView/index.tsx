// このファイルをクライアントコンポーネントとして指定
'use client';
// Reactをインポート
import React from 'react';
// 型定義をインポート
import { Mail } from '@/app/home/components/MailBox/constants';

// メールビューコンポーネントのプロパティの型定義
type MailViewProps = {
  mail: Mail | null;
};

// メールビューコンポーネント
export function MailView({ mail }: MailViewProps) {
  // メールが選択されていない場合は何も表示しない
  if (!mail) return null;

  // 選択されたメールの内容を表示
  return (
    // メールビューのコンテナ
    // mt-4: 上側のマージンを1rem（16px）に設定
    // p-4: 内側のパディングを1rem（16px）に設定
    // border border-gray-200: グレーの境界線を追加
    // rounded-lg: 角をやや丸くする
    <div className='mt-4 p-4 border border-gray-200 rounded-lg'>
      {/* メールの件名 */}
      {/* text-xl: フォントサイズを大きく */}
      {/* font-bold: フォントを太く */}
      {/* mb-2: 下側のマージンを0.5rem（8px）に設定 */}
      <h2 className='text-xl font-bold mb-2'>{mail.subject}</h2>

      {/* 送信者の情報 */}
      {/* text-sm: フォントサイズを小さく */}
      {/* text-gray-600: テキストの色をグレーに設定 */}
      {/* mb-2: 下側のマージンを0.5rem（8px）に設定 */}
      <p className='text-sm text-gray-600 mb-2'>From: {mail.name}</p>

      {/* メールの本文 */}
      <p>{mail.body}</p>
    </div>
  );
}
