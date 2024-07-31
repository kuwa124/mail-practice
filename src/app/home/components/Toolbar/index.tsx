// ユーザー操作に適応するための定型文
'use client';

// 必要なReactフックとコンポーネントをインポート
import {
  faChevronDown, // 下向き矢印アイコン
  faSearch, // 検索アイコン
  faTimes, // バツ印アイコン
} from '@fortawesome/free-solid-svg-icons'; // 使用する具体的なアイコンをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesomeのアイコンを使用するためのコンポーネントをインポート
import { useRouter } from 'next/navigation'; // Next.jsのルーティング機能をインポート
import React, { useCallback, useState } from 'react'; // React本体とuseState, useCallbackフックをインポート

// ツールバーボタンの型定義とボタン情報をインポート
import Modal from '@/app/Modal'; // モーダルコンポーネントをインポート
import { useModal } from '@/app/Modal/useModal'; // モーダル制御用のカスタムフックをインポート
import { TOOLBAR_BUTTONS, ToolbarButton } from './constants'; // ツールバーボタンの定数と型をインポート

// Toolbarコンポーネントを定義
const Toolbar: React.FC = () => {
  // useRouterフックを使用してrouterオブジェクトを取得
  const router = useRouter();

  // 検索語の状態を管理
  const [searchTerm, setSearchTerm] = useState<string>('');

  // フィルター語の状態を管理
  const [filterTerm, setFilterTerm] = useState<string>('すべて');

  // useModalフックを使用して必要な状態と関数を取得
  const { modalType, handleMessageCheck, closeModal, handleConfirm } =
    useModal();

  // ボタンアクションのハンドラー型定義
  type ButtonActionHandler = (button: ToolbarButton) => void;

  // ボタンアクションのマップオブジェクト定義
  const buttonActionMap: Record<string, ButtonActionHandler> = {
    onClick: (button) => button.onClick?.(), // onClickが存在する場合に実行
    href: (button) => router.push(button.href!), // hrefが存在する場合にページ遷移
    checkNewMessage: () => handleMessageCheck(), // メッセージチェックアクションの実行
    // 他のアクションをここに追加できます
  };

  // ボタンクリック時の共通処理を行う関数
  const handleButtonClick = useCallback(
    (button: ToolbarButton): void => {
      const actionKey = Object.keys(buttonActionMap).find(
        (
          key // アクションキーを検索
        ) => key in button || key === button.action
      ) as keyof typeof buttonActionMap; // 型アサーションでキーの型を保証

      buttonActionMap[actionKey]?.(button); // 対応するアクションハンドラーを実行
    },
    [router, handleMessageCheck]
  );

  // 検索入力の変更を処理する関数
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchTerm(e.target.value);
    },
    []
  );

  // 検索をクリアする関数
  const clearSearch = useCallback((): void => {
    setSearchTerm('');
  }, []);

  // フィルター入力の変更を処理する関数
  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setFilterTerm(e.target.value);
    },
    []
  );

  // コンポーネントのJSXを返す
  return (
    // ツールバーのメインコンテナ
    // 背景色を白に設定し、影をつけ、パディングを追加し、中央揃えのフレックスボックスを作成
    <div className='bg-white shadow-md p-2 flex items-center justify-center'>
      {/* ボタンをマップして表示 */}
      {TOOLBAR_BUTTONS.map((button) => (
        // 各ボタンのコンテナ
        // 相対位置を設定し、右マージンを追加し、中央揃えのフレックスボックスを作成
        <div
          key={button.message} // Reactのリストレンダリング用のユニークキー
          className='relative mr-2 flex items-center justify-center'
          title={button.message} // ツールチップとして表示されるテキスト
          onClick={() => handleButtonClick(button)} // ボタンクリック時の処理
        >
          {/* ボタン要素 */}
          {/* 幅と高さを設定し、中央揃えのフレックスボックスを作成し、角丸と遷移効果を適用し、ホバー時の背景色変更とカーソルスタイルを設定 */}
          <div
            className='w-10 h-10 flex items-center justify-center rounded transition-colors duration-200 hover:bg-gray-200 cursor-pointer'
            role='button' // アクセシビリティのための役割指定
            aria-label={button.ariaLabel} // スクリーンリーダー用のラベル
          >
            {/* アイコンを表示し、ホバー時に色を変更 */}
            {/* アイコンサイズを設定し、通常時とホバー時の色を指定 */}
            <FontAwesomeIcon
              icon={button.icon} // 表示するアイコン
              className='text-2xl text-gray-600 hover:text-blue-500' // アイコンのスタイル
            />
          </div>
        </div>
      ))}
      {/* 検索バー部分 */}
      {/* 左マージンを自動設定し、中央揃えのフレックスボックスを作成 */}
      <div className='ml-auto flex items-center'>
        {/* 'すべて'ドロップダウン */}
        {/* 相対位置を設定 */}
        <div className='relative'>
          {/* フィルター選択入力フィールド */}
          {/* ボーダーを追加し、左側を角丸にし、パディングを設定し、テキストサイズを大きくする */}
          <input
            type='text' // テキスト入力フィールド
            value={filterTerm} // フィルター語の現在の値
            onChange={handleFilterChange} // フィルター語が変更されたときの処理
            placeholder='すべて' // プレースホルダーテキスト
            className='border rounded-l px-3 py-2 text-lg' // 入力フィールドのスタイル
            aria-label='フィルター選択' // スクリーンリーダー用のラベル
          />
          {/* ドロップダウンボタン */}
          {/* 絶対位置を設定し、上下中央に配置し、右側にマージンを追加 */}
          <button
            className='absolute right-0 top-1/2 transform -translate-y-1/2 mr-3' // ボタンの位置とスタイル
            aria-label='フィルターオプションを開く' // スクリーンリーダー用のラベル
          >
            {/* ドロップダウンアイコン */}
            {/* アイコンの色とサイズを設定 */}
            <FontAwesomeIcon
              icon={faChevronDown} // 下向き矢印アイコン
              className='text-gray-400 text-xl' // アイコンのスタイル
            />
          </button>
        </div>
        {/* 検索入力フィールド */}
        {/* 相対位置を設定し、左マージンを追加 */}
        <div className='relative ml-2'>
          {/* 検索入力フィールド */}
          {/* 上下右のボーダーを追加し、右側を角丸にし、パディングを設定し、テキストサイズを大きくする */}
          <input
            type='text' // テキスト入力フィールド
            value={searchTerm} // 検索語の現在の値
            onChange={handleSearchChange} // 検索語が変更されたときの処理
            placeholder='検索' // プレースホルダーテキスト
            className='border-t border-b border-r rounded-r px-3 py-2 pl-10 text-lg' // 入力フィールドのスタイル
            aria-label='検索' // スクリーンリーダー用のラベル
          />
          {/* 検索アイコン */}
          {/* 絶対位置を設定し、左側に配置し、上下中央に配置し、アイコンの色とサイズを設定 */}
          <FontAwesomeIcon
            icon={faSearch} // 検索アイコン
            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl' // アイコンの位置とスタイル
          />
          {/* 検索クリアボタン */}
          {/* 検索語が存在する場合のみ表示 */}
          {searchTerm && (
            <button
              className='absolute right-3 top-1/2 transform -translate-y-1/2' // ボタンの位置
              onClick={clearSearch} // クリックされたときに検索をクリア
              aria-label='検索をクリア' // スクリーンリーダー用のラベル
            >
              {/* クリアアイコン */}
              {/* アイコンの色とサイズを設定 */}
              <FontAwesomeIcon
                icon={faTimes} // バツ印アイコン
                className='text-gray-400 text-xl' // アイコンのスタイル
              />
            </button>
          )}
        </div>
      </div>
      {/* モーダルコンポーネント */}
      <Modal
        isOpen={modalType !== null} // モーダルタイプがnullでない場合にモーダルを開く
        onClose={closeModal} // モーダルを閉じる関数
        onConfirm={handleConfirm} // 確認ボタンが押されたときの処理
        modalType={modalType} // モーダルの種類
      />
    </div>
  );
};

// Toolbarコンポーネントをエクスポート
export default Toolbar;
