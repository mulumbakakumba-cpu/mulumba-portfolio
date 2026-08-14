"use client";

import { Moon } from "lucide-react";

export default function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="rounded-full border border-white/10 p-2 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
    >
      <Moon size={18} />
    </button>
  );
}