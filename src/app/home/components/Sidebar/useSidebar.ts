// Reactと状態管理のためのuseStateフックをインポート
import { useState } from 'react';

// ボタンの基礎となるクラスを定数としてインポート
import { BUTTON_BASE_CLASS } from './constants';

// サイドバーの状態と機能を管理するカスタムフック
export const useSidebar = () => {
  // アクティブなボタンの状態を管理
  const [activeButton, setActiveButton] = useState<string>('受信箱');

  // ボタンのクラスを動的に生成する関数
  const getButtonClass = (buttonName: string): string => {
    // 基礎クラスに加え、アクティブかどうかでクラスを切り替える
    return `${BUTTON_BASE_CLASS} ${
      activeButton === buttonName
        ? 'bg-blue-500 text-white' // アクティブ時のクラス、青色の背景と白い文字色を設定
        : 'hover:bg-gray-400' // 非アクティブ時のクラス、ホバー時にグレーの背景色を設定する
    }`;
  };

  // アイコンのクラスを動的に生成する関数
  const getIconClass = (buttonName: string): string => {
    // アイコンサイズに加え、アクティブかどうかでクラスを切り替える
    
    // アクティブなボタンの場合、白い文字色を設定
    // アクティブでない場合は、グレーの文字色を設定する
    return `mr-2 w-5 h-5 ${
      activeButton === buttonName ? 'text-white' : 'text-gray-500'
    }`;
  };

  // フックの戻り値
  return {
    setActiveButton, // アクティブなボタンを設定する関数
    getButtonClass, // ボタンのクラス生成関数
    getIconClass, // アイコンのクラス生成関数
  };
};
