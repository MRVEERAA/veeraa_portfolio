"use client";

import { motion } from "framer-motion";

import FeaturedProject from "./FeaturedProject";
import Title from "./Title";

import eng from "../../messages/eng.json";

export default function Projects() {
  const t = eng.Projects;

  const items = [
    {
      slug: "watch",
      liveLink: "https://veerawt.ccbp.tech/",
      sourceLink: "https://github.com/MRVEERAA/veeraa_watch",
      imageSrc: "/screenshots/watch.png",
      builtWith: [
        "React JS",
        "React Router",
        "Authentication",
        "Protected Routes",
        "API Integration",
      ],
      align: "right",
      isPrivate: false,
    },
    {
      slug: "hrms_model",
      liveLink: "https://hrms-model.vercel.app/",
      sourceLink: "https://github.com/MRVEERAA/Hrms_Model",
      imageSrc: "/screenshots/hrms_model.png",
      builtWith: [
        "React",
        "Node.js",
        "Express",
        "Supabase",
        "Tailwind Css",
        "JWT",
        "Protected Routes",
        "API Integration",
        "Authentication",
      ],
      align: "left",
      isPrivate: false,
    },
    {
      slug: "ecommerce",
      liveLink: "https://veeraa-trendz.vercel.app",
      sourceLink: "https://github.com/MRVEERAA/veeraa-trendz",
      imageSrc: "/screenshots/veeraa_trendz.png",
      builtWith: [
        "React JS",
        "React Router",
        "Authentication",
        "Protected Routes",
        "API Integration",
      ],
      align: "right",
      isPrivate: false,
    },
    {
      slug: "assees",
      liveLink: "https://veeraaedu.ccbp.tech",
      sourceLink: "https://github.com/MRVEERAA/NXT-Asses-App",
      imageSrc: "/screenshots/veeraa_edu.png",
      builtWith: [
        "React JS",
        "React Router",
        "Authentication",
        "Protected Routes",
        "API Integration",
      ],
      align: "left",
      isPrivate: false,
    },
  ];

  return (
    <section id="projects" className="flex flex-col justify-center">
      <Title count={3} title={t.title} />

      {items.map((item) => (
        <FeaturedProject
          key={item.slug}
          liveLink={item.liveLink}
          sourceLink={item.sourceLink}
          imageSrc={item.imageSrc}
          builtWith={item.builtWith}
          title={t.items[item.slug].title}
          linkLabel={t.items[item.slug].link}
          description={t.items[item.slug].description}
          align={item.align}
          isPrivate={item.isPrivate}
          username={t.items[item.slug].username}
          password={t.items[item.slug].password}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="font-roboto-mono mt-8 flex flex-col items-center rounded-xl border border-slate-800/70 bg-slate-900/45 p-6 text-center text-sm text-slate-300 shadow-xl md:text-base"
      >
        <p>{t.more.text}</p>

        <a
          href="https://github.com/MRVEERAA"
          target="_blank"
          className="animated-link mt-2 font-semibold text-amber-100 transition-colors duration-300 hover:text-amber-200"
        >
          {t.more.link}
        </a>
      </motion.div>
    </section>
  );
}
