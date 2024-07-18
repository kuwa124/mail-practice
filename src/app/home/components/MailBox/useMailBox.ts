// Reactの必要なフックをインポート
import { useState } from 'react';
// 型定義をインポート
import { Mail } from '@/app/home/components/MailBox/constants';

// メールボックスの状態を管理するカスタムフック
export function useMailBox() {
  // 選択されたメールの状態を管理（初期値はnull）
  const [selectedMail, setSelectedMail] = useState<Mail | null>(null);

  // メールをクリックした時の処理
  const handleMailClick = (mail: Mail) => {
    setSelectedMail(mail); // クリックされたメールを選択状態にする
  };

  // フックの戻り値（選択されたメールの状態と更新関数）
  return { selectedMail, handleMailClick };
}
