'use client'; // クライアントサイドでの実行を明示

// 必要なモジュールとコンポーネントのインポート
import React, { useState, useEffect } from 'react'; // Reactと必要なフックをインポート
import useContacts from '@/components/Contact/useContacts'; // カスタム連絡先フックをインポート
import {
  faUser,
  faEnvelope,
  faPhone,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons'; // 必要なアイコンをインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesomeアイコンコンポーネントをインポート
import { useEmailContext } from '@/app/contexts/EmailContext'; // EmailContextのカスタムフックをインポート
import { Mail } from '@/app/shared/constants'; // Mail型をインポート

// 連絡先の型定義を拡張（電話番号とその他の情報を追加）
type ExtendedMail = Mail & {
  phone: string; // 電話番号フィールド
  other: string; // その他の情報フィールド
};

// EditContactコンポーネントの定義
export function EditContact(): JSX.Element {
  // EmailContextから選択されたメールアドレスを取得
  const { selectedEmail } = useEmailContext();

  // カスタムフックから連絡先一覧を取得
  const { filteredContacts } = useContacts();

  // 編集対象の連絡先を状態として管理（初期値はnull）
  const [selectedContact, setSelectedContact] = useState<ExtendedMail | null>(
    null
  );

  // 選択されたメールアドレスが変更されたときに連絡先を更新するeffect
  useEffect(() => {
    // filteredContactsから選択された連絡先を探す
    const contact = filteredContacts.find(
      (c: Mail) => c.email === selectedEmail
    ) as ExtendedMail | undefined;

    // 連絡先が見つかった場合、電話番号とその他の情報を追加
    if (contact) {
      contact.phone = '***-***-*****'; // ダミーの電話番号を設定
      contact.other = ''; // その他の情報を空欄に設定
    }

    // 選択された連絡先を状態にセット
    setSelectedContact(contact || null);
  }, [selectedEmail, filteredContacts]);

  // 選択された連絡先がない場合のメッセージ表示
  if (!selectedContact) {
    return (
      // 全画面に広げ、中央揃えでメッセージを表示
      <div className='h-full w-full flex items-center justify-center text-gray-500'>
        連絡先を選択するとここに表示されます。
      </div>
    );
  }

  // 選択された連絡先がある場合の表示
  return (
    // コンテナ要素：全画面に広げ、内容を中央に配置
    <div className='h-full w-full flex flex-col p-6 bg-white'>
      {/* ヘッダー部分 */}
      <div className='w-full pb-10 text-2xl font-light'>連絡先の表示</div>

      {/* ユーザーアイコンと名前のセクション */}
      <div className='flex items-start mb-10'>
        {/* ユーザーアイコン（左寄せに変更） */}
        <FontAwesomeIcon
          icon={faUser}
          className='text-7xl text-gray-600 mr-4' // アイコンのサイズと色を設定し、右側にマージンを追加
        />
        {/* 名前のセクション */}
        <div>
          {/* "名前"ラベル */}
          <div className='text-sm text-gray-500'>名前</div>
          {/* 名前を表示 */}
          <h2 className='text-3xl font-bold'>{selectedContact.name}</h2>
        </div>
      </div>

      {/* 連絡先情報のセクション */}
      <div className='w-full max-w-md space-y-6'>
        {/* メールアドレスの行 */}
        <div className='flex items-center'>
          {/* メールアイコン */}
          <div className='w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4'>
            <FontAwesomeIcon
              icon={faEnvelope}
              className='text-xl text-gray-600'
            />
          </div>
          {/* メールアドレスの情報 */}
          <div>
            <div className='text-sm text-gray-500'>電子メール</div>
            <div className='text-lg'>{selectedContact.email}</div>
          </div>
        </div>

        {/* 電話番号の行 */}
        <div className='flex items-center'>
          {/* 電話アイコン */}
          <div className='w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4'>
            <FontAwesomeIcon icon={faPhone} className='text-xl text-gray-600' />
          </div>
          {/* 電話番号の情報 */}
          <div>
            <div className='text-sm text-gray-500'>電話番号</div>
            <div className='text-lg'>{selectedContact.phone}</div>
          </div>
        </div>

        {/* その他の情報の行 */}
        <div className='flex items-center'>
          {/* その他のアイコン */}
          <div className='w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4'>
            <FontAwesomeIcon
              icon={faEllipsisH}
              className='text-xl text-gray-600'
            />
          </div>
          {/* その他の情報 */}
          <div>
            <div className='text-sm text-gray-500'>その他</div>
            <div className='text-lg'>{selectedContact.other || '情報なし'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
