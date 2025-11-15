// src/app/news/page.tsx
import NewsLines from "@/components/NewsLines";
import { newsItems } from "@/data/news";

export default function NewsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold mb-6">All News</h1>
      <NewsLines items={newsItems} />
    </main>
  );
}
