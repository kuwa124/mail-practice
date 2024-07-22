// Header/constants.ts

// Font Awesomeのアイコンをインポート
import {
  faInbox, // 受信トレイアイコン
  faAddressBook, // アドレス帳アイコン
  faGear, // 設定アイコン
  faRightFromBracket, // ログアウトアイコン
  IconDefinition, // アイコン定義の型をインポート
} from '@fortawesome/free-solid-svg-icons';

// ナビゲーションボタンの型定義
interface NavButton {
  name: string; // ボタンの名前
  icon: IconDefinition; // Font Awesomeアイコンの型
  href: string; // ボタンのリンク先
  ariaLabel: string; // アクセシビリティ用のラベル
}

// ナビゲーションボタンの設定
export const NAV_BUTTONS: NavButton[] = [
  {
    name: '受信トレイ',
    icon: faInbox,
    href: '/',
    ariaLabel: '受信トレイを開く',
  },
  {
    name: '連絡先',
    icon: faAddressBook,
    href: '/adress',
    ariaLabel: '連絡先を開く',
  },
  {
    name: '設定',
    icon: faGear,
    href: '/set',
    ariaLabel: '設定を開く',
  },
  {
    name: 'ログアウト',
    icon: faRightFromBracket,
    href: 'https://www.google.com/',
    ariaLabel: 'ログアウトする',
  },
];

// スタイル定義の型
interface CommonStyles {
  FLEX_CENTER: string; // Flexboxで中央に配置するためのスタイル
  BUTTON: string; // ボタンの基本スタイル
  ICON: string; // アイコンの基本スタイル
}

// 頻繁に使用される共通のスタイルを定数として定義
export const COMMON_STYLES: CommonStyles = {
  FLEX_CENTER: 'flex items-center justify-center', // Flexboxで中央に配置
  // ボタンの基本スタイル
  // 背景色をダークグレーに設定、パディングを追加、角を丸くする、Flexboxで配置
  BUTTON: 'bg-gray-700 px-2 py-1 rounded flex items-center',
  // アイコンの基本スタイル
  // 幅と高さを設定、右マージンを追加
  ICON: 'w-4 h-4 mr-2',
};

// ボタンのホバー時の背景色を定数として定義
export const HOVER_BG: string = 'hover:bg-gray-600'; // ホバー時に背景色を薄いグレーに変更
