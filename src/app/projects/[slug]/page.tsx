import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/#projects"
            className="text-sm text-gray-400 transition hover:text-cyan-400"
          >
            ← Back to projects
          </Link>

          <p className="mt-12 text-sm uppercase tracking-[0.3em] text-cyan-400">
            {project.category}
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight sm:text-7xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400">
            {project.description}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_280px]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                Overview
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                About the project
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                {project.longDescription}
              </p>
            </div>

            {/* Technologies */}
            <aside>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                Technologies
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-2 text-sm text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            The Problem
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            What problem does this solve?
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            This project was created to address a real-world problem through
            technology, automation, data and better digital experiences.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Process
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            How I approached it
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["01", "Research", "Understanding the problem and requirements."],
              ["02", "Build", "Designing and implementing the solution."],
              ["03", "Improve", "Testing, analyzing and refining the result."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
              >
                <span className="text-sm text-cyan-400">
                  {number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-cyan-400"
            >
              View on GitHub ↗
            </a>
          )}

          <Link
            href="/#projects"
            className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Back to projects
          </Link>
        </div>
      </section>
    </main>
  );
}