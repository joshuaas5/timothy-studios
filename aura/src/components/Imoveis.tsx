"use client";

import { motion } from "framer-motion";

const properties = [
  {
    title: "Cobertura Duplex Frente Mar",
    location: "Praia Brava, Balneário Camboriú",
    area: "420m²",
    price: "R$ 12.500.000",
    tag: "Off-Market",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=85",
  },
  {
    title: "Penthouse Sky Garden",
    location: "Barra Sul, Balneário Camboriú",
    area: "380m²",
    price: "R$ 9.800.000",
    tag: "Exclusivo",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85",
  },
  {
    title: "Villa Contemporânea",
    location: "Praia do Estaleiro, SC",
    area: "650m²",
    price: "R$ 18.000.000",
    tag: "Lançamento",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85",
  },
];

export default function Imoveis() {
  return (
    <section id="portfolio" className="py-24 md:py-40 bg-ivory-50 relative overflow-hidden">
      {/* Decorative line */}
      <div className="gold-line w-full mb-0" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 pt-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-ivory-200 border border-ivory-300 rounded-full px-5 py-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="text-[0.6rem] tracking-[0.25em] uppercase text-onyx-400 font-medium">Portfólio Exclusivo</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1] text-onyx-900 mb-6">
            Imóveis que são{" "}
            <span className="text-gold-shimmer italic">obras de arte.</span>
          </h2>
          <p className="text-sm text-onyx-400 max-w-md mx-auto leading-relaxed">
            Seleção criteriosa de propriedades que redefinem o conceito de morar bem na costa catarinense.
          </p>
        </motion.div>

        {/* Property grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              className="property-card group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl mb-5 shadow-[0_15px_40px_rgba(0,0,0,0.06)]" style={{ aspectRatio: "3/4" }}>
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="property-img w-full h-full object-cover"
                />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-gold-500 text-white px-4 py-1.5 rounded-full text-[0.6rem] tracking-[0.15em] uppercase font-semibold shadow-lg">
                    {prop.tag}
                  </span>
                </div>
                {/* Price overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="font-serif text-2xl text-white">{prop.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="px-1">
                <h3 className="font-serif text-xl md:text-2xl text-onyx-900 tracking-tight mb-1 group-hover:text-gold-500 transition-colors duration-500">
                  {prop.title}
                </h3>
                <p className="text-sm text-onyx-400 mb-2">{prop.location}</p>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-onyx-300 tracking-wider">{prop.area}</span>
                  <span className="text-xs text-gold-500 tracking-[0.15em] uppercase font-medium group-hover:gap-3 inline-flex items-center gap-1 transition-all duration-500">
                    Ver detalhes <span>→</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
