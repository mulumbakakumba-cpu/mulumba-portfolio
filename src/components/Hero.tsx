"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-20 text-white">
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Computer Engineer • Data • Software
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-8xl">
            MULUMBA
            <br />
            <span className="text-gray-400">KAKUMBA</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
            I build data-driven, scalable and intelligent digital solutions
            through software engineering, data analytics, databases and
            systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-cyan-400"
            >
              View Projects
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="/cv/Mulumba-Kakumba-CV.pdf"
              download
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <ArrowDown className="animate-bounce text-gray-500" size={20} />
        </motion.div>
      </div>
    </section>
  );
}