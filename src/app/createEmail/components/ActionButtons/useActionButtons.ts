// React Hooksをインポート：状態管理のためのuseStateを使用
import { useState } from 'react';

// Next.jsのルーターをインポート：ページ遷移のために使用
import { useRouter } from 'next/navigation';

// モーダルの種類を定義：送信、破棄、またはnull（モーダルを表示しない）
type ModalType = 'send' | 'discard' | null;

// アクションボタンの機能を提供するカスタムフック
export const useActionButtons = () => {
  // モーダルの種類を管理するstate
  // useState<ModalType>で初期値をnullに設定
  const [modalType, setModalType] = useState<ModalType>(null);

  // Next.jsのルーターを初期化：ページ遷移に使用
  const router = useRouter();

  // 送信ボタンクリック時の処理
  // モーダルの種類を'send'に設定
  const handleSendClick = (): void => {
    setModalType('send');
  };

  // 破棄ボタンクリック時の処理
  // モーダルの種類を'discard'に設定
  const handleDiscardClick = (): void => {
    setModalType('discard');
  };

  // モーダルを閉じる処理
  // モーダルの種類をnullに設定してモーダルを非表示にする
  const closeModal = (): void => {
    setModalType(null);
  };

  // 送信確認時の処理
  const confirmSend = (): void => {
    closeModal(); // モーダルを閉じる
    // TODO: ここに実際の送信処理を追加
    console.log('メッセージを送信しました');
  };

  // 破棄確認時の処理
  const confirmDiscard = (): void => {
    closeModal(); // モーダルを閉じる
    router.push('/'); // ルートページに遷移
  };

  // 確認ボタンがクリックされたときの処理
  // モーダルの種類に応じて適切な処理を実行
  const handleConfirm = (): void => {
    if (modalType === 'send') {
      confirmSend();
    } else if (modalType === 'discard') {
      confirmDiscard();
    }
  };

  // フックから必要な状態と関数を返す
  return {
    modalType,
    handleSendClick,
    handleDiscardClick,
    closeModal,
    handleConfirm,
  };
};
