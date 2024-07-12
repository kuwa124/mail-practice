// React の useState フックをインポート
import { useState } from 'react';

// ActionButtons コンポーネントのロジックを管理するカスタムフック
export const useActionButtons = () => {
  // モーダルの表示状態を管理する state
  // useState<boolean>(false): 初期値を false に設定し、boolean 型の state を作成
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // 送信ボタンクリック時の処理
  // void 型の戻り値を持つ関数（何も返さない）
  const handleSubmit = (): void => {
    // モーダルを表示するため、isModalOpen を true に設定
    setIsModalOpen(true);
  };

  // モーダルを閉じる処理
  // void 型の戻り値を持つ関数（何も返さない）
  const closeModal = (): void => {
    // モーダルを非表示にするため、isModalOpen を false に設定
    setIsModalOpen(false);
  };

  // フックから必要な状態と関数を返す
  return { isModalOpen, handleSubmit, closeModal };
};
