import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MousePointer2, MessageSquare } from 'lucide-react';

export default function PageTransition() {
  const [transitionData, setTransitionData] = useState<{ target: string, name: string } | null>(null);

  useEffect(() => {
    const handleTransition = (e: any) => {
      setTransitionData(e.detail);
      const name = e.detail.name.toLowerCase();
      
      // Tempos personalizados para as animações
      let peakTime = 1000;
      let totalTime = 2000;

      if (name === 'contato') {
        peakTime = 1400; 
        totalTime = 2600;
      } else if (name === 'processo') {
        peakTime = 1800; // Tempo em que a caneta digitaliza tudo
        totalTime = 2800;
      } else if (name === 'início' || name === 'inicio') {
        peakTime = 1300; 
        totalTime = 2400;
      } else if (name === 'serviços' || name === 'servicos') {
        peakTime = 1800; 
        totalTime = 2800;
      } else if (name === 'projetos') {
        peakTime = 2600; // Tempo em que ocorre o zoom da construção
        totalTime = 3400;
      }

      // Realiza o scroll da página no ápice da animação (quando a tela está 100% coberta)
      setTimeout(() => {
         const targetElement = document.querySelector(e.detail.target);
         if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            
            window.scrollTo({
                 top: offsetPosition,
                 behavior: "auto"
            });
         }
      }, peakTime);
      
      // Finaliza a animação
      setTimeout(() => {
         setTransitionData(null);
      }, totalTime);
    };

    window.addEventListener('nav-transition', handleTransition);
    return () => window.removeEventListener('nav-transition', handleTransition);
  }, []);

  if (!transitionData) return null;

  const effectType = transitionData.name.toLowerCase();
  const easePremium = [0.76, 0, 0.24, 1]; // Curva de aceleração elegante (tipo Apple)

  return (
    <div className="fixed inset-0 z-[999999] pointer-events-none flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        
        {/* INÍCIO: Barra de Carregamento & Teia puxando a tela */}
        {(effectType === 'início' || effectType === 'inicio') && (
          <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
            {/* Metade Superior (Puxada para cima) */}
            <motion.div 
              className="absolute top-0 left-0 right-0 h-1/2 bg-[#030712] border-b border-brand-red/20 origin-top z-20"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: [1, 1, 1, 0] }}
              transition={{ duration: 2.2, times: [0, 0.4, 0.6, 1], ease: easePremium }}
            />
            {/* Metade Inferior (Puxada para baixo) */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#030712] border-t border-brand-red/20 origin-bottom z-20"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: [1, 1, 1, 0] }}
              transition={{ duration: 2.2, times: [0, 0.4, 0.6, 1], ease: easePremium }}
            />
            
            {/* Barra de Progresso (Laser/Fio da Teia) */}
            <motion.div 
              className="absolute z-30 h-[2px] bg-brand-red shadow-[0_0_30px_rgba(200,16,46,1)]"
              initial={{ width: '0%', left: 0 }}
              animate={{ width: ['0%', '100%', '100%', '100%'], opacity: [1, 1, 1, 0] }}
              transition={{ duration: 2.2, times: [0, 0.4, 0.6, 1], ease: easePremium }}
            />
            
            {/* Fios verticais da Teia esticando para puxar */}
            <motion.div 
               className="absolute z-10 flex w-full justify-around px-4 md:px-10 h-full origin-center"
               initial={{ opacity: 0, scaleY: 0 }}
               animate={{ opacity: [0, 0, 1, 0], scaleY: [0, 0, 1, 1] }}
               transition={{ duration: 2.2, times: [0, 0.4, 0.6, 1], ease: "easeOut" }}
            >
               {[...Array(12)].map((_, i) => (
                 <motion.div 
                   key={i} 
                   className="w-[1px] h-full bg-brand-red/50 shadow-[0_0_15px_rgba(200,16,46,0.6)]"
                   initial={{ scaleY: 0 }}
                   animate={{ scaleY: [0, 0, 1, 0] }}
                   transition={{ 
                     duration: 2.2, 
                     delay: (i % 2 === 0 ? 0.05 : 0.1), // Assimetria para parecer orgânico
                     times: [0, 0.45, 0.6, 1], 
                     ease: "easeOut" 
                   }}
                 />
               ))}
            </motion.div>
          </div>
        )}

        {/* SERVIÇOS: Teclado Digitado e Código (Terminal) */}
        {(effectType === 'serviços' || effectType === 'servicos') && (
          <motion.div 
            className="absolute inset-0 bg-[#030712] flex flex-col items-center justify-center perspective-[1200px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.8, times: [0, 0.1, 0.85, 1], ease: "easeInOut" }}
          >
            {/* Tela do Terminal */}
            <motion.div
               className="w-[340px] md:w-[600px] h-[240px] md:h-[400px] bg-[#0a0a0a] rounded-xl border border-white/10 shadow-[0_0_80px_rgba(200,16,46,0.15)] flex flex-col overflow-hidden relative z-10"
               initial={{ scale: 0.8, y: 50, rotateX: 10 }}
               // No final, zoom massivo varando a tela do terminal
               animate={{ scale: [0.8, 1, 1, 20], y: [50, 0, 0, 200], rotateX: [10, 0, 0, 0] }}
               transition={{ duration: 2.6, times: [0, 0.2, 0.7, 1], ease: easePremium }}
            >
              {/* Header do Terminal */}
              <div className="h-8 bg-[#1a1a2e] border-b border-white/5 flex items-center px-4 gap-2 shrink-0">
                 <div className="w-3 h-3 rounded-full bg-red-500/80"/>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/80"/>
                 <div className="w-3 h-3 rounded-full bg-green-500/80"/>
                 <div className="ml-4 text-[10px] text-white/30 font-mono">/keno-tech/services.sh</div>
              </div>
              
              {/* Corpo de Código (Efeito Digitação) */}
              <div className="p-4 md:p-6 font-mono text-xs md:text-sm text-green-400/90 flex flex-col gap-2">
                 <motion.div className="overflow-hidden whitespace-nowrap" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.4, duration: 0.3, ease: "linear" }}>
                   {'>'} const KenoTech = require('innovation');
                 </motion.div>
                 <motion.div className="overflow-hidden whitespace-nowrap" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.8, duration: 0.4, ease: "linear" }}>
                   {'>'} await KenoTech.buildSolutions();
                 </motion.div>
                 <motion.div className="overflow-hidden whitespace-nowrap text-white/60" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 1.3, duration: 0.2, ease: "linear" }}>
                   {'>'} Deploying microservices... 
                 </motion.div>
                 <motion.div className="text-brand-red font-bold mt-2 flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
                   <span>[ OK ]</span> SERVICES INITIALIZED
                   <span className="w-2 h-4 bg-brand-red animate-pulse" />
                 </motion.div>
              </div>
            </motion.div>

            {/* Teclado Virtual (Visão 3D) com teclas piscando simulando digitação rápida */}
            <motion.div 
               className="mt-12 md:mt-20 flex flex-col gap-1 md:gap-2 perspective-[1000px] z-0"
               initial={{ rotateX: 50, opacity: 0, y: -20, scale: 0.9 }}
               animate={{ opacity: [0, 1, 1, 0] }}
               transition={{ duration: 2.6, times: [0, 0.2, 0.7, 1] }}
               style={{ transformStyle: "preserve-3d" }}
            >
              {[...Array(4)].map((_, rowIndex) => (
                 <div key={rowIndex} className="flex gap-1 md:gap-2 justify-center">
                   {/* Número de teclas decresce por linha para criar formato de teclado clássico */}
                   {[...Array(14 - rowIndex)].map((_, colIndex) => (
                      <motion.div 
                        key={colIndex}
                        className="w-8 h-8 md:w-12 md:h-12 bg-white/5 rounded border border-white/10 flex items-center justify-center"
                        // Animação randômica e super rápida para simular dedos batendo no teclado
                        animate={{ 
                          backgroundColor: ['rgba(255,255,255,0.05)', 'rgba(200,16,46,0.7)', 'rgba(255,255,255,0.05)'],
                          y: [0, 3, 0] // Tecla abaixando
                        }}
                        transition={{ 
                          duration: 0.15, 
                          repeat: 6, 
                          repeatDelay: Math.random() * 0.4 + 0.1, 
                          delay: Math.random() * 1.5 + 0.3 // Começa junto com o código
                        }}
                      >
                         {/* Detalhe interno da tecla */}
                         <div className="w-4 h-4 rounded-sm bg-white/5" />
                      </motion.div>
                   ))}
                 </div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* PROJETOS: Construção de Prédio (Guindaste) */}
        {effectType === 'projetos' && (
          <motion.div 
            className="absolute inset-0 bg-[#F5F2EB] flex flex-col items-center justify-end overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3.4, times: [0, 0.1, 0.9, 1], ease: "easeInOut" }}
          >
            <motion.div
              className="relative w-full max-w-lg h-[400px] flex justify-center items-end"
              initial={{ scale: 1, y: 0 }}
              // Zoom extremo no final
              animate={{ scale: [1, 1, 40], y: [0, 0, 500] }}
              transition={{ duration: 3.2, times: [0, 0.75, 1], ease: "easeInOut" }}
            >
               {/* Torre do Guindaste */}
               <div className="absolute bottom-0 ml-[-140px] w-12 h-[350px] bg-brand-navy flex flex-col items-center justify-evenly py-2 border-x-4 border-brand-red">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-full h-4 border-y-[3px] border-brand-red/40" />
                  ))}
               </div>
               
               {/* Braço Frontal */}
               <div className="absolute top-[20px] ml-[-140px] w-[340px] h-12 bg-brand-navy border-y-4 border-brand-red flex items-center justify-evenly px-2 z-10">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="w-4 h-full border-x-[3px] border-brand-red/40" />
                  ))}
               </div>
               
               {/* Contrapeso (Braço Traseiro) */}
               <div className="absolute top-[20px] ml-[-240px] w-[100px] h-12 bg-brand-navy border-y-4 border-brand-red flex items-center justify-end px-2">
                  <div className="w-16 h-20 bg-brand-red mt-10 rounded-sm shadow-xl flex flex-col gap-1 p-2">
                     <div className="flex-1 bg-brand-navy/20" />
                     <div className="flex-1 bg-brand-navy/20" />
                     <div className="flex-1 bg-brand-navy/20" />
                  </div>
               </div>
               
               {/* Cabine */}
               <div className="absolute top-[68px] ml-[-140px] w-16 h-16 bg-[#0a0a0a] border-4 border-brand-navy rounded-br-2xl shadow-inner flex items-center justify-center z-20">
                  <div className="w-8 h-8 bg-blue-400/20 rounded-full" />
               </div>

               {/* Cabo e Gancho */}
               <motion.div
                 className="absolute top-[68px] ml-[118px] w-1.5 bg-zinc-600 origin-top z-10"
                 animate={{ height: [20, 252, 20, 20, 172, 20, 20, 92, 20, 20] }}
                 transition={{ duration: 2.4, times: [0, 0.2, 0.3, 0.35, 0.45, 0.55, 0.6, 0.7, 0.8, 1], ease: "easeInOut" }}
               >
                  <div className="absolute bottom-[-14px] left-[-8px] w-6 h-6 border-[3px] border-zinc-600 border-t-0 rounded-b-md flex justify-center">
                     <div className="w-1.5 h-2 bg-zinc-600 mt-[-3px]" />
                  </div>
               </motion.div>

               {/* Bloco 1 */}
               <motion.div
                 className="absolute bottom-0 ml-[40px] w-40 h-20 bg-brand-red border-t-4 border-white/20 shadow-lg flex items-center justify-center z-20"
                 initial={{ y: -232 }}
                 animate={{ y: [-232, 0, 0] }}
                 transition={{ duration: 2.4, times: [0, 0.2, 1], ease: "easeInOut" }}
               >
                  <div className="w-32 h-10 border-2 border-brand-navy/20 flex gap-2 p-1">
                     <div className="flex-1 bg-brand-navy/10" />
                     <div className="flex-1 bg-brand-navy/10" />
                     <div className="flex-1 bg-brand-navy/10" />
                  </div>
               </motion.div>

               {/* Bloco 2 */}
               <motion.div
                 className="absolute bottom-[80px] ml-[40px] w-40 h-20 bg-brand-red border-t-4 border-white/20 shadow-lg flex items-center justify-center z-20"
                 initial={{ y: -152 }}
                 animate={{ y: [-152, -152, 0, 0] }}
                 transition={{ duration: 2.4, times: [0, 0.35, 0.45, 1], ease: "easeInOut" }}
               >
                  <div className="w-32 h-10 border-2 border-brand-navy/20 flex gap-2 p-1">
                     <div className="flex-1 bg-brand-navy/10" />
                     <div className="flex-1 bg-brand-navy/10" />
                     <div className="flex-1 bg-brand-navy/10" />
                  </div>
               </motion.div>

               {/* Bloco 3 (O que vai dar o zoom) */}
               <motion.div
                 className="absolute bottom-[160px] ml-[40px] w-40 h-20 bg-brand-navy border-t-4 border-brand-red shadow-2xl flex items-center justify-center z-30"
                 initial={{ y: -72 }}
                 animate={{ y: [-72, -72, 0, 0] }}
                 transition={{ duration: 2.4, times: [0, 0.6, 0.7, 1], ease: "easeInOut" }}
               >
                 <div className="bg-white/95 px-3 py-1.5 rounded flex items-center justify-center shadow-sm">
                   <img src="/logo.png" alt="Keno Tech" className="h-5 w-auto object-contain" />
                 </div>
               </motion.div>

            </motion.div>
          </motion.div>
        )}

        {/* PROCESSO: Caneta Digital Escrevendo & Sketching */}
        {effectType === 'processo' && (
          <motion.div 
            className="absolute inset-0 bg-[#F5F2EB] flex flex-col items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.8, times: [0, 0.15, 0.85, 1], ease: "easeInOut" }}
          >
            {/* O "Papel" / Canvas do Tablet */}
            <motion.div 
               className="relative w-[300px] md:w-[600px] h-[200px] md:h-[400px]"
               initial={{ scale: 1 }}
               animate={{ scale: [1, 1, 1, 15] }} // Zoom absoluto no final
               transition={{ duration: 2.6, times: [0, 0.4, 0.7, 1], ease: easePremium }}
            >
              {/* O Traço da Caneta (SVG Drawing) */}
              <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full overflow-visible z-10">
                {/* Linha abstrata imitando uma assinatura / esboço rápido tech */}
                <motion.path
                  d="M 50 150 Q 100 50 150 150 T 250 100 T 350 150"
                  fill="transparent"
                  stroke="#1a1a2e"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                />
                <motion.path
                  d="M 120 180 L 180 60 L 280 160"
                  fill="transparent"
                  stroke="#c8102e"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.0, delay: 0.8, ease: "easeOut" }}
                />
              </svg>

              {/* A Caneta Digital (Stylus Pen) voando sobre a tela */}
              <motion.div
                className="absolute z-20 top-0 left-0"
                initial={{ x: 50, y: 150, opacity: 0, rotate: -45 }}
                animate={{ 
                  x: [50, 150, 250, 350, 150], // Segue o caminho grosso modo
                  y: [150, 50, 100, 150, -50], 
                  opacity: [0, 1, 1, 0],
                  rotate: [-45, -30, -50, -40, -45] // Gira um pouquinho na mão
                }}
                transition={{ duration: 1.8, delay: 0.2, ease: "easeInOut" }}
                style={{ originX: 0, originY: 1 }} // Ponto de ancoragem na ponta
              >
                {/* Desenho simples e elegante da caneta digital */}
                <div className="relative w-2 h-20 bg-zinc-200 rounded-t-sm shadow-xl flex flex-col items-center">
                   {/* Botão lateral da caneta */}
                   <div className="absolute top-4 -right-0.5 w-1 h-3 bg-zinc-400 rounded-full" />
                   {/* Corpo escuro inferior */}
                   <div className="absolute bottom-0 w-full h-8 bg-zinc-800" />
                   {/* A ponta da caneta */}
                   <div className="absolute -bottom-3 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[12px] border-t-zinc-800" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* CONTATO: Celular Deslizando e Clique */}
        {effectType === 'contato' && (
          <motion.div 
            className="absolute inset-0 bg-[#F5F2EB]/90 backdrop-blur-md flex items-end justify-center perspective-[1200px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.6, times: [0, 0.15, 0.85, 1], ease: "easeInOut" }}
          >
            <motion.div 
              className="relative w-64 h-[500px] bg-[#1a1a2e] border-[8px] border-zinc-800 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center overflow-hidden mb-[-50px]"
              initial={{ y: 500, rotateX: 20 }}
              animate={{ 
                y: [500, -50, -50, 200], 
                rotateX: [20, 0, 0, 0],
                scale: [1, 1, 1, 20] 
              }}
              transition={{ duration: 2.2, times: [0, 0.3, 0.6, 1], ease: easePremium }}
            >
               <div className="absolute top-2 w-20 h-5 bg-zinc-900 rounded-full z-10" />
               <div className="bg-white/95 px-4 py-2 rounded-xl mt-12 flex items-center justify-center shadow-md">
                 <img src="/logo.png" alt="Keno Tech" className="h-6 w-auto object-contain" />
               </div>
               <motion.div 
                 className="mt-8 w-16 h-16 bg-brand-red rounded-full flex items-center justify-center shadow-lg shadow-brand-red/20 relative"
                 animate={{ scale: [1, 1, 0.9, 1.2, 1] }} 
                 transition={{ duration: 1.0, delay: 0.9 }}
               >
                 <MessageSquare className="text-white w-7 h-7 z-10" />
                 <motion.div 
                   className="absolute inset-0 bg-white/40 rounded-full"
                   initial={{ scale: 0, opacity: 0 }}
                   animate={{ scale: [0, 2, 3], opacity: [0, 1, 0] }}
                   transition={{ duration: 0.6, delay: 1.1 }}
                 />
               </motion.div>
               <motion.div
                 className="absolute z-20 flex items-center justify-center pointer-events-none"
                 initial={{ left: '150%', top: '150%', opacity: 0 }}
                 animate={{ 
                   left: '50%', 
                   top: '60%', 
                   opacity: [0, 1, 1, 0],
                   scale: [1, 1, 0.8, 1, 1] 
                 }}
                 transition={{ duration: 1.6, delay: 0.3, times: [0, 0.4, 0.5, 0.6, 1], ease: "easeOut" }}
               >
                 <MousePointer2 size={40} className="fill-white stroke-zinc-900 stroke-[2px] drop-shadow-2xl -translate-x-1 -translate-y-1" />
               </motion.div>
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
