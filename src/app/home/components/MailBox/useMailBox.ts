// Reactの必要なフックをインポート
import { Mail } from '@/app/shared/constants'; // Mail型をインポート
import { useState } from 'react';

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
