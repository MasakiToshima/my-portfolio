// src/data/skills.ts

export type Skill = {
  name: string;
  level: number; // 0〜100 の％
};

export const skills: Skill[] = [
  { name: "Python", level: 80 },
  { name: "Flutter / Dart", level: 70 },
  { name: "React", level: 70 },
  { name: "Unity / C#", level: 50 },
  { name: "Arduino", level: 50 },
];
