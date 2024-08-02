'use client'; // クライアントサイドでの実行を明示

// React関連の機能と、状態管理のためのhookをインポート
import React, { createContext, useContext, useState } from 'react';

// 返信情報の型定義
type ReplyInfo = {
  to: string; // 宛先のメールアドレス
  subject: string; // メールの件名
  body: string; // メールの本文
  date?: string; // メールの送信日時
};

// EmailComposerContextの型定義
type EmailComposerContextType = {
  replyInfo: ReplyInfo | null; // 現在の返信情報
  setReplyInfo: (info: ReplyInfo) => void; // 返信情報を更新する関数
};

// EmailComposerContextの作成（初期値はundefined）
const EmailComposerContext = createContext<
  EmailComposerContextType | undefined
>(undefined);

// EmailComposerProviderコンポーネントの定義
export const EmailComposerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // replyInfoの状態と更新関数を定義
  const [replyInfo, setReplyInfo] = useState<ReplyInfo | null>(null);

  // ContextProviderでchildrenをラップして返す
  return (
    <EmailComposerContext.Provider value={{ replyInfo, setReplyInfo }}>
      {children}
    </EmailComposerContext.Provider>
  );
};

// useEmailComposerフックの定義
export const useEmailComposer = () => {
  // EmailComposerContextの値を取得
  const context = useContext(EmailComposerContext);

  // コンテキストが未定義の場合はエラーをスロー
  if (context === undefined) {
    throw new Error(
      'useEmailComposer must be used within a EmailComposerProvider'
    );
  }

  // コンテキストの値を返す
  return context;
};
