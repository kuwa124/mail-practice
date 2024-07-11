// React のフックと定数をインポート
import { useState, useEffect, useRef } from 'react';
import { SIGNATURE } from './constants';

// EmailComposerのロジックを管理するカスタムフック
const useEmailComposer = () => {
  // メール本文の状態を管理するstate
  const [body, setBody] = useState(SIGNATURE);

  // useRef: コンポーネントのライフサイクル全体で保持される可変な参照を作成
  // この場合、テキストエリアのDOM要素への参照を保持する
  // useRef<HTMLTextAreaElement>(null) は、HTMLTextAreaElement型の参照を初期値nullで作成
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // テキストエリアの内容が変更されたときのハンドラ
  // React.ChangeEvent<HTMLTextAreaElement>は、テキストエリアの変更イベントの型
  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  // 署名が削除された場合に再追加する
  useEffect(() => {
    // endsWith メソッドは文字列が指定した部分文字列で終わるかどうかを確認
    if (!body.endsWith(SIGNATURE)) {
      // 現在のカーソル位置を取得
      // ?. はオプショナルチェーニング演算子。プロパティが存在しない場合にエラーを防ぐ
      const cursorPosition = textareaRef.current?.selectionStart || 0;
      // 署名を追加
      setBody((prevBody) => prevBody + SIGNATURE);
      // カーソル位置を維持（非同期で実行）
      setTimeout(() => {
        // ?. を使用して、textareaRef.current が null でない場合のみメソッドを呼び出す
        textareaRef.current?.setSelectionRange(cursorPosition, cursorPosition);
      }, 0);
    }
  }, [body]);

  // フックの戻り値としてステートと関数を返す
  return { body, textareaRef, handleBodyChange };
};

// カスタムフックをエクスポート
export default useEmailComposer;
