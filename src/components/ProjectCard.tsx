"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
    >
      {/* Project visual */}
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-500/10 via-zinc-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_60%)]" />

        <span className="relative text-sm uppercase tracking-[0.3em] text-gray-500">
          {project.category}
        </span>
      </div>

      {/* Project information */}
      <div className="p-7">
        <p className="text-sm text-cyan-400">
          {project.category}
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-gray-400 transition hover:border-cyan-400/40 hover:text-cyan-400"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project statistics */}
        {project.stats && (
          <div className="mt-6 grid grid-cols-3 gap-3">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center"
              >
                <p className="text-lg font-bold text-white">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="mt-7 flex flex-wrap items-center gap-5">
          {/* GitHub */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-cyan-400"
            >
              GitHub
              <ArrowUpRight size={16} />
            </a>
          )}

          {/* Live Demo */}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-400/20"
            >
              Live Dashboard
              <ArrowUpRight size={16} />
            </a>
          )}

          {/* Case Study */}
          <a
            href={`/projects/${project.slug}`}
            className="group/link inline-flex items-center gap-2 text-sm text-white transition hover:text-cyan-400"
          >
            Case Study
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
}