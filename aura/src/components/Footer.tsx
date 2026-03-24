"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden">
      {/* CTA Section */}
      <div className="bg-onyx-900 relative overflow-hidden">
        {/* Subtle gold grain */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#B8944A 1px, transparent 1px), linear-gradient(90deg, #B8944A 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 py-24 md:py-32 px-8 md:px-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-[0.6rem] tracking-[0.25em] uppercase text-white/50 font-medium">Exclusividade</span>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-white mb-6">
              Seu próximo endereço{" "}
              <br />
              <span className="text-gold-400 italic">começa aqui.</span>
            </h2>

            <p className="text-sm text-white/40 leading-relaxed mb-12 max-w-md mx-auto">
              Agende uma conversa privada com um dos nossos brokers. 
              Sem compromisso, com total discrição.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-3 bg-gold-500 text-white text-[0.75rem] font-semibold tracking-[0.15em] uppercase px-12 py-4 rounded-full hover:bg-gold-400 transition-all duration-500 group shadow-[0_8px_30px_rgba(184,148,74,0.3)]"
            >
              Falar com um Broker Privado
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>

            {/* Trust row */}
            <div className="mt-12 flex items-center justify-center gap-8 flex-wrap">
              {["100% Discreto", "Off-Market", "Assessoria Completa"].map((t) => (
                <span key={t} className="text-[0.55rem] text-white/25 tracking-[0.2em] uppercase font-medium">✓ {t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-ivory-100 py-8 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-ivory-300">
        <span className="font-serif text-lg tracking-[0.2em] text-onyx-900">AURA</span>
        <div className="flex gap-8">
          <a href="#" className="text-[0.65rem] text-onyx-400 hover:text-gold-500 tracking-[0.15em] uppercase transition-colors duration-300">Instagram</a>
          <a href="#" className="text-[0.65rem] text-onyx-400 hover:text-gold-500 tracking-[0.15em] uppercase transition-colors duration-300">WhatsApp</a>
        </div>
        <p className="text-[0.6rem] text-onyx-300">© 2024 AURA Properties</p>
      </div>
    </footer>
  );
}
