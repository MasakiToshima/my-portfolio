// src/app/page.tsx
import Header from "@/components/Header";
import HeroVisual from "@/components/HeroVisual";
import WorksSection from "@/components/WorkSection";
import SkillsSection from "@/components/SkillsSection";
import HistorySection from "@/components/HistorySection";
import AboutSection from "@/components/AboutSection";
import GreetingSection from "@/components/GreetingSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-hakushu">
      <Header />

      <HeroVisual
        title="Masaki Toshima"
        subtitle="北海道大学大学院でインタラクションの研究をしています."
        backgroundImage="/cows.jpg"
        scrollLabel="scroll"
      />
      <GreetingSection />
      <AboutSection />
      <WorksSection />
      <SkillsSection />
      <HistorySection />
      <ContactSection />
    </main>
  );
}
