import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'RP Hotéis',
    category: 'Sistema Web',
    description: 'Sistema e soluções digitais para gestão hoteleira, simplificando reservas e controle de quartos de forma totalmente automatizada.',
    color: 'from-brand-red/10 to-[#D5C2A5]/30',
  },
  {
    id: 2,
    title: 'Dashboard Business',
    category: 'Plataforma Analytics',
    description: 'Dashboard interativo construído para alta performance na visualização de dados financeiros em tempo real.',
    color: 'from-[#D5C2A5]/40 to-[#D5C2A5]/20',
  },
  {
    id: 3,
    title: 'App Connect',
    category: 'Aplicativo Mobile',
    description: 'Aplicativo nativo para conexão rápida e segura entre prestadores de serviço e clientes, com foco em usabilidade.',
    color: 'from-brand-navy/10 to-[#D5C2A5]/30',
  },
];

export default function ProjectsStory() {
  return (
    <section className="py-20 md:py-32 bg-[#F5F2EB] relative" id="projetos">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display text-brand-navy"
          >
            Projetos <span className="text-brand-red">Notáveis</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-navy/70 mt-4 max-w-2xl"
          >
            Conheça alguns dos produtos digitais de alta performance que desenvolvi.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`bg-gradient-to-br ${project.color} rounded-3xl border border-brand-navy/10 p-8 flex flex-col relative overflow-hidden group min-h-[420px] shadow-sm hover:shadow-xl transition-all duration-500`}
            >
              <div className="absolute inset-0 bg-white mix-blend-overlay opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-auto">
                  <span className="px-4 py-1.5 bg-brand-red text-white text-sm font-bold rounded-full mb-6 inline-block shadow-sm">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold font-display text-brand-navy mb-4">{project.title}</h3>
                  <p className="text-brand-navy/80 leading-relaxed">{project.description}</p>
                </div>
                
                <button className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-red transition-colors group/btn mt-8 text-lg">
                  Ver detalhes
                  <ArrowUpRight size={24} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
