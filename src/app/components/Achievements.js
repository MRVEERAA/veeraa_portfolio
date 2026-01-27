"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Title from "./Title";
import data from "../../messages/eng.json";

const achievements = [
  {
    title: "IRC Certificate",
    issuer: "NXTwave Institute",
    description:
      "Industry-ready certification covering frontend development, backend fundamentals, DSA, and real-world project building with modern tools and best practices.",
    date: "DEC 03, 2025",
    image: "/images/irc.png",
    link: "https://certificates.ccbp.in/intensive/irc?id=54JA9R9ARM",
  },
  {
    title: "JavaScript (Intermediate)",
    issuer: "NXTwave Institute",
    description:
      "Completed HackerRank skill certification test demonstrating proficiency in JavaScript.",
    date: "Aug 09, 2025",
    image: "/images/js.png",
    link: "https://certificates.ccbp.in/intensive/javascript-essentials?id=ATXJXDUDUJ",
  },
  {
    title: "Frontend Developer (React)",
    issuer: "NXTwave Institute",
    description:
      "Passed HackerRank certification test for React frontend development.",
    date: "Nov 03, 2025",
    image: "/images/react.png",
    link: "https://certificates.ccbp.in/intensive/react-js?id=VRFUSLVQJJ",
  },
  {
    title: "Python Developer",
    issuer: "NXTwave Institute",
    description:
      "Completed a Python comprehensive course covering Python Concepts from beginner to intermediate topics.",
    date: "June 06, 2025",
    image: "/images/python.png",
    link: "https://certificates.ccbp.in/intensive/programming-foundations?id=UYDYHWYHHN",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="flex flex-col">
      <Title count={4} title={data.Achievements.title} />

      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-4">
        {achievements.map((ach, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center rounded-xl bg-slate-800 p-4 shadow-xl transition-transform duration-300 hover:scale-105"
          >
            {ach.link ? (
              <a href={ach.link} target="_blank" rel="noreferrer">
                <Image
                  src={ach.image}
                  alt={ach.title}
                  width={192}
                  height={128}
                  className="rounded-lg object-contain transition-transform duration-300 hover:scale-105"
                />
              </a>
            ) : (
              <Image
                src={ach.image}
                alt={ach.title}
                width={192}
                height={128}
                className="rounded-lg object-contain"
              />
            )}

            <h3 className="text-center text-lg font-semibold text-slate-100 mt-4">
              {ach.title}
            </h3>
            <p className="mt-1 text-sm text-amber-100">{ach.issuer}</p>
            <p className="mt-2 text-center text-xs text-slate-300">
              {ach.description}
            </p>
            <p className="mt-2 text-xs text-slate-400">{ach.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
