// ユーザー操作に適応するための定型文
'use client';

// 必要なモジュールをインポート（Recoilのatomを使用）
import { atom } from 'recoil'; // Recoilのatomをインポート

// Mail型とダミーデータをインポート
import { dummyMails, Mail } from '@/app/shared/constants';

// アドレス状態を管理するatomを定義
export const addressState = atom<Mail[]>({
  key: 'addressState', // ユニークなキーを設定
  default: dummyMails, // デフォルト値としてダミーメールデータを設定
});
