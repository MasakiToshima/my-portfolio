// src/data/works.ts

export type Work = {
  title: string;
  description: string;
  image: string;
  github?: string;
  link?: string; // 外部リンクあれば
};

export const works: Work[] = [
  {
    title:
      "Dwell++: 視線入力における効率的な多段階選択手法の適切なパラメタ調査",
    description:
      "視線入力における多段階操作を可能にする新しい入力手法 Dwell++ を提案し、実験・実装を行った研究．Unity + Quest Pro を用いて実装．",
    image: "/images/dwellpp.jpg",
  },
  {
    title: "StrikeZone: キャップ野球ストライクゾーン判定アプリケーション",
    description:
      "キャップ野球で使えるストライク判定 + スコア管理アプリケーション．Flutter を用いて実装．",
    image: "/images/StrikeZone.png",
  },
  {
    title: "AshiArt: GPSアート経路デザインアプリケーション",
    description:
      "GPSアート用のランニングコースを作成できるデザインアプリケーション．JPHacks 2025にて『Best Hack Award』『Best Audience Award』受賞の作品．",
    image: "/images/ashiart.jpg",
    link: "https://github.com/jphacks/sp_2509",
  },
  {
    title: "飲酒量可視化スマートコースタ",
    description:
      "荷重センサ + 画像認識 + アルコール代謝モデルを組み合わせた飲酒状態推定コースタ．WISSデモで発表予定．",
    image: "/images/SmartCoaster.JPG",
  },
];
