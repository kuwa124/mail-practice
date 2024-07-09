// 必要なモジュールと定数をインポート
import { TOOLBAR_BUTTONS } from '@/components/Toolbar/constants';
import { useState } from 'react';

// ツールバーの状態と動作を管理するカスタムフック
export const useToolbar = () => {
  // ホバー中のボタンの状態を管理するstate
  // string | null型で、ホバー中のボタンのメッセージまたはnullを保持
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  // ボタンクリック時の処理を定義
  // action?: string - オプショナルな文字列型の引数。ボタンのアクションを示す
  const handleButtonClick = (action?: string) => {
    // 現在は特定のアクションに対する処理は実装されていません
    // 将来的に特定のアクションに対する処理を追加する場合、ここに実装します
    console.log(`Button clicked with action: ${action}`);
  };

  // TOOLBAR_BUTTONSの各ボタンにクリックハンドラーを追加
  const buttons = TOOLBAR_BUTTONS.map((button) => ({
    ...button, // 既存のボタンプロパティをスプレッド演算子で展開
    onClick: () => handleButtonClick(button.action), // クリックハンドラーを追加
  }));

  // フックの戻り値としてステートと更新関数、ボタン情報を返す
  return {
    hoveredButton, // 現在ホバーされているボタン
    setHoveredButton, // ホバー状態を更新する関数
    buttons, // クリックハンドラーが追加されたボタンの配列
  };
};
