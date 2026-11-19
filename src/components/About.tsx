
"use client";

import { motion } from "framer-motion";
import {
  UserRound,
  GraduationCap,
  BriefcaseBusiness,
  MapPin,
  Code2,
  BrainCircuit,
  Database,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const expertise = [
  {
    icon: Code2,
    title: "Software Engineering",
    description: "Building modern, scalable and user-focused applications.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description: "Exploring machine learning and intelligent solutions.",
  },
  {
    icon: Database,
    title: "Data & Databases",
    description: "Transforming data into meaningful insights and decisions.",
  },
];

const info = [
  {
    icon: GraduationCap,
    title: "Education",
    value: "BSc Computer Engineering",
  },
  {
    icon: BriefcaseBusiness,
    title: "Specialization",
    value: "Software, Data & AI",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Kinshasa, DRC",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#050b14] px-5 py-24 sm:py-32">

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              Get to know me
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            About <span className="text-cyan-400">Me.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-400">
            A little introduction to my background, interests and the
            technology that drives my work.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr]">

          {/* INTRODUCTION */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c1725] p-7 sm:p-10"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/[0.07] blur-3xl" />

            <div className="relative">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <UserRound size={26} />
              </div>

              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Engineering ideas into reality.
              </h3>

              <p className="mt-6 text-sm leading-8 text-gray-400 sm:text-base">
                I&apos;m a Computer Engineer passionate about technology,
                software development and intelligent digital solutions.
                My interests include data analytics, machine learning,
                database systems and modern web technologies.
              </p>

              <p className="mt-4 text-sm leading-8 text-gray-400 sm:text-base">
                I enjoy solving complex problems, learning new technologies
                and transforming ideas into practical applications that
                create meaningful impact.
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-7">
                <Sparkles size={19} className="text-cyan-400" />
                <span className="text-sm font-semibold text-gray-200">
                  Driven by curiosity. Focused on innovation.
                </span>
              </div>
            </div>
          </motion.div>

          {/* EXPERTISE */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex flex-1 items-start gap-5 rounded-2xl border border-white/10 bg-[#0c1725] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-[#101e2d]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-[#04111b]">
                    <Icon size={23} />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <span className="text-[10px] font-bold text-cyan-400">
                        0{index + 1}
                      </span>
                      <h3 className="text-base font-bold text-white">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-sm leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="ml-auto shrink-0 text-gray-600 transition group-hover:text-cyan-300"
                  />
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* PERSONAL INFORMATION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 grid gap-4 sm:grid-cols-3"
        >
          {info.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-cyan-400/20"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Icon size={21} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
