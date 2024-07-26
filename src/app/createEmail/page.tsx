// ユーザー操作に適応するための定型文
'use client';

// ヘッダーコンポーネントをインポート
import Header from '@/components/Header';

// アクションボタンコンポーネントをインポート
import ActionButtons from '@/app/createEmail/components/ActionButtons';

// 連絡先表示コンポーネントをインポート
import Contact from '@/components/Contact';

// メール作成コンポーネントをインポート
import EmailComposer from '@/app/createEmail/components/EmailComposer';

// 添付ファイルエリアコンポーネントをインポート
import AttachmentArea from '@/app/createEmail/components/AttachmentArea';

// RecoilのRecoilRootをインポート
import { RecoilRoot } from 'recoil';

// CreateEmailページコンポーネントの型定義
type CreateEmailProps = {
  // 将来的にpropsが必要になった場合のために空のオブジェクトを定義
};

// メール作成ページのメインコンポーネント
const CreateEmail: React.FC<CreateEmailProps> = () => {
  return (
    // RecoilRootでアプリ全体をラップして状態管理を提供
    <RecoilRoot>
      <div
        // 画面全体を縦方向に分割し、背景色を設定
        className='flex flex-col h-screen bg-gray-100'
      >
        {/* ヘッダーコンポーネントを配置 */}
        <Header />

        {/* アクションボタンコンポーネントを配置 */}
        <ActionButtons />

        <div
          // メインコンテンツエリアを設定し、オーバーフローを制御、下部にマージンを追加
          className='flex flex-1 overflow-hidden mb-2'
        >
          {/* 連絡先表示コンポーネントを配置 */}
          <Contact />

          {/* メール作成コンポーネントを配置 */}
          <EmailComposer />

          {/* 添付ファイルエリアコンポーネントを配置 */}
          <AttachmentArea />
        </div>
      </div>
    </RecoilRoot>
  );
};

// CreateEmailコンポーネントをエクスポート
export default CreateEmail;
