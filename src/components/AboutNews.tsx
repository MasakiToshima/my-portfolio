// src/components/AboutNews.tsx
import NewsLines from "@/components/NewsLines";
import type { NewsItem } from "@/data/news";
import { FaRegNewspaper } from "react-icons/fa";

type AboutNewsProps = {
  items: NewsItem[];
};

export default function AboutNews({ items }: AboutNewsProps) {
  const maxItems = 4;
  const limitedItems = items.slice(0, maxItems);
  const hasMore = items.length > maxItems;

  return (
    <aside className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl px-8 py-7">
      <h2 className="flex items-center gap-2 text-sm font-bold tracking-wider text-gray-700 mb-4">
        <FaRegNewspaper size={14} className="text-gray-700" />
        NEWS
      </h2>

      {/* 4件だけ表示 */}
      <NewsLines items={limitedItems} />

      {/* More リンク */}
      {hasMore && (
        <div className="mt-4 text-right">
          <a
            href="/news"
            className="text-sm text-green-700 hover:underline font-semibold"
          >
            More →
          </a>
        </div>
      )}
    </aside>
  );
}
