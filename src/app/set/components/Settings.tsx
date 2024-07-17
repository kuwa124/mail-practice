// ユーザー操作に適応するための定型文
'use client';

// 必要なReactフックとコンポーネントをインポート
import React, { useState } from 'react'; // React と useState フックをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesomeのアイコンを使用するためのコンポーネントをインポート
import { faSave, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // 使用する具体的なアイコンをインポート
import Link from 'next/link'; // Next.jsのページ間リンクのためのLinkコンポーネントをインポート
import { SIGNATURE } from '@/app/createEmail/components/EmailComposer/constants'; //署名をインポート
import { useSignature } from '@/app/contexts/SignatureContext';

// モーダルコンポーネントをインポート
import Modal from '@/app/Modal';

// カスタムフックをインポート（アクションボタンの機能を提供）
import { useModal } from '@/app/Modal/useModal';

// 設定コンポーネントを定義
const Settings: React.FC = () => {
  // 各設定項目の状態を管理するためのstate
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('日本語');
  const [notifications, setNotifications] = useState(true);
  const { signature, setSignature } = useSignature();

  // カスタムフックからモーダル関連の状態と関数を取得
  const { modalType, closeModal, handleSave } = useModal();

  return (
    // 設定画面のメインコンテナ
    // 背景白、パディング、最大幅を設定、中央揃え
    <div className='bg-white p-6 w-screen mx-auto'>
      {/* ヘッダー部分 */}
      {/* 下線、下側のマージン、パディング、フレックスボックスで両端揃え */}
      <div className='border-b mb-4 pb-4 flex justify-between items-center'>
        <div className='flex flex-row mb-2'>
          <h1 className='text-2xl font-bold'>設定</h1>
          <p className='pt-2 ml-4 text-sm'>
            ※実際には変更されません。署名のみ変更できます。
          </p>
        </div>

        {/* 戻るボタン */}
        <Link
          href='/'
          className='text-blue-500 hover:text-blue-700'
          aria-label='前のページに戻る'
        >
          <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />
          戻る
        </Link>
      </div>

      {/* 設定項目 */}
      <div className='space-y-4'>
        {/* テーマ設定 */}
        <div>
          <h2 className='text-lg font-semibold '>テーマ</h2>
          {/* セレクトボックス: 幅100%、パディング、境界線、角丸 */}
          <select
            className='w-full p-2 border rounded'
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            aria-label='テーマを選択'
          >
            <option value='light'>ライト</option>
            <option value='dark'>ダーク</option>
          </select>
        </div>

        {/* 言語設定 */}
        <div>
          <h2 className='text-lg font-semibold mb-2'>言語</h2>
          {/* セレクトボックス: 幅100%、パディング、境界線、角丸 */}
          <select
            className='w-full p-2 border rounded'
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            aria-label='言語を選択'
          >
            <option value='日本語'>日本語</option>
            <option value='English'>English</option>
            <option value='中文'>中文</option>
          </select>
        </div>

        {/* 通知設定 */}
        <div>
          <h2 className='text-lg font-semibold mb-2'>通知</h2>
          {/* チェックボックス: フレックスボックスで横並び、中央揃え */}
          <label className='flex items-center'>
            <input
              type='checkbox'
              className='mr-2'
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              aria-label='メール受信時に通知する'
            />
            メール受信時に通知する
          </label>
        </div>

        {/* 署名設定 */}
        <div>
          <h2 className='text-lg font-semibold mb-2'>署名</h2>
          {/* テキストエリア: 幅100%、高さ固定、パディング、境界線、角丸 */}
          <textarea
            className='w-full h-32 p-2 border rounded'
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            placeholder={SIGNATURE}
            aria-label='メールの署名を入力'
          ></textarea>
        </div>
      </div>

      {/* 保存ボタン */}
      {/* 上側のマージン、青い背景、白い文字、パディング、角丸、ホバー時の色変更 */}
      <button
        onClick={handleSave}
        className='mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
        aria-label='設定を保存'
      >
        <FontAwesomeIcon icon={faSave} className='mr-2' />
        保存
      </button>
      {/* モーダルコンポーネント：確認ダイアログを表示 */}
      <Modal
        isOpen={modalType !== null} // モーダルの表示状態を制御
        onClose={closeModal} // モーダルを閉じる関数を指定
        onConfirm={closeModal} // 保存ボタンクリック時の処理を指定
        modalType={modalType} // モーダルの種類を指定
      />
    </div>
  );
};

// Settingsコンポーネントをエクスポート
export default Settings;
