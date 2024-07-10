import React from 'react';

// 共通で使用するTailwindクラスを定数化
const INPUT_BASE = 'w-full border border-gray-300 rounded-md p-2';
const BUTTON_BASE = 'px-4 py-2 rounded-md text-white';

const EmailComposer: React.FC = () => {
  return (
    // メールコンポーザー全体のコンテナ
    <div className='bg-white p-4 shadow-md rounded-lg'>
      {/* ヘッダー部分：送信ボタンと各種アクションアイコン */}
      <div className='flex items-center justify-between mb-4'>
        {/* 送信ボタン */}
        <button
          // 青色の送信ボタンスタイル
          className={`${BUTTON_BASE} bg-blue-500 hover:bg-blue-600`}
        >
          送信
        </button>
        {/* アクションアイコンのコンテナ */}
        <div className='flex space-x-2'>
          {/* 各アクションアイコン（実際のアイコンは省略） */}
          <button className='p-2'>📎</button>
          <button className='p-2'>🔗</button>
          <button className='p-2'>📝</button>
          <button className='p-2'>❌</button>
        </div>
      </div>

      {/* メール本文エリア */}
      <div className='space-y-4'>
        {/* 宛先入力フィールド */}
        <div>
          <label
            htmlFor='to'
            className='block text-sm font-medium text-gray-700'
          >
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
        <div className='flex justify-end space-x-2'>
          <button className='text-sm text-gray-600'>Cc</button>
          <button className='text-sm text-gray-600'>Bcc</button>
        </div>

        {/* 件名入力フィールド */}
        <div>
          <label
            htmlFor='subject'
            className='block text-sm font-medium text-gray-700'
          >
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

        {/* メール本文テキストエリア */}
        <textarea
          // 高さ自動調整、最小高さ設定のテキストエリア
          className={`${INPUT_BASE} min-h-[200px] resize-y`}
          placeholder='メール本文を入力'
        ></textarea>

        {/* 署名欄 */}
        <div className='text-sm text-gray-600 border-t pt-2'>
          <p>株式会社〇〇</p>
          <p>〇〇部 〇〇 〇〇</p>
          <p>〒xxx-xxxx 〇〇県〇〇市〇〇町x-x-x</p>
          <p>Tel : xxx-xx-xxxx Fax : xxx-xx-xxxx</p>
          <p>Email : xx@xx.co.jp</p>
        </div>
      </div>
    </div>
  );
};

export default EmailComposer;
