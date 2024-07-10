// Font Awesome アイコンをインポート
import {
  faInbox,
  faPaperPlane,
  faExclamationTriangle,
  faTrash,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
// Font Awesome アイコンの型定義をインポート
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// ボタンの型定義
export interface ButtonConfig {
  name: string;
  icon: IconDefinition;
}

// サイドバー全体のスタイル
// w-48: 幅を12rem（192px）に設定
// bg-gray-300: 背景色を薄いグレー（#d1d5db）に設定
// space-y-2: 子要素間の垂直方向の間隔を0.5rem（8px）に設定
// m-2: 全方向のマージンを0.5rem（8px）に設定
// p-2: 全方向のパディングを0.5rem（8px）に設定
// rounded: 角を丸く設定（border-radius: 0.25rem;）
export const SIDEBAR_CLASS = 'w-48 bg-gray-300 space-y-2 m-2 p-2 rounded';

// ボタンの基本スタイル
// w-full: 幅を親要素の100%に設定
// text-left: テキストを左揃えに設定
// px-2: 左右のパディングを0.5rem（8px）に設定
// py-1: 上下のパディングを0.25rem（4px）に設定
// rounded: 角を丸く設定（border-radius: 0.25rem;）
// transition-colors: 色の変化をアニメーション化
// duration-200: アニメーションの持続時間を200ミリ秒に設定
// flex: フレックスボックスレイアウトを使用
// items-center: フレックスアイテムを垂直方向の中央に配置
export const BUTTON_BASE_CLASS =
  'w-full text-left px-2 py-1 rounded transition-colors duration-200 flex items-center';

// ボタンの設定
export const BUTTONS: ButtonConfig[] = [
  { name: '受信箱', icon: faInbox },
  { name: '下書き', icon: faFileAlt },
  { name: '送信済み', icon: faPaperPlane },
  { name: '迷惑メール', icon: faExclamationTriangle },
  { name: 'ごみ箱', icon: faTrash },
];
