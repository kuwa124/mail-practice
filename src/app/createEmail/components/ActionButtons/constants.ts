import {
  faFileAlt, // ファイルアイコンをインポート
  faPaperclip, // クリップアイコンをインポート
} from '@fortawesome/free-solid-svg-icons'; // Font Awesome の無料の実線アイコンをインポート

// アクションアイコンの型定義
export interface ActionIcon {
  icon: typeof faFileAlt; // アイコンの型（Font Awesome アイコン）
  tooltip: string; // ツールチップのテキスト
}

// アクションアイコンの設定を定数化
export const ACTION_ICONS: ActionIcon[] = [
  { icon: faFileAlt, tooltip: '下書きとして保存' }, // 下書き保存アイコンとツールチップ
  { icon: faPaperclip, tooltip: '添付ファイル' }, // 添付ファイルアイコンとツールチップ
];

// モーダルの種類を定義：送信、破棄、送信完了、破棄完了、またはnull（モーダルを表示しない）
export type ModalType =
  | 'send'
  | 'discard'
  | 'sendComplete'
  | 'discardComplete'
  | null;

// モーダルコンポーネントのプロップスの型定義
export interface ModalProps {
  isOpen: boolean; // モーダルの表示状態を制御するブール値
  onClose: () => void; // モーダルを閉じる関数
  onConfirm: () => void; // 確認ボタンクリック時の処理を行う関数
  modalType: ModalType; // モーダルの種類を指定する文字列
}

// モーダルの内容の型定義
export interface ModalContent {
  title: string; // モーダルのタイトル
  message: string; // モーダルのメッセージ
  confirmButton?: string; // 確認ボタン（オプショナル）
  showCancelButton: boolean;
}

// モーダルの内容を定義：モーダルの種類に応じて表示内容を設定
export const modalContents: Record<Exclude<ModalType, null>, ModalContent> = {
  send: {
    title: 'メール送信の確認',
    message: 'メールを送信しますか？\n※実際には送信されません。',
    confirmButton: '送信',
    showCancelButton: true,
  },
  discard: {
    title: 'メール破棄の確認',
    message: '変更した内容を破棄しますか?',
    confirmButton: 'OK',
    showCancelButton: true,
  },
  sendComplete: {
    title: 'メールの送信',
    message: 'メールを送信しました。\n※実際には送信されていません。',
    confirmButton: 'OK',
    showCancelButton: false,
  },
  discardComplete: {
    title: 'メール破棄',
    message: 'メールの破棄を完了しました。',
    confirmButton: 'OK',
    showCancelButton: false,
  },
};

// 共通のスタイルを定数化
// ボタンの基本スタイル：パディング、角丸、フォーカス時のリング
export const BUTTON_BASE_STYLE =
  'px-3 py-2 rounded-md focus:outline-none focus:ring-2';
// px-3: 左右のパディング
// py-2: 上下のパディング
// rounded-md: 中程度の角丸
// focus:outline-none: フォーカス時のアウトラインを非表示
// focus:ring-2: フォーカス時に2pxの太さのリングを表示

// 送信ボタンのスタイル：青色背景、白文字、ホバー時の濃い青
export const SEND_BUTTON_STYLE = `${BUTTON_BASE_STYLE} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300`;
// bg-blue-600: 青色の背景
// text-white: 白色のテキスト
// hover:bg-blue-700: ホバー時に濃い青色の背景
// focus:ring-blue-300: フォーカス時に薄い青色のリング

// アクションボタンのスタイル：グレーのホバー効果、グレーのフォーカスリング
export const ACTION_BUTTON_STYLE = `${BUTTON_BASE_STYLE} hover:bg-gray-100 focus:ring-gray-300`;
// hover:bg-gray-100: ホバー時に薄いグレーの背景
// focus:ring-gray-300: フォーカス時に薄いグレーのリング
