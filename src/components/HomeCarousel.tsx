// src/components/HomeCarousel.tsx
"use client";

import { useEffect, useState } from "react";

type HomeCarouselProps = {
  images: string[];
  intervalMs?: number;
};

export default function HomeCarousel({
  images,
  intervalMs = 4000,
}: HomeCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  if (images.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 pb-10">
      <div className="relative w-full h-56 md:h-64 overflow-hidden rounded-3xl shadow-lg">
        <div
          className="absolute inset-0 flex transition-transform duration-[800ms] ease-out"
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
      </div>
    </section>
  );
}
