"use client";

import { motion } from "framer-motion";

const procedures = [
  {
    title: "Botox",
    subtitle: "Toxina Botulínica",
    description: "Suavização de linhas de expressão com técnica personalizada e resultado natural.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
    color: "bg-champagne-100",
    accent: "text-champagne-600",
    number: "01",
  },
  {
    title: "Preenchimento",
    subtitle: "Ácido Hialurônico",
    description: "Harmonização facial e reposição de volume com produtos premium de última geração.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
    color: "bg-mist-100",
    accent: "text-mist-600",
    number: "02",
  },
  {
    title: "Laser",
    subtitle: "Rejuvenescimento",
    description: "Renovação celular profunda com tecnologia laser fracionado de última geração.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
    color: "bg-silk-200",
    accent: "text-champagne-600",
    number: "03",
  },
];

export default function Procedimentos() {
  return (
    <section id="procedimentos" className="py-24 md:py-40 bg-silk-50 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-mist-200/30 blob pointer-events-none" style={{ animationDelay: "-3s" }} />
      <div className="absolute bottom-[-5%] right-[-5%] w-[300px] h-[300px] bg-champagne-100/40 blob pointer-events-none" style={{ animationDelay: "-7s" }} />

      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-silk-100 border border-silk-300 rounded-full px-5 py-2 mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <span className="w-1.5 h-1.5 rounded-full bg-mist-500" />
            <span className="text-[0.6rem] tracking-[0.25em] uppercase text-ink-400 font-medium">Nossos Procedimentos</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1] text-ink-900 mb-6">
            Excelência em cada<br/>
            <span className="text-sweep italic font-medium">detalhe.</span>
          </h2>
          <p className="text-sm text-ink-400 max-w-md mx-auto leading-relaxed">
            Ciência avançada e materiais premium para resultados que respeitam a individualidade de cada rosto.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {procedures.map((proc, i) => (
            <motion.div
              key={proc.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ y: -10, transition: { duration: 0.35 } }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-[1.5rem] mb-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]" style={{ aspectRatio: "3/4" }}>
                <img
                  src={proc.image}
                  alt={proc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Number overlay */}
                <div className="absolute top-5 left-5">
                  <span className="font-serif text-5xl text-white/20 font-light">{proc.number}</span>
                </div>
                {/* Overlay tag */}
                <div className="absolute bottom-4 left-4">
                  <span className={`inline-block ${proc.color} backdrop-blur-md px-4 py-1.5 rounded-full text-[0.6rem] tracking-[0.2em] uppercase font-semibold ${proc.accent} shadow-sm`}>
                    {proc.subtitle}
                  </span>
                </div>
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="px-1">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-2xl md:text-3xl text-ink-900 tracking-tight group-hover:text-champagne-500 transition-colors duration-500">
                    {proc.title}
                  </h3>
                  <span className="text-[0.55rem] text-ink-300 tracking-[0.2em] font-medium">{proc.number}</span>
                </div>
                <p className="text-sm text-ink-400 leading-relaxed mb-3">
                  {proc.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-champagne-500 font-medium group-hover:gap-4 transition-all duration-500">
                  Saiba mais <span>→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom divider with text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="mt-24 flex items-center justify-center gap-4 md:gap-6"
        >
          <div className="h-px flex-1 bg-silk-300 hidden md:block" />
          <span className="text-xs md:text-[0.65rem] tracking-[0.2em] md:tracking-[0.4em] uppercase text-ink-400 font-semibold text-center leading-relaxed">Mais de 30 anos de experiência em procedimentos estéticos</span>
          <div className="h-px flex-1 bg-silk-300 hidden md:block" />
        </motion.div>
      </div>
    </section>
  );
}
