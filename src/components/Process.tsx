import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Ideia',
    description: 'Entendemos o que você precisa e qual problema deseja resolver.',
  },
  {
    number: '02',
    title: 'Planejamento',
    description: 'Definimos funcionalidades, estrutura e estratégia do projeto.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Criamos a identidade visual e a experiência do usuário.',
  },
  {
    number: '04',
    title: 'Desenvolvimento',
    description: 'Transformamos o projeto em um produto digital funcional.',
  },
  {
    number: '05',
    title: 'Lançamento',
    description: 'Colocamos sua solução no ar e preparamos o projeto para evolução.',
  },
];

export default function Process() {
  return (
    <section id="processo" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display text-brand-navy mb-6"
          >
            Do conceito ao lançamento.
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-[#D5C2A5]/60 md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-[#F5F2EB] border-4 border-[#D5C2A5]/40 flex items-center justify-center md:-translate-x-1/2 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-red" />
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                  <div className="bg-white/40 border border-[#D5C2A5]/40 p-6 rounded-2xl hover:border-brand-red/30 transition-colors">
                    <span className="text-brand-red font-mono text-sm font-semibold tracking-wider mb-2 block">
                      ETAPA {step.number}
                    </span>
                    <h3 className="text-xl font-bold font-display text-brand-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-brand-navy/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
