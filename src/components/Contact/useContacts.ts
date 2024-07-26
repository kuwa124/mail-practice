// Reactと必要な関数をインポート
import { useState } from 'react';

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

  return {
    searchTerm, // 検索ワードの状態
    setSelectedEmail, // 選択されたメールの状態を更新する関数
    handleInputChange, // 検索ワード入力時の処理
    handleClear, // 検索ワードをクリアする処理
    handleKeyDown, // キー押下時の処理
  };
};

export default useContacts;
