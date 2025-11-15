"use client";

import type { ReactElement } from "react";

type ButtonProps = {
  href?: string;              // 外部リンク用
  onClick?: () => void;       // クリックイベント用
  label: string;              // ボタンのラベル
  icon?: ReactElement;        // アイコン（任意）
  colorClass?: string;        // 背景色などのスタイル
};

export default function Button({
  href,
  onClick,
  label,
  icon,
  colorClass = "bg-black text-white",
}: ButtonProps) {
  const baseClass =
    "flex items-center justify-center gap-2 px-6 py-3 rounded-full transition hover:opacity-80";

  // 🔗 外部リンクボタン
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${colorClass}`}
      >
        {icon}
        <span>{label}</span>
      </a>
    );
  }

  // 🖱 内部イベントボタン
  return (
    <button onClick={onClick} className={`${baseClass} ${colorClass}`}>
      {icon}
      <span>{label}</span>
    </button>
  );
}
