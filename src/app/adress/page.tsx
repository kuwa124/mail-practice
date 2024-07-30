// ユーザー操作に適応するための定型文
'use client';

// Next.jsのページコンポーネントで使用するヘッダーコンポーネントをインポート
import Header from '@/components/Header';

// 連絡先一覧を表示するコンポーネントをインポート
import Contact from '@/components/Contact';

// メールエディターコンポーネントをインポート（現在は未使用）
import { EditContact } from '@/app/adress/EditContact';

// 連絡先編集用コンポーネントをインポート
import EditComponent from '@/app/adress/EditComponent';

// コンテキストプロバイダーをインポート
import { ContactProvider } from '@/app/contexts/ContactContext';

// Adressページコンポーネントのプロパティの型定義
type AdressProps = {
  // 現時点では特にプロパティは必要ないが、将来的な拡張性を考慮して空オブジェクトを定義
};

// アドレス帳ページのメインコンポーネント
const Adress: React.FC<AdressProps> = () => {
  return (
    <ContactProvider>
      <div
        // 画面全体を縦方向に分割し、高さを画面いっぱいに設定、背景色を薄いグレーに
        className='flex flex-col h-screen bg-gray-100'
      >
        {/* ページ上部にヘッダーコンポーネントを配置 */}
        <Header />
        <div
          // メインコンテンツエリアを横並びに配置し、はみ出た部分を隠す
          className='flex flex-1 overflow-hidden'
        >
          <div
            // 左側のカラム：連絡先リストと編集コンポーネントを縦に配置
            className='flex flex-col h-full'
          >
            <div
              // 連絡先リストを表示するエリアを設定し、残りのスペースを最大限使用
              className='flex-grow'
            >
              {/* 連絡先一覧を表示するコンポーネントを配置 */}
              <Contact />
            </div>
            {/* 連絡先編集用のコンポーネントを配置 */}
            <EditComponent />
          </div>
          <div
            // 右側のカラム：残りのスペースを最大限使用
            className='flex-1'
          >
            {/* 連絡先詳細編集コンポーネントを配置 */}
            <EditContact />
          </div>
        </div>
      </div>
    </ContactProvider>
  );
};

// Adressコンポーネントをエクスポートし、他のファイルで使用可能にする
export default Adress;
