// Font Awesomeのアイコンをインポート
import {
  faEnvelope,
  faPen,
  faReply,
  faFlag,
  faTrash,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

// ツールバーのボタン情報を定義
export const TOOLBAR_BUTTONS = [
  {
    icon: faEnvelope,
    message: '新しく届いたメッセージを確認',
    ariaLabel: 'メッセージ確認',
    href: '#',
  },
  {
    icon: faPen,
    message: '新しいメッセージを作成',
    ariaLabel: '新規メッセージ',
    action: 'newMessage',
    href: '/createEmail',
  },
  { icon: faReply, message: '返信', ariaLabel: '返信', href: '#' },
  { icon: faFlag, message: 'マークをつける', ariaLabel: 'マーク', href: '#' },
  { icon: faTrash, message: 'ゴミ箱に移動', ariaLabel: 'ゴミ箱', href: '#' },
  {
    icon: faEllipsisH,
    message: 'その他の操作',
    ariaLabel: 'その他',
    href: '#',
  },
];

// 頻繁に使用される共通のスタイルを定数として定義
export const COMMON_STYLES = {
  FLEX_CENTER: 'flex items-center justify-center',
  ROUNDED: 'rounded',
  TRANSITION: 'transition-colors duration-200',
};

// ボタンのホバー時の背景色を定数として定義
export const HOVER_BG = 'hover:bg-gray-200';
