"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden">
      {/* CTA Section */}
      <div className="bg-void-800 relative overflow-hidden">
        {/* Geometric accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-aurum-500/10 via-transparent to-aurum-500/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-aurum-500/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-aurum-500/5 pointer-events-none" />

        <div className="relative z-10 py-28 md:py-40 px-8 md:px-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-16 h-px bg-aurum-500/30" />
              <span className="text-[0.6rem] tracking-[0.35em] uppercase text-aurum-400 font-display font-medium">Exclusividade</span>
              <div className="w-16 h-px bg-aurum-500/30" />
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-extralight tracking-tight leading-[0.95] text-pearl-100 mb-6">
              Seu próximo
              <br />
              endereço{" "}
              <span className="text-aurum-shimmer font-serif italic font-medium">começa aqui.</span>
            </h2>

            <p className="text-sm text-smoke-300 leading-relaxed mb-14 max-w-md mx-auto font-light">
              Agende uma conversa privada com um dos nossos brokers.
              Sem compromisso, com total discrição.
            </p>

            <a
              href="#"
              className="group inline-flex items-center gap-4 bg-aurum-500 text-void-950 text-[0.7rem] font-display font-semibold tracking-[0.2em] uppercase px-12 py-4 rounded-full hover:bg-aurum-300 transition-all duration-500 glow-ring"
            >
              Falar com um Broker Privado
              <span className="inline-block w-6 h-px bg-void-950 group-hover:w-10 transition-all duration-500" />
            </a>

            {/* Trust indicators */}
            <div className="mt-14 flex items-center justify-center gap-8 flex-wrap">
              {["100% Discreto", "Off-Market", "Assessoria Completa"].map((t) => (
                <span key={t} className="text-[0.55rem] text-smoke-400 tracking-[0.2em] uppercase font-display font-medium">✓ {t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-void-950 py-8 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-smoke-500/10">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-aurum-500 to-aurum-300 flex items-center justify-center">
            <span className="font-display text-void-950 text-[0.5rem] font-bold">A</span>
          </div>
          <span className="font-display text-sm tracking-[0.25em] text-pearl-100 font-light">AURA</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-[0.6rem] text-smoke-300 hover:text-aurum-400 tracking-[0.2em] uppercase transition-colors duration-300 font-display">Instagram</a>
          <a href="#" className="text-[0.6rem] text-smoke-300 hover:text-aurum-400 tracking-[0.2em] uppercase transition-colors duration-300 font-display">WhatsApp</a>
        </div>
        <p className="text-[0.55rem] text-smoke-400 font-display">© 2024 AURA Properties</p>
      </div>
    </footer>
  );
}
