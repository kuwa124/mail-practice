// React のフックと定数をインポート
import { useEffect, useRef, useState } from 'react';
// useState: 状態管理のためのReactフック
// useRef: DOM要素への参照を作成するためのReactフック
// useEffect: 副作用を扱うためのReactフック

// SignatureContextからuseSignatureフックをインポート
import { useSignature } from '@/app/contexts/SignatureContext';

// EmailContextからuseEmailContextフックをインポート
import { useEmailContext } from '@/app/contexts/EmailContext';

// EmailComposerのロジックを管理するカスタムフック
const useEmailComposer = () => {
  // SignatureContextから署名を取得
  const { signature } = useSignature();

  // EmailContextから選択されたメールアドレスの状態を取得
  const { selectedEmail, setSelectedEmail } = useEmailContext();

  // メール本文の状態を管理するstate
  const [body, setBody] = useState(''); // メール本文の内容を保持
  const [ccVisible, setCcVisible] = useState(false); // CC欄の表示状態を管理
  const [bccVisible, setBccVisible] = useState(false); // BCC欄の表示状態を管理

  // 宛先と件名の状態を管理するstate
  const [to, setTo] = useState(''); // 宛先を保持
  const [subject, setSubject] = useState(''); // 件名を保持

  // 現在フォーカスされている入力フィールドの状態を管理
  const [focusedInput, setFocusedInput] = useState<'to' | 'cc' | 'bcc' | null>(
    null
  );

  // テキストエリアのDOM要素への参照を作成
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // 入力フィールドの参照を作成
  const toRef = useRef<HTMLInputElement | null>(null);
  const ccRef = useRef<HTMLInputElement | null>(null);
  const bccRef = useRef<HTMLInputElement | null>(null);

  // 入力フィールドの参照を一つのオブジェクトにまとめる
  const refs = { to: toRef, cc: ccRef, bcc: bccRef };

  // コンポーネントマウント時に署名を設定
  useEffect(() => {
    setBody(signature); // 初期メール本文に署名を設定
  }, [signature]);

  // selectedEmailが変更されたときに実行される副作用
  useEffect(() => {
    // 選択されたメールアドレスが存在する場合
    if (selectedEmail) {
      // メールアドレスを追加
      addEmail(selectedEmail);
      // メールアドレスを追加した後、選択状態をリセット
      setSelectedEmail(null);
    }
  }, [selectedEmail, setSelectedEmail]);

  // テキストエリアの内容が変更されたときのハンドラ
  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value); // 入力された値でメール本文を更新
  };

  // CC欄の表示/非表示を切り替える関数
  const toggleCcVisible = () => {
    setCcVisible((prev) => !prev); // 現在の状態を反転
  };

  // BCC欄の表示/非表示を切り替える関数
  const toggleBccVisible = () => {
    setBccVisible((prev) => !prev); // 現在の状態を反転
  };

  // メールアドレスを追加する関数
  const addEmail = (email: string) => {
    // フォーカスされている入力フィールドが存在し、refsオブジェクトに含まれている場合
    if (focusedInput && focusedInput in refs) {
      // 該当する入力フィールドの参照を取得
      const input = refs[focusedInput].current;
      if (input) {
        // 現在の入力値を取得
        const currentValue = input.value;
        // 新しい値を作成（既存の値がある場合はカンマで区切って追加）
        const newValue = currentValue ? `${currentValue}, ${email}` : email;
        // 入力フィールドの値を更新
        input.value = newValue;
        // 宛先の場合、状態も更新
        if (focusedInput === 'to') {
          setTo(newValue);
        }
      }
    }
  };

  // フックの戻り値としてステートと関数を返す
  return {
    body, // メール本文の内容
    setBody, // メール本文を設定する関数
    textareaRef, // テキストエリアへの参照
    handleBodyChange, // メール本文変更ハンドラ
    ccVisible, // CC欄の表示状態
    bccVisible, // BCC欄の表示状態
    toggleCcVisible, // CC欄の表示/非表示を切り替える関数
    toggleBccVisible, // BCC欄の表示/非表示を切り替える関数
    focusedInput, // 現在フォーカスされている入力フィールド
    setFocusedInput, // フォーカスされている入力フィールドを設定する関数
    toRef, // 宛先入力フィールドへの参照
    ccRef, // CC入力フィールドへの参照
    bccRef, // BCC入力フィールドへの参照
    addEmail, // メールアドレスを追加する関数
    to, // 宛先の状態
    setTo, // 宛先を設定する関数
    subject, // 件名の状態
    setSubject, // 件名を設定する関数
  };
};

// カスタムフックをエクスポート
export default useEmailComposer;
