"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Title from "./Title";
import data from "../../messages/eng.json";

export default function Skills() {
  const skills = data.Skills.items;

  return (
    <section id="skills" className="flex flex-col">
      <Title count={2} title={data.Skills.title} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      >
        {skills.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-700/70 hover:bg-slate-900/60"
          >
            <div className="flex relative h-12 w-12 items-center justify-center">
              <Image
                src={item.icon}
                alt={item.name}
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
            </div>

            <p className="text-center text-sm font-medium text-slate-200">
              {item.name}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
