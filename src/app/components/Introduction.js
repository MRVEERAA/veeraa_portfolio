"use client";

import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";

import { smoothScroll } from "../utilities/scroll";
import messages from "../../messages/eng.json";

export default function Introduction() {
  const intro = messages.Introduction;

  return (
    <section className="flex h-screen flex-col justify-center md:h-[calc(100vh-5rem)]">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-roboto-mono pb-2 text-sm text-amber-100 md:pb-6 md:pl-1 md:text-base lg:text-lg"
      >
        {intro.badge}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="pb-2 text-4xl font-bold text-slate-400 md:pb-6 md:text-5xl lg:text-6xl"
      >
        {intro.name}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gradient-to-r from-sky-300 to-amber-200 bg-clip-text pb-2 text-xl font-bold text-transparent md:pb-6 md:text-3xl lg:text-4xl"
      >
        {intro.role}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="w-2/3 text-sm lg:text-base"
      >
        <p
          className="text-lg text-slate-400"
          dangerouslySetInnerHTML={{ __html: intro.body }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.25 }}
        className="mt-6 flex flex-wrap gap-20"
      >
        <button
          className="font-roboto-mono inline-flex gap-2 rounded border border-slate-800/70 bg-slate-900/60 px-8 py-4 text-slate-300 shadow-xl transition-all duration-300 hover:bg-slate-900/80"
          onClick={() => smoothScroll("projects")}
        >
          {intro.cta}
          <ReactSVG
            src="/svg/up.svg"
            className="rotate-180 fill-current text-slate-300"
          />
        </button>

        <a
          href="/resume/VASANTHAKUMAR_DURAIRAJ__RESUME.pdf"
          download
          className="font-roboto-mono inline-flex gap-2 rounded border border-slate-800/70 bg-slate-900/60 px-8 py-4 text-slate-300 shadow-xl transition-all duration-300 hover:bg-slate-900/80"
        >
          Download Resume
          <ReactSVG
            src="/svg/link.svg"
            className="fill-current text-slate-300"
          />
        </a>
      </motion.div>
    </section>
  );
}
