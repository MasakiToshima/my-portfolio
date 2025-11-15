// src/components/NewsList.tsx

type NewsItem = {
  date: string; // 例: "2025/10"
  title: string; // 例: "JPHACKS 2025 に参加しました"
  description?: string;
  href?: string; // クリックで飛ばしたい場合（任意）
};

type NewsListProps = {
  items: NewsItem[];
};

export default function NewsList({ items }: NewsListProps) {
  return (
    <aside className="bg-white/70 rounded-3xl shadow-xl px-6 py-5 flex flex-col h-full">
      <h2 className="text-sm font-semibold tracking-[0.2em] text-gray-500 mb-3">
        NEWS
      </h2>

      <div className="flex-1 space-y-3 overflow-hidden">
        {items.map((item, i) => {
          const Wrapper: React.ElementType = item.href ? "a" : "div";
          return (
            <Wrapper
              key={i}
              href={item.href}
              target={item.href ? "_blank" : undefined}
              rel={item.href ? "noreferrer" : undefined}
              className={`block rounded-2xl border border-gray-100 px-4 py-3 text-sm
                ${item.href ? "hover:bg-gray-50 transition-colors" : ""}`}
            >
              <div className="text-[11px] text-gray-400 mb-1">{item.date}</div>
              <div className="font-medium text-gray-800">{item.title}</div>
              {item.description && (
                <div className="mt-1 text-xs text-gray-500 line-clamp-2">
                  {item.description}
                </div>
              )}
            </Wrapper>
          );
        })}
      </div>
    </aside>
  );
}
