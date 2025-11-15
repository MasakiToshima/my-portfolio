// src/components/GreetingSection.tsx

export default function GreetingSection() {
  return (
    <div className="relative w-full my-20 select-none pointer-events-none">
      {/* 背景直書き風テキスト */}
      <p
        className="
        text-[22px] leading-relaxed
        text-green-900/75    /* 濃緑の超淡い版 */
        font-serif
        max-w-3xl mx-auto
        text-left
      "
      >
        ものづくりが好きで、
        <br />
        人の行動や体験をデザインする研究をしています。
        <br />
        ひと目の発見が、誰かの未来を少し良くする──
        <br />
        そんな価値を生むインタラクションを追い求めています。
      </p>
    </div>
  );
}
