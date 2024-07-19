'use client'; // クライアントサイドでの実行を明示

// Reactと必要な関数をインポート
import React, { createContext, useContext, useState, ReactNode } from 'react';

// コンテキストの型定義
type EmailContextType = {
  selectedEmail: string | null; // 選択されたメールアドレス
  setSelectedEmail: (email: string | null) => void; // メールアドレスを設定する関数
};

// EmailContextを作成
// createContext: コンテキストを作成する関数
// undefined: 初期値として未定義を設定
const EmailContext = createContext<EmailContextType | undefined>(undefined);
// EmailContextType | undefined: コンテキストの型を指定（EmailContextTypeまたは未定義）

// EmailProviderの型定義
type EmailProviderProps = {
  children: ReactNode; // 子コンポーネント
};

// EmailProviderコンポーネントの定義
// React.FC: 関数コンポーネントの型
// EmailProviderProps: このコンポーネントのプロパティの型
// ({ children }): 分割代入で子コンポーネントを受け取る
export const EmailProvider: React.FC<EmailProviderProps> = ({ children }) => {
  // 選択されたメールアドレスの状態を管理
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);

  // コンテキストの値
  const value = {
    selectedEmail,
    setSelectedEmail,
  };

  // プロバイダーコンポーネントを返す
  // EmailContext.Provider: コンテキストのプロバイダーコンポーネント
  // value: コンテキストで共有する値
  // {children}: 子コンポーネントをレンダリング
  return (
    <EmailContext.Provider value={value}>{children}</EmailContext.Provider>
  );
};

// カスタムフック：useEmailContext
export const useEmailContext = () => {
  // useContextを使用してEmailContextの値を取得
  const context = useContext(EmailContext);
  // コンテキストが見つからない場合はエラーをスロー
  if (context === undefined) {
    throw new Error('useEmailContext must be used within an EmailProvider');
  }
  return context;
};
