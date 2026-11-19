
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Database,
  BrainCircuit,
  Cloud,
  BarChart3,
  Terminal,
  Cpu,
  Layers3,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    subtitle: "Building the logic behind applications",
    icon: Code2,
    number: "01",
    skills: ["Python", "JavaScript", "TypeScript", "PHP", "SQL"],
  },
  {
    title: "Frontend Development",
    subtitle: "Creating modern digital experiences",
    icon: Globe,
    number: "02",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    subtitle: "Developing application logic and APIs",
    icon: Layers3,
    number: "03",
    skills: ["Node.js", "REST APIs", "Express", "PHP", "Supabase"],
  },
  {
    title: "Data Analytics",
    subtitle: "Turning information into insights",
    icon: BarChart3,
    number: "04",
    skills: ["Pandas", "Power BI", "Excel", "Data Visualization", "SQL"],
  },
  {
    title: "AI & Machine Learning",
    subtitle: "Building intelligent solutions",
    icon: BrainCircuit,
    number: "05",
    skills: [
      "Scikit-learn",
      "TF-IDF",
      "Recommendation Systems",
      "Data Preprocessing",
      "Machine Learning",
    ],
  },
  {
    title: "Databases & Cloud",
    subtitle: "Managing data and infrastructure",
    icon: Database,
    number: "06",
    skills: [
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "Docker",
      "AWS",
      "Git & GitHub",
      "Linux",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050b14] px-5 py-24 text-white sm:py-32"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-500/[0.07] blur-[130px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              Technical Expertise
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                My <span className="text-cyan-400">Skills.</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-gray-400">
                The technologies, tools and technical foundations I use
                to transform complex challenges into practical digital
                solutions.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05] px-5 py-4">
              <Cpu size={24} className="text-cyan-400" />
              <div>
                <p className="text-sm font-bold text-white">
                  Engineering Mindset
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Learn · Build · Innovate
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SKILL CARDS */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c1725] p-7 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(8,145,178,0.10)]"
              >
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-400/[0.04] blur-2xl transition group-hover:bg-cyan-400/[0.10]" />

                <div className="relative">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition duration-300 group-hover:bg-cyan-400 group-hover:text-[#04111b]">
                      <Icon size={26} />
                    </div>

                    <span className="text-sm font-bold tracking-widest text-gray-600">
                      / {group.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white transition group-hover:text-cyan-300">
                    {group.title}
                  </h3>

                  <p className="mt-2 min-h-10 text-xs leading-6 text-gray-500">
                    {group.subtitle}
                  </p>

                  <div className="my-6 h-px bg-white/[0.07]" />

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs font-medium text-gray-300 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 flex flex-col items-start justify-between gap-5 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400/[0.08] to-blue-500/[0.04] p-7 sm:flex-row sm:items-center sm:p-9"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
              <Terminal size={23} />
            </div>

            <div>
              <h3 className="font-bold text-white">
                Always Learning. Always Building.
              </h3>
              <p className="mt-1 text-xs text-gray-400">
                Exploring new technologies and improving my engineering skills.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
            <Cloud size={17} />
            Continuous Growth
          </div>
        </motion.div>

      </div>
    </section>
  );
}
