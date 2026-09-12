"use client";

import { motion } from "framer-motion";
import { UserRound, GraduationCap, BriefcaseBusiness, MapPin, UsersRound } from "lucide-react";

const info = [
  { icon: GraduationCap, title: "Education", value: "BSc in Computer Engineering" },
  { icon: BriefcaseBusiness, title: "Focus", value: "Software • Data • AI • Systems" },
  { icon: MapPin, title: "Location", value: "Kinshasa, RDC" },
  { icon: UsersRound, title: "Open To", value: "Internships & Opportunities" },
];

export default function About() {
  return (
    <section id="about" className="px-5 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto grid max-w-[1180px] gap-7 rounded-2xl border border-white/15 bg-[#0d1723]/80 p-6 shadow-2xl lg:grid-cols-[1.05fr_1.1fr]"
      >
        <div className="flex gap-5 border-b border-white/10 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-cyan-400 bg-cyan-400/10 text-cyan-300">
            <UserRound size={22}/>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-cyan-400">About Me</p>
            <p className="mt-3 max-w-[520px] text-[13px] leading-6 text-gray-300">
              I&apos;m a Computer Engineer passionate about software development,
              data analytics, machine learning, database systems and building
              innovative solutions. I enjoy turning ideas into impactful digital
              products that make a difference.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {info.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-cyan-400/10 text-cyan-300">
                  <Icon size={20}/>
                </div>
                <div>
                  <p className="text-xs font-bold text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-gray-300">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
