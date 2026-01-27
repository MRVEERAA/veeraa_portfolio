import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="font-roboto-mono mb-8 mt-16 flex flex-col items-center text-xs leading-loose text-slate-500"
    >
      <p>
        Handcrafted by{" "}
        <a
          href="https://veerraa.com"
          className="animated-link font-bold text-slate-400 transition-colors duration-300 hover:text-amber-100"
        >
          VEERAA
        </a>{" "}
        © 2026
      </p>
      <p>
        Powered by{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="animated-link font-bold text-slate-400 transition-colors duration-300 hover:text-amber-100"
        >
          Next.js 13+
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="animated-link font-bold text-slate-400 transition-colors duration-300 hover:text-amber-100"
        >
          Tailwind CSS
        </a>
      </p>
      <a
        href="https://github.com/VEERAA/portfolio"
        target="_blank"
        className="flex items-center justify-center gap-2 transition-colors duration-300 hover:text-amber-100"
      >
        <span className="animated-link">Thank You...!</span>
      </a>
    </motion.footer>
  );
}
