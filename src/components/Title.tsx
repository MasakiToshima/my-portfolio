import type { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  align?: "left" | "center";
};

export default function Title({ children, align = "left" }: TitleProps) {
  const alignment = align === "center" ? "text-center" : "text-left";
  const linePos = align === "center" ? "mx-auto" : "ml-0";

  return (
    <div className="mb-10">
      <h2
        className={`text-4xl font-extrabold tracking-tight text-gray-900 ${alignment}`}
      >
        {children}
      </h2>

      {/* アクセントライン */}
      <div
        className={`h-1 w-12 bg-green-600 rounded-full mt-2 ${linePos}`}
      ></div>
    </div>
  );
}
