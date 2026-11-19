
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Code2,
  Sparkles,
} from "lucide-react";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .67a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .67Z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.37 4.28 5.45v6.3ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate min-h-[780px] overflow-hidden bg-[#050b14] px-5 pb-20 pt-32 text-white sm:pt-36 lg:min-h-[850px] lg:pt-40">

      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              Computer Engineer
            </span>
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-black leading-[1.05] tracking-[-0.055em] sm:text-7xl lg:text-[82px]">
            MULUMBA
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              KAKUMBA.
            </span>
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-gray-300 sm:text-sm">
            <span>Software</span>
            <span className="text-cyan-400">/</span>
            <span>Data</span>
            <span className="text-cyan-400">/</span>
            <span>Artificial Intelligence</span>
          </div>

          <p className="mt-7 max-w-[550px] text-base leading-8 text-gray-400 sm:text-lg">
            I design and develop intelligent digital experiences,
            scalable software solutions and data-driven systems
            that transform ideas into meaningful impact.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-7 py-4 text-sm font-bold text-[#04111b] shadow-[0_8px_35px_rgba(34,211,238,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
            >
              Explore My Work
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10"
            >
              Let's Talk
              <MessageCircle size={18} />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex flex-wrap items-center gap-7 border-t border-white/10 pt-7 text-sm text-gray-400">
            <a href="https://github.com/mulumbakakumba-cpu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-cyan-300">
              <GithubIcon size={19} /> GitHub
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-cyan-300">
              <LinkedinIcon size={19} /> LinkedIn
            </a>
            <a href="mailto:mulumba.kakumba@gmail.com" className="inline-flex items-center gap-2 transition hover:text-cyan-300">
              <Mail size={19} /> Email
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[460px] lg:ml-auto"
        >
          <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-cyan-400/20 to-blue-600/10 blur-3xl" />

          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-cyan-400/20" />
          <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full border border-blue-400/20" />

          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0c1725] p-2 shadow-2xl shadow-cyan-950/40">
            <div className="relative overflow-hidden rounded-[23px]">
              <img
                src="/images/mulumba-kakumba.jpg"
                alt="Mulumba Kakumba"
                className="h-[430px] w-full object-cover object-top sm:h-[540px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/75 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Building the Future
                </p>
                <p className="mt-2 text-xl font-bold text-white">
                  Innovation. Technology. Impact.
                </p>
              </div>
            </div>
          </div>

          {/* Floating card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 top-16 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#101d2b]/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:flex"
          >
            <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
              <Code2 size={23} />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Software Development</p>
              <p className="mt-1 text-xs text-gray-400">Creating digital solutions</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-4 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#101d2b]/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:flex"
          >
            <div className="rounded-xl bg-blue-400/10 p-3 text-blue-300">
              <Sparkles size={23} />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Innovation</p>
              <p className="mt-1 text-xs text-gray-400">Ideas into reality</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
