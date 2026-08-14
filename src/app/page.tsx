import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <section
        id="contact"
        className="bg-black px-6 py-32 text-white"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Let&apos;s work together.
          </h2>
        </div>
      </section>
    </main>
  );
}