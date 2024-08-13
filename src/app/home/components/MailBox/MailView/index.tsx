// Mail型をインポート
import { Mail } from '@/app/shared/constants';

// MailViewコンポーネントのプロップスの型を定義
interface MailViewProps {
  mail: Mail | null;
}

// MailViewコンポーネント
export function MailView({ mail }: MailViewProps) {
  // 選択されたメールがない場合
  if (!mail) {
    // メッセージを表示
    return (
      // h-full: 親要素の高さいっぱいに広げる
      // flex items-center justify-center: 中央揃えにする
      <div className='h-full flex items-center justify-center text-gray-500'>
        メールを選択するとここに表示されます。
      </div>
    );
  }

  // 選択されたメールがある場合
  return (
    // h-full: 親要素の高さいっぱいに広げる
    // overflow-auto: コンテンツがはみ出した場合にスクロール可能にする
    // pb-4: 下部にパディングを追加
    <div className='h-full space-y-2 my-2 bg-gray-50  rounded-lg shadow overflow-auto pb-4'>
      {/* タイトルと宛名部分 */}
      {/* bg-blue-100: 薄い青色の背景 */}
      {/* p-4: 内側に余白を追加 */}
      {/* rounded-t-lg: 上部の角を丸く */}
      <div className='bg-gray-200 p-4 rounded-t-lg'>
        {/* メールの件名 */}
        <h2 className='text-2xl font-bold mb-4'>{mail.subject}</h2>
        {/* 送信者情報 */}
        <p className='text-gray-600'>From: {mail.name}</p>
      </div>

      {/* メールの本文 */}
      {/* bg-gray-50: 薄いグレーの背景 */}
      {/* p-4: 内側に余白を追加 */}
      {/* rounded-b-lg: 下部の角を丸く */}
      <div className=' p-4 rounded-b-lg '>
        <div className='text-gray-800 whitespace-pre-wrap'>{mail.body}</div>
      </div>
    </div>
  );
}
