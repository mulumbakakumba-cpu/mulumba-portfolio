export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Computer Engineer • Developer • ML Enthusiast • Writer
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Hi, I&apos;m{" "}
          <span className="text-cyan-400">Mulumba Kakumba.</span>
        </h1>

        <h2 className="mt-6 text-2xl font-semibold text-gray-300 md:text-4xl">
          I build intelligent digital solutions.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Computer Engineering graduate focused on software development,
          machine learning, data-driven systems, cloud technologies and
          cybersecurity. Skilled in building modern web applications.
          Eager to contribute to innovative technology projects while
          continuously developing professional expertise.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-gray-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Selected Work
        </p>

        <h2 className="mt-3 text-4xl font-bold">Featured Projects</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Movie Recommender */}
          <article className="rounded-3xl border border-gray-800 bg-gray-950 p-8 transition hover:-translate-y-1 hover:border-cyan-400">
            <div className="mb-6 text-5xl">🎬</div>

            <h3 className="text-2xl font-bold">
              Hybrid Movie Recommender
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              A machine-learning recommendation system combining
              TF-IDF content-based filtering with SVD collaborative
              filtering, integrated with TMDB and deployed with
              Streamlit.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Python",
                "TF-IDF",
                "SVD",
                "Machine Learning",
                "Streamlit",
                "TMDB API",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-gray-900 px-3 py-1 text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/mulumbakakumba-cpu/movie-recommender"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-700 px-5 py-2 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                GitHub ↗
              </a>

              <a
                href="https://movie-recommender-09.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                Live Demo 🚀
              </a>
            </div>
          </article>

          {/* eForeigner */}
          <article className="rounded-3xl border border-gray-800 bg-gray-950 p-8 transition hover:-translate-y-1 hover:border-cyan-400">
            <div className="mb-6 text-5xl">🇨🇩</div>

            <h3 className="text-2xl font-bold">eForeigner DRC</h3>

            <p className="mt-4 leading-7 text-gray-400">
              A digital portal concept designed to simplify access
              to immigration-related services through an online
              citizen-facing platform.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Turborepo",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-gray-900 px-3 py-1 text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-4xl font-bold">Let&apos;s build something.</h2>

        <p className="mt-4 max-w-2xl text-gray-400">
          I&apos;m open to opportunities, collaborations and projects
          involving software engineering, machine learning and
          technology.
        </p>

        <a
          href="mailto:mulumba.kakumba@final.edu.tr"
          className="mt-8 inline-block rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
        >
          Get in touch
        </a>
      </section>

      <footer className="border-t border-gray-900 py-8 text-center text-sm text-gray-500">
        © 2026 Mulumba Kakumba. Built with Next.js.
      </footer>
    </main>
  );
}