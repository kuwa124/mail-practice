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
  href?: string; // ボタンのリンク先（オプション）
  action?: string; // オプションのアクション（一部のボタンにのみ存在）
  onClick?: () => void; // クリック時に実行する関数
};

// ボタンのクリック時に実行される関数を定義
const handleReply = () => console.log('返信します');
const handleFlag = () => console.log('マークをつけました');
const handleTrash = () => console.log('ゴミ箱に移動しました');
const handleOtherActions = () => console.log('その他の操作を実行します');

// ツールバーのボタン情報を定義
export const TOOLBAR_BUTTONS: ToolbarButton[] = [
  {
    icon: faEnvelope, // メールアイコンを使用
    message: '新しく届いたメッセージを確認', // アイコンの説明
    ariaLabel: 'メッセージ確認', // アクセシビリティラベル
    action: 'checkNewMessage', // メッセージ確認アクション
  },
  {
    icon: faPen, // ペンアイコンを使用
    message: '新しいメッセージを作成', // アイコンの説明
    ariaLabel: '新規メッセージ', // アクセシビリティラベル
    action: 'newMessage', // 新規メッセージ作成アクション
    href: '/createEmail', // 新規メッセージ作成ページへのリンク
  },
  {
    icon: faReply, // 返信アイコンを使用
    message: '返信', // アイコンの説明
    ariaLabel: '返信', // アクセシビリティラベル
    onClick: handleReply, // クリック時の処理
  },
  {
    icon: faFlag, // フラッグアイコンを使用
    message: 'マークをつける', // アイコンの説明
    ariaLabel: 'マーク', // アクセシビリティラベル
    onClick: handleFlag, // クリック時の処理
  },
  {
    icon: faTrash, // ゴミ箱アイコンを使用
    message: 'ゴミ箱に移動', // アイコンの説明
    ariaLabel: 'ゴミ箱', // アクセシビリティラベル
    onClick: handleTrash, // クリック時の処理
  },
  {
    icon: faEllipsisH, // その他（省略記号）アイコンを使用
    message: 'その他の操作', // アイコンの説明
    ariaLabel: 'その他', // アクセシビリティラベル
    onClick: handleOtherActions, // クリック時の処理
  },
];
