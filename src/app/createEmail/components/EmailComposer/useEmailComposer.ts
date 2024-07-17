// React のフックと定数をインポート
import { useState, useRef } from 'react';
import { SIGNATURE } from './constants';

// EmailComposerのロジックを管理するカスタムフック
const useEmailComposer = () => {
  // メール本文の状態を管理するstate
  const [body, setBody] = useState(SIGNATURE);
  const [ccVisible, setCcVisible] = useState(false);
  const [bccVisible, setBccVisible] = useState(false);

  // useRef: コンポーネントのライフサイクル全体で保持される可変な参照を作成
  // この場合、テキストエリアのDOM要素への参照を保持する
  // useRef<HTMLTextAreaElement>(null) は、HTMLTextAreaElement型の参照を初期値nullで作成
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // テキストエリアの内容が変更されたときのハンドラ
  // React.ChangeEvent<HTMLTextAreaElement>は、テキストエリアの変更イベントの型
  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  // CC欄をトグルする関数
  const toggleCcVisible = () => {
    setCcVisible((prev) => !prev);
  };

  // BCC欄をトグルする関数
  const toggleBccVisible = () => {
    setBccVisible((prev) => !prev);
  };

  // フックの戻り値としてステートと関数を返す
  return {
    body,
    textareaRef,
    handleBodyChange,
    ccVisible,
    bccVisible,
    toggleCcVisible,
    toggleBccVisible,
  };
};
// カスタムフックをエクスポート
export default useEmailComposer;
