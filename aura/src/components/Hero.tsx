"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-end overflow-hidden grain">
      {/* Background — cinematic luxury estate */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85"
          alt="Mansão contemporânea de vidro ao entardecer"
          className="w-full h-full object-cover scale-105"
        />
        <div className="hero-cine absolute inset-0" />
      </div>

      {/* Floating geometric accents */}
      <div className="absolute top-[15%] right-[8%] w-40 h-40 border border-aurum-500/10 rounded-full orbital hidden lg:block" />
      <div className="absolute top-[25%] right-[12%] w-24 h-24 border border-aurum-500/5 rounded-full orbital hidden lg:block" style={{ animationDelay: "-3s" }} />
      <div className="absolute bottom-[30%] left-[5%] w-2 h-2 bg-aurum-500/30 rounded-full orbital hidden lg:block" style={{ animationDelay: "-5s" }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pb-16 md:pb-24">
        {/* Top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="reveal-line w-full mb-12 origin-left"
        />

        {/* Badge row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-px bg-aurum-500" />
          <span className="text-[0.6rem] tracking-[0.35em] uppercase text-aurum-400 font-display font-medium">
            Balneário Camboriú · SC
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          className="font-display text-5xl md:text-7xl lg:text-[6.5rem] font-extralight leading-[0.95] tracking-tight text-pearl-100 mb-6 max-w-5xl"
        >
          A nova assinatura
          <br />
          do{" "}
          <span className="text-aurum-shimmer font-medium italic font-serif">luxo</span>
          <br />
          <span className="text-smoke-300 text-3xl md:text-5xl lg:text-6xl font-light">na Praia Brava.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-sm md:text-base text-smoke-200 max-w-md leading-relaxed mb-10 font-light"
        >
          Curadoria exclusiva de imóveis off-market para quem define o próprio legado.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <a
            href="#contato"
            className="group inline-flex items-center gap-4 bg-aurum-500 text-void-950 text-[0.7rem] font-display font-semibold tracking-[0.2em] uppercase px-10 py-4 rounded-full hover:bg-aurum-300 transition-all duration-500 glow-ring"
          >
            Falar com um Broker Privado
            <span className="inline-block w-6 h-px bg-void-950 group-hover:w-10 transition-all duration-500" />
          </a>

          <a
            href="#portfolio"
            className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase text-smoke-200 hover:text-aurum-400 transition-colors duration-500 font-display"
          >
            <span className="w-8 h-8 rounded-full border border-smoke-500 flex items-center justify-center group-hover:border-aurum-500 transition-colors">↓</span>
            Explorar Portfólio
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-aurum-500/40 to-transparent" />
      </motion.div>
    </section>
  );
}
