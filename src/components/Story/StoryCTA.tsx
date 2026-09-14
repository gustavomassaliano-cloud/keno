import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function StoryCTA() {
  return (
    <section className="min-h-screen bg-[#F5F2EB] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,16,46,0.15)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold font-display text-brand-navy mb-8 leading-tight"
        >
          E se a próxima grande ideia <br className="hidden md:block"/> fosse <span className="text-brand-red">sua?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-brand-navy/70 mb-12"
        >
          Transformo ideias em produtos digitais de alto impacto.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#contato" className="group inline-flex items-center gap-4 px-6 py-4 md:px-10 md:py-5 bg-brand-red text-white font-bold rounded-full text-lg md:text-xl hover:bg-red-700 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(200,16,46,0.5)]">
            Vamos criar juntos
            <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
