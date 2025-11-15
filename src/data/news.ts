// src/data/news.ts

export type NewsItem = {
  date: string;
  title: string;
  description?: string;
  href?: string;
};

// ここだけ中身いじれば OK
export const newsItems: NewsItem[] = [
  {
    date: "2025/12",
    title: "WISS デモ発表予定",
    description:
      "「飲酒状態を予測・可視化するスマートコースタの検討」というテーマでデモ発表予定です．",
  },
  {
    date: "2025/10",
    title: "JPHACKS 2025 で 「Best Hack Award」「Best Audience Award」 W受賞",
    description:
      "AshiArt というGPSアートにおけるランニング経路デザインアプリで「Best Hack Award」「Best Audience Award」を頂きました．併せて三菱重工業株式会社様、ロート製薬株式会社、dip株式会社様からプラチナスポンサー賞を頂きました．",
    href: "https://x.com/JPHACKS_PR/status/1987452980371828814?s=20",
  },
  {
    date: "2025/09",
    title: "トヨタ自動車株式会社のインターンシップに参加しました",
  },
  {
    date: "2025/09",
    title: "NTT東日本株式会社のインターンシップに参加しました",
  },
  {
    date: "2025/08",
    title: "株式会社Regrit Partnersのインターンシップに参加しました",
  },
  {
    date: "2025/06",
    title: "エムスリー株式会社のインターンシップに参加しました",
  },
  {
    date: "2025/04",
    title: "東京海上日動システムズ株式会社のインターンシップに参加しました",
  },
];
