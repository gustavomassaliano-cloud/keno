import { motion } from 'motion/react';
import { Terminal, ShieldCheck, Zap } from 'lucide-react';

export default function CodeStory() {
  return (
    <section className="py-20 md:py-32 bg-[#030712] relative overflow-hidden">
      {/* Subtle background code patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none overflow-hidden flex flex-col justify-center gap-12 font-mono text-xs md:text-sm text-white whitespace-pre select-none">
        <div className="translate-x-10 md:translate-x-32">
          {`function architectSolution() {
  const userExperience = new Focus();
  const backend = new ScalableAPI();
  return integrate(userExperience, backend);
}`}
        </div>
        <div className="translate-x-32 md:translate-x-[40%]">
          {`const auth = initializeAuth({
  secure: true,
  encryption: 'AES-256'
});`}
        </div>
        <div className="translate-x-10 md:translate-x-[20%]">
          {`import { Innovation } from '@keno/core';

export const KenoTech = () => (
  <DigitalProduct 
    performance="optimal"
    design="impeccable"
  />
);`}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight">
            Por trás de uma experiência simples <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">
              existe tecnologia pesada.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[#D5C2A5]/70 max-w-2xl mx-auto mb-16">
            Escrevo código limpo, seguro e escalável. Minha arquitetura garante que o seu produto funcione perfeitamente hoje e esteja pronto para o crescimento de amanhã.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="bg-white/5 border border-white/10 p-8 rounded-2xl text-left backdrop-blur-sm hover:bg-white/10 transition-colors"
           >
              <div className="w-12 h-12 bg-brand-red/20 rounded-xl flex items-center justify-center text-brand-red mb-6 shadow-inner">
                <Terminal size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Arquitetura Moderna</h3>
              <p className="text-[#D5C2A5]/60 leading-relaxed">Utilizo as tecnologias mais recentes para garantir performance, SEO e uma base sólida.</p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="bg-white/5 border border-white/10 p-8 rounded-2xl text-left backdrop-blur-sm hover:bg-white/10 transition-colors"
           >
              <div className="w-12 h-12 bg-brand-red/20 rounded-xl flex items-center justify-center text-brand-red mb-6 shadow-inner">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Alta Performance</h3>
              <p className="text-[#D5C2A5]/60 leading-relaxed">Aplicações otimizadas milissegundo a milissegundo para a melhor experiência do usuário.</p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="bg-white/5 border border-white/10 p-8 rounded-2xl text-left backdrop-blur-sm hover:bg-white/10 transition-colors"
           >
              <div className="w-12 h-12 bg-brand-red/20 rounded-xl flex items-center justify-center text-brand-red mb-6 shadow-inner">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Segurança Escalável</h3>
              <p className="text-[#D5C2A5]/60 leading-relaxed">Proteção de dados e infraestrutura preparada para crescer junto com o seu negócio.</p>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
