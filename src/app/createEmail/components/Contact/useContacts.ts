// Reactと必要な関数をインポート
import { useState } from 'react';
// useState: 状態管理のためのReactフックをインポート

// 共有の定数と型をインポート
import { Mail, dummyMails } from '@/app/shared/constants';
// Mail: メールデータの型定義
// dummyMails: ダミーのメールデータ配列

// EmailContextをインポート
import { useEmailContext } from '@/app/contexts/EmailContext';

// Contactsコンポーネントのロジックを管理するカスタムフック
const useContacts = () => {
  // EmailContextを使用
  const { setSelectedEmail } = useEmailContext();
  // setSelectedEmail: 選択されたメールを設定する関数

  // 検索キーワードの状態を管理
  const [searchTerm, setSearchTerm] = useState('');
  // searchTerm: 検索キーワードを状態として管理
  // setSearchTerm: 検索キーワードを更新する関数

  // 検索バーの入力ハンドラー
  // 入力値を検索用の状態にセット
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    // 入力フィールドの値を検索用の状態に反映
  };

  // クリアボタンのクリックイベントハンドラー
  // 入力フィールドの内容を削除する
  const handleClear = () => {
    setSearchTerm('');
    // 検索用の状態を空文字に設定し、入力フィールドの内容をクリア
  };

  // エンターキー押下時のイベントハンドラー
  // デフォルトのフォーム送信動作を防止
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      // Enterキーが押された場合、フォームの送信をキャンセル
    }
  };

  // 検索キーワードに基づいて連絡先リストをフィルタリング
  const filteredContacts = dummyMails.filter((mail: Mail) =>
    // mail.name.toLowerCase()で連絡先の名前を小文字に変換し、
    // includes(searchTerm.toLowerCase())で検索キーワードが小文字の名前に含まれているかチェック
    mail.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    searchTerm,
    setSelectedEmail,
    handleInputChange,
    handleClear,
    handleKeyDown,
    filteredContacts,
  };
};

export default useContacts;
