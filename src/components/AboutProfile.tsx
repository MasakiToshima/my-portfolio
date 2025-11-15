"use client";

import { FaTwitter, FaInstagram } from "react-icons/fa";
import Name from "@/components/Name";
import ProfileLines from "@/components/ProfileLines";
import Button from "@/components/Button";

export default function AboutProfile() {
  return (
    <div className="w-full py-8">
      <Name
        kanji="戸嶋 将幹"
        furigana="としま まさき"
        romaji="Masaki Toshima"
        align="left"
      />

      <ProfileLines
        lines={[
          "北海道大学大学院 情報科学院修士課程在籍",
          "ヒューマンコンピュータインタラクション研究室（HCI）所属",
        ]}
      />

      {/* ← ここに挨拶文を追加 */}
      <p className="text-black text-base leading-relaxed mt-2">
        こんにちは、北海道大学情報科学院修士1年の戸嶋将幹です．
        <br />
        <br />
        大学院ではヒューマンコンピュータインタラクション（HCI）を研究しており、視線入力インタフェースやARインタフェースに関する研究をしています．最近は、FlutterやReactを用いてアプリケーション開発にも取り組んでいます．
      </p>
    </div>
  );
}
