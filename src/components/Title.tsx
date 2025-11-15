import type { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  align?: "left" | "center";
};

export default function Title({ children, align = "left" }: TitleProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <h2 className={`text-3xl font-bold mb-6 text-gray-900 ${alignment}`}>
      {children}
    </h2>
  );
}
