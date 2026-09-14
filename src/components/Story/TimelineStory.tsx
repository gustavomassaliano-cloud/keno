import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const steps = [
  { num: '01', title: 'IDEIA', desc: 'Mergulho no seu negócio para entender a visão e o problema a ser resolvido.' },
  { num: '02', title: 'DESIGN', desc: 'Crio wireframes e interfaces modernas focadas na jornada do usuário.' },
  { num: '03', title: 'DESENVOLVIMENTO', desc: 'Escrevo o código, implemento o banco de dados e arquiteto a tecnologia.' },
  { num: '04', title: 'PRODUTO', desc: 'Realizo testes rigorosos e finalizo o produto para o mundo real.' },
  { num: '05', title: 'RESULTADO', desc: 'Lançamento bem-sucedido e o seu negócio operando em um novo patamar.' },
];

export default function TimelineStory() {
   const containerRef = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ["start start", "end end"]
   });

   return (
     <section id="processo" ref={containerRef} className="h-[600vh] bg-[#F5F2EB] relative border-t border-brand-navy/5">
       <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
         
         <div className="absolute top-12 text-center w-full z-30">
            <h2 className="text-2xl font-mono text-brand-navy/70 tracking-widest uppercase">Do Zero ao Produto</h2>
         </div>

         {/* Center Line */}
         <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-brand-red/30 to-transparent" />
         </div>

         <div className="w-full relative h-full flex items-center justify-center">
           {steps.map((step, i) => {
             const start = i * 0.2;
             const peak = start + 0.1;
             const end = (i + 1) * 0.2;
             
             const opacity = useTransform(scrollYProgress, [start, peak, end - 0.05, end], [0, 1, 1, 0]);
             const y = useTransform(scrollYProgress, [start, peak, end - 0.05, end], [100, 0, 0, -100]);
             const scale = useTransform(scrollYProgress, [start, peak, end - 0.05, end], [0.8, 1, 1, 0.8]);

             return (
               <motion.div key={step.num} style={{ opacity, y, scale }} className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
                 <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-brand-red flex items-center justify-center text-brand-red font-display font-bold text-lg md:text-2xl mb-6 md:mb-8 shadow-[0_0_40px_rgba(200,16,46,0.3)]">
                   {step.num}
                 </div>
                 <h3 className="text-3xl sm:text-4xl md:text-7xl px-4 font-bold font-display text-brand-navy mb-6">{step.title}</h3>
                 <p className="text-lg md:text-2xl text-brand-navy/70 max-w-2xl leading-relaxed">{step.desc}</p>
               </motion.div>
             );
           })}
         </div>

       </div>
     </section>
   )
}
