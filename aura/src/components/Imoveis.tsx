"use client";

import { motion } from "framer-motion";

const properties = [
  {
    title: "Cobertura\nDuplex",
    subtitle: "Frente Mar",
    location: "Praia Brava",
    area: "420m²",
    suites: "5 Suítes",
    tag: "Off-Market",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=85",
    number: "01",
  },
  {
    title: "Penthouse\nSky Garden",
    subtitle: "Vista 360°",
    location: "Barra Sul",
    area: "380m²",
    suites: "4 Suítes",
    tag: "Exclusivo",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85",
    number: "02",
  },
  {
    title: "Villa\nContemporânea",
    subtitle: "Pé na Areia",
    location: "Praia do Estaleiro",
    area: "650m²",
    suites: "6 Suítes",
    tag: "Lançamento",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85",
    number: "03",
  },
];

export default function Imoveis() {
  return (
    <section id="portfolio" className="py-24 md:py-40 bg-void-950 relative overflow-hidden grain">
      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-aurum-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Section header — asymmetric */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-aurum-500" />
            <span className="text-[0.6rem] tracking-[0.35em] uppercase text-aurum-400 font-display font-medium">
              Portfólio Exclusivo
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-[0.95] text-pearl-100 mb-6">
            Imóveis que são
            <br />
            <span className="text-aurum-shimmer font-serif italic font-medium">obras de arte.</span>
          </h2>
          <p className="text-sm text-smoke-300 leading-relaxed font-light max-w-sm">
            Cada propriedade é selecionada sob critérios rigorosos de localização, acabamento e exclusividade.
          </p>
        </motion.div>

        {/* Property cards — dramatic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {properties.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              className="dramatic-card group cursor-pointer rounded-2xl overflow-hidden bg-void-800 border border-smoke-500/20"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="card-img w-full h-full object-cover"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-void-950 via-void-950/20 to-transparent" />

                {/* Number watermark */}
                <div className="absolute top-4 right-5">
                  <span className="font-display text-6xl text-pearl-100/5 font-bold">{prop.number}</span>
                </div>

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-aurum-500/90 text-void-950 px-4 py-1.5 rounded-full text-[0.55rem] tracking-[0.2em] uppercase font-display font-semibold backdrop-blur-sm">
                    {prop.tag}
                  </span>
                </div>

                {/* Bottom content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[0.6rem] text-aurum-400 tracking-[0.2em] uppercase font-display mb-2">{prop.subtitle}</p>
                  <h3 className="font-display text-2xl md:text-3xl text-pearl-100 font-light leading-tight tracking-tight whitespace-pre-line">{prop.title}</h3>
                </div>
              </div>

              {/* Footer info */}
              <div className="p-5 flex items-center justify-between border-t border-smoke-500/10">
                <div className="flex gap-6">
                  <span className="text-[0.6rem] text-smoke-300 tracking-wider font-display">{prop.location}</span>
                  <span className="text-[0.6rem] text-smoke-400 tracking-wider">{prop.area}</span>
                  <span className="text-[0.6rem] text-smoke-400 tracking-wider">{prop.suites}</span>
                </div>
                <span className="text-aurum-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-display tracking-wider">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom marquee band */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="mt-20 overflow-hidden border-t border-b border-smoke-500/10 py-5"
        >
          <div className="marquee-track whitespace-nowrap">
            {[...Array(2)].map((_, setIndex) => (
              <span key={setIndex} className="inline-block">
                {["Praia Brava", "Barra Sul", "Praia do Estaleiro", "Praia dos Amores", "Centro", "Pioneiros"].map((loc) => (
                  <span key={`${setIndex}-${loc}`} className="inline-flex items-center gap-6 mx-8">
                    <span className="text-[0.6rem] tracking-[0.3em] uppercase text-smoke-400 font-display">{loc}</span>
                    <span className="w-1 h-1 rounded-full bg-aurum-500/30" />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
