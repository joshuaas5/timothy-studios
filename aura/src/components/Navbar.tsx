"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 px-8 md:px-16 py-6 flex justify-between items-center bg-ivory-100/80 backdrop-blur-2xl border-b border-ivory-300/50"
    >
      <a href="#" className="font-serif text-2xl tracking-[0.2em] text-onyx-900 font-medium">
        AURA
      </a>
      <div className="hidden md:flex gap-10 items-center">
        <a href="#portfolio" className="text-[0.7rem] tracking-[0.2em] uppercase text-onyx-400 hover:text-onyx-900 transition-colors duration-500">
          Portfólio
        </a>
        <a href="#sobre" className="text-[0.7rem] tracking-[0.2em] uppercase text-onyx-400 hover:text-onyx-900 transition-colors duration-500">
          Sobre
        </a>
        <a
          href="#contato"
          className="text-[0.7rem] tracking-[0.2em] uppercase bg-onyx-900 text-ivory-50 px-7 py-2.5 rounded-full hover:bg-gold-500 transition-all duration-500 font-medium"
        >
          Falar com Broker
        </a>
      </div>
    </motion.nav>
  );
}
