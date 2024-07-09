// Font Awesomeのアイコンをインポート
import {
  faEnvelope,
  faPen,
  faReply,
  faFlag,
  faTrash,
  faEllipsisH,
  faSearch,
  faChevronDown,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

// ツールバーのボタン情報を定義
export const TOOLBAR_BUTTONS = [
  {
    icon: faEnvelope,
    message: '新しく届いたメッセージを確認',
    ariaLabel: 'メッセージ確認',
  },
  {
    icon: faPen,
    message: '新しいメッセージを作成',
    ariaLabel: '新規メッセージ',
    action: 'newMessage',
  },
  { icon: faReply, message: '返信', ariaLabel: '返信' },
  { icon: faFlag, message: 'マークをつける', ariaLabel: 'マーク' },
  { icon: faTrash, message: 'ゴミ箱に移動', ariaLabel: 'ゴミ箱' },
  { icon: faEllipsisH, message: 'その他の操作', ariaLabel: 'その他' },
];

// 頻繁に使用される共通のスタイルを定数として定義
export const COMMON_STYLES = {
  FLEX_CENTER: 'flex items-center justify-center',
  ROUNDED: 'rounded',
  TRANSITION: 'transition-colors duration-200',
};

// ボタンのホバー時の背景色を定数として定義
export const HOVER_BG = 'hover:bg-gray-200';
