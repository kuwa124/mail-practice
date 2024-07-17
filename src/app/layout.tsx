// Next.jsのメタデータ型をインポート
import type { Metadata } from 'next';

// Googleフォント（Inter）をインポート
import { Inter } from 'next/font/google';

// グローバルCSSをインポート
import './globals.css';

// Font Awesomeの設定をインポート
import { config } from '@fortawesome/fontawesome-svg-core';

// Font AwesomeのCSSをインポート
import '@fortawesome/fontawesome-svg-core/styles.css';

// SignatureProviderコンポーネントをインポート
import { SignatureProvider } from '@/app/contexts/SignatureContext';

// Font Awesomeの自動CSSを無効化
config.autoAddCss = false;

// Interフォントを設定（ラテン文字サブセットを使用）
const inter = Inter({ subsets: ['latin'] });

// アプリケーションのメタデータを設定
export const metadata: Metadata = {
  title: 'メール練習', // ページのタイトルを設定
  description: 'メール練習サイト', // ページの説明を設定
};

// ルートレイアウトコンポーネントを定義
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // 子コンポーネントの型を定義
}>) {
  return (
    // 言語を日本語に設定
    <html lang='ja'>
      <body className={inter.className}>
        {/* SignatureProviderで子コンポーネントをラップし、署名コンテキストを提供 */}
        <SignatureProvider>{children}</SignatureProvider>
      </body>
    </html>
  );
}
