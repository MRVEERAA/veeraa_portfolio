import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import logo from "../../../public/VEERAA.png";
import { smoothScroll } from "../utilities/scroll";

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);

  const links = ["About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(currentScrollPos > prevScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isHidden ? "header-hidden" : "header-visible"
      } sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-slate-900/50 bg-slate-950/85 bg-gradient-to-b from-slate-950/95 via-slate-950/80 to-slate-900/55 px-4 text-xs shadow-sm backdrop-blur-sm md:h-20 md:px-20 md:text-sm`}
    >
      <motion.div
        initial={{ opacity: 0, mixBlendMode: "lighten" }}
        animate={{ opacity: 1, mixBlendMode: "lighten" }}
        transition={{ duration: 0.75 }}
        onClick={() => smoothScroll("")}
      >
        <Image
          className="invisible h-4 w-8 cursor-pointer rounded-full border border-slate-800/90 mix-blend-lighten transition-all duration-1000 hover:rotate-180 md:visible md:h-12 md:w-12"
          src={logo}
          alt="logo"
        />
      </motion.div>

      <ul className="font-roboto-mono flex items-center gap-2 md:gap-8">
        {links.map((link, i) => (
          <motion.li
            key={i}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, delay: 1 - i * 0.25 }}
            className="animated-link text-slate-300 transition-colors duration-300 hover:text-amber-200"
          >
            <button
              onClick={() =>
                smoothScroll(
                  i === 0
                    ? "about"
                    : i === 1
                      ? "skills"
                      : i === 2
                        ? "projects"
                        : "contact",
                )
              }
            >
              <span className="text-amber-100">{i + 1}.</span>
              {link}
            </button>
          </motion.li>
        ))}
      </ul>
    </header>
  );
}
