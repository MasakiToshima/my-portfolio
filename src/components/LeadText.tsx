// src/components/LeadText.tsx
import type { ReactNode } from "react";

type LeadTextProps = {
  children: ReactNode;
};

export default function LeadText({ children }: LeadTextProps) {
  return (
    <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
      {children}
    </p>
  );
}
