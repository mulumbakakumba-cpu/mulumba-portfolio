
"use client";

import Link from "next/link";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between rounded-2xl border border-white/10 bg-[#0a1421]/85 px-5 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-7">

        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-black text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-[#04111b]">
            MK
          </div>

          <div className="leading-tight">
            <p className="text-sm font-extrabold tracking-wide text-white">
              MULUMBA <span className="text-cyan-400">KAKUMBA</span>
            </p>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-gray-500">
              Computer Engineer
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden h-full items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative flex h-full items-center text-[12px] font-semibold text-gray-400 transition hover:text-cyan-300"
            >
              {item.name}
              <span className="absolute bottom-5 left-0 h-[2px] w-0 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CV BUTTON */}
        <div className="hidden lg:block">
          <a
            href="/cv/Mulumba-Kakumba-CV.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-xs font-bold text-cyan-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-400 hover:text-[#04111b]"
          >
            Download CV
            <Download size={15} className="transition group-hover:translate-y-0.5" />
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-cyan-400/40 hover:text-cyan-300 lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="mx-auto mt-2 max-w-[1200px] overflow-hidden rounded-2xl border border-white/10 bg-[#0a1421]/95 p-5 shadow-2xl backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/5 py-4 text-sm font-semibold text-gray-300 transition hover:text-cyan-300"
              >
                {item.name}
                <ArrowUpRight size={16} className="text-gray-600" />
              </Link>
            ))}

            <a
              href="/cv/Mulumba-Kakumba-CV.pdf"
              download
              onClick={() => setOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-bold text-[#04111b] transition hover:bg-cyan-300"
            >
              Download CV
              <Download size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
