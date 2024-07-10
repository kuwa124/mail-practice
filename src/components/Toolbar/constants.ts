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
    message: '新しく届いたメッセージを確認', // アイコンの説明
    ariaLabel: 'メッセージ確認', // アクセシビリティラベル
  },
  {
    icon: faPen,
    message: '新しいメッセージを作成', // アイコンの説明
    ariaLabel: '新規メッセージ', // アクセシビリティラベル
    action: 'newMessage', // 実行されるアクション
  },
  {
    icon: faReply,
    message: '返信', // アイコンの説明
    ariaLabel: '返信', // アクセシビリティラベル
  },
  {
    icon: faFlag,
    message: 'マークをつける', // アイコンの説明
    ariaLabel: 'マーク', // アクセシビリティラベル
  },
  {
    icon: faTrash,
    message: 'ゴミ箱に移動', // アイコンの説明
    ariaLabel: 'ゴミ箱', // アクセシビリティラベル
  },
  {
    icon: faEllipsisH,
    message: 'その他の操作', // アイコンの説明
    ariaLabel: 'その他', // アクセシビリティラベル
  },
];

// 頻繁に使用される共通のスタイルを定数として定義
export const COMMON_STYLES = {
  // Flexboxで中央に配置
  FLEX_CENTER: 'flex items-center justify-center',
  // 角を丸くする
  ROUNDED: 'rounded',
  // ホバー時の色変更にトランジションを適用
  TRANSITION: 'transition-colors duration-200',
};

// ボタンのホバー時の背景色を定数として定義
export const HOVER_BG = 'hover:bg-gray-200';
