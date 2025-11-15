// src/components/HistoryItemRow.tsx
import type { HistoryItem } from "@/data/history";

type HistoryItemRowProps = {
  item: HistoryItem;
  isLast?: boolean;
};

export default function HistoryItemRow({ item, isLast }: HistoryItemRowProps) {
  return (
    <li className="relative flex gap-4">
      {/* 左のアイコン＋線 */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-emerald-800 border-4 border-white shadow-md" />
        {!isLast && <div className="w-px flex-1 bg-emerald-800 mt-1" />}
      </div>

      {/* 右側の吹き出しカード */}
      <div className="bg-white/80 rounded-2xl shadow-sm px-4 py-3 text-sm min-w-[220px]">
        <div className="text-[11px] text-gray-400 mb-1">{item.date}</div>
        <div className="text-gray-800 font-medium leading-snug">
          {item.title}
        </div>
        {item.description && (
          <div className="mt-1 text-xs text-gray-500 leading-relaxed">
            {item.description}
          </div>
        )}
      </div>
    </li>
  );
}
