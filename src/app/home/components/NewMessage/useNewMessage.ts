// React の useState フックをインポート
import { useState } from 'react';

// useNewMessageフックの戻り値の型定義
type UseNewMessageReturn = {
  to: string; // 送信先のメールアドレス
  setTo: React.Dispatch<React.SetStateAction<string>>; // 送信先を更新する関数
  subject: string; // メールの件名
  setSubject: React.Dispatch<React.SetStateAction<string>>; // 件名を更新する関数
  body: string; // メール本文
  setBody: React.Dispatch<React.SetStateAction<string>>; // 本文を更新する関数
  editorType: string; // エディタのタイプ（'テキスト' または 'リッチテキスト'）
  setEditorType: React.Dispatch<React.SetStateAction<string>>; // エディタタイプを更新する関数
  handleSubmit: (e: React.FormEvent) => void; // フォーム送信時の処理を行う関数
};

// 新規メッセージ作成に関する状態と関数を管理するカスタムフック
export const useNewMessage = (): UseNewMessageReturn => {
  // 送信先のメールアドレスの状態と更新関数
  const [to, setTo] = useState<string>('');

  // メールの件名の状態と更新関数
  const [subject, setSubject] = useState<string>('');

  // メール本文の状態と更新関数
  const [body, setBody] = useState<string>('');

  // エディタのタイプ（'テキスト' または 'リッチテキスト'）の状態と更新関数
  const [editorType, setEditorType] = useState<string>('テキスト');

  // フォーム送信時の処理を行う関数
  const handleSubmit = (e: React.FormEvent) => {
    // デフォルトのフォーム送信動作を防止
    e.preventDefault();
    // ここに送信処理のロジックを追加する
  };

  // 使用する状態と関数をオブジェクトとして返す
  return {
    to,
    setTo,
    subject,
    setSubject,
    body,
    setBody,
    editorType,
    setEditorType,
    handleSubmit,
  };
};
