"use client";

import AboutProfile from "@/components/AboutProfile";
import AboutNews from "@/components/AboutNews";
import { newsItems } from "@/data/news";

export default function AboutSection() {
  return (
    <section id="profile" className="w-full py-16 px-6">
      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        {/* 上：プロフィール（名前・紹介・SNS） */}
        <AboutProfile />

        {/* 下：ニュース */}
        <AboutNews items={newsItems} />
      </div>
    </section>
  );
}
