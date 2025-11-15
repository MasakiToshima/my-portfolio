// src/components/WorkCard.tsx
import type { Work } from "@/data/works";
import Image from "next/image";

type WorkCardProps = {
  work: Work;
};

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <article className="bg-white/80 rounded-3xl shadow-xl overflow-hidden flex flex-col">
      {/* 画像エリア：高さをしっかり取る */}
      <div className="relative w-full h-56 md:h-64">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>

      {/* テキストエリア */}
      <div className="px-6 py-5">
        <h3 className="text-sm font-semibold text-gray-500 mb-1">
          {work.title}
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          {work.description}
        </p>

        {work.link && (
          <a
            href={work.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center mt-4 text-xs font-semibold text-sky-600 hover:text-sky-700"
          >
            View on GitHub
          </a>
        )}
      </div>
    </article>
  );
}
