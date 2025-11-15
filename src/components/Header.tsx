// src/components/Header.tsx
"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const SECTIONS = [
  { id: "profile", label: "Profile" },
  { id: "works", label: "Works" },
  { id: "skills", label: "Skills" },
  { id: "history", label: "History" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* ★ fixed → absolute に変更 */}
      <header className="absolute top-0 left-0 w-full z-40">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => setOpen(true)}
            className="text-white hover:text-gray-100 transition drop-shadow"
          >
            <HiMenu className="w-7 h-7" />
          </button>

          <div className="text-sm font-semibold text-white drop-shadow">
            Masaki Toshima
          </div>
        </div>
      </header>

      {/* オーバーレイ & サイドメニューはそのまま固定でOK */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-gray-700 hover:text-black transition"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col mt-2">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className="text-left px-6 py-3 text-base text-gray-900 hover:bg-gray-100"
            >
              {s.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
