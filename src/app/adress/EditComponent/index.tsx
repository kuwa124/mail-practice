// FontAwesomeアイコンをインポートする
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// プラスアイコンとゴミ箱アイコンをインポートする
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

// アイコンを横並びで表示し、クリックしやすいように角丸の四角で囲む
const EditComponent = () => {
  return (
    // 幅を設定し、flexboxを使用してアイテムを横並びにし、アイテム間の余白を設定し、外側の余白を設定し、背景色を薄いグレーに設定し、角丸を適用し、テキストの色を設定する
    <div className='w-60 flex items-center space-x-2 p-2 mx-2 rounded bg-gray-300 text-gray-800'>
      {/* プラスアイコンを表示する */}
      {/* トランジション効果を適用し、角丸を適用し、余白を設定し、ホバー時の背景色を変更する */}
      <div className='transition-colors duration-200 rounded p-2 hover:bg-gray-200'>
        {/* FontAwesomeIconコンポーネントを使用してアイコンを表示する */}
        {/* テキストのサイズを指定する */}
        <FontAwesomeIcon icon={faPlus} className='text-xl' />
      </div>

      {/* ゴミ箱アイコンを表示する */}
      {/* トランジション効果を適用し、角丸を適用し、余白を設定し、ホバー時の背景色を変更する */}
      <div className='transition-colors duration-200 rounded p-2 hover:bg-gray-200'>
        {/* FontAwesomeIconコンポーネントを使用してアイコンを表示する */}
        {/* テキストのサイズを指定する */}
        <FontAwesomeIcon icon={faTrashCan} className='text-xl' />
      </div>
    </div>
  );
};

// EditComponentをエクスポートする
export default EditComponent;
