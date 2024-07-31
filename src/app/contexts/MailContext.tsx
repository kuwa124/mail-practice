'use client'; // クライアントサイドでの実行を明示

// 必要なモジュールとタイプをインポート
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Mail } from '@/app/shared/constants'; // Mail型をインポート

// コンテキストの型定義
type MailContextType = {
  selectedMail: Mail | null; // 選択されたメール
  setSelectedMail: (mail: Mail | null) => void; // 選択されたメールを設定する関数
};

// デフォルト値を持つコンテキストを作成
const MailContext = createContext<MailContextType>({
  selectedMail: null,
  setSelectedMail: () => {},
});

// プロバイダーコンポーネントの型定義
type MailProviderProps = {
  children: ReactNode; // 子コンポーネント
};

// メールコンテキストのプロバイダーコンポーネント
export function MailProvider({ children }: MailProviderProps) {
  // 選択されたメールの状態を管理
  const [selectedMail, setSelectedMail] = useState<Mail | null>(null);

  // コンテキストの値を提供
  return (
    <MailContext.Provider value={{ selectedMail, setSelectedMail }}>
      {children}
    </MailContext.Provider>
  );
}

// カスタムフックを作成してコンテキストを使用しやすくする
export function useMail() {
  const context = useContext(MailContext);
  if (context === undefined) {
    throw new Error('useMailはMailProviderの中で使用する必要があります');
  }
  return context;
}
