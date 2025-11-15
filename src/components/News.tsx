// src/components/News.tsx
type NewsProps = {
  date: string;
  title: string;
  description?: string;
  href?: string;
};

export default function News({ date, title, description, href }: NewsProps) {
  const Wrapper: React.ElementType = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      className={
        href
          ? "block hover:bg-gray-50 rounded-2xl px-3 -mx-3 transition-colors"
          : ""
      }
    >
      <div className="text-[11px] text-gray-400 mb-1">{date}</div>
      <div className="text-sm text-gray-800 font-medium">{title}</div>
      {description && (
        <div className="mt-1 text-xs text-gray-500 leading-relaxed">
          {description}
        </div>
      )}
    </Wrapper>
  );
}
