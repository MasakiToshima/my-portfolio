// src/components/IntroductionSection.tsx
export default function IntroductionSection() {
  return (
    <section
      id="introduction"
      className="max-w-6xl mx-auto px-6 mt-10"
    >
      <div className="bg-white rounded-3xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-3">Introduction</h2>
        <p className="text-slate-700 leading-relaxed">
          視線入力や行動変容を促すARインタフェースなど、
          人とコンピュータの「インタラクション」をテーマに研究しています。
        </p>
      </div>
    </section>
  );
}
