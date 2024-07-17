// ユーザー操作に適応するための定型文
'use client';

// 必要なReactフックとコンポーネントをインポート
import React, { createContext, useState, useContext, useEffect } from 'react';
// 定数SIGNATUREをインポート
import { SIGNATURE } from '@/app/createEmail/components/EmailComposer/constants';

// コンテキストの型を定義
// SignatureContextType: 署名の状態と更新関数の型を定義
type SignatureContextType = {
  signature: string; // 現在の署名を保持する文字列
  setSignature: (signature: string) => void; // 署名を更新する関数
};

// コンテキストを作成
// SignatureContext: 署名の状態を共有するためのReactコンテキスト
const SignatureContext = createContext<SignatureContextType | undefined>(
  undefined
);

// コンテキストプロバイダーコンポーネントを作成
// SignatureProvider: 子コンポーネントに署名の状態を提供するコンポーネント
export const SignatureProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // signature: 現在の署名の状態
  // setSignature: 署名を更新する関数
  const [signature, setSignature] = useState(SIGNATURE);

  // コンポーネントのマウント時にローカルストレージから署名を読み込む
  useEffect(() => {
    // ローカルストレージから保存された署名を取得
    const savedSignature = localStorage.getItem('userSignature');
    // 保存された署名が存在する場合、状態を更新
    if (savedSignature) {
      setSignature(savedSignature);
    }
  }, []); // 空の依存配列で、マウント時のみ実行

  // 署名が変更されたらローカルストレージに保存
  useEffect(() => {
    // 現在の署名をローカルストレージに保存
    localStorage.setItem('userSignature', signature);
  }, [signature]); // signatureが変更されたときのみ実行

  // SignatureContext.Providerを使用して、子コンポーネントに署名の状態を提供
  return (
    <SignatureContext.Provider value={{ signature, setSignature }}>
      {children}
    </SignatureContext.Provider>
  );
};

// カスタムフックを作成して、コンテキストの使用を簡単にする
// useSignature: 署名のコンテキストを簡単に使用するためのカスタムフック
export const useSignature = () => {
  // useContextを使用してSignatureContextの値を取得
  const context = useContext(SignatureContext);
  // コンテキストが未定義の場合（Providerの外で使用された場合）、エラーをスロー
  if (context === undefined) {
    throw new Error('useSignature must be used within a SignatureProvider');
  }
  // コンテキストの値を返す
  return context;
};
