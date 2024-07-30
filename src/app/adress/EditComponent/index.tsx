// FontAwesomeアイコンをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// プラスアイコンとゴミ箱アイコンをインポート
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

// React関連のインポート
import React, { useState } from 'react';

// AdressEditorコンポーネントをインポート
import { AdressEditor } from '@/app/adress/EditContact/AdressEditor';

// EditComponentの型定義
type EditComponentProps = {
  // 将来的に props が必要になった場合のために空のオブジェクトを定義
};

// アイコンを横並びで表示し、クリックしやすいように角丸の四角で囲むコンポーネント
const EditComponent: React.FC<EditComponentProps> = () => {
  // 新規連絡先作成モードの状態を管理
  const [isCreating, setIsCreating] = useState(false);

  // プラスアイコンクリック時のハンドラ
  const handlePlusClick = () => {
    setIsCreating(true);
  };

  return (
    // コンテナ要素：アイコンを横並びに配置し、背景色や余白を設定
    <div
      // 幅を設定し、アイコンを横並びにし、背景色を薄いグレーに、余白と角丸を適用
      className='w-60 flex items-center space-x-2 p-2 mx-2 mt-3 rounded bg-gray-300 text-gray-800'
    >
      {/* プラスアイコンを表示する要素 */}
      <div
        // ホバー時に背景色が変わる角丸の四角形を作成
        className='transition-colors duration-200 rounded p-2 hover:bg-gray-200 cursor-pointer'
        onClick={handlePlusClick} // クリック時に新規作成モードを有効にする
      >
        {/* FontAwesomeIconコンポーネントでプラスアイコンを表示 */}
        <FontAwesomeIcon
          icon={faPlus} // プラスアイコンを指定
          className='text-xl' // アイコンのサイズを大きめに設定
        />
      </div>

      {/* ゴミ箱アイコンを表示する要素 */}
      <div
        // ホバー時に背景色が変わる角丸の四角形を作成
        className='transition-colors duration-200 rounded p-2 hover:bg-gray-200 cursor-pointer'
      >
        {/* FontAwesomeIconコンポーネントでゴミ箱アイコンを表示 */}
        <FontAwesomeIcon
          icon={faTrashCan} // ゴミ箱アイコンを指定
          className='text-xl' // アイコンのサイズを大きめに設定
        />
      </div>

      {/* 新規連絡先作成モードの場合、AdressEditorコンポーネントを表示 */}
      {isCreating && (
        <AdressEditor
          contact={null} // 新規作成なのでnullを渡す
          onClose={() => setIsCreating(false)} // 作成モードを終了する関数
          isNewContact={true} // 新規連絡先作成モードであることを示す
        />
      )}
    </div>
  );
};

// EditComponentをエクスポート
export default EditComponent;
