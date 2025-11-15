// src/components/WorkSection.tsx

import { works } from "@/data/works";
import WorkCard from "./WorkCard";
import Title from "./Title";

export default function WorkSection() {
  return (
    <section id="works" className="max-w-4xl mx-auto px-6 py-16">
      <Title>Works</Title>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {works.map((work, i) => (
          // ❌ 以前: <WorkCard key={i} {...work} />
          // ✅ props 名 work で渡す
          <WorkCard key={i} work={work} />
        ))}
      </div>
    </section>
  );
}
