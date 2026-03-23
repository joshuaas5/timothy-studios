"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 px-8 md:px-16 py-6 flex justify-between items-center bg-silk-100/80 backdrop-blur-2xl"
    >
      <a href="#" className="font-serif text-2xl tracking-[0.15em] text-ink-900 font-medium">
        ZENE
      </a>
      <div className="hidden md:flex gap-10 items-center">
        <a href="#procedimentos" className="text-[0.7rem] tracking-[0.2em] uppercase text-ink-400 hover:text-ink-900 transition-colors duration-500">
          Procedimentos
        </a>
        <a href="#clinica" className="text-[0.7rem] tracking-[0.2em] uppercase text-ink-400 hover:text-ink-900 transition-colors duration-500">
          A Clínica
        </a>
        <a
          href="#contato"
          className="text-[0.7rem] tracking-[0.2em] uppercase text-ink-900 bg-ink-900 text-silk-50 px-7 py-2.5 rounded-full hover:bg-champagne-500 transition-all duration-500 font-medium"
        >
          Agendar
        </a>
      </div>
    </motion.nav>
  );
}
