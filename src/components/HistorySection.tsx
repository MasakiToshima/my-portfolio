// src/components/HistorySection.tsx
import HistoryItemRow from "./HistoryItemRow";
import { historyItems } from "@/data/history";
import Title from "./Title";

export default function HistorySection() {
  return (
    <section id="history" className="w-full py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* セクションタイトル */}
        <Title>History</Title>

        {/* タイムライン本体 */}
        <ol className="space-y-6">
          {historyItems.map((item, idx) => (
            <HistoryItemRow
              key={`${item.date}-${idx}`}
              item={item}
              isLast={idx === historyItems.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
