// React関連の必要なモジュールをインポート
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Mail型をインポート（連絡先の型定義）
import { Mail } from '@/app/shared/constants';

// コンテキストの型定義：選択された連絡先の状態と、それを更新する関数を含む
type ContactContextType = {
  selectedContact: Mail | null; // 選択された連絡先（またはnull）
  setSelectedContact: (contact: Mail | null) => void; // 選択された連絡先を更新する関数
};

// コンテキストの作成：初期値はundefined
const ContactContext = createContext<ContactContextType | undefined>(undefined);

// コンテキストプロバイダーの属性の型定義
type ContactProviderProps = {
  children: ReactNode; // プロバイダーで囲む子要素の型
};

// コンテキストプロバイダーコンポーネント：子コンポーネントにコンテキストを提供
export const ContactProvider: React.FC<ContactProviderProps> = ({
  children,
}) => {
  // 選択された連絡先の状態を管理するstate
  const [selectedContact, setSelectedContact] = useState<Mail | null>(null);

  // コンテキストの値とそれを更新する関数をプロバイダーの値として設定
  return (
    <ContactContext.Provider value={{ selectedContact, setSelectedContact }}>
      {children} {/* 子コンポーネントをレンダリング */}
    </ContactContext.Provider>
  );
};

// カスタムフック：コンテキストを使用するためのフック
export const useContact = () => {
  // コンテキストの値を取得
  const context = useContext(ContactContext);

  // コンテキストが提供されていない場合（プロバイダーの外で使用された場合）にエラーを投げる
  if (context === undefined) {
    throw new Error('useContact must be used within a ContactProvider');
  }

  // コンテキストの値を返す
  return context;
};
