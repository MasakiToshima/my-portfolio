// src/components/NewsLines.tsx
import News from "@/components/News";

export type NewsItem = {
  date: string;
  title: string;
  description?: string;
  href?: string;
};

type NewsLinesProps = {
  items: NewsItem[];
};

export default function NewsLines({ items }: NewsLinesProps) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <News
          key={i}
          date={item.date}
          title={item.title}
          description={item.description}
          href={item.href}
        />
      ))}
    </div>
  );
}
