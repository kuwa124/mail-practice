'use client';

// 必要なReactフックとFont Awesomeコンポーネントをインポート
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperclip,
  faFileAlt,
  faTimes,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

// 共通で使用するTailwindクラスを定数化
const INPUT_BASE = 'w-full border border-gray-300 rounded-md p-2'; // 入力フィールドの基本スタイル：全幅、ボーダー、角丸、パディング
const BUTTON_BASE = 'px-6 py-3 rounded-md text-white text-lg font-semibold'; // ボタンの基本スタイル：パディング、角丸、白文字、大きめフォント、太字
const ACTION_BUTTON = 'p-3 text-xl'; // アクションボタンのスタイル：パディング、大きめアイコン
const LABEL_BASE = 'block text-lg font-medium text-gray-700 mb-2'; // ラベルの基本スタイル：ブロック表示、大きめフォント、中太字、グレーテキスト、下マージン
const SMALL_TEXT_BUTTON = 'text-lg text-gray-600'; // 小さいテキストボタンのスタイル：大きめフォント、グレーテキスト

// 署名テキスト（先頭に2行分の空行を追加）
const SIGNATURE = `


ーーーーーーーーーーーーーーーーーーーーーー
株式会社〇〇
〇〇部 〇〇 〇〇
〒xxx-xxxx 〇〇県〇〇市〇〇町x-x-x
Tel : xxx-xx-xxxx Fax : xxx-xx-xxxx
Email : xx@xx.co.jp
`;

// アクションアイコンの設定
const actionIcons = [
  { icon: faFileAlt, tooltip: '下書きとして保存' },
  { icon: faPaperclip, tooltip: '添付ファイル' },
  { icon: faTimes, tooltip: '破棄' },
];

// EmailComposerコンポーネントの定義
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
      className='bg-white p-6 shadow-md rounded-lg flex-1'
    >
      {/* ヘッダー部分：送信ボタンと各種アクションアイコン */}
      <div
        // フレックスコンテナ、アイテムを左揃え、間隔下、アイテム間のスペース
        className='flex items-center mb-6 space-x-4'
      >
        {/* 送信ボタン */}
        <button
          // 青色の送信ボタンスタイル：ユニバーサルデザインに配慮
          className={`${BUTTON_BASE} bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none`}
        >
          <FontAwesomeIcon icon={faPaperPlane} className='mr-2' />
          送信
        </button>
        {/* Font Awesomeを使用したアクションアイコン */}
        {actionIcons.map((item, index) => (
          <button
            key={index}
            className={`${ACTION_BUTTON} hover:bg-gray-100 rounded-full focus:ring-2 focus:ring-gray-300 focus:outline-none`}
            title={item.tooltip}
          >
            <FontAwesomeIcon icon={item.icon} />
          </button>
        ))}
      </div>

      {/* メール本文エリア */}
      <div
        // 垂直方向のスペース
        className='space-y-6'
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
            className={`${INPUT_BASE} text-lg`}
            placeholder='宛先を入力'
          />
        </div>

        {/* CC/BCCボタン */}
        <div
          // 水平方向のスペース、右寄せ
          className='flex justify-end space-x-4'
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
            className={`${INPUT_BASE} text-lg`}
            placeholder='件名を入力'
          />
        </div>

        {/* メール本文テキストエリア（署名を含む） */}
        <textarea
          ref={textareaRef}
          // 入力フィールドの基本スタイル: 全幅、ボーダー、角丸、パディング、高さ画面いっぱい、大きめフォント
          className={`${INPUT_BASE} h-screen text-lg`}
          placeholder='メール本文を入力'
          value={body}
          onChange={handleBodyChange}
        />
      </div>
    </div>
  );
};

// EmailComposerコンポーネントをエクスポート
export default EmailComposer;
