// React Hooksをインポート：状態管理のためのuseStateを使用
import { useState } from 'react';

// Next.jsのルーターをインポート：ページ遷移のために使用
import { useRouter } from 'next/navigation';

// 共通の型定義をインポート：ModalTypeを使用するために必要
import { ModalType } from '@/app/Modal/constants';

// アクションボタンの機能を提供するカスタムフック
export const useModal = () => {
  // モーダルの種類を管理するstate
  // useState<ModalType>で初期値をnullに設定
  const [modalType, setModalType] = useState<ModalType>(null);

  // Next.jsのルーターを初期化：ページ遷移に使用
  const router = useRouter();

  // モーダルを閉じる処理
  // モーダルの種類をnullに設定してモーダルを非表示にする
  const closeModal = (): void => {
    setModalType(null);
  };

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

  // 送信確認時の処理
  const confirmSend = (): void => {
    closeModal(); // モーダルを閉じる
    setModalType('sendComplete');
  };

  const confirmComplete = (): void => {
    router.push('/'); // ルートページに遷移
  };

  // 破棄確認時の処理
  const confirmDiscard = (): void => {
    closeModal(); // モーダルを閉じる
    setModalType('discardComplete');
  };

  // 設定を保存する関数
  const handleSave = (): void => {
    setModalType('settings');
  };

  // 確認ボタンがクリックされたときの処理
  // モーダルタイプに応じた処理を実行する関数
  const handleConfirm = (): void => {
    // モーダルタイプが未定義の場合は何もしない
    if (modalType === null) return;

    // モーダルタイプと対応する関数のマッピング
    // Excludeを使用してnullを除外したModalTypeをキーとして使用
    const actionMap: Record<Exclude<ModalType, null>, () => void> = {
      send: confirmSend, // 送信確認用の関数
      discard: confirmDiscard, // 破棄確認用の関数
      sendComplete: confirmComplete, // 完了確認用の関数
      discardComplete: confirmComplete, // 完了確認用の関数
      settings: closeModal, // 設定を保存する関数(モーダルを閉じる)
    };

    // モーダルタイプに対応する関数を実行
    actionMap[modalType]();
  };

  // フックから必要な状態と関数を返す
  return {
    modalType,
    handleSendClick,
    handleDiscardClick,
    closeModal,
    handleConfirm,
    handleSave,
  };
};
