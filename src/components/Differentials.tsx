import { motion } from 'motion/react';

const differentials = [
  {
    number: '01',
    title: 'Personalizado',
    description: 'Nada de soluções genéricas. Cada projeto é desenvolvido de acordo com a necessidade do cliente.',
  },
  {
    number: '02',
    title: 'Design moderno',
    description: 'Interfaces profissionais, responsivas e pensadas para gerar uma excelente experiência.',
  },
  {
    number: '03',
    title: 'Tecnologia',
    description: 'Utilizamos tecnologias modernas para criar produtos rápidos, seguros e escaláveis.',
  },
  {
    number: '04',
    title: 'Resultado',
    description: 'Nosso foco é criar soluções que realmente ajudem o negócio a crescer.',
  },
];

export default function Differentials() {
  return (
    <section className="py-24 lg:py-32 bg-white/30 border-y border-[#D5C2A5]/40 overflow-hidden relative">
      {/* Subtle background element */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-display text-brand-navy mb-6"
            >
              Seu negócio. Nossa tecnologia.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-brand-navy/70 leading-relaxed mb-12 max-w-xl"
            >
              Desenvolvemos cada projeto de forma totalmente personalizada. Combinamos visão estratégica com execução técnica impecável para entregar exatamente o que você precisa.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {differentials.map((diff, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-mono text-brand-red font-medium tracking-wider">
                      {diff.number}
                    </span>
                    <div className="h-px w-8 bg-[#D5C2A5]/60" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-brand-navy mb-3">
                    {diff.title}
                  </h3>
                  <p className="text-brand-navy/70 leading-relaxed">
                    {diff.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Abstract Visual representation of logic/architecture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative h-[600px] w-full rounded-3xl border border-[#D5C2A5]/60 bg-[#F5F2EB] p-8 shadow-2xl overflow-hidden"
          >
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            <div className="relative h-full flex items-center justify-center">
              <div className="w-full max-w-sm space-y-6">
                {/* Mock UI blocks connected */}
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 4, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    className={`bg-white border border-[#D5C2A5]/60 p-4 rounded-xl flex items-center gap-4 shadow-lg ${i === 2 ? 'ml-12 border-brand-red/30' : ''}`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${i === 2 ? 'bg-brand-red/20 text-brand-red' : 'bg-[#D5C2A5]/60 text-brand-navy/70'}`}>
                      <span className="font-mono text-xs">0{i}</span>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-2 w-full bg-[#D5C2A5]/60 rounded-full" />
                      <div className={`h-2 rounded-full ${i === 2 ? 'w-4/5 bg-brand-red/50' : 'w-2/3 bg-[#D5C2A5]/60'}`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
