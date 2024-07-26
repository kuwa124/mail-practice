// Next.jsのMetadataタイプをインポート
import type { Metadata } from 'next';
// Googleフォント（Inter）をインポート
import { Inter } from 'next/font/google';
// グローバルCSSをインポート
import './globals.css';
// 各コンテキストプロバイダーをインポート
import { SignatureProvider } from '@/app/contexts/SignatureContext';
import { EmailProvider } from '@/app/contexts/EmailContext';

// Interフォントを設定（latinサブセットを使用）
const inter = Inter({ subsets: ['latin'] });

// ページのメタデータを設定
export const metadata: Metadata = {
  title: 'メール練習サイト', // ページのタイトル
  description: 'メールの使い方を練習できるサイトです。', // ページの説明
};

// ルートレイアウトコンポーネントを定義
export default function RootLayout({
  children, // 子コンポーネントを受け取るプロパティ
}: {
  children: React.ReactNode; // 子コンポーネントの型を指定
}) {
  return (
    // html要素の言語属性を日本語に設定
    <html lang='ja'>
      {/* bodyにInterフォントのクラスを適用 */}
      <body className={inter.className}>
        {/* 各コンテキストプロバイダーで子コンポーネントをラップ */}
        <EmailProvider>
          <SignatureProvider>
            {children} {/* 子コンポーネントをレンダリング */}
          </SignatureProvider>
        </EmailProvider>
      </body>
    </html>
  );
}
