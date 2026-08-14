"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Data Analytics",
    skills: [
      "SQL",
      "Python",
      "Pandas",
      "Power BI",
      "Excel",
      "Data Visualization",
    ],
  },
  {
    title: "Web Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML / CSS",
    ],
  },
  {
    title: "Database",
    skills: [
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "Database Design",
      "SQL Optimization",
      "Data Modeling",
    ],
  },
  {
    title: "Systems & Cloud",
    skills: [
      "Linux",
      "Git",
      "GitHub",
      "Docker",
      "AWS",
      "System Administration",
    ],
  },
  {
    title: "AI / Machine Learning",
    skills: [
      "Scikit-learn",
      "TF-IDF",
      "Recommendation Systems",
      "Data Preprocessing",
      "Machine Learning",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
            Tools I use to turn ideas into solutions.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            A combination of software engineering, data analysis, database
            management and infrastructure skills.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="rounded-2xl border border-white/10 bg-zinc-950 p-7"
            >
              <h3 className="text-xl font-semibold">
                {group.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}