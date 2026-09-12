import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020910] text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />

      <section id="experience" className="px-5 py-20">
        <div className="mx-auto max-w-[1180px] rounded-2xl border border-white/10 bg-[#0d1723]/70 p-8">
          <p className="text-xs font-bold uppercase tracking-[.25em] text-cyan-400">Experience</p>
          <h2 className="mt-3 text-3xl font-extrabold">Ready to learn, build and contribute.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400">
            As a fresh Computer Engineering graduate, I&apos;m open to internships,
            junior roles and collaborative projects where I can create measurable impact.
          </p>
        </div>
      </section>

      <section id="contact" className="px-5 pb-24 pt-8">
        <div className="mx-auto max-w-[1180px] rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-400/10 to-transparent p-8">
          <p className="text-xs font-bold uppercase tracking-[.25em] text-cyan-400">Contact</p>
          <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-extrabold">Let&apos;s build something useful.</h2>
              <p className="mt-3 text-sm text-gray-400">Have an opportunity or a project? I&apos;d be happy to hear from you.</p>
            </div>
            <a href="mailto:mulumba.kakumba@gmail.com" className="w-fit rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-[#031018] hover:bg-cyan-300">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Mulumba Kakumba. All rights reserved.
      </footer>
    </main>
  );
}
