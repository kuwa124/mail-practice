// ユーザー操作に適応するための定型文
'use client';

// 必要なコンポーネントと定数をインポート
import {
  INPUT_BASE,
  LABEL_BASE,
  SMALL_TEXT_BUTTON,
} from '@/app/createEmail/components/EmailComposer/constants';

// カスタムフックをインポート
import useEmailComposer from '@/app/createEmail/components/EmailComposer/useEmailComposer';

// EmailComposerコンポーネントの定義
const EmailComposer: React.FC = () => {
  // カスタムフックを使用してメール本文の状態と関連機能を取得
  const { body, textareaRef, handleBodyChange } = useEmailComposer();

  return (
    // メールコンポーザー全体のコンテナ
    // 全体を白背景、マージン、パディング、影、角丸、縦並び、最大高さと幅に設定
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
            type='text' // テキスト入力フィールドを指定
            id='to' // 要素のID（ラベルとの紐付けに使用）
            className={INPUT_BASE} // 入力フィールドの基本スタイルを適用
            placeholder='宛先を入力' // プレースホルダーテキストを設定
          />
          {/* CCボタン：小さいテキストボタン、左右マージン */}
          <button className={`${SMALL_TEXT_BUTTON} mx-2`}>Cc</button>
          {/* BCCボタン：小さいテキストボタン */}
          <button className={SMALL_TEXT_BUTTON}>Bcc</button>
        </div>

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
          />
        </div>

        {/* メール本文テキストエリア（署名を含む） */}
        {/* 入力フィールドの基本スタイル、フレックスグロー1で残りのスペースを埋める */}
        <textarea
          ref={textareaRef} // テキストエリアへの参照を設定
          className={`${INPUT_BASE} flex-grow`} // 基本スタイルと拡張可能なスタイルを適用
          placeholder='メール本文を入力' // プレースホルダーテキストを設定
          value={body} // テキストエリアの値を設定
          onChange={handleBodyChange} // 値が変更されたときのハンドラを設定
        />
      </div>
    </div>
  );
};

// EmailComposerコンポーネントをエクスポート
export default EmailComposer;
