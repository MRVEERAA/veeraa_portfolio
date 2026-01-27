"use client";

import { ReactSVG } from "react-svg";
import data from "../../messages/eng.json";

export default function Socials() {
  const socials = [
    {
      key: "github",
      href: data.Contact?.socials?.github || "https://github.com/MRVEERAA/",
      svg: "/svg/github.svg",
    },
    {
      key: "linkedin",
      href:
        data.Contact?.socials?.linkedin ||
        "https://www.linkedin.com/in/vasanthakumar-durairaj/",
      svg: "/svg/linkedin.svg",
    },
    {
      key: "email",
      href: `mailto:${data.Contact?.email || "vasanthakumarssp@gmail.com"}`,
      svg: "/svg/gmail.svg",
      isButton: true,
    },
  ];

  return (
    <div className="flex gap-2">
      {socials.map((social) =>
        social.isButton ? (
          <button
            key={social.key}
            onClick={() => window.open(social.href)}
            className="flex flex-col rounded border border-slate-800/90 p-4 shadow-xl transition-colors duration-300 hover:bg-slate-800/90 hover:text-amber-100"
          >
            <ReactSVG
              src={social.svg}
              className="w-8 rounded-full fill-current text-slate-200"
            />
          </button>
        ) : (
          <a
            key={social.key}
            href={social.href}
            target="_blank"
            className="flex flex-col rounded border border-slate-800/90 p-4 shadow-xl transition-colors duration-300 hover:bg-slate-800/90 hover:text-amber-100"
          >
            <ReactSVG
              src={social.svg}
              className="w-8 rounded-full fill-current text-slate-200"
            />
          </a>
        ),
      )}
    </div>
  );
}
