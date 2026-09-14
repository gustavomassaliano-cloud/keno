import { motion } from 'motion/react';
import { Terminal, Database, Server } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 border-t border-[#D5C2A5]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-display text-brand-navy mb-6"
            >
              Tecnologia com propósito.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-lg text-brand-navy/70 leading-relaxed"
            >
              <p>
                A Keno Tech nasceu para transformar ideias em soluções digitais modernas. Unimos tecnologia, design e estratégia para criar sites, aplicativos e sistemas que realmente fazem diferença para empresas e seus clientes.
              </p>
              <p>
                Acreditamos que o desenvolvimento de software deve ser focado no resultado de negócios. Nosso time de especialistas trabalha com as ferramentas mais modernas do mercado para garantir performance, segurança e escalabilidade em cada linha de código.
              </p>
            </motion.div>
          </div>

          {/* Technical Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] bg-white/40 rounded-3xl border border-[#D5C2A5]/60 p-8 flex flex-col justify-center gap-6"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,16,46,0.1)_0%,transparent_50%)] rounded-3xl" />
            
            {/* Mock Code Editor */}
            <div className="relative bg-[#F5F2EB] rounded-xl border border-[#D5C2A5]/60 shadow-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#D5C2A5]/60 bg-white/60">
                <Terminal size={16} className="text-brand-navy/50" />
                <span className="text-xs text-brand-navy/70 font-mono">App.tsx</span>
              </div>
              <div className="p-4 font-mono text-sm overflow-hidden">
                <div className="text-pink-500">import <span className="text-brand-navy">{'{'} useState {'}'}</span> from <span className="text-emerald-400">'react'</span>;</div>
                <div className="text-pink-500 mt-2">export default function <span className="text-brand-red">Solution</span>() {'{'}</div>
                <div className="pl-4 mt-2 text-brand-navy/70">
                  <span className="text-pink-500">const</span> [success, setSuccess] = <span className="text-brand-red">useState</span>(<span className="text-orange-400">true</span>);
                </div>
                <div className="pl-4 mt-2 text-brand-navy/70">
                  <span className="text-pink-500">return</span> (
                </div>
                <div className="pl-8 text-blue-300">&lt;Product <span className="text-emerald-400">scalable</span>=&#123;true&#125; /&gt;</div>
                <div className="pl-4 text-brand-navy/70">);</div>
                <div className="text-pink-500">{'}'}</div>
              </div>
            </div>

            {/* Architecture Cards */}
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="bg-[#F5F2EB] border border-[#D5C2A5]/60 rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center">
                  <Database size={20} className="text-brand-red" />
                </div>
                <div>
                  <div className="text-brand-navy font-medium text-sm">Database</div>
                  <div className="text-brand-navy/50 text-xs">Scalable Storage</div>
                </div>
              </div>
              
              <div className="bg-[#F5F2EB] border border-[#D5C2A5]/60 rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-beige/10 flex items-center justify-center">
                  <Server size={20} className="text-brand-beige" />
                </div>
                <div>
                  <div className="text-brand-navy font-medium text-sm">Cloud API</div>
                  <div className="text-brand-navy/50 text-xs">High Performance</div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
