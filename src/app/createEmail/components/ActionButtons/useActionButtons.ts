import { useState } from 'react';

export const useActionButtons = () => {
  // モーダルの表示状態を管理するstate
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // 送信ボタンクリック時の処理
  const handleSubmit = (): void => {
    // モーダルを表示
    setIsModalOpen(true);
  };

  // モーダルを閉じる処理
  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  // 送信確認時の処理
  const confirmSend = (): void => {
    closeModal();
  };

  return { isModalOpen, handleSubmit, closeModal, confirmSend };
};