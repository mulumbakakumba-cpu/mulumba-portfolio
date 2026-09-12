"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

const accents: Record<string, string> = {
  "Web Application": "WEB APPLICATION",
  "AI / Machine Learning": "MACHINE LEARNING",
  "Data Analytics": "DATA ANALYTICS",
  "Data / AI": "RECOMMENDER SYSTEM",
};

type Props = { project: Project; featured?: boolean };

export default function ProjectCard({ project, featured = false }: Props) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className={`group overflow-hidden rounded-xl border bg-[#0d1723]/90 transition ${
        featured ? "border-cyan-400" : "border-white/10 hover:border-cyan-400/60"
      }`}
    >
      {featured && (
        <div className="absolute z-10 ml-3 mt-3 rounded-full bg-cyan-400 px-3 py-1 text-[10px] font-extrabold text-[#031018]">
          ✦ FEATURED
        </div>
      )}

      <div className="project-preview relative h-36 overflow-hidden border-b border-white/10">
        {project.image ? (
          <img src={project.image} alt="" className="h-full w-full object-cover" />
        ) : (
          <div className="absolute inset-4 rounded border border-white/10 bg-[#07101a]/80 p-3 shadow-2xl">
            <div className="mb-3 flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400/70"/>
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-300/70"/>
              <span className="h-1.5 w-1.5 rounded-full bg-green-300/70"/>
            </div>
            <div className="grid h-[82px] grid-cols-3 gap-2">
              <div className="col-span-2 rounded bg-white/5 p-2">
                <div className="h-2 w-1/2 rounded bg-cyan-400/40"/>
                <div className="mt-3 h-12 rounded bg-gradient-to-r from-cyan-400/20 to-white/5"/>
              </div>
              <div className="rounded bg-white/5 p-2">
                <div className="h-8 rounded-full border-4 border-cyan-400/30"/>
                <div className="mt-2 h-2 rounded bg-white/10"/>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-cyan-300">
          {accents[project.category] ?? project.category}
        </span>
        <h3 className="mt-3 text-[15px] font-bold text-white">{project.title}</h3>
        <p className="mt-2 min-h-[66px] text-[11px] leading-5 text-gray-300">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-lg">
          {project.technologies.slice(0, 5).map((technology) => (
            <span key={technology} title={technology}
              className="grid h-7 min-w-7 place-items-center rounded-md border border-white/10 bg-white/[.03] px-1.5 text-[9px] font-bold text-gray-300">
              {technology.slice(0, 2)}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-4 text-[11px] font-semibold">
          {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-cyan-300">GitHub ↗</a>}
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="text-cyan-300">Live Demo ↗</a>}
          <a href={`/projects/${project.slug}`} className="text-gray-300 hover:text-cyan-300">Case Study ↗</a>
        </div>
      </div>
    </motion.article>
  );
}
