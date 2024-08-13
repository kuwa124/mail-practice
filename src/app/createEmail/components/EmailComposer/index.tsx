// ユーザー操作に適応するための定型文
'use client';

// 必要なコンポーネントと定数をインポート
import React, { useEffect } from 'react';
// React: Reactライブラリをインポート
// useEffect: 副作用を扱うためのReactフックをインポート

// 共通のスタイル定数をインポート
import {
  INPUT_BASE,
  LABEL_BASE,
  SMALL_TEXT_BUTTON,
} from '@/app/createEmail/components/EmailComposer/constants';
// INPUT_BASE: 入力フィールドの基本スタイル
// LABEL_BASE: ラベルの基本スタイル
// SMALL_TEXT_BUTTON: 小さいテキストボタンのスタイル

// EmailComposer用のカスタムフックをインポート
import useEmailComposer from '@/app/createEmail/components/EmailComposer/useEmailComposer';

// コンテキストをインポート
import { useEmailComposer as useEmailComposerContext } from '@/app/contexts/EmailComposerContext';
import { useSignature } from '@/app/contexts/SignatureContext';

const EmailComposer: React.FC = () => {
  // カスタムフックを使用してメール関連の状態と機能を取得
  const {
    body,
    setBody,
    textareaRef,
    handleBodyChange,
    ccVisible,
    bccVisible,
    toggleCcVisible,
    toggleBccVisible,
    setFocusedInput,
    toRef,
    ccRef,
    bccRef,
    to,
    setTo,
    subject,
    setSubject,
  } = useEmailComposer();

  // 署名とメール返信情報を取得
  const { signature } = useSignature();
  const { replyInfo } = useEmailComposerContext();

  // 初期化時に署名を本文に追加
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.value = signature;
    }
  }, [signature, textareaRef]);

  // replyInfoが更新されたら、フィールドに値を設定
  useEffect(() => {
    if (replyInfo) {
      setTo(replyInfo.to);
      setSubject(replyInfo.subject);
      setBody(`${signature}${replyInfo.body}`);
    }
  }, [replyInfo, setTo, setSubject, setBody, signature]);

  return (
    //  メールコンポーザー全体のコンテナ
    //  全体を白背景、マージン、パディング、影、角丸、縦並び、最大高さと幅に設定
    <div className='bg-white m-2 p-6 shadow-md rounded-lg flex flex-col h-full w-full'>
      {/* メール本文エリア */}
      {/* 要素間の垂直方向の間隔を確保し、縦並びで最大高さに設定 */}
      <div className='space-y-6 flex flex-col h-full'>
        {/* 宛先入力フィールド */}
        {/* 宛先フィールドをグリッドレイアウトで配置し、要素を中央揃えに設定 */}
        <div className='grid grid-cols-[60px_1fr_auto_auto] gap-1 items-center'>
          {/* ラベル：宛先 */}
          <label htmlFor='to' className={LABEL_BASE}>
            宛先
          </label>
          {/* 宛先入力用のテキストフィールド */}
          <input
            ref={toRef} // 入力フィールドへの参照を設定
            type='text' // テキスト入力フィールドを指定
            id='to' // 要素のID（ラベルとの紐付けに使用）
            className={INPUT_BASE} // 入力フィールドの基本スタイルを適用
            placeholder='宛先を入力' // プレースホルダーテキストを設定
            value={to} // 入力フィールドの値を設定
            onChange={(e) => setTo(e.target.value)} // 値が変更されたときのハンドラーを設定
            onFocus={() => setFocusedInput('to')} // フォーカス時に現在の入力フィールドを設定
          />
          {/* CCボタン：小さいテキストボタン、左右マージン */}
          <button
            className={`${SMALL_TEXT_BUTTON} mx-2`} // 小さいテキストボタンスタイルと左右マージンを適用
            onClick={toggleCcVisible} // クリック時にCC欄の表示/非表示を切り替え
          >
            Cc
          </button>
          {/* BCCボタン：小さいテキストボタン */}
          <button
            className={SMALL_TEXT_BUTTON} // 小さいテキストボタンスタイルを適用
            onClick={toggleBccVisible} // クリック時にBCC欄の表示/非表示を切り替え
          >
            Bcc
          </button>
        </div>

        {/* CC入力フィールド（表示/非表示） */}
        {ccVisible && (
          <div className='relative grid grid-cols-[60px_1fr] gap-1 items-center'>
            <label htmlFor='cc' className={LABEL_BASE}>
              Cc
            </label>
            <input
              ref={ccRef} // 入力フィールドへの参照を設定
              type='text' // テキスト入力フィールドを指定
              id='cc' // 要素のID（ラベルとの紐付けに使用）
              className={INPUT_BASE} // 入力フィールドの基本スタイルを適用
              placeholder='Ccを入力' // プレースホルダーテキストを設定
              onFocus={() => setFocusedInput('cc')} // フォーカス時に現在の入力フィールドを設定
            />
          </div>
        )}

        {/* BCC入力フィールド（表示/非表示） */}
        {bccVisible && (
          <div className='relative grid grid-cols-[60px_1fr] gap-1 items-center'>
            <label htmlFor='bcc' className={LABEL_BASE}>
              Bcc
            </label>
            <input
              ref={bccRef} // 入力フィールドへの参照を設定
              type='text' // テキスト入力フィールドを指定
              id='bcc' // 要素のID（ラベルとの紐付けに使用）
              className={INPUT_BASE} // 入力フィールドの基本スタイルを適用
              placeholder='Bccを入力' // プレースホルダーテキストを設定
              onFocus={() => setFocusedInput('bcc')} // フォーカス時に現在の入力フィールドを設定
            />
          </div>
        )}

        {/* 件名入力フィールド */}
        {/* 件名フィールドをグリッドレイアウトで配置し、要素を中央揃えに設定 */}
        <div className='grid grid-cols-[60px_1fr] gap-1 items-center'>
          {/* ラベル：件名 */}
          <label htmlFor='subject' className={LABEL_BASE}>
            件名
          </label>
          {/* 件名入力用のテキストフィールド */}
          <input
            type='text' // テキスト入力フィールドを指定
            id='subject' // 要素のID（ラベルとの紐付けに使用）
            className={INPUT_BASE} // 入力フィールドの基本スタイルを適用
            placeholder='件名を入力' // プレースホルダーテキストを設定
            value={subject} // 入力フィールドの値を設定
            onChange={(e) => setSubject(e.target.value)} // 値が変更されたときのハンドラーを設定
          />
        </div>

        {/* メール本文テキストエリア（署名を含む） */}
        {/* 入力フィールドの基本スタイル、フレックスグロー1で残りのスペースを埋める */}
        <textarea
          ref={textareaRef} // テキストエリアへの参照を設定
          className={`${INPUT_BASE} flex-grow`} // 基本スタイルと拡張可能なスタイルを適用
          placeholder='メール本文を入力' // プレースホルダーテキストを設定
          value={body} // テキストエリアの値を設定
          onChange={handleBodyChange} // 値が変更されたときのハンドラーを設定
        />
      </div>
    </div>
  );
};

// EmailComposerコンポーネントをエクスポート
export default EmailComposer;
