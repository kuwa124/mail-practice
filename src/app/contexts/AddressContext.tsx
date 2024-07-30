// クライアントサイドでの実行を明示
'use client';

// Mail型とダミーデータをインポート
import { Mail, dummyMails } from '@/app/shared/constants';

// Reactのコンポーネントとフックをインポート
import React, { ReactNode, createContext, useContext, useState } from 'react';

// AddressContextTypeの型定義
type AddressContextType = {
  addresses: Mail[]; // 住所データの配列
  setAddresses: React.Dispatch<React.SetStateAction<Mail[]>>; // 住所データを設定する関数
};

// AddressContextの作成
const AddressContext = createContext<AddressContextType | undefined>(undefined);

// AddressProviderコンポーネントの定義
export const AddressProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // 住所データの状態を管理（初期値はダミーデータ）
  const [addresses, setAddresses] = useState<Mail[]>(dummyMails);

  // AddressContext.Providerを使用して状態を子コンポーネントに渡す
  return (
    <AddressContext.Provider value={{ addresses, setAddresses }}>
      {children}
    </AddressContext.Provider>
  );
};

// useAddressフックの定義
export const useAddress = () => {
  // AddressContextを使用
  const context = useContext(AddressContext);

  // AddressContextがundefinedの場合はエラーを投げる
  if (context === undefined) {
    throw new Error('useAddress must be used within an AddressProvider');
  }

  // contextを返す
  return context;
};
