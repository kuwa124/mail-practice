'use client'; // クライアントサイドでの実行を明示

// 必要なモジュールとコンポーネントのインポート
import { useEffect, useState } from 'react'; // Reactのeffectフックと状態フックをインポート

// 必要なアイコンをインポート
import {
  faEllipsisH,
  faEnvelope, // 水平省略アイコン
  faPencilAlt, // メールアイコン
  faPhone, // 電話アイコン
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesomeアイコンコンポーネントをインポート

import { useEmailContext } from '@/app/contexts/EmailContext'; // EmailContextのカスタムフックをインポート

import { useAddress } from '@/app/contexts/AddressContext'; // AddressContextのカスタムフックをインポート

import { Mail } from '@/app/shared/constants'; // Mail型をインポート

import { AdressEditor } from '@/app/adress/EditContact/AdressEditor'; // 住所編集コンポーネントをインポート

import { useContact } from '@/app/contexts/ContactContext'; // ContactContextのカスタムフックをインポート

// EditContactコンポーネントの定義
export function EditContact(): JSX.Element {
  // EmailContextから選択されたメールアドレスを取得
  const { selectedEmail } = useEmailContext();

  // AddressContextから住所情報を取得
  const { addresses } = useAddress();

  // ContactContextから選択された連絡先を取得
  const { selectedContact, setSelectedContact } = useContact();

  // 編集モードの状態をローカルで管理
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // 選択されたメールアドレスが変更されたときに連絡先を更新するeffect
  useEffect(() => {
    // addressesから選択された連絡先を探す
    const contact = addresses.find((c: Mail) => c.email === selectedEmail);

    // 選択された連絡先を状態にセット
    setSelectedContact(contact || null);
  }, [selectedEmail, addresses, setSelectedContact]);

  // 編集ボタンがクリックされたときの処理
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // 選択された連絡先がない場合のメッセージ表示
  if (!selectedContact) {
    return (
      // 全高さと幅を設定し、中央揃えでメッセージを表示
      <div className='h-full w-full flex items-center justify-center text-gray-500'>
        {/* 連絡先が選択されていない場合のメッセージ */}
        連絡先を選択するとここに表示されます。
      </div>
    );
  }

  // 選択された連絡先がある場合の表示
  return (
    <div className='h-full w-full flex flex-col justify-center items-center p-6 my-2 bg-white'>
      {/* 全高さと幅を設定し、縦方向に要素を配置、内部の余白を設定、背景色を白に */}
      <div className='h-full w-full p-6 bg-white'>
        {/* ヘッダー部分：全幅、下部に余白、文字サイズと太さを設定 */}
        <div className='w-full pb-10 text-2xl font-light'>連絡先の表示</div>

        {/* ユーザーアイコンと名前のセクション：要素を横並びに、下部に余白を設定 */}
        <div className='flex items-center mb-10'>
          {/* ユーザーアイコン：サイズと色を設定し、右側に余白を追加 */}
          <FontAwesomeIcon
            icon={selectedContact.icon}
            className='text-7xl text-gray-600 mr-4'
          />
          {/* 名前のセクション */}
          <div>
            {/* "名前"ラベル：文字サイズと色を設定 */}
            <div className='text-sm text-gray-500'>名前</div>
            {/* 名前を表示：文字サイズと太さを設定 */}
            <h2 className='text-3xl font-bold'>{selectedContact.name}</h2>
          </div>
        </div>

        {/* 連絡先情報のセクション：最大幅を設定し、要素間に余白を追加 */}
        <div className='w-full max-w-md space-y-6'>
          {/* メールアドレスの行：要素を横並びに、中央揃えに */}
          <div className='flex items-center'>
            {/* メールアイコン：サイズ、背景色、角丸、配置を設定 */}
            <div className='w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4'>
              <FontAwesomeIcon
                icon={faEnvelope}
                className='text-xl text-gray-600'
              />
            </div>
            {/* メールアドレスの情報 */}
            <div>
              {/* "電子メール"ラベル：文字サイズと色を設定 */}
              <div className='text-sm text-gray-500'>電子メール</div>
              {/* メールアドレスを表示：文字サイズを設定 */}
              <div className='text-lg'>{selectedContact.email}</div>
            </div>
          </div>

          {/* 電話番号の行：要素を横並びに、中央揃えに */}
          <div className='flex items-center'>
            {/* 電話アイコン：サイズ、背景色、角丸、配置を設定 */}
            <div className='w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4'>
              <FontAwesomeIcon
                icon={faPhone}
                className='text-xl text-gray-600'
              />
            </div>
            {/* 電話番号の情報 */}
            <div>
              {/* "電話番号"ラベル：文字サイズと色を設定 */}
              <div className='text-sm text-gray-500'>電話番号</div>
              {/* 電話番号を表示：文字サイズを設定 */}
              <div className='text-lg'>{selectedContact.phone || '未設定'}</div>
            </div>
          </div>

          {/* その他の情報の行：要素を横並びに、中央揃えに */}
          <div className='flex items-center'>
            {/* その他のアイコン：サイズ、背景色、角丸、配置を設定 */}
            <div className='w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4'>
              <FontAwesomeIcon
                icon={faEllipsisH}
                className='text-xl text-gray-600'
              />
            </div>
            {/* その他の情報 */}
            <div>
              {/* "その他"ラベル：文字サイズと色を設定 */}
              <div className='text-sm text-gray-500'>その他</div>
              {/* その他の情報を表示：文字サイズを設定 */}
              <div className='text-lg'>
                {selectedContact.other || '情報なし'}
              </div>
            </div>
          </div>
          {/* 編集ボタン：要素を右寄せに配置 */}
          <div className='flex justify-end'>
            {/* 編集ボタン：パディング、背景色、文字色、角丸を設定 */}
            <button
              className='px-4 py-2 bg-blue-500 text-white rounded-md flex items-center'
              onClick={handleEditClick} // クリック時に編集モードを有効にする
            >
              {/* 編集アイコン：右側に余白を追加 */}
              <FontAwesomeIcon icon={faPencilAlt} className='mr-2' />
              編集
            </button>
          </div>
        </div>
      </div>
      {/* 編集モードの場合、AdressEditorコンポーネントを表示 */}
      <div className='justify-end w-1/3'>
        {isEditing && (
          <AdressEditor
            contact={selectedContact} // 編集対象の連絡先
            onClose={() => setIsEditing(false)} // 編集モードを終了する関数
            isNewContact={false} // 既存の連絡先の編集モードであることを示す
          />
        )}
      </div>
    </div>
  );
}
