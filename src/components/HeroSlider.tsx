// src/components/HeroSlider.tsx
"use client";

import { useEffect, useState } from "react";

type HeroSliderProps = {
  images: string[];
  title: string;
  subtitle?: string;
  intervalMs?: number;
  scrollLabel?: string;
};

export default function HeroSlider({
  images,
  title,
  subtitle,
  intervalMs = 5000,
  scrollLabel = "SCROLL",
}: HeroSliderProps) {
  const [index, setIndex] = useState(0);

  // 一定間隔で index を進める
  useEffect(() => {
    if (images.length <= 1) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      {/* 横に並べたスライドたち */}
      <div
        className="absolute inset-0 flex transition-transform duration-[1200ms] ease-out"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${index * (100 / images.length)}%)`,
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      {/* 上にかぶせるグラデーション */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* テキストエリア */}
      <div className="relative z-10 max-w-6xl mx-auto h-full px-6 flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
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
