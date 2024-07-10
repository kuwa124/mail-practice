'use client';

import React, { useState, useEffect, useRef } from 'react';

// 共通で使用するTailwindクラスを定数化
const INPUT_BASE = 'w-full border border-gray-300 rounded-md p-2';
const BUTTON_BASE = 'px-4 py-2 rounded-md text-white';
const ACTION_BUTTON = 'p-2';
const LABEL_BASE = 'block text-sm font-medium text-gray-700';
const SMALL_TEXT_BUTTON = 'text-sm text-gray-600';

// 署名テキスト（先頭に2行分の空行を追加）
const SIGNATURE = `


ーーーーーーーーーーーーーーーーーーーーーー
株式会社〇〇
〇〇部 〇〇 〇〇
〒xxx-xxxx 〇〇県〇〇市〇〇町x-x-x
Tel : xxx-xx-xxxx Fax : xxx-xx-xxxx
Email : xx@xx.co.jp
`.trimStart();

const EmailComposer: React.FC = () => {
  // メール本文の状態を管理するstate
  const [body, setBody] = useState(SIGNATURE);
  // テキストエリアへの参照を作成
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // テキストエリアの内容が変更されたときのハンドラ
  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  // 署名が削除された場合に再追加する
  useEffect(() => {
    if (!body.endsWith(SIGNATURE)) {
      const cursorPosition = textareaRef.current?.selectionStart || 0;
      setBody((prevBody) => prevBody + SIGNATURE);
      // カーソル位置を維持
      setTimeout(() => {
        textareaRef.current?.setSelectionRange(cursorPosition, cursorPosition);
      }, 0);
    }
  }, [body]);

  return (
    // メールコンポーザー全体のコンテナ
    <div
      // 背景色白、パディング、シャドウ、角丸、フレックスアイテム
      className='bg-white p-4 shadow-md rounded-lg flex-1'
    >
      {/* ヘッダー部分：送信ボタンと各種アクションアイコン */}
      <div
        // フレックスコンテナ、アイテムを中央に揃える、間隔下
        className='flex items-center justify-between mb-4'
      >
        {/* 送信ボタン */}
        <button
          // 青色の送信ボタンスタイル
          className={`${BUTTON_BASE} bg-blue-500 hover:bg-blue-600`}
        >
          送信
        </button>
        {/* アクションアイコンのコンテナ */}
        <div
          // フレックスコンテナ、アイテム間のスペース
          className='flex space-x-2'
        >
          {/* 各アクションアイコン（実際のアイコンは省略） */}
          {['📎', '🔗', '📝', '❌'].map((icon, index) => (
            <button key={index} className={ACTION_BUTTON}>
              {icon}
            </button>
          ))}
        </div>
      </div>

      {/* メール本文エリア */}
      <div
        // 垂直方向のスペース
        className='space-y-4'
      >
        {/* 宛先入力フィールド */}
        <div>
          {/* ラベル：宛先 */}
          <label htmlFor='to' className={LABEL_BASE}>
            宛先
          </label>
          {/* 宛先入力用のテキストフィールド */}
          <input
            type='text'
            id='to'
            className={INPUT_BASE}
            placeholder='宛先を入力'
          />
        </div>

        {/* CC/BCCボタン */}
        <div
          // 水平方向のスペース、右寄せ
          className='flex justify-end space-x-2'
        >
          {/* CCボタン */}
          <button className={SMALL_TEXT_BUTTON}>Cc</button>
          {/* BCCボタン */}
          <button className={SMALL_TEXT_BUTTON}>Bcc</button>
        </div>

        {/* 件名入力フィールド */}
        <div>
          {/* ラベル：件名 */}
          <label htmlFor='subject' className={LABEL_BASE}>
            件名
          </label>
          {/* 件名入力用のテキストフィールド */}
          <input
            type='text'
            id='subject'
            className={INPUT_BASE}
            placeholder='件名を入力'
          />
        </div>

        {/* メール本文テキストエリア（署名を含む） */}
        <textarea
          ref={textareaRef}
          // 入力フィールドの基本スタイル: 全幅、ボーダー、角丸、パディング、高さ自動調整、最小高さ設定
          className={`${INPUT_BASE} min-h-[200px] resize-y`}
          placeholder='メール本文を入力'
          value={body}
          onChange={handleBodyChange}
        />
      </div>
    </div>
  );
};

export default EmailComposer;
