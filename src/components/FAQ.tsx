import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Quanto custa criar um site?',
    answer: 'O investimento varia de acordo com a complexidade, número de páginas e funcionalidades necessárias. Desenvolvemos soluções personalizadas e enviamos um orçamento detalhado após entendermos as necessidades específicas do seu negócio.',
  },
  {
    question: 'Vocês desenvolvem aplicativos personalizados?',
    answer: 'Sim, criamos aplicativos nativos ou multiplataforma (iOS e Android) 100% personalizados, com foco em usabilidade, performance e nas regras de negócio da sua empresa.',
  },
  {
    question: 'Vocês criam sistemas para empresas?',
    answer: 'Com certeza. Desenvolvemos sistemas web, painéis administrativos, CRMs sob medida, plataformas de gestão e dashboards integrados para otimizar os processos internos da sua equipe.',
  },
  {
    question: 'Posso apresentar apenas uma ideia e vocês desenvolverem?',
    answer: 'Sim! Nossa equipe ajuda a estruturar a sua ideia, planejando as funcionalidades essenciais (MVP), criando o design e cuidando de todo o processo técnico de desenvolvimento até o lançamento.',
  },
  {
    question: 'Quanto tempo leva para desenvolver um projeto?',
    answer: 'Depende do escopo do projeto. Sites institucionais e landing pages costumam levar algumas semanas, enquanto sistemas web complexos e aplicativos podem levar meses. Definimos um cronograma claro na fase de planejamento.',
  },
  {
    question: 'A Keno Tech também faz manutenção e melhorias?',
    answer: 'Sim, oferecemos planos de manutenção e suporte contínuo para garantir que seu produto digital continue seguro, atualizado e pronto para evoluir com novas funcionalidades.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 bg-[#F5F2EB]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display text-brand-navy mb-4"
          >
            Perguntas frequentes
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-[#D5C2A5]/60 bg-white/60 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-display font-semibold text-brand-navy md:text-lg">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-brand-navy/70"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-0 text-brand-navy/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
