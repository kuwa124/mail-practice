// モーダルの種類を定義：送信、破棄、送信完了、破棄完了、設定、連絡先削除確認、連絡先選択、新着メッセージ確認、またはnull（モーダルを表示しない）
export type ModalType =
  | 'send'
  | 'discard'
  | 'sendComplete'
  | 'discardComplete'
  | 'settings'
  | 'confirmDelete'
  | 'selectContact'
  | 'checkNewMessage'
  | 'prepare'
  | null;

// モーダルコンポーネントのプロップスの型定義
export type ModalProps = {
  isOpen: boolean; // モーダルの表示状態を制御するブール値
  onClose: () => void; // モーダルを閉じる関数
  onConfirm: () => void; // 確認ボタンクリック時の処理を行う関数
  modalType: ModalType; // モーダルの種類を指定する文字列
};

// モーダルの内容の型定義
export type ModalContent = {
  title: string; // モーダルのタイトル
  message?: string; // モーダルのメッセージ
  confirmButton: string; // 確認ボタン
  showCancelButton: boolean;
};

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
  // 連絡先削除確認用のモーダル内容を追加
  confirmDelete: {
    title: '連絡先の削除',
    message: '本当にこの連絡先を削除しますか？',
    confirmButton: '削除',
    showCancelButton: true,
  },
  // 連絡先選択用のモーダル内容を追加
  selectContact: {
    title: '連絡先の選択',
    message: '削除する連絡先を選択してください',
    confirmButton: 'OK',
    showCancelButton: false,
  },
  // 新着メッセージ確認用のモーダル内容を追加
  checkNewMessage: {
    title: '新着メッセージ確認',
    message: '新しいメッセージはありません。',
    confirmButton: 'OK',
    showCancelButton: false,
  },
  prepare: {
    title: '準備中', // タイトル
    message: 'この機能は未実装です。', // メッセージ
    confirmButton: 'OK', // 確認ボタン
    showCancelButton: false, // キャンセルボタンを非表示
  },
};
