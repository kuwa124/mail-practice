// FontAwesomeのアイコン型定義をインポート
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// デフォルトのユーザーアイコンをインポート
import { faUser } from '@fortawesome/free-solid-svg-icons';

// メールデータの型定義
export type Mail = {
  id: number; // メールを一意に識別するID
  name: string; // 送信者の名前
  email: string; // 送信者のメールアドレス
  subject?: string; // メールの件名
  body?: string; // メールの本文
  phone?: string; // 電話番号フィールド
  other?: string; // その他の情報フィールド
  icon: IconDefinition; // メールに表示するアイコン
  date?: string; // メールの送信日時
};

// ランダムな日付を生成し、指定された形式で返す関数
const generateRandomDate = (): string => {
  // 現在の日時を取得
  const now = new Date();

  // 今月の初日を設定
  const startOfMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);

  // 今月の最終日を設定
  const endOfMonth = new Date(now.getFullYear(), now.getMonth(), 0);

  // 今月の範囲内でランダムな日時を生成
  const randomDate = new Date(
    startOfMonth.getTime() +
      Math.random() * (endOfMonth.getTime() - startOfMonth.getTime())
  );

  // 日付を指定された形式（YYYY年MM月DD日 HH:mm）に整形
  const formattedDate = `${randomDate.getFullYear()}年${String(
    randomDate.getMonth() + 1
  )}月${String(randomDate.getDate())}日 ${String(
    randomDate.getHours()
  ).padStart(2, '0')}:${String(randomDate.getMinutes()).padStart(2, '0')}`;

  // 整形された日付文字列を返す
  return formattedDate;
};

// ダミーのメールデータを定義（表示テスト用）
export const dummyMails: Mail[] = [
  {
    id: 1,
    name: '飯塚 花子',
    email: 'taro.yamada@example.com',
    subject: '会議の件について',
    body: `FSC会社
      幸袋様

  お世話になっております。明日の会議の時間と場所についてご案内いたします。

  日時：2024年7月19日（金）14:00～16:00
  場所：本社 会議室A

  この会議では、今後のプロジェクトの進行状況や重要な課題について話し合う予定です。特に、鈴木様のご意見をお伺いしたく存じますので、ご出席をお願い申し上げます。

  お忙しいところ恐縮ですが、どうぞよろしくお願いいたします。
  `,
    icon: faUser, // ユーザーアイコン
    date: generateRandomDate(), // ランダムな日付を生成
  },
  {
    id: 2,
    name: '福岡 一郎',
    email: 'hanako.iizuka@example.com',
    subject: 'プロジェクト進捗報告',
    body: `FSC会社
      幸袋様

  先週のプロジェクト進捗状況をご報告いたします。

  タスクA：予定通り完了しました。全ての工程が計画通りに進行し、特に大きな問題は発生しませんでした。チームの努力により、スムーズに完了することができました。

  タスクB：若干の遅れが生じました。原因は一部のリソースの調整に時間を要したためです。ただし、遅れはわずかであり、来週中には予定通りに進捗を取り戻す予定です。現在、対策を講じており、今後の進行には支障がない見込みです。

  タスクC：予定より早く完了しました。当初の見積もりよりも効率よく進行したため、予定よりも早くタスクを完了することができました。この結果、他のタスクにも良い影響を与えることが期待されます。

  ご質問やご不明な点がございましたら、どうぞお気軽にご連絡ください。迅速に対応させていただきます。

  今後ともよろしくお願い申し上げます。`,
    icon: faUser, // ユーザーアイコン
    date: generateRandomDate(), // ランダムな日付を生成
  },
  {
    id: 3,
    name: '福岡 才郎',
    email: 'sairou.fukuoka@example.com',
    subject: '株式会社活躍ワークス·面接日のお知らせ',
    body: `幸袋様
お世話になります。株式会社 活躍ワークスの福岡と申します。
このたびは、数ある企業の中から弊社の求人にご応募いただき誠にありがとうございます。

早連ですが、幸袋様の面接日の調整をいたしたくご連絡差し上げました。
お手数ですが、以下の候補日のなかから「第一希望」 「第二希望」をご選択いただき、
メールにてご返信いただけますでしょうか?

【面接候補日】

8月25日(*曜日) 11:30~
9月  2日(*曜日) 13:30~
9月  5日(*曜日) 10:00~
9月  6日(*曜日) 12:30~
9月  8日(*曜日) 10:00~

※いずれも面接時間は30分~1時間を予定しております。

もし、こちらの日時でご都合がつかないようでしたら、
幸袋様の方で希望日時をご提案くださいますようお願い申し上げます。
また、何かご不明点等ございましたら、ご遠慮なくお問い合わせください。
ご返信をお待ちいたしております。

ーーーーーーーーーーーーーーーーーーーーーー
株式会社·活躍ワークス
人事部　福岡·才郎
〒8XX-XXXX

福岡県福岡市博多区〇〇一丁目△△番地
TEL:XXX-XX-XXXX　FAX:XXX-XX-XXXX
Email:sairo.fukuoka@example.come
`,
    icon: faUser, // ユーザーアイコン
    date: generateRandomDate(), // ランダムな日付を生成
  },
  {
    id: 4,
    name: '山田 太郎',
    email: 'ichiro.fukuoka@example.com',
    subject: '新製品ローンチについて',
    body: `チームの皆様

  お疲れ様です。新製品Xのローンチに関して、以下の通りスケジュールが決定しましたのでお知らせいたします。

  ・プレスリリース：8月1日
  ・販売開始：8月15日
  ・キャンペーン期間：8月15日～9月30日

  今回のローンチに伴い、各部署の皆様には多大なご協力をお願いすることになります。プレスリリースに関する詳細な準備や、販売開始に向けた在庫の確保、そしてキャンペーン期間中のプロモーション活動など、多岐にわたるタスクがありますので、皆様には引き続きご尽力いただきたく存じます。

  特に、キャンペーン期間中は新製品Xの魅力を最大限に伝えるための戦略的なマーケティング活動が求められます。各部署での役割分担とスケジュールの確認を早急に行い、円滑なローンチを実現するために、万全の体制を整えてください。

  何かご不明な点やご質問がございましたら、どうぞお気軽にご連絡ください。皆様のご協力に心より感謝申し上げます。

  福岡一郎
  マーケティング部長`,
    icon: faUser, // ユーザーアイコン
    date: generateRandomDate(), // ランダムな日付を生成
  },
  {
    id: 5,
    name: '山本 光',
    email: ' mi-yamamoto@fsc.school.jp',
    subject: 'Wordの課題について',
    body: `受講生の皆様、お疲れ様です。講師の山本です。
Word練習問題の「課題3P1」の提出をメールにてお願いいたします。

【ファイル名】 「（出席番号）課題3P1」
※1番の方なら、「01課題3P1」
(英数字は大文字で、数字が二桁の方はゼロをつける必要はありません)

提出順に添削していきますので、なるべくお早めにご返信をお願いします。
また、今回の件でご質問等ございましたら、遠慮なく山本までご連絡ください。

では、よろしくお願いいたします。

ーーーーーーーーーーーーーーーーーーーーーー
株式会社ソフトウェアセンター
研修課 山本 光
〒8XX-XXXX
〇〇県△△市〇〇一丁目△△番地
TEL:XXX-XX-XXXX　FAX:XXX-XX-XXXX
Email : mi-yamamoto@fsc.school.jp
`,
    icon: faUser, // ユーザーアイコン
    date: generateRandomDate(), // ランダムな日付を生成
  },
];
