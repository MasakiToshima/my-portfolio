type NameProps = {
  kanji: string; // 例: 戸嶋 将幹
  furigana?: string; // 例: としま まさき
  romaji?: string; // 例: Masaki Toshima
  align?: "left" | "center" | "right";
};

export default function Name({
  kanji,
  furigana,
  romaji,
  align = "left",
}: NameProps) {
  return (
    <div
      className={`flex flex-col ${
        align === "center"
          ? "items-center"
          : align === "right"
          ? "items-end"
          : "items-start"
      }`}
    >
      {/* フリガナ */}
      {furigana && (
        <span className="text-sm text-gray-500 tracking-wide mb-1">
          {furigana}
        </span>
      )}

      {/* 漢字（メイン） */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{kanji}</h2>

      {/* ローマ字 */}
      {romaji && (
        <span className="text-lg text-gray-600 tracking-widest mt-1">
          {romaji}
        </span>
      )}
    </div>
  );
}
