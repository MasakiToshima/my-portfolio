"use client";

export default function ProfileSection() {
  return (
    <section className="w-full py-20">
      <div className="max-w-5xl mx-auto text-center px-6">
        {/* 名前（GreetingSectionと同じフォント系） */}
        <h2 className="text-4xl font-bold mb-4">Masaki Toshima</h2>

        {/* 自己紹介文 */}
        <p className="text-lg text-black leading-relaxed max-w-3xl mx-auto">
          北海道大学大学院でHCIを専攻しています。視線入力、ARインタフェース、
          スマートデバイス開発を中心に、人とデジタルの境界を滑らかにする
          インタラクション研究に取り組んでいます。
        </p>
      </div>
    </section>
  );
}
