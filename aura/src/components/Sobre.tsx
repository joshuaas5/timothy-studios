"use client";

import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 md:py-40 bg-ivory-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        {/* Editorial divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center gap-6 mb-20"
        >
          <div className="h-px flex-1 bg-ivory-300" />
          <span className="text-[0.6rem] tracking-[0.3em] uppercase text-onyx-400 font-medium whitespace-nowrap">Por Que Aura</span>
          <div className="h-px flex-1 bg-ivory-300" />
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.08)]" style={{ aspectRatio: "3/4" }}>
              <img
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=85"
                alt="Vista aérea de Balneário Camboriú ao entardecer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-6 -left-4 md:-left-8 bg-ivory-50 border border-ivory-300 rounded-2xl px-5 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.05)] hidden md:block"
            >
              <span className="font-serif text-2xl text-gold-500 block leading-none">10+</span>
              <span className="text-[0.55rem] text-onyx-400 tracking-[0.15em] uppercase mt-1 block">Anos de Mercado</span>
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
            <h2 className="font-serif text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-onyx-900 mb-8">
              Não somos uma imobiliária.{" "}
              <br />
              <span className="text-gold-shimmer italic">Somos curadoria.</span>
            </h2>

            <p className="text-sm md:text-base text-onyx-400 leading-relaxed mb-12 max-w-lg">
              A Aura Properties nasceu para atender um público que não se contenta com o 
              catálogo genérico. Nossos brokers são consultores de patrimônio: conectam 
              você ao imóvel que representa seu estilo de vida, não apenas uma planta baixa.
            </p>

            {/* Feature cards */}
            <div className="space-y-4 mb-14">
              {[
                { icon: "◆", title: "Curadoria Off-Market", desc: "Acesso a imóveis exclusivos que nunca chegam aos portais públicos", bg: "bg-gold-100/50" },
                { icon: "◇", title: "Assessoria Jurídica Premium", desc: "Toda a segurança documental para negociações de alto valor", bg: "bg-ocean-100/50" },
                { icon: "○", title: "Brokers Bilíngues", desc: "Atendimento personalizado em português, inglês e espanhol", bg: "bg-ivory-200/80" },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className={`flex items-start gap-5 group ${f.bg} rounded-2xl p-5 border border-ivory-300/50 hover:border-gold-300 transition-colors duration-500`}
                >
                  <span className="text-gold-500 text-sm mt-0.5 flex-shrink-0">{f.icon}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-onyx-900 mb-1 group-hover:text-gold-500 transition-colors duration-300">{f.title}</h4>
                    <p className="text-sm text-onyx-400">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats band */}
            <div className="flex gap-10 pt-8 border-t border-ivory-300">
              {[
                { value: "R$ 2Bi+", label: "Negociados" },
                { value: "98%", label: "Satisfação" },
                { value: "15+", label: "Brokers" },
              ].map((s) => (
                <div key={s.label}>
                  <span className="font-serif text-3xl text-gold-500 block leading-none">{s.value}</span>
                  <span className="text-[0.6rem] text-onyx-400 tracking-[0.15em] uppercase mt-1 block">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
