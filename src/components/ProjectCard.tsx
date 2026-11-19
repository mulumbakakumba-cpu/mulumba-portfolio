
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

const accents: Record<string, string> = {
  "Web Application": "WEB APPLICATION",
  "AI / Machine Learning": "MACHINE LEARNING",
  "Data Analytics": "DATA ANALYTICS",
  "Data / AI": "RECOMMENDER SYSTEM",
  "Full-Stack Web Development": "FULL-STACK DEVELOPMENT",
};

type Props = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({
  project,
  featured = false,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl border bg-[#0b1522] transition-all duration-300 ${
        featured
          ? "border-cyan-400/50 shadow-lg shadow-cyan-400/5"
          : "border-white/10 hover:border-cyan-400/40"
      }`}
    >
      {/* Featured label */}
      {featured && (
        <div className="absolute left-4 top-4 z-20 flex items-center gap-1.5 rounded-full border border-cyan-300/30 bg-[#07111d]/90 px-3 py-1.5 text-[10px] font-bold tracking-wider text-cyan-300 backdrop-blur-md">
          <span>✦</span>
          FEATURED PROJECT
        </div>
      )}

      {/* Project image */}
      <div className="relative h-52 overflow-hidden bg-[#07101a] sm:h-56">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-[#0b1522] to-blue-500/10" />
            <div className="relative w-[78%] rounded-xl border border-white/10 bg-[#07101a]/90 p-4 shadow-2xl">
              <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-300" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <div className="ml-2 h-2 w-24 rounded-full bg-white/10" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 space-y-3">
                  <div className="h-3 w-2/3 rounded bg-cyan-400/40" />
                  <div className="h-16 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-500/10" />
                  <div className="h-2 w-1/2 rounded bg-white/10" />
                </div>
                <div className="space-y-3 rounded-lg bg-white/[0.04] p-2">
                  <div className="mx-auto h-12 w-12 rounded-full border-4 border-cyan-400/40 border-r-blue-400/20" />
                  <div className="h-2 rounded bg-white/10" />
                  <div className="h-2 rounded bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Image overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1522] via-transparent to-black/10" />
        <div className="absolute inset-0 bg-cyan-400/0 transition-colors duration-300 group-hover:bg-cyan-400/[0.04]" />

        <div className="absolute bottom-4 left-5">
          <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[9px] font-bold tracking-[0.15em] text-cyan-200 backdrop-blur-md">
            {accents[project.category] ?? project.category}
          </span>
        </div>

        <div className="absolute bottom-4 right-5 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 group-hover:border-cyan-300 group-hover:bg-cyan-400 group-hover:text-[#06111b]">
          <ArrowUpRight size={17} />
        </div>
      </div>

      {/* Project information */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
          {project.title}
        </h3>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[10px] font-medium text-gray-300 transition-colors group-hover:border-cyan-400/20"
            >
              {technology}
            </span>
          ))}

          {project.technologies.length > 5 && (
            <span className="rounded-md border border-white/10 px-2.5 py-1.5 text-[10px] text-gray-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-white/[0.08]" />

        {/* Project links */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <a
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white transition-colors hover:text-cyan-300"
          >
            Case Study
            <ArrowUpRight size={14} />
          </a>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 transition-colors hover:text-white"
              >
                <GitBranch size={15} />
                GitHub
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-400 px-3 py-2 text-xs font-bold text-[#06111b] transition-all hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                Live Demo
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
