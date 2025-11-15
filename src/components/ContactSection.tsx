"use client";

import { FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactSection() {
  return (
    <footer className="w-full py-6 bg-white/70 backdrop-blur-xl shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* 左側：名前 or コピーライト */}
        <p className="text-gray-700 font-medium">
          © 2025 Masaki Toshima All Rights Reserved.
        </p>

        {/* 右側：アイコン群 */}
        <div className="flex items-center gap-6">
          <a
            href="https://twitter.com/masaki1122dx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500 transition-colors"
          >
            <FaTwitter size={26} />
          </a>

          <a
            href="https://instagram.com/mattsan1122"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-pink-500 transition-colors"
          >
            <FaInstagram size={26} />
          </a>

          <a
            href="mailto:toshima.masaki.akita@gmail.com"
            className="text-gray-800 hover:text-red-500 transition-colors"
          >
            <MdEmail size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}
