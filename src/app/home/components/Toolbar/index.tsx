// ユーザー操作に適応するための定型文
'use client';

// 必要なReactフックとコンポーネントをインポート
import React from 'react'; // Reactをインポート
import Link from 'next/link'; // Next.jsのページ間リンクのためのLinkコンポーネントをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesomeのアイコンを使用するためのコンポーネントをインポート
import {
  faSearch, // 検索アイコン
  faChevronDown, // 下向き矢印アイコン
  faTimes, // バツ印アイコン
} from '@fortawesome/free-solid-svg-icons'; // 使用する具体的なアイコンをインポート

// 定数をインポート（ボタン設定、共通スタイル、ホバー背景色）
import { TOOLBAR_BUTTONS, COMMON_STYLES, HOVER_BG } from './constants';

// Toolbarコンポーネントを定義
const Toolbar: React.FC = () => {
  // コンポーネントのJSXを返す
  return (
    // ツールバーのメインコンテナ
    // 背景白、影付き、パディング、中央揃えのフレックスボックス
    <div className={`bg-white shadow-md p-2 ${COMMON_STYLES.FLEX_CENTER}`}>
      {/* ボタンをマップして表示 */}
      {TOOLBAR_BUTTONS.map((button) => (
        // 各ボタンのコンテナ
        // 相対配置、右マージン、中央揃えのフレックスボックス
        <Link
          key={button.message} // Reactのリストレンダリング用のユニークキー
          className={`relative mr-2 ${COMMON_STYLES.FLEX_CENTER}`} // リンクのスタイル
          href={button.href} // リンクの遷移先
          title={button.message} // ツールチップとして表示されるテキスト
        >
          {/* ボタン要素 */}
          {/* 幅・高さ10、中央揃えのフレックスボックス、角丸、トランジション効果、ホバー時背景色変更 */}
          <div
            className={`w-10 h-10 ${COMMON_STYLES.FLEX_CENTER} ${COMMON_STYLES.ROUNDED} ${COMMON_STYLES.TRANSITION} ${HOVER_BG}`}
            role='button' // アクセシビリティのための役割指定
            aria-label={button.ariaLabel} // スクリーンリーダー用のラベル
          >
            {/* アイコンを表示し、ホバー時に色を変更 */}
            {/* アイコンサイズ2xl、通常時グレー色、ホバー時青色 */}
            <FontAwesomeIcon
              icon={button.icon} // 表示するアイコン
              className='text-2xl text-gray-600 hover:text-blue-500' // アイコンのスタイル
            />
          </div>
        </Link>
      ))}
      {/* 検索バー部分 */}
      {/* 左マージン自動、中央揃えのフレックスボックス */}
      <div className='ml-auto flex items-center'>
        {/* 'すべて'ドロップダウン */}
        {/* フィルター入力のコンテナスタイル */}
        <div className='relative'>
          {/* フィルター選択入力フィールド */}
          {/* 境界線、左角丸、パディング、大きめのテキスト */}
          <input
            type='text' // テキスト入力フィールド
            placeholder='すべて' // プレースホルダーテキスト
            className='border rounded-l px-3 py-2 text-lg' // 入力フィールドのスタイル
            aria-label='フィルター選択' // スクリーンリーダー用のラベル
          />
          {/* ドロップダウンボタン */}
          {/* 絶対位置、右寄せ、上下中央揃え、右マージン */}
          <button
            className='absolute right-0 top-1/2 transform -translate-y-1/2 mr-3' // ボタンの位置とスタイル
            aria-label='フィルターオプションを開く' // スクリーンリーダー用のラベル
          >
            {/* ドロップダウンアイコン */}
            {/* グレーの色、大きめのサイズ */}
            <FontAwesomeIcon
              icon={faChevronDown} // 下向き矢印アイコン
              className='text-gray-400 text-xl' // アイコンのスタイル
            />
          </button>
        </div>
        {/* 検索入力フィールド */}
        {/* 相対位置、左マージン */}
        <div className='relative ml-2'>
          {/* 検索入力フィールド */}
          {/* 境界線（上下右）、右角丸、パディング、左側に大きめの余白、大きめのテキスト */}
          <input
            type='text' // テキスト入力フィールド
            placeholder='検索' // プレースホルダーテキスト
            className='border-t border-b border-r rounded-r px-3 py-2 pl-10 text-lg' // 入力フィールドのスタイル
            aria-label='検索' // スクリーンリーダー用のラベル
          />
          {/* 検索アイコン */}
          {/* 絶対位置、左寄せ、上下中央揃え、グレーの色、大きめのサイズ */}
          <FontAwesomeIcon
            icon={faSearch} // 検索アイコン
            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl' // アイコンの位置とスタイル
          />
          {/* 検索クリアボタン */}
          {/* 絶対位置、右寄せ、上下中央揃え */}
          <button
            className='absolute right-3 top-1/2 transform -translate-y-1/2' // ボタンの位置
            aria-label='検索をクリア' // スクリーンリーダー用のラベル
          >
            {/* クリアアイコン */}
            {/* グレーの色、大きめのサイズ */}
            <FontAwesomeIcon
              icon={faTimes} // バツ印アイコン
              className='text-gray-400 text-xl' // アイコンのスタイル
            />
          </button>
        </div>
      </div>
    </div>
  );
};

// Toolbarコンポーネントをエクスポート
export default Toolbar;
