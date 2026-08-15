"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-20 text-white">

      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">

        {/* TWO COLUMNS */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px]">

          {/* LEFT: TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Computer Engineer • Data • Software
            </p>

            {/* ANIMATED NAME */}
            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-8xl">

              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 35 }}
                animate={{
                  opacity: 1,
                  y: [35, 0, -6, 0],
                }}
                transition={{
                  opacity: {
                    duration: 0.6,
                  },
                  y: {
                    duration: 3.2,
                    delay: 0.6,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  x: 8,
                  color: "#22d3ee",
                }}
              >
                MULUMBA
              </motion.span>

              <br />

              <motion.span
                className="inline-block text-gray-400"
                initial={{ opacity: 0, y: 35 }}
                animate={{
                  opacity: 1,
                  y: [35, 0, 6, 0],
                }}
                transition={{
                  opacity: {
                    duration: 0.6,
                    delay: 0.15,
                  },
                  y: {
                    duration: 3.2,
                    delay: 0.9,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  x: 8,
                  color: "#22d3ee",
                }}
              >
                KAKUMBA
              </motion.span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
              I build data-driven, scalable and intelligent digital solutions
              through software engineering, data analytics, databases and
              systems.
            </p>

            {/* BUTTONS */}
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

          {/* RIGHT: PHOTO */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
            }}
            className="relative flex justify-center lg:justify-end"
          >

            {/* Photo glow */}
            <div className="absolute -inset-5 rounded-[2rem] bg-cyan-400/10 blur-2xl" />

            {/* Photo */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gray-950 shadow-2xl shadow-cyan-500/10"
            >
              <img
                src="/images/mulumba-kakumba.jpg"
                alt="Mulumba Kakumba"
                className="h-[420px] w-[340px] object-cover object-top"
              />

              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
            </motion.div>

          </motion.div>

        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: 1,
          }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <ArrowDown
            className="animate-bounce text-gray-500"
            size={20}
          />
        </motion.div>

      </div>
    </section>
  );
}