"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-silk-100">
      {/* Organic blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-champagne-200/50 blob pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-8%] w-[500px] h-[500px] bg-mist-200/40 blob pointer-events-none" style={{ animationDelay: "-4s" }} />
      <div className="absolute top-[30%] left-[40%] w-[200px] h-[200px] bg-champagne-100/60 blob pointer-events-none" style={{ animationDelay: "-8s" }} />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#999 1px, transparent 1px), linear-gradient(90deg, #999 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-32 pb-20">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-2 bg-silk-50 border border-silk-300 rounded-full px-5 py-2 mb-8 float-tag shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          >
            <span className="w-2 h-2 rounded-full bg-champagne-400 animate-pulse" />
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-ink-500 font-medium">Estética Avançada</span>
          </motion.div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-light leading-[1] tracking-tight mb-8 text-ink-900">
            A ciência<br/>
            da sua <span className="text-sweep italic font-medium">melhor</span><br/>
            <span className="text-sweep italic font-medium">versão.</span>
          </h1>

          <p className="text-sm md:text-base text-ink-400 max-w-sm leading-relaxed mb-10">
            Protocolos personalizados com tecnologia de ponta para
            resultados naturais e duradouros.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-3 bg-ink-900 text-silk-50 text-[0.75rem] font-medium tracking-[0.15em] uppercase px-10 py-4 rounded-full hover:bg-champagne-500 transition-all duration-500 group shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            >
              Agendar Avaliação
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#procedimentos"
              className="inline-flex items-center justify-center gap-2 text-ink-500 text-[0.75rem] font-medium tracking-[0.15em] uppercase px-8 py-4 rounded-full border border-silk-400 hover:border-champagne-400 hover:text-ink-900 transition-all duration-500"
            >
              Ver Procedimentos
            </a>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-14 flex items-center gap-6"
          >
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&q=80",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-9 h-9 rounded-full object-cover border-2 border-silk-100"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-champagne-400 text-xs">★</span>
                ))}
              </div>
              <span className="text-[0.6rem] text-ink-400 tracking-wide">+2.000 pacientes satisfeitas</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Image composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative"
        >
          {/* Main image — clinical procedure */}
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.08)]" style={{ aspectRatio: "4/5" }}>
            <img
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=85"
              alt="Procedimento estético com tecnologia avançada"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-silk-100/30 to-transparent" />
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute -bottom-6 -left-6 md:-left-12 bg-silk-50 border border-silk-300 rounded-2xl px-6 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
          >
            <span className="font-serif text-3xl text-champagne-500 block leading-none">98%</span>
            <span className="text-[0.6rem] text-ink-400 tracking-[0.15em] uppercase mt-1 block">Satisfação</span>
          </motion.div>

          {/* Floating accent tag */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="absolute -top-3 -right-3 md:right-8 bg-champagne-400 text-silk-50 rounded-full px-5 py-2.5 shadow-lg float-tag"
            style={{ animationDelay: "-2s" }}
          >
            <span className="text-[0.6rem] tracking-[0.2em] uppercase font-bold">✦ Premium</span>
          </motion.div>

          {/* Small overlapping image - clinical detail */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="absolute bottom-16 -right-4 md:-right-8 w-32 h-40 overflow-hidden rounded-xl border-4 border-silk-100 shadow-xl hidden md:block"
          >
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&q=80"
              alt="Detalhe de procedimento clínico"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee ribbon */}
      <div className="absolute bottom-12 left-0 right-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...Array(3)].map((_, i) => (
            <span key={i} className="text-silk-300 text-[0.55rem] tracking-[0.5em] uppercase font-medium">
              Botox &nbsp;◇&nbsp; Preenchimento &nbsp;◇&nbsp; Laser &nbsp;◇&nbsp; Bioestimuladores &nbsp;◇&nbsp; Skinbooster &nbsp;◇&nbsp; Harmonização Facial &nbsp;◇&nbsp; Peeling &nbsp;◇&nbsp; Microagulhamento &nbsp;◇&nbsp;
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-silk-300" />
    </section>
  );
}
