// ヘッダーコンポーネントをインポート
import Header from '@/components/Header';

// 連絡先表示コンポーネントをインポート
import Contact from '@/components/Contact';

// メールエディターコンポーネントをインポート（現在はコメントアウト）
import { EditContact } from '@/app/adress/EditContact';

// 編集用コンポーネントをインポート
import EditComponent from '@/app/adress/EditComponent';

// Adressページコンポーネントの型定義
type AdressProps = {
  // 将来的にpropsが必要になった場合のために空のオブジェクトを定義
};

// アドレス帳ページのメインコンポーネント
const Adress: React.FC<AdressProps> = () => {
  return (
    <div
      // 画面全体を縦方向に分割し、背景色を設定
      className='flex flex-col h-screen bg-gray-100'
    >
      {/* ヘッダーコンポーネントを配置 */}
      <Header />
      <div
        // メインコンテンツエリアを設定し、オーバーフローを制御
        className='flex flex-1 overflow-hidden'
      >
        <div
          // 連絡先リストと編集コンポーネントを縦に配置
          className='flex flex-col h-full'
        >
          <div
            // 連絡先リストを表示するエリアを設定
            className='flex-grow'
          >
            {/* 連絡先表示コンポーネントを配置 */}
            <Contact />
          </div>
          {/* 編集用コンポーネントを配置 */}
          <EditComponent />
        </div>
        <div className='flex-1'>
          {/* メールエディターコンポーネントはコメントアウト状態 */}
          <EditContact />
        </div>
      </div>
    </div>
  );
};

// Adressコンポーネントをエクスポート
export default Adress;
