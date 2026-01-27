"use client";

import Image from "next/image";
import { ReactSVG } from "react-svg";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import eng from "@/messages/eng.json";
import { defaultTiltOptions } from "../utilities/defaultTiltOptions";

export default function FeaturedProject({
  liveLink,
  sourceLink,
  imageSrc,
  builtWith = [],
  title,
  linkLabel,
  description,
  align = "right",
  isPrivate = false,
  username,
  password,
}) {
  return (
    <div className="relative mb-16 grid items-center gap-8 md:grid-cols-2">
      {/* LEFT / RIGHT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className={`flex flex-col gap-4 ${
          align === "right" ? "text-right" : "text-left"
        }`}
      >
        {/* LABEL */}
        <div
          className={`flex flex-wrap items-center gap-2 ${
            align === "right" ? "justify-end" : "justify-start"
          }`}
        >
          <span className="font-roboto-mono text-sm text-amber-100">
            {eng.FeaturedProject.title}
          </span>

          {linkLabel && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-roboto-mono whitespace-nowrap text-xs text-amber-100 transition-colors hover:text-amber-200"
            >
              &middot; {linkLabel}
            </a>
          )}
        </div>

        {/* TITLE */}
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-3xl font-bold text-slate-200 transition-colors hover:text-amber-200 ${
            align === "right" ? "self-end" : "self-start"
          }`}
        >
          {title}
        </a>

        {/* DESCRIPTION */}
        <div className="rounded-lg border border-slate-800/70 bg-slate-900/50 p-4 text-sm shadow-xl md:text-base">
          {description}
        </div>

        {/* TECH STACK */}
        <div
          className={`font-roboto-mono flex flex-wrap gap-1 text-xs text-amber-100 ${
            align === "right" ? "justify-end" : "justify-start"
          }`}
        >
          {builtWith.map((tech) => (
            <span
              key={`${title}-${tech}`}
              className="rounded-full border border-slate-800/70 bg-slate-900/45 px-2 py-1 shadow-xl"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div
          className={`mt-2 flex gap-4 ${
            align === "right" ? "self-end" : "self-start"
          }`}
        >
          {!isPrivate && (
            <a
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Public Repository"
              className="transition-transform hover:scale-110"
            >
              <div className="h-6 w-6">
                <ReactSVG
                  src="/svg/github-outline.svg"
                  className="fill-current text-slate-200 transition-colors hover:text-amber-100"
                />
              </div>
            </a>
          )}

          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Live Site"
            className="transition-transform hover:scale-110"
          >
            <div className="h-6 w-6">
              <ReactSVG
                src="/svg/link.svg"
                className="fill-current text-slate-200 transition-colors hover:text-amber-100"
              />
            </div>
          </a>
        </div>
      </motion.div>

      {/* IMAGE SIDE */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className={align === "right" ? "md:order-last" : "md:order-first"}
      >
        {/* CREDENTIALS (OPTIONAL) */}
        {(username || password) && (
          <div className="mb-5 flex flex-wrap justify-center gap-5">
            {username && (
              <span className="rounded-md bg-slate-800/70 px-2 py-1 text-xs text-amber-100 shadow-md">
                Username: <b>{username}</b>
              </span>
            )}
            {password && (
              <span className="rounded-md bg-slate-800/70 px-2 py-1 text-xs text-amber-100 shadow-md">
                Password: <b>{password}</b>
              </span>
            )}
          </div>
        )}

        {/* PROJECT IMAGE */}
        <Tilt options={defaultTiltOptions}>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <Image
              src={imageSrc}
              alt={title}
              width={750}
              height={500}
              className="rounded-xl border border-slate-800/90 shadow-xl brightness-75 transition-all hover:brightness-100"
            />
          </a>
        </Tilt>
      </motion.div>
    </div>
  );
}
