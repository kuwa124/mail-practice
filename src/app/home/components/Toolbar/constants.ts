// Font Awesomeのアイコンをインポート
import {
  faEllipsisH, // その他（省略記号）アイコン
  faEnvelope, // メールアイコン
  faFlag, // フラッグアイコン
  faPen, // ペンアイコン
  faReply, // 返信アイコン
  faTrash, // ゴミ箱アイコン
  IconDefinition, // アイコン定義の型をインポート
} from '@fortawesome/free-solid-svg-icons';

// ツールバーボタンの型定義
export type ToolbarButton = {
  icon: IconDefinition; // Font Awesomeアイコンの型
  message: string; // アイコンの説明文
  ariaLabel: string; // アクセシビリティ用のラベル
  action: string; // ボタンのアクション（必須）
};

// ツールバーのボタン情報を定義
export const TOOLBAR_BUTTONS: ToolbarButton[] = [
  {
    icon: faEnvelope,
    message: '新しく届いたメッセージを確認',
    ariaLabel: 'メッセージ確認',
    action: 'checkNewMessage',
  },
  {
    icon: faPen,
    message: '新しいメッセージを作成',
    ariaLabel: '新規メッセージ',
    action: 'newMessage',
  },
  {
    icon: faReply,
    message: '返信',
    ariaLabel: '返信',
    action: 'reply',
  },
  {
    icon: faFlag,
    message: 'マークをつける',
    ariaLabel: 'マーク',
    action: 'flag', // フラッグアクションに変更
  },
  {
    icon: faTrash,
    message: 'ゴミ箱に移動',
    ariaLabel: 'ゴミ箱',
    action: 'trash', // ゴミ箱アクションに変更
  },
  {
    icon: faEllipsisH,
    message: 'その他の操作',
    ariaLabel: 'その他',
    action: 'otherActions', // その他のアクションに変更
  },
];
