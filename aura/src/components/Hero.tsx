"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      {/* Background image — luxury oceanfront penthouse */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85"
          alt="Fachada de vidro de cobertura de frente para o mar"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pb-20 md:pb-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-6 py-2.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-[0.6rem] tracking-[0.25em] uppercase text-white/70 font-medium">
            Alto Padrão · Balneário Camboriú
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="font-serif text-4xl md:text-6xl lg:text-[5rem] font-medium leading-[1.05] tracking-tight text-white mb-6 max-w-4xl"
        >
          A nova assinatura do{" "}
          <span className="text-gold-shimmer italic">luxo</span>
          <br />
          na Praia Brava.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-sm md:text-base text-white/60 max-w-lg leading-relaxed mb-10"
        >
          Curadoria exclusiva de imóveis off-market para quem define o próprio legado.
        </motion.p>

        {/* CTA + Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-3 bg-gold-500 text-white text-[0.75rem] font-semibold tracking-[0.15em] uppercase px-10 py-4 rounded-full hover:bg-gold-400 transition-all duration-500 group shadow-[0_8px_30px_rgba(184,148,74,0.3)]"
          >
            Falar com um Broker Privado
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>

          {/* Floating stats */}
          <div className="flex gap-8">
            {[
              { value: "R$ 2Bi+", label: "em portfólio" },
              { value: "150+", label: "unidades exclusivas" },
            ].map((s) => (
              <div key={s.label}>
                <span className="font-serif text-2xl text-white block leading-none">{s.value}</span>
                <span className="text-[0.55rem] text-white/40 tracking-[0.15em] uppercase mt-1 block">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[0.55rem] tracking-[0.3em] uppercase text-white/30 font-medium">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
