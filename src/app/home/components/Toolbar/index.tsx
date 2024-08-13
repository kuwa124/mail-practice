// ユーザー操作に適応するための定型文
'use client';

// 必要なReactフックとコンポーネントをインポート
import {
  faSearch, // 検索アイコン
  faTimes,
} from '@fortawesome/free-solid-svg-icons'; // 使用する具体的なアイコンをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesomeのアイコンを使用するためのコンポーネントをインポート
import { useRouter } from 'next/navigation'; // Next.jsのルーティング機能をインポート
import React, { useCallback } from 'react'; // React本体とuseState, useCallbackフックをインポート

// ツールバーボタンの型定義とボタン情報をインポート
import { useEmailComposer } from '@/app/contexts/EmailComposerContext'; // EmailComposerコンテキストをインポート
import { useMail } from '@/app/contexts/MailContext'; // メールコンテキストをインポート
import Modal from '@/app/Modal'; // モーダルコンポーネントをインポート
import { useModal } from '@/app/Modal/useModal'; // モーダル制御用のカスタムフックをインポート
import { TOOLBAR_BUTTONS, ToolbarButton } from './constants'; // ツールバーボタンの定数と型をインポート

type ToolbarProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};
// Toolbarコンポーネントを定義
const Toolbar: React.FC<ToolbarProps> = ({ searchTerm, setSearchTerm }) => {
  // useRouterフックを使用してrouterオブジェクトを取得
  const router = useRouter();

  // useModalフックを使用して必要な状態と関数を取得
  const {
    modalType,
    handleMessageCheck,
    closeModal,
    handleConfirm,
    handlePrepare,
  } = useModal();

  // useMailフックを使用して選択されたメールの状態を取得
  const { selectedMail } = useMail();

  // useEmailComposerフックを使用してEmailComposerの状態を更新する関数を取得
  const { setReplyInfo } = useEmailComposer();

  const line: string = 'ーーーーーーーーーーーーーーーーーーーーーー';

  // 返信処理を行う関数
  const handleReply = useCallback(() => {
    if (selectedMail) {
      // EmailComposerの状態を更新
      setReplyInfo({
        to: selectedMail.name,
        subject: `Re: ${selectedMail.subject || ''}`,
        body: `\n${line}\n${selectedMail.date}　<${selectedMail.email}> \n\n${
          selectedMail.body || ''
        }`,
        date: selectedMail.date,
      });

      // 新しいメール作成ページに遷移
      router.push('/createEmail');
    }
  }, [selectedMail, setReplyInfo, router]);

  // アクションに応じた処理を行う関数
  const handleAction = useCallback(
    (action: string): void => {
      switch (action) {
        case 'checkNewMessage':
          handleMessageCheck();
          break;
        case 'newMessage':
          router.push('/createEmail');
          break;
        case 'reply':
          handleReply();
          break;
        case 'flag':
          handlePrepare();
          break;
        case 'trash':
          handlePrepare();
          break;
        case 'otherActions':
          handlePrepare();
          break;
        default:
          handlePrepare();
      }
    },
    [router, handleMessageCheck, handleReply, handlePrepare]
  );

  // ボタンクリック時の共通処理を行う関数
  const handleButtonClick = useCallback(
    (button: ToolbarButton): void => {
      // actionプロパティが存在する場合、対応する処理を実行
      handleAction(button.action);
    },
    [router, handleAction] // この関数が依存する外部の値
  );

  // 検索をクリアする関数
  const clearSearch = useCallback((): void => {
    setSearchTerm('');
  }, [setSearchTerm]);

  // 検索入力の変更を処理する関数
  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchTerm(e.target.value);
    },
    [searchTerm]
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
        {/* 検索入力フィールド */}
        {/* 相対位置を設定し、左マージンを追加 */}
        <div className='relative ml-2'>
          {/* 検索入力フィールド */}
          {/* 上下右のボーダーを追加し、右側を角丸にし、パディングを設定し、テキストサイズを大きくする */}
          <input
            type='text' // テキスト入力フィールド
            value={searchTerm} // 検索語の現在の値
            onChange={handleFilterChange} // 検索語が変更されたときの処理
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
