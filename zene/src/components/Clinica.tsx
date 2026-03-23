"use client";

import { motion } from "framer-motion";

export default function Clinica() {
  return (
    <section id="clinica" className="py-24 md:py-40 bg-silk-100 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute bottom-[-8%] right-[-5%] w-[500px] h-[500px] bg-champagne-200/30 blob pointer-events-none" style={{ animationDelay: "-6s" }} />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(#999 1px, transparent 1px), linear-gradient(90deg, #999 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        {/* Top editorial band */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center gap-6 mb-20"
        >
          <div className="h-px flex-1 bg-silk-300" />
          <span className="text-[0.6rem] tracking-[0.3em] uppercase text-ink-400 font-medium whitespace-nowrap">A Clínica</span>
          <div className="h-px flex-1 bg-silk-300" />
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.08)]" style={{ aspectRatio: "3/4" }}>
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=85"
                alt="Ambiente clínico premium de estética"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlapping accent image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 w-44 h-44 overflow-hidden rounded-2xl border-4 border-silk-100 shadow-xl hidden md:block"
            >
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&q=80"
                alt="Detalhe equipamento médico"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-6 -left-4 md:-left-8 bg-silk-50 border border-silk-300 rounded-2xl px-5 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.05)] hidden md:block"
            >
              <span className="font-serif text-2xl text-champagne-500 block leading-none">+2k</span>
              <span className="text-[0.55rem] text-ink-400 tracking-[0.15em] uppercase mt-1 block">Procedimentos</span>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight leading-[1.05] text-ink-900 mb-8">
              Onde ciência encontra<br/>
              <span className="text-sweep italic font-medium">conforto.</span>
            </h2>

            <p className="text-sm md:text-base text-ink-400 leading-relaxed mb-12 max-w-lg">
              A ZENE foi idealizada para oferecer uma experiência completa em
              estética avançada. Cada detalhe do nosso espaço foi pensado para
              que você se sinta acolhida enquanto nossa equipe cuida da sua transformação.
            </p>

            {/* Feature cards */}
            <div className="space-y-4 mb-14">
              {[
                { icon: "◆", title: "Tecnologia de Ponta", desc: "Equipamentos importados de última geração para máxima eficácia", bg: "bg-champagne-100/50" },
                { icon: "◇", title: "Protocolos Personalizados", desc: "Cada tratamento é desenhado para a individualidade da sua pele", bg: "bg-mist-100/50" },
                { icon: "○", title: "Ambiente Premium", desc: "Espaço projetado para o seu conforto absoluto e bem-estar", bg: "bg-silk-200/50" },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className={`flex items-start gap-5 group ${f.bg} rounded-2xl p-5 border border-silk-300/50 hover:border-champagne-300 transition-colors duration-500`}
                >
                  <span className="text-champagne-400 text-sm mt-0.5 flex-shrink-0">{f.icon}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-ink-900 mb-1 group-hover:text-champagne-500 transition-colors duration-300">{f.title}</h4>
                    <p className="text-sm text-ink-400">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats band */}
            <div className="flex gap-10 pt-8 border-t border-silk-300">
              {[
                { value: "+2k", label: "Procedimentos" },
                { value: "98%", label: "Satisfação" },
                { value: "5+", label: "Especialistas" },
              ].map((s) => (
                <div key={s.label}>
                  <span className="font-serif text-3xl text-champagne-500 block leading-none">{s.value}</span>
                  <span className="text-[0.6rem] text-ink-400 tracking-[0.15em] uppercase mt-1 block">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
