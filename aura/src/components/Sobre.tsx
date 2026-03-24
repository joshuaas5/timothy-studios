"use client";

import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 md:py-40 bg-void-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-aurum-500/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center gap-6 mb-24"
        >
          <div className="reveal-line flex-1" />
          <span className="text-[0.6rem] tracking-[0.35em] uppercase text-smoke-300 font-display font-medium whitespace-nowrap">A Experiência</span>
          <div className="reveal-line flex-1" />
        </motion.div>

        {/* Main grid — asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-4xl md:text-6xl font-extralight tracking-tight leading-[0.95] text-pearl-100 mb-8">
              Não somos uma
              <br />
              imobiliária.
              <br />
              <span className="text-aurum-shimmer font-serif italic font-medium text-3xl md:text-5xl">Somos curadoria.</span>
            </h2>

            <p className="text-sm md:text-base text-smoke-300 leading-relaxed mb-14 max-w-md font-light">
              A Aura Properties conecta patrimônios excepcionais a pessoas excepcionais.
              Nosso processo é discreto, personalizado e sem compromisso — como deve ser em negociações deste nível.
            </p>

            {/* Feature blocks */}
            <div className="space-y-4">
              {[
                { icon: "◆", title: "Curadoria Off-Market", desc: "Propriedades que nunca chegam aos portais" },
                { icon: "◇", title: "Assessoria 360°", desc: "Jurídico, financeiro e patrimonial integrados" },
                { icon: "○", title: "Brokers Bilíngues", desc: "Atendimento em PT · EN · ES" },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className="group flex items-start gap-5 glass-dark rounded-xl p-5 hover:border-aurum-500/20 transition-all duration-500"
                >
                  <span className="text-aurum-500 text-sm mt-0.5 flex-shrink-0 font-serif">{f.icon}</span>
                  <div>
                    <h4 className="text-sm font-display font-medium text-pearl-100 mb-1 group-hover:text-aurum-400 transition-colors duration-300 tracking-wide">{f.title}</h4>
                    <p className="text-xs text-smoke-300 font-light">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image composition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            {/* Main image */}
            <div className="overflow-hidden rounded-3xl glow-ring" style={{ aspectRatio: "4/5" }}>
              <img
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=85"
                alt="Vista panorâmica de Balneário Camboriú ao entardecer"
                className="w-full h-full object-cover"
              />
              {/* Dark vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-void-950/50 to-transparent rounded-3xl" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 glass-dark rounded-2xl px-6 py-5 glow-ring hidden md:block"
            >
              <span className="font-display text-3xl text-aurum-400 block leading-none font-light">R$ 2Bi+</span>
              <span className="text-[0.55rem] text-smoke-300 tracking-[0.2em] uppercase mt-2 block font-display">Negociados</span>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute top-6 -right-4 glass-dark rounded-xl px-4 py-3 hidden md:block orbital"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-aurum-500 animate-pulse" />
                <span className="text-[0.55rem] text-smoke-200 tracking-wider font-display">98% Satisfação</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
