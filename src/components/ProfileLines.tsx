// src/components/ProfileLines.tsx
type ProfileLinesProps = {
  /** 1行ずつのテキスト。"" を入れると空行になる */
  lines: string[];
};

export default function ProfileLines({ lines }: ProfileLinesProps) {
  return (
    <div className="mt-2 text-[15px] leading-relaxed text-emerald-700">
      {lines.map((line, i) =>
        line === "" ? (
          // 空文字のときだけ「空行」にする
          <div key={i} className="h-3" />
        ) : (
          <p key={i}>{line}</p>
        )
      )}
    </div>
  );
}
