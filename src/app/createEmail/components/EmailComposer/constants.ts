// 共通で使用するTailwindクラスを定数化
// 入力フィールドの基本スタイル：全幅、ボーダー、角丸、パディング、大きめフォント
export const INPUT_BASE =
  'w-full border border-gray-300 rounded-md p-2 text-lg';

// ラベルの基本スタイル：大きめフォント、中太字、グレーテキスト、右マージン、パディング
export const LABEL_BASE = 'text-lg font-medium text-gray-700 mr-2 p-2';

// 小さいテキストボタンのスタイル：大きめフォント、明るい青背景、白テキスト、パディング、角丸
export const SMALL_TEXT_BUTTON =
  'text-lg text-gray-50 bg-blue-300 px-5 py-1 rounded-md';

// 署名テキスト（先頭に2行分の空行を追加）
export const SIGNATURE = `

ーーーーーーーーーーーーーーーーーーーーーー
株式会社〇〇
〇〇部 〇〇 〇〇
〒xxx-xxxx 〇〇県〇〇市〇〇町x-x-x
Tel : xxx-xx-xxxx Fax : xxx-xx-xxxx
Email : xx@xx.co.jp
`;
