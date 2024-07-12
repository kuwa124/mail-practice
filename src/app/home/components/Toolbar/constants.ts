// Font Awesomeのアイコンをインポート
import {
  faEnvelope, // メールアイコン
  faPen, // ペンアイコン
  faReply, // 返信アイコン
  faFlag, // フラッグアイコン
  faTrash, // ゴミ箱アイコン
  faEllipsisH, // その他（省略記号）アイコン
  IconDefinition, // アイコン定義の型をインポート
} from '@fortawesome/free-solid-svg-icons';

// ツールバーボタンの型定義
interface ToolbarButton {
  icon: IconDefinition; // Font Awesomeアイコンの型
  message: string; // アイコンの説明文
  ariaLabel: string; // アクセシビリティ用のラベル
  href: string; // ボタンのリンク先
  action?: string; // オプションのアクション（一部のボタンにのみ存在）
}

// ツールバーのボタン情報を定義
export const TOOLBAR_BUTTONS: ToolbarButton[] = [
  {
    icon: faEnvelope, // メールアイコンを使用
    message: '新しく届いたメッセージを確認', // アイコンの説明
    ariaLabel: 'メッセージ確認', // アクセシビリティラベル
    href: '#', // リンク先（ここではダミー）
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
    href: '#', // リンク先（ここではダミー）
  },
  {
    icon: faFlag, // フラッグアイコンを使用
    message: 'マークをつける', // アイコンの説明
    ariaLabel: 'マーク', // アクセシビリティラベル
    href: '#', // リンク先（ここではダミー）
  },
  {
    icon: faTrash, // ゴミ箱アイコンを使用
    message: 'ゴミ箱に移動', // アイコンの説明
    ariaLabel: 'ゴミ箱', // アクセシビリティラベル
    href: '#', // リンク先（ここではダミー）
  },
  {
    icon: faEllipsisH, // その他（省略記号）アイコンを使用
    message: 'その他の操作', // アイコンの説明
    ariaLabel: 'その他', // アクセシビリティラベル
    href: '#', // リンク先（ここではダミー）
  },
];

// スタイル定義の型
interface CommonStyles {
  FLEX_CENTER: string; // Flexboxで中央に配置するためのスタイル
  ROUNDED: string; // 角を丸くするためのスタイル
  TRANSITION: string; // トランジション効果を適用するためのスタイル
}

// 頻繁に使用される共通のスタイルを定数として定義
export const COMMON_STYLES: CommonStyles = {
  FLEX_CENTER: 'flex items-center justify-center', // Flexboxで中央に配置
  ROUNDED: 'rounded', // 角を丸くする
  TRANSITION: 'transition-colors duration-200', // ホバー時の色変更にトランジションを適用
};

// ボタンのホバー時の背景色を定数として定義
export const HOVER_BG: string = 'hover:bg-gray-200'; // ホバー時に背景色をグレーに変更
