// モーダルの種類を定義：送信、破棄、送信完了、破棄完了、またはnull（モーダルを表示しない）
export type ModalType =
  | 'send'
  | 'discard'
  | 'sendComplete'
  | 'discardComplete'
  | 'settings'
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
  message?: string; // モーダルのメッセージ
  confirmButton: string; // 確認ボタン
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
  settings: {
    title: '設定が保存されました。',
    confirmButton: 'OK',
    showCancelButton: false,
  },
};
