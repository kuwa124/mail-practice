// ユーザー操作に適応するための定型文
'use client';

// 必要なReactフックとコンポーネントをインポート
import { useSignature } from '@/app/contexts/SignatureContext'; // 署名の状態と更新関数を提供するカスタムフックをインポート
import { SIGNATURE } from '@/app/createEmail/components/EmailComposer/constants'; // 署名の初期値をインポート
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons'; // 使用する具体的なアイコン(保存アイコンと戻るアイコン)をインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome アイコンを使用するためのコンポーネントをインポート
import Link from 'next/link'; // Next.js のページ間リンクのための Link コンポーネントをインポート
import React, { useState } from 'react'; // React ライブラリと useState フックをインポート

// モーダルコンポーネントをインポート
import Modal from '@/app/Modal';

// カスタムフックをインポート（アクションボタンの機能を提供）
import { useModal } from '@/app/Modal/useModal';

// 設定コンポーネントを定義
const Settings: React.FC = () => {
  // 各設定項目の状態を管理するための state
  const [theme, setTheme] = useState('light'); // テーマの状態を管理（初期値は 'light'）
  const [language, setLanguage] = useState('日本語'); // 言語の状態を管理（初期値は '日本語'）
  const [notifications, setNotifications] = useState(true); // 通知の状態を管理（初期値は true）
  const { signature, setSignature } = useSignature(); // 署名の状態と更新関数を取得

  // カスタムフックからモーダル関連の状態と関数を取得
  const { modalType, closeModal, handleSave } = useModal(); // モーダルの種類、モーダルを閉じる関数、保存ボタンクリック時の処理を取得

  return (
    // 設定画面のメインコンテナ
    // 背景色を白に、パディングを 6 単位、最大幅を画面幅に、水平方向の中央揃えを設定
    <div className='bg-white p-6 w-screen mx-auto'>
      {/* ヘッダー部分 */}
      {/* 下線、下側のマージンを 4 単位、パディングを 4 単位、フレックスボックスで両端揃え、子要素を中央揃え */}
      <div className='border-b mb-4 pb-4 flex justify-between items-center'>
        {/* 横並びにし、下側のマージンを小さく設定 */}
        <div className='flex flex-row mb-2'>
          {/* テキストサイズを 2xl、フォントを太字に設定 */}
          <h1 className='text-2xl font-bold'>設定</h1>
          {/* テキストサイズを sm、上のパディングを 2 単位、左のマージンを 4 単位に設定 */}
          <p className='pt-2 ml-4 text-sm'>
            ※実際には変更されません。署名のみ変更できます。
          </p>
        </div>

        {/* 戻るボタン */}
        {/* ホームページへのリンク、テキストカラーを青に、ホバー時にテキストカラーを濃い青に変更 */}
        <Link
          href='/' // リンク先のURLを指定
          //  青色のテキスト、グレーの背景色、テキストサイズ大きめ、フォントを太字に、ホバー時に濃い青色に
          // 背景色を青、テキストカラーを白、上下左右に余白を設け、角を丸くする、色の変更にアニメーションを適用
          className=' bg-blue-500 text-white text-lg font-bold  hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors duration-200'
          aria-label='Homeのページに戻る' // アクセシビリティのためのラベルを指定
        >
          {/* アイコンの右側にマージンを 2 単位設定 */}
          <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />
          戻る
        </Link>
      </div>

      {/* 設定項目 */}
      {/* 上下の要素間隔を 4 単位に設定 */}
      <div className='space-y-4'>
        {/* テーマ設定 */}
        <div>
          {/* テキストサイズを lg、フォントを半太字に設定 */}
          <h2 className='text-lg font-semibold '>テーマ</h2>
          {/* セレクトボックス: 幅を 100%、パディングを 2 単位、境界線、角丸を設定 */}
          <select
            className='w-full p-2 border rounded'
            value={theme} // 選択中のテーマを指定
            onChange={(e) => setTheme(e.target.value)} // 選択値が変更された時の処理
            aria-label='テーマを選択' // アクセシビリティのためのラベルを指定
          >
            {/* ライトテーマを選択する際のオプション */}
            {/* テーマの値がライトの際に選択状態になる */}
            <option value='light'>ライト</option>
            {/* ダークテーマを選択する際のオプション */}
            {/* テーマの値がダークの際に選択状態になる */}
            <option value='dark'>ダーク</option>
          </select>
        </div>

        {/* 言語設定 */}
        <div>
          {/* テキストサイズを lg、フォントを半太字に、下側のマージンを 2 単位に設定 */}
          <h2 className='text-lg font-semibold mb-2'>言語</h2>
          {/* セレクトボックス: 幅を 100%、パディングを 2 単位、境界線、角丸を設定 */}
          <select
            className='w-full p-2 border rounded'
            value={language} // 選択中の言語を指定
            onChange={(e) => setLanguage(e.target.value)} // 選択値が変更された時の処理
            aria-label='言語を選択' // アクセシビリティのためのラベルを指定
          >
            {/* 日本語を選択する際のオプション */}
            {/* 言語の値が日本語の際に選択状態になる */}
            <option value='日本語'>日本語</option>
            {/* 英語を選択する際のオプション */}
            {/* 言語の値が英語の際に選択状態になる */}
            <option value='English'>English</option>
            {/* 中国語を選択する際のオプション */}
            {/* 言語の値が中国語の際に選択状態になる */}
            <option value='中文'>中文</option>
          </select>
        </div>

        {/* 通知設定 */}
        <div>
          {/* テキストサイズを lg、フォントを半太字に、下側のマージンを 2 単位に設定 */}
          <h2 className='text-lg font-semibold mb-2'>通知</h2>
          {/* チェックボックス: フレックスボックスで横並び、中央揃え */}
          <label className='flex items-center'>
            {/* チェックボックスの入力欄 */}
            {/* チェックボックスが選択されている場合は通知がオンの状態を表す */}
            <input
              type='checkbox' // チェックボックスの入力欄を指定
              className='mr-2' // チェックボックスの右側にマージンを 2 単位設定
              checked={notifications} // チェックボックスの状態を通知の状態に紐付け
              onChange={(e) => setNotifications(e.target.checked)} // チェックボックスの状態が変更された時の処理
              aria-label='メール受信時に通知する' // アクセシビリティのためのラベルを指定
            />
            {/* チェックボックスのラベル */}
            メール受信時に通知する
          </label>
        </div>

        {/* 署名設定 */}
        <div>
          {/* テキストサイズを lg、フォントを半太字に、下側のマージンを 2 単位に設定 */}
          <h2 className='text-lg font-semibold mb-2'>署名</h2>
          {/* テキストエリア: 幅を 100%、高さを 32 単位、パディングを 2 単位、境界線、角丸を設定 */}
          {/* 署名の入力欄 */}
          <textarea
            className='w-full h-32 p-2 border rounded'
            value={signature} // 署名の状態を入力値に紐付け
            onChange={(e) => setSignature(e.target.value)} // 入力値が変更された時の処理
            placeholder={SIGNATURE} // プレースホルダーテキストを設定
            aria-label='メールの署名を入力' // アクセシビリティのためのラベルを指定
          />
        </div>
      </div>

      {/* 保存ボタン */}
      {/* 上側のマージンを 6 単位、背景色を青、テキストカラーを白に、パディングを 2 単位、角丸を設定、ホバー時の背景色を濃い青に変更 */}
      <button
        onClick={handleSave} // 保存ボタンクリック時の処理
        className='mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200'
        aria-label='設定を保存' // アクセシビリティのためのラベルを指定
      >
        {/* アイコンの右側にマージンを 2 単位設定 */}
        <FontAwesomeIcon icon={faSave} className='mr-2' />
        保存
      </button>

      {/* モーダルコンポーネント: 確認ダイアログを表示 */}
      <Modal
        isOpen={modalType !== null} // モーダルの表示状態をモーダルの種類に基づいて制御
        onClose={closeModal} // モーダルを閉じる関数を指定
        onConfirm={closeModal} // 保存ボタンクリック時の処理を指定
        modalType={modalType} // モーダルの種類を指定
      />
    </div>
  );
};

// Settings コンポーネントをエクスポート
export default Settings;
