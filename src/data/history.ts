// src/data/history.ts
// ここに履歴の「中身」だけを書く

export type HistoryItem = {
  /** 例: "2025/04" */
  date: string;
  /** メインの説明 */
  title: string;
  /** 補足（あれば） */
  description?: string;
};

export const historyItems: HistoryItem[] = [
  {
    date: "2002/11",
    title: "秋田県大仙市出身",
    description: "地元は花火が有名です",
  },
  {
    date: "2021/03",
    title: "秋田県立横手高等学校 卒業",
  },
  {
    date: "2021/04",
    title: "北海道大学 総合理系 入学",
  },
  {
    date: "2025/03",
    title: "北海道大学工学部情報エレクトロニクス学科 卒業",
    description: "ヒューマンコンピュータインタラクション研究室配属",
  },
  {
    date: "2025/04",
    title: "北海道大学大学院情報科学院 入学",
  },
  // ↓ ここにどんどん追加していけばOK
];
