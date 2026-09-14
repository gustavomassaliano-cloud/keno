import { motion } from 'motion/react';

export default function Impact() {
  const indicators = [
    { label: 'Sites modernos' },
    { label: 'Aplicativos personalizados' },
    { label: 'Sistemas inteligentes' },
    { label: 'Soluções sob medida' },
  ];

  return (
    <section className="py-12 border-y border-[#D5C2A5]/40 bg-white/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-900">
          {indicators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center justify-center text-center ${index !== 0 ? 'pl-8' : ''}`}
            >
              <span className="font-display font-medium text-brand-navy/70 md:text-lg">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
