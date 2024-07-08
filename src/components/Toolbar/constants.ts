    // 使用するアイコンをインポート
import {
  faEnvelope, // メールアイコン（封筒の形）
  faInbox, // 受信トレイアイコン（箱の形）
  faAddressBook, // アドレス帳アイコン（開いた本の形）
  faGear, // 設定アイコン（歯車の形）
  faRightFromBracket, // ログアウトアイコン（ドアから出る矢印の形）
} from '@fortawesome/free-solid-svg-icons';

// ボタンの共通クラス
// bg-gray-700: 背景色をダークグレーに設定
// px-2: 左右の内側余白を設定（x軸）
// py-1: 上下の内側余白を設定（y軸）
// rounded: 角を丸くする
// flex: フレックスボックスコンテナにする
// items-center: フレックスボックスの子要素（アイテム）を中央に揃える
export const BUTTON_CLASS = 'bg-gray-700 px-2 py-1 rounded flex items-center';

// アイコンの共通クラス
// w-4: 幅をサイズ4に設定
// h-4: 高さをサイズ4に設定
// mr-2: 右側に余白を設定
export const ICON_CLASS = 'w-4 h-4 mr-2';

// ナビゲーションボタンの設定
export const NAV_BUTTONS = [
  { name: '受信トレイ', icon: faInbox },
  { name: '連絡先', icon: faAddressBook },
  { name: '設定', icon: faGear },
  { name: 'ログアウト', icon: faRightFromBracket },
];

// ロゴのアイコン
export const LOGO_ICON = faEnvelope;

// アプリ名
export const APP_NAME = 'Mail';
