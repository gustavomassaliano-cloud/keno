import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden border-t border-[#D5C2A5]/40 bg-[#F5F2EB]">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(200,16,46,0.1)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[2px] bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold font-display text-brand-navy mb-6"
        >
          Pronto para tirar sua ideia do papel?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-brand-navy/70 mb-10"
        >
          Vamos criar algo que realmente faça a diferença para o seu negócio.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contato"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white font-semibold rounded-xl hover:bg-red-700 transition-colors"
          >
            Falar com a Keno Tech
            <ArrowRight size={18} />
          </a>
          <a
            href="#contato"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-[#D5C2A5]/60 text-brand-navy font-semibold rounded-xl hover:bg-[#D5C2A5]/30 hover:border-brand-red/30 transition-colors"
          >
            Solicitar orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
}
