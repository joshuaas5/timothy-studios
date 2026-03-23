"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden">
      {/* CTA Section */}
      <div className="bg-ink-900 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-champagne-500/5 blob pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-mist-500/5 blob pointer-events-none" style={{ animationDelay: "-5s" }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
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
              <span className="w-2 h-2 rounded-full bg-champagne-400 animate-pulse" />
              <span className="text-[0.6rem] tracking-[0.25em] uppercase text-white/50 font-medium">Transformação</span>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] text-white mb-6">
              Pronta para a sua<br/>
              <span className="text-champagne-400 italic font-medium">melhor versão?</span>
            </h2>

            <p className="text-sm text-white/40 leading-relaxed mb-12 max-w-md mx-auto">
              Agende sua avaliação personalizada. Primeira consulta gratuita.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-3 bg-champagne-400 text-ink-900 text-[0.75rem] font-semibold tracking-[0.15em] uppercase px-12 py-4 rounded-full hover:bg-champagne-300 transition-all duration-500 group shadow-[0_8px_30px_rgba(196,169,125,0.3)]"
            >
              Agendar Avaliação
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>

            {/* Trust row */}
            <div className="mt-12 flex items-center justify-center gap-8">
              {["Consulta Gratuita", "Sem Compromisso", "Resultados Garantidos"].map((t) => (
                <span key={t} className="text-[0.55rem] text-white/25 tracking-[0.2em] uppercase font-medium">✓ {t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-silk-100 py-8 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-silk-300">
        <span className="font-serif text-lg tracking-[0.15em] text-ink-900">ZENE</span>
        <div className="flex gap-8">
          <a href="#" className="text-[0.65rem] text-ink-400 hover:text-champagne-500 tracking-[0.15em] uppercase transition-colors duration-300">Instagram</a>
          <a href="#" className="text-[0.65rem] text-ink-400 hover:text-champagne-500 tracking-[0.15em] uppercase transition-colors duration-300">WhatsApp</a>
        </div>
        <p className="text-[0.6rem] text-ink-300">© 2024 ZENE Estética Avançada</p>
      </div>
    </footer>
  );
}
