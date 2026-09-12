"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <section id="projects" className="px-5 pb-20 pt-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <div className="mb-3 h-1 w-6 rounded-full bg-cyan-400" />
            <h2 className="text-xl font-extrabold uppercase tracking-tight">Selected Work</h2>
          </div>
          <a href="#projects" className="hidden items-center gap-2 text-sm font-semibold text-cyan-400 sm:flex">
            View All Projects <ArrowRight size={16}/>
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .08 }}
            >
              <ProjectCard project={project} featured={index === 1} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
