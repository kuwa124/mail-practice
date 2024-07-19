// Next.jsのメタデータ型をインポート
import type { Metadata } from 'next';

// Googleフォント（Inter）をインポート
import { Inter } from 'next/font/google';

// グローバルCSSをインポート
import './globals.css';

// SignatureProviderコンポーネントをインポート
import { SignatureProvider } from '@/app/contexts/SignatureContext';

// EmailProviderコンポーネントをインポート
import { EmailProvider } from '@/app/contexts/EmailContext';

// Interフォントを設定（ラテン文字サブセットのみ使用）
const inter = Inter({ subsets: ['latin'] });

// アプリケーションのメタデータを設定
export const metadata: Metadata = {
  title: 'メール練習サイト', // ページのタイトルを設定
  description: 'メールの使い方を練習できるサイトです。', // ページの説明を設定
};

// ルートレイアウトコンポーネントを定義
export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // 子コンポーネントの型を定義
}) {
  // HTML構造を返す
  return (
    // 言語を日本語に設定
    <html lang='ja'>
      {/* ボディ要素にInterフォントのクラスを適用 */}
      <body className={inter.className}>
        {/* EmailProviderで全体をラップし、メール関連の状態を提供 */}
        <EmailProvider>
          {/* SignatureProviderで子コンポーネントをラップし、署名コンテキストを提供 */}
          <SignatureProvider>{children}</SignatureProvider>
        </EmailProvider>
      </body>
    </html>
  );
}
