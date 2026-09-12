"use client";

import Link from "next/link";
import { Download, Menu, X, Sun } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#020910]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 lg:px-0">
        <Link href="/" className="text-[20px] font-extrabold tracking-tight">
          MULUMBA <span className="text-cyan-400">KAKUMBA</span>
        </Link>

        <div className="hidden h-full items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative flex h-full items-center text-[13px] font-semibold transition hover:text-cyan-300 ${
                index === 0 ? "text-white" : "text-gray-300"
              }`}
            >
              {item.name}
              {index === 0 && (
                <span className="absolute bottom-[-1px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_12px_#13d8e9]" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            aria-label="Theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-cyan-400/50 text-gray-200 transition hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            <Sun size={17} />
          </button>
          <a
            href="/cv/Mulumba-Kakumba-CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/70 px-5 py-2 text-[13px] font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-[#031018]"
          >
            Download CV
            <Download size={16} />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#020910] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setOpen(false)}
                className="text-sm text-gray-300 hover:text-cyan-400">
                {item.name}
              </Link>
            ))}
            <a
  href="/cv/Mulumba-Kakumba-CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  Download CV
</a>
          </div>
        </div>
      )}
    </header>
  );
}
