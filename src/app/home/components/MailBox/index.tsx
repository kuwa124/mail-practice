// このファイルをクライアントコンポーネントとして指定
'use client';
// Reactをインポート
import React from 'react';
// カスタムフックをインポート
import { useMailBox } from './useMailBox';
// 型定義とダミーデータをインポート
import { dummyMails } from '@/app/home/components/MailBox/constants';
// MailViewコンポーネントをインポート
import { MailView } from './MailView';

// メールボックスコンポーネント
export function MailBox() {
  // カスタムフックを使用してメールボックスの状態を管理
  const { selectedMail, handleMailClick } = useMailBox();

  // JSXを返す（コンポーネントの見た目を定義）
  return (
    // メールボックス全体のコンテナ
    // container: レスポンシブなコンテナ, w-96: 幅を24rem（384px）に設定
    // space-y-2: 子要素間の縦方向の間隔を0.5rem（8px）に設定
    // m-2: 外側のマージンを0.5rem（8px）に設定, p-2: 内側のパディングを0.5rem（8px）に設定
    // rounded: 角を丸くする, bg-gray-300: 背景色を薄いグレーに設定
    <div className='container w-96 space-y-2 m-2 p-2 rounded bg-gray-300'>
      {/* メールボックスのタイトル */}
      {/* text-2xl: フォントサイズを大きく, font-bold: フォントを太く */}
      {/* mb-6: 下側のマージンを1.5rem（24px）に設定 */}
      {/* text-gray-800: テキストの色を濃いグレーに設定 */}
      <h1 className='text-2xl font-bold mb-6 text-gray-800'>受信トレイ</h1>
      {/* メールリスト */}
      <ul>
        {/* dummyMailsの各要素に対してマッピング処理を行う */}
        {dummyMails.map((mail) => (
          // メールリストの各アイテム
          // key属性: Reactのリストレンダリング最適化のため、一意の値を設定
          // onClick: クリック時にメールを選択する
          // mb-4: 下側のマージンを1rem（16px）に設定
          // p-4: 内側のパディングを1rem（16px）に設定
          // border border-gray-200: グレーの境界線を追加
          // rounded-lg: 角をやや丸くする
          // hover:bg-gray-50: マウスホバー時に背景色を少し明るくする
          // transition-colors duration-200: 色の変化を0.2秒かけてなめらかに行う
          // cursor-pointer: カーソルをポインターに変更
          // 選択されたメールの場合、背景色を水色に変更
          <li
            key={mail.id}
            onClick={() => handleMailClick(mail)}
            className={`mb-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer
              ${selectedMail?.id === mail.id ? 'bg-blue-100' : ''}`}
          >
            {/* メール送信者の名前 */}
            {/* text-lg: フォントサイズを大きく */}
            {/* font-semibold: フォントをやや太く */}
            <p className='text-lg font-semibold'>{mail.name}</p>

            {/* メールの件名 */}
            {/* mt-2: 上側のマージンを0.5rem（8px）に設定 */}
            <p className='mt-2'>{mail.subject}</p>
          </li>
        ))}
      </ul>
      {/* 選択されたメールを表示 */}
      <MailView mail={selectedMail} />
    </div>
  );
}
