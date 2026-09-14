import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function SpecialCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F2EB] via-[#E8DEC7] to-brand-beige/50" />
      
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold font-display text-brand-navy mb-6 tracking-tight"
        >
          Tem uma ideia? Vamos <span className="text-brand-red">transformar em realidade.</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-brand-navy/80 mb-10 leading-relaxed max-w-2xl mx-auto"
        >
          Você não precisa saber exatamente como construir. Conte o que você imagina e a Keno Tech ajuda a transformar sua ideia em uma solução digital completa e funcional.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-950 font-bold rounded-xl hover:bg-zinc-200 transition-colors text-lg"
          >
            Começar meu projeto
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
