// src/components/SkillSection.tsx
"use client";

import { skills } from "@/data/skills";
import Title from "./Title";

export default function SkillSection() {
  return (
    <section id="skills" className="w-full py-8">
      <div className="max-w-3xl mx-auto px-6">
        <Title>Skills</Title>

        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              {/* スキル名 */}
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{skill.name}</span>
              </div>

              {/* バー */}
              <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gray-800 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
