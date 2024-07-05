// Font Awesome のコンポーネントをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 使用するアイコンをインポート
import {
  faEnvelope, // メールアイコン（封筒の形）
  faInbox, // 受信トレイアイコン（箱の形）
  faAddressBook, // アドレス帳アイコン（開いた本の形）
  faGear, // 設定アイコン（歯車の形）
  faRightFromBracket, // ログアウトアイコン（ドアから出る矢印の形）
} from '@fortawesome/free-solid-svg-icons';

// 定数の定義（DRY原則に基づく改善）
const BUTTON_CLASS = 'bg-gray-700 px-2 py-1 rounded flex items-center';
// bg-gray-700: 背景色を濃いグレーに設定
// px-2: 左右のパディングを2単位に設定
// py-1: 上下のパディングを1単位に設定
// rounded: 角を丸くする
// flex: フレックスボックスとして表示
// items-center: 子要素を垂直方向の中央に配置

const ICON_CLASS = 'w-4 h-4 mr-2';
// w-4: 幅を4単位に設定
// h-4: 高さを4単位に設定
// mr-2: 右マージンを2単位に設定

// ヘッダーコンポーネントの定義
export default function Header() {
  return (
    // ヘッダー全体のスタイリング
    <header className='bg-gray-800 text-white p-2 flex items-center justify-between'>
      {/* bg-gray-800: 背景色を暗いグレーに設定 */}
      {/* text-white: テキスト色を白に設定 */}
      {/* p-2: すべての方向のパディングを2単位に設定 */}
      {/* flex: フレックスボックスとして表示 */}
      {/* items-center: 子要素を垂直方向の中央に配置 */}
      {/* justify-between: 子要素を水平方向に均等に配置し、両端に寄せる */}

      {/* ロゴとアプリ名の部分 */}
      <div className='flex items-center'>
        {/* flex: フレックスボックスとして表示 */}
        {/* items-center: 子要素を垂直方向の中央に配置 */}

        {/* ロゴ（メールアイコン） */}
        <div className='bg-blue-500 p-1 rounded mr-2'>
          {/* bg-blue-500: 背景色を青に設定 */}
          {/* p-1: すべての方向のパディングを1単位に設定 */}
          {/* rounded: 角を丸くする */}
          {/* mr-2: 右マージンを2単位に設定 */}

          <FontAwesomeIcon icon={faEnvelope} className='w-6 h-6' />
          {/* w-6: 幅を6単位に設定 */}
          {/* h-6: 高さを6単位に設定 */}
        </div>
        {/* アプリ名 */}
        <span className='text-xl font-bold ml-2'>Mail</span>
        {/* text-xl: フォントサイズを大きく設定 */}
        {/* font-bold: フォントを太字に設定 */}
        {/* ml-2: 左マージンを2単位に設定 */}
      </div>
      {/* ナビゲーションボタンの部分 */}
      <div className='flex items-center space-x-4'>
        {/* flex: フレックスボックスとして表示 */}
        {/* items-center: 子要素を垂直方向の中央に配置 */}
        {/* space-x-4: 子要素間の水平方向の間隔を4単位に設定 */}

        {/* 受信トレイボタン */}
        <button className={BUTTON_CLASS}>
          <FontAwesomeIcon icon={faInbox} className={ICON_CLASS} />
          受信トレイ
        </button>
        {/* 連絡先ボタン */}
        <button className={BUTTON_CLASS}>
          <FontAwesomeIcon icon={faAddressBook} className={ICON_CLASS} />
          連絡先
        </button>
        {/* 設定ボタン */}
        <button className={BUTTON_CLASS}>
          <FontAwesomeIcon icon={faGear} className={ICON_CLASS} />
          設定
        </button>
        {/* ログアウトボタン */}
        <button className={BUTTON_CLASS}>
          <FontAwesomeIcon icon={faRightFromBracket} className={ICON_CLASS} />
          ログアウト
        </button>
      </div>
    </header>
  );
}
