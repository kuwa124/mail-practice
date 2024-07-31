// React Hooksをインポート：状態管理のためのuseStateとuseCallbackを使用
import { useCallback, useState } from 'react';

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
  const closeModal = useCallback((): void => {
    setModalType(null);
  }, []);

  // 新着メッセージ確認の処理
  // 'checkNewMessage'モーダルを表示する関数
  const handleMessageCheck = useCallback((): void => {
    // モーダルタイプを'checkNewMessage'に設定して新着メッセージ確認モーダルを表示
    setModalType('checkNewMessage');
  }, []);

  // 送信ボタンクリック時の処理
  // モーダルの種類を'send'に設定
  const handleSendClick = useCallback((): void => {
    setModalType('send');
  }, []);

  // 破棄ボタンクリック時の処理
  // モーダルの種類を'discard'に設定
  const handleDiscardClick = useCallback((): void => {
    setModalType('discard');
  }, []);

  // 送信確認時の処理
  const confirmSend = useCallback((): void => {
    closeModal(); // モーダルを閉じる
    setModalType('sendComplete');
  }, [closeModal]);

  const confirmComplete = useCallback((): void => {
    router.push('/'); // ルートページに遷移
  }, [router]);

  // 破棄確認時の処理
  const confirmDiscard = useCallback((): void => {
    closeModal(); // モーダルを閉じる
    setModalType('discardComplete');
  }, [closeModal]);

  // 設定を保存する関数
  const handleSave = useCallback((): void => {
    setModalType('settings');
  }, []);

  // 連絡先削除確認時の処理
  const confirmDelete = useCallback((): void => {
    closeModal(); // モーダルを閉じる
    // ここに実際の削除処理を追加
    console.log('連絡先を削除しました');
  }, [closeModal]);

  // 確認ボタンがクリックされたときの処理
  // モーダルタイプに応じた処理を実行する関数
  const handleConfirm = useCallback((): void => {
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
      confirmDelete: confirmDelete, // 連絡先削除確認用の関数
      selectContact: closeModal, // 連絡先選択用の関数（ここでは単にモーダルを閉じる）
      checkNewMessage: closeModal, // 新着メッセージ確認用の関数（モーダルを閉じる）
    };

    // モーダルタイプに対応する関数を実行
    actionMap[modalType]();
  }, [
    modalType,
    confirmSend,
    confirmDiscard,
    confirmComplete,
    closeModal,
    confirmDelete,
  ]);

  // フックから必要な状態と関数を返す
  return {
    modalType,
    setModalType,
    handleSendClick,
    handleDiscardClick,
    closeModal,
    handleConfirm,
    handleSave,
    handleMessageCheck, // 新しく追加した関数をエクスポート
  };
};
