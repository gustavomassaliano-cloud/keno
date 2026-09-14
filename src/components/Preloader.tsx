import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MousePointer2 } from 'lucide-react';
import Hero from './Hero';
import Navbar from './Navbar';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<'loading' | 'hero' | 'clicking' | 'zooming' | 'done'>('loading');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Bloqueia o scroll do site principal enquanto o preloader está ativo
  useEffect(() => {
    if (stage !== 'done') {
      document.body.style.overflow = 'hidden';
      // Força a tela pro topo para que a transição Hero case perfeitamente
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [stage]);

  // Fase 1: Carregamento do sistema
  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => setStage('hero'), 300);
      }
      setProgress(currentProgress);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Fases de Transição
  useEffect(() => {
    if (stage === 'hero') {
      setTimeout(() => setStage('clicking'), 800);
    } else if (stage === 'clicking') {
      setTimeout(() => setStage('zooming'), 800); 
    } else if (stage === 'zooming') {
      // Quando a animação de zoom terminar, trocamos pro done
      setTimeout(() => setStage('done'), 1000); 
    }
  }, [stage]);

  if (stage === 'done') return null;

  const INITIAL_SCALE = isMobile ? 0.6 : 0.35;
  const CLICK_SCALE = INITIAL_SCALE * 0.98;

  return (
    <div className="fixed inset-0 z-[99999] bg-[#030712] overflow-hidden">
      
      {/* Container Principal do "Mundo Virtual" */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center origin-center"
        initial={{ scale: INITIAL_SCALE }}
        animate={
          stage === 'loading' ? { scale: INITIAL_SCALE } :
          stage === 'hero' ? { scale: INITIAL_SCALE } :
          stage === 'clicking' ? { scale: CLICK_SCALE } :
          stage === 'zooming' ? { scale: 1 } : {} // Zoom até 1x para que a tela case 100% com o monitor real
        }
        transition={{ 
          duration: stage === 'zooming' ? 1.0 : 0.4, 
          ease: stage === 'zooming' ? [0.8, 0, 0.2, 1] : "easeInOut" 
        }}
      >
        {/* Corpo do Monitor (Bezel) */}
        {/* Usamos position absolute para que o centro da tela interna case exatamente com o centro da tela física */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a1a2e] shadow-[0_0_200px_rgba(200,16,46,0.3)] border border-white/10"
          style={{ 
            width: 'calc(100vw + 48px)', // Tela + Bordas de 24px
            height: 'calc(100vh + 48px)',
            borderRadius: '40px',
            padding: '24px'
          }}
        >
          {/* Tela Interna (Exatamente 100vw x 100vh) */}
          {/* Quando scale for 1, esta div se sobrepõe com a janela do navegador em pixel-perfect! */}
          <motion.div 
            className="w-full h-full bg-[#F5F2EB] overflow-hidden relative shadow-inner" 
            initial={{ borderRadius: '24px', borderWidth: '1px', borderColor: '#1a1a2e' }}
            animate={{ 
              borderRadius: stage === 'zooming' ? '0px' : '24px',
              borderWidth: stage === 'zooming' ? '0px' : '1px'
            }}
            transition={{ duration: stage === 'zooming' ? 1.0 : 0.4, ease: [0.8, 0, 0.2, 1] }}
          >
            
            {/* Reflexo do Vidro */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-30" />

            {/* CONTEÚDO 1: Tela de Loading (Terminal) */}
            <AnimatePresence>
              {stage === 'loading' && (
                <motion.div 
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-40 bg-[#0a0a0a]"
                >
                  <div className="text-white text-2xl md:text-3xl font-display font-bold flex items-center gap-2">
                    <span className="w-4 h-4 bg-brand-red rounded-sm animate-pulse" />
                    SISTEMA KENO
                  </div>
                  <div className="text-brand-red font-mono text-7xl md:text-8xl font-light tracking-tighter">
                    {progress}%
                  </div>
                  <div className="w-[80vw] max-w-md h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-brand-red"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CONTEÚDO 2: O Site REAL ("Hero" e "Navbar") renderizados dentro da tela do monitor! */}
            {/* Eles herdam 100vw/100vh da tela do monitor. Media Queries e Fixed position funcionam perfeitamente. */}
            <AnimatePresence>
              {(stage === 'hero' || stage === 'clicking' || stage === 'zooming') && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-10 pointer-events-none"
                >
                  <Navbar />
                  <Hero />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Ponteiro do Mouse Animado */}
            {(stage === 'clicking' || stage === 'zooming') && (
              <motion.div
                className="absolute z-50 flex items-center justify-center pointer-events-none"
                initial={{ left: '80%', top: '90%', opacity: 0 }}
                // O mouse viaja até o botão principal do Hero Real
                animate={{ 
                  left: '50%', 
                  top: isMobile ? '70%' : '75%', 
                  opacity: stage === 'zooming' ? 0 : 1, // Some no zoom
                  scale: stage === 'clicking' ? [1, 1, 0.7, 1] : 1 
                }}
                transition={{ 
                  duration: stage === 'zooming' ? 0.3 : 0.6, 
                  times: stage === 'zooming' ? undefined : [0, 0.6, 0.8, 1],
                  ease: "easeOut"
                }}
              >
                <MousePointer2 size={64} className="fill-white stroke-zinc-900 stroke-[2px] drop-shadow-2xl -translate-x-[2px] -translate-y-[2px]" />
                
                {/* Onda de choque (Ripple) no clique */}
                {stage === 'clicking' && (
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 3, opacity: [0, 1, 0] }}
                    transition={{ delay: 0.45, duration: 0.4 }} 
                    className="absolute top-2 left-2 w-12 h-12 bg-brand-red/30 rounded-full pointer-events-none"
                  />
                )}
              </motion.div>
            )}

          </motion.div>
        </div>
        
        {/* Base do Monitor */}
        {/* Posicionado exata e dinamicamente abaixo da borda inferior do Bezel (50% + 50vh + 24px) */}
        <div className="absolute top-[calc(50%+50vh+24px)] flex flex-col items-center">
           <div className="w-[120px] md:w-[200px] h-[80px] md:h-[120px] bg-[#1a1a2e] border-x border-white/5" />
           <div className="w-[300px] md:w-[500px] h-[30px] md:h-[40px] bg-[#11111e] rounded-t-[20px] shadow-2xl border-t border-white/10" />
        </div>
      </motion.div>
    </div>
  );
}
