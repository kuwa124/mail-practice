'use client'; // クライアントサイドでの実行を明示

// 必要なReactフックとコンポーネントをインポート
import React, { createContext, useState, useContext, useEffect } from 'react';

// アドレス情報の型定義
type AddressInfo = {
  name: string; // 名前を格納する文字列
  email: string; // メールアドレスを格納する文字列
  // 必要に応じて他のフィールドを追加
};

// コンテキストの型を定義
type AddressContextType = {
  addressInfo: AddressInfo; // 現在のアドレス情報
  setAddressInfo: (info: AddressInfo) => void; // アドレス情報を更新する関数
};

// コンテキストを作成（初期値はundefined）
const AddressContext = createContext<AddressContextType | undefined>(undefined);

// コンテキストプロバイダーコンポーネントを作成
export const AddressProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // アドレス情報の状態を管理するためのuseState
  const [addressInfo, setAddressInfo] = useState<AddressInfo>({
    name: '', // 名前の初期値は空文字列
    email: '', // メールアドレスの初期値は空文字列
  });

  // コンポーネントのマウント時にローカルストレージからアドレス情報を読み込む
  useEffect(() => {
    const savedAddressInfo = localStorage.getItem('userAddressInfo');
    if (savedAddressInfo) {
      setAddressInfo(JSON.parse(savedAddressInfo));
    }
  }, []); // 空の依存配列で、マウント時にのみ実行

  // アドレス情報が変更されたらローカルストレージに保存
  useEffect(() => {
    localStorage.setItem('userAddressInfo', JSON.stringify(addressInfo));
  }, [addressInfo]); // addressInfoが変更されるたびに実行

  // コンテキストプロバイダーでラップして子コンポーネントに渡す
  return (
    <AddressContext.Provider value={{ addressInfo, setAddressInfo }}>
      {children}
    </AddressContext.Provider>
  );
};

// カスタムフックを作成して、コンテキストの使用を簡単にする
export const useAddress = () => {
  const context = useContext(AddressContext);
  if (context === undefined) {
    // コンテキストがundefinedの場合はエラーをスロー
    throw new Error('useAddress must be used within an AddressProvider');
  }
  return context;
};
