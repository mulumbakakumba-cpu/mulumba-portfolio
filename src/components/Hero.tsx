"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";

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
    <section className="portfolio-grid relative min-h-[700px] overflow-hidden px-5 pb-14 pt-28 text-white">
      <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[1.02fr_.98fr]">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[.04] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-cyan-300">
            Computer Engineer
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#13d8e9]" />
          </div>

          <h1 className="text-6xl font-black leading-[.9] tracking-tight sm:text-7xl lg:text-[74px]">
            MULUMBA
            <span className="block text-cyan-400">KAKUMBA</span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[15px] font-bold">
            <span>SOFTWARE</span><i className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>DATA</span><i className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>AI</span><i className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>SYSTEMS</span>
          </div>

          <p className="mt-6 max-w-[560px] text-[16px] leading-7 text-gray-300">
            I build data-driven, scalable and intelligent digital solutions
            that solve real-world problems and create meaningful impact.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-[#031018] shadow-[0_0_30px_rgba(19,216,233,.18)] transition hover:-translate-y-0.5 hover:bg-cyan-300">
              View My Work <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-cyan-400/60 px-6 py-3 text-sm font-bold text-white transition hover:bg-cyan-400/10">
              Get In Touch <MessageSquare size={17} />
            </a>
          </div>

          <div className="mt-7 flex items-center gap-7 text-sm text-gray-300">
            <a className="inline-flex items-center gap-2 hover:text-cyan-300" href="https://github.com/mulumbakakumba-cpu" target="_blank" rel="noreferrer"><GithubIcon size={20}/> GitHub</a>
            <a className="inline-flex items-center gap-2 hover:text-cyan-300" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><LinkedinIcon size={20}/> LinkedIn</a>
            <a className="inline-flex items-center gap-2 hover:text-cyan-300" href="mailto:mulumba.kakumba@gmail.com"><Mail size={20}/> Email</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35, scale: .97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: .8, delay: .15 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="absolute -inset-5 rounded-[30px] bg-cyan-400/10 blur-2xl" />
          <div className="absolute right-[-65px] top-4 hidden h-48 w-48 opacity-50 lg:block"
            style={{backgroundImage:"radial-gradient(#13d8e9 1px, transparent 1px)",backgroundSize:"18px 18px"}} />
          <div className="glow relative overflow-hidden rounded-[28px] border border-white/15 bg-[#111a25]">
            <img
              src="/images/mulumba-kakumba.jpg"
              alt="Mulumba Kakumba"
              className="h-[500px] w-[410px] object-cover object-top sm:h-[540px] sm:w-[440px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#031018]/50 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
