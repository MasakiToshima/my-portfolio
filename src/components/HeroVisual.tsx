// src/components/HeroVisual.tsx
type HeroVisualProps = {
  title: string;
  subtitle?: string;
  backgroundImage: string; // 例: "/cows.jpg"
  scrollLabel?: string;
};

export default function HeroVisual({
  title,
  subtitle,
  backgroundImage,
  scrollLabel = "SCROLL",
}: HeroVisualProps) {
  return (
    <section
      className="
        relative w-full h-[80vh] md:h-screen
        bg-fixed bg-cover bg-center
      "
      // ここで画像のパスを背景に指定
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* 上からかぶせるグラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />

      {/* タイトル・サブタイトル */}
      <div className="relative z-10 max-w-6xl mx-auto h-full px-6 flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm md:text-lg text-white/80 max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* 下部 SCROLL ラベル */}
      {scrollLabel && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-white/70">
          {scrollLabel.toUpperCase()}
        </div>
      )}
    </section>
  );
}
