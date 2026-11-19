
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
  GitBranch,
  BriefcaseBusiness,
} from "lucide-react";
export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050b14] text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />

      {/* EXPERIENCE */}
      <section id="experience" className="px-5 py-24">
        <div className="mx-auto max-w-[1200px] rounded-3xl border border-white/10 bg-[#0c1725] p-8 sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="mt-5 text-3xl font-black sm:text-4xl">
            Ready to learn, build and contribute.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-8 text-gray-400">
            As a Computer Engineering graduate, I&apos;m open to
            opportunities, collaborative projects and professional
            challenges where I can develop my skills and create
            meaningful impact.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden px-5 py-24 sm:py-32"
      >
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[130px]" />

        <div className="relative mx-auto max-w-[1200px]">

          <div className="mb-14">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                Get In Touch
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
              Let's create something
              <span className="text-cyan-400"> extraordinary.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-400">
              Have an opportunity, an interesting project or an idea
              to discuss? My inbox is always open.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">

            {/* CONTACT CARD */}
            <div className="rounded-3xl border border-white/10 bg-[#0c1725] p-7 sm:p-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <Mail size={27} />
              </div>

              <h3 className="text-2xl font-bold text-white">
                Let's talk about your next project.
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                I would be happy to connect, exchange ideas and
                explore opportunities to work together.
              </p>

              <a
                href="mailto:mulumba.kakumba@gmail.com"
                className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-7 py-4 text-sm font-bold text-[#04111b] transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                <Send size={17} />
                Send Me an Email
                <ArrowUpRight size={17} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <div className="mt-10 border-t border-white/10 pt-7">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Direct Email
                </p>

                <a
                  href="mailto:mulumba.kakumba@gmail.com"
                  className="mt-3 inline-block break-all text-sm font-semibold text-cyan-300 transition hover:text-white"
                >
                  mulumba.kakumba@gmail.com
                </a>
              </div>
            </div>

            {/* INFORMATION */}
            <div className="flex flex-col gap-5">

              <div className="flex flex-1 items-start gap-5 rounded-3xl border border-white/10 bg-[#0c1725] p-7 transition hover:border-cyan-400/30">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <MapPin size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Location
                  </p>
                  <p className="mt-3 text-lg font-bold text-white">
                    Kinshasa, DRC
                  </p>
                  <p className="mt-2 text-xs text-gray-400">
                    Democratic Republic of the Congo
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#0c1725] p-7">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Connect With Me
                </p>

                <div className="mt-6 flex flex-col gap-4">
                  <a
                    href="https://github.com/mulumbakakumba-cpu"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm font-semibold text-gray-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    <span className="flex items-center gap-3">
                      <GitBranch size={19} />
                    </span>
                    <ArrowUpRight size={17} />
                  </a>

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm font-semibold text-gray-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    <span className="flex items-center gap-3">
                      <BriefcaseBusiness size={19} />
                    </span>
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm font-bold text-white">
            MULUMBA <span className="text-cyan-400">KAKUMBA.</span>
          </p>

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Mulumba Kakumba. All rights reserved.
          </p>

          <a href="#" className="text-xs font-semibold text-gray-400 transition hover:text-cyan-400">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
