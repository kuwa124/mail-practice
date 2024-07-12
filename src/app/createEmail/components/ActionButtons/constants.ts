import {
  faFileAlt,
  faPaperclip,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'; // Font Awesome のアイコンをインポート

// アクションアイコンの型定義
export interface ActionIcon {
  icon: typeof faFileAlt;
  tooltip: string;
}

// アクションアイコンの設定を定数化
export const ACTION_ICONS: ActionIcon[] = [
  { icon: faFileAlt, tooltip: '下書きとして保存' },
  { icon: faPaperclip, tooltip: '添付ファイル' },
  { icon: faTimes, tooltip: '破棄' },
];

// 共通のスタイルを定数化
// ボタンの基本スタイル：パディング、角丸、フォーカス時のリング
export const BUTTON_BASE_STYLE =
  'px-3 py-2 rounded-md focus:outline-none focus:ring-2';
// 送信ボタンのスタイル：青色背景、白文字、ホバー時の濃い青
export const SEND_BUTTON_STYLE = `${BUTTON_BASE_STYLE} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300`;
// アクションボタンのスタイル：グレーのホバー効果、グレーのフォーカスリング
export const ACTION_BUTTON_STYLE = `${BUTTON_BASE_STYLE} hover:bg-gray-100 focus:ring-gray-300`;
