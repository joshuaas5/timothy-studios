"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 px-8 md:px-16 py-5"
    >
      <div className="glass-dark rounded-2xl px-8 py-4 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-aurum-500 to-aurum-300 flex items-center justify-center">
            <span className="font-display text-void-950 text-xs font-bold tracking-wider">A</span>
          </div>
          <span className="font-display text-xl tracking-[0.3em] text-pearl-100 font-light">AURA</span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#portfolio" className="text-[0.65rem] tracking-[0.2em] uppercase text-smoke-200 hover:text-aurum-400 transition-colors duration-500 font-medium">
            Portfólio
          </a>
          <a href="#sobre" className="text-[0.65rem] tracking-[0.2em] uppercase text-smoke-200 hover:text-aurum-400 transition-colors duration-500 font-medium">
            Sobre
          </a>
          <a
            href="#contato"
            className="text-[0.65rem] tracking-[0.2em] uppercase bg-aurum-500 text-void-950 px-7 py-2.5 rounded-full hover:bg-aurum-300 transition-all duration-500 font-semibold glow-ring"
          >
            Broker Privado
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
