// FontAwesomeアイコンをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// プラスアイコンとゴミ箱アイコンをインポート
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

// EditComponentの型定義
type EditComponentProps = {
  // 将来的に props が必要になった場合のために空のオブジェクトを定義
};

// アイコンを横並びで表示し、クリックしやすいように角丸の四角で囲むコンポーネント
const EditComponent: React.FC<EditComponentProps> = () => {
  return (
    // コンテナ要素：アイコンを横並びに配置し、背景色や余白を設定
    <div
      // 幅を設定し、アイコンを横並びにし、背景色を薄いグレーに、余白と角丸を適用
      className='w-60 flex items-center space-x-2 p-2 mx-2 mt-3 rounded bg-gray-300 text-gray-800'
    >
      {/* プラスアイコンを表示する要素 */}
      <div
        // ホバー時に背景色が変わる角丸の四角形を作成
        className='transition-colors duration-200 rounded p-2 hover:bg-gray-200'
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
        className='transition-colors duration-200 rounded p-2 hover:bg-gray-200'
      >
        {/* FontAwesomeIconコンポーネントでゴミ箱アイコンを表示 */}
        <FontAwesomeIcon
          icon={faTrashCan} // ゴミ箱アイコンを指定
          className='text-xl' // アイコンのサイズを大きめに設定
        />
      </div>
    </div>
  );
};

// EditComponentをエクスポート
export default EditComponent;
