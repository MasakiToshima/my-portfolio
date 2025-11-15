// src/components/Hero.tsx
export default function Hero() {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "40px auto",
        display: "flex",
        gap: "32px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          flex: 1,
          borderRadius: "24px",
          overflow: "hidden",
          height: "260px",
          backgroundColor: "#ddd",
        }}
      >
        {/* とりあえず色だけ。あとで画像に変える */}
      </div>

      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "8px" }}>
          Hi, I&apos;m Masaki Toshima.
        </h1>
        <p>
          北海道大学 情報科学院に所属している大学院生です。
          HCI・インタラクションを中心に研究を行っています。
        </p>
      </div>
    </section>
  );
}
