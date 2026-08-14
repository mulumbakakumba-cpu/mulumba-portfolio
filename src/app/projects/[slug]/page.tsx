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

  const isElectricityAnalytics =
    project.slug === "electricity-analysis";

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

          {/* Electricity statistics */}
          {isElectricityAnalytics && (
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                ["35,040", "Records"],
                ["4", "Regions"],
                ["1,789", "Anomalies"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <p className="text-3xl font-bold text-white">
                    {value}
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          )}
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

      {/* Electricity Analytics - Dataset */}
      {isElectricityAnalytics && (
        <section className="bg-zinc-950 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Dataset
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Understanding the data
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              The dataset contains electricity measurements collected
              across four regions during 2025. It contains 35,040
              observations and seven variables covering consumption,
              environmental and electrical conditions.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["35,040", "Observations"],
                ["7", "Variables"],
                ["4", "Regions"],
                ["2025", "Data period"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <p className="text-2xl font-bold text-white">
                    {value}
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "datetime",
                "hour",
                "region",
                "consumption_kwh",
                "temperature_c",
                "voltage_v",
                "power_factor",
              ].map((column) => (
                <span
                  key={column}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-gray-400"
                >
                  {column}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Problem */}
      <section
        className={
          isElectricityAnalytics
            ? "px-6 py-24"
            : "bg-zinc-950 px-6 py-24"
        }
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            The Problem
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            {isElectricityAnalytics
              ? "Detecting unusual electricity behavior"
              : "What problem does this solve?"}
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            {isElectricityAnalytics
              ? "The objective was to analyze electricity consumption across different regions, identify abnormal consumption patterns and detect potential voltage and power-factor issues that could require further investigation."
              : "This project was created to address a real-world problem through technology, automation, data and better digital experiences."}
          </p>
        </div>
      </section>

      {/* Electricity Analytics - Anomalies */}
      {isElectricityAnalytics && (
        <section className="bg-zinc-950 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Anomaly Detection
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Identifying abnormal measurements
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              Statistical analysis was used to identify unusual values
              across electricity consumption, voltage and power factor.
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                [
                  "1,265",
                  "Consumption anomalies",
                  "Unusual electricity consumption measurements.",
                ],
                [
                  "220",
                  "Voltage anomalies",
                  "Measurements outside the expected voltage range.",
                ],
                [
                  "324",
                  "Power-factor anomalies",
                  "Potential electrical efficiency issues.",
                ],
              ].map(([value, title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-black p-7"
                >
                  <p className="text-3xl font-bold text-cyan-400">
                    {value}
                  </p>

                  <h3 className="mt-4 text-xl font-semibold">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05] p-7">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                Total
              </p>

              <p className="mt-3 text-4xl font-bold">
                1,789
              </p>

              <p className="mt-2 text-gray-400">
                Rows containing at least one detected anomaly.
              </p>
            </div>
          </div>
        </section>
      )}

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
            {(
              isElectricityAnalytics
                ? [
                    [
                      "01",
                      "Explore",
                      "Loaded, inspected and analyzed 35,040 electricity measurements.",
                    ],
                    [
                      "02",
                      "Detect",
                      "Identified abnormal consumption, voltage and power-factor measurements.",
                    ],
                    [
                      "03",
                      "Visualize",
                      "Built analytical visualizations and an interactive Streamlit dashboard.",
                    ],
                  ]
                : [
                    [
                      "01",
                      "Research",
                      "Understanding the problem and requirements.",
                    ],
                    [
                      "02",
                      "Build",
                      "Designing and implementing the solution.",
                    ],
                    [
                      "03",
                      "Improve",
                      "Testing, analyzing and refining the result.",
                    ],
                  ]
            ).map(([number, title, description]) => (
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

      {/* Key insights */}
      {isElectricityAnalytics && (
        <section className="bg-zinc-950 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Key Insights
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              What the analysis revealed
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                "Kinshasa recorded the highest average electricity consumption among the four regions.",
                "Consumption patterns varied significantly depending on the hour of the day.",
                "Voltage and power-factor measurements provided additional indicators for identifying abnormal electrical conditions.",
                "The analysis combines exploratory data analysis, anomaly detection and SQL-based aggregation to support operational insights.",
              ].map((insight) => (
                <div
                  key={insight}
                  className="rounded-2xl border border-white/10 bg-black p-6"
                >
                  <div className="flex gap-4">
                    <span className="mt-1 text-cyan-400">→</span>

                    <p className="leading-7 text-gray-400">
                      {insight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 font-medium text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-400/20"
            >
              Live Dashboard ↗
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