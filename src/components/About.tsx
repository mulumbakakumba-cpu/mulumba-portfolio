"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Database, BarChart3 } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Building modern, responsive and scalable web applications with React, Next.js and TypeScript.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transforming raw data into meaningful insights using SQL, Python, Pandas, Excel and Power BI.",
  },
  {
    icon: Database,
    title: "Database & Systems",
    description:
      "Designing, managing and working with relational databases and modern IT infrastructure.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-zinc-950 px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <div className="mt-6 grid gap-12 lg:grid-cols-2">
            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              I build technology with{" "}
              <span className="text-gray-500">purpose.</span>
            </h2>

            <div className="space-y-5 text-lg leading-8 text-gray-400">
              <p>
                I&apos;m Mulumba Kakumba, a Computer Engineering graduate
                interested in software engineering, data analytics, databases
                and systems.
              </p>

              <p>
                My goal is to transform technical knowledge and data into
                practical solutions that solve real-world problems.
              </p>

              <a
                href="#projects"
                className="group inline-flex items-center gap-2 text-white transition hover:text-cyan-400"
              >
                Explore my work
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.06]"
              >
                <Icon
                  size={30}
                  className="text-cyan-400 transition-transform duration-300 group-hover:scale-110"
                />

                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}