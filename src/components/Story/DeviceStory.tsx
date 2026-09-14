import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Smartphone, PenTool, Cpu, Code2, Keyboard, Mouse, Database, HardDrive, LayoutDashboard, BarChart3, Activity, Bell } from 'lucide-react';

const FLOATING_OBJECTS = [
  { id: 1, Icon: Smartphone, color: 'text-brand-red', startX: -42, startY: 38, rotate: 15, size: 40 },
  { id: 2, Icon: PenTool, color: 'text-brand-navy', startX: -32, startY: 45, rotate: -20, size: 36 },
  { id: 3, Icon: Cpu, color: 'text-[#D5C2A5]', startX: -20, startY: 39, rotate: 45, size: 48 },
  { id: 4, Icon: Database, color: 'text-brand-navy', startX: -8, startY: 46, rotate: -10, size: 42 },
  { id: 5, Icon: Code2, color: 'text-brand-red', startX: 5, startY: 37, rotate: 5, size: 38 },
  { id: 6, Icon: Keyboard, color: 'text-[#D5C2A5]', startX: 18, startY: 45, rotate: 12, size: 46 },
  { id: 7, Icon: Mouse, color: 'text-brand-navy', startX: 28, startY: 38, rotate: -25, size: 32 },
  { id: 8, Icon: HardDrive, color: 'text-brand-red', startX: 40, startY: 44, rotate: 8, size: 40 },
  { id: 9, isText: true, text: '0101', color: 'text-brand-navy', startX: -15, startY: 42, rotate: -15, size: 24 },
  { id: 10, isText: true, text: '</>', color: 'text-[#D5C2A5]', startX: 35, startY: 47, rotate: 20, size: 28 },
  { id: 11, isText: true, text: '{ }', color: 'text-brand-red', startX: -45, startY: 46, rotate: 0, size: 32 },
];

const FloatingItem = ({ obj, progress, isMobile }: { obj: any, progress: any, isMobile: boolean }) => {
  const m = isMobile ? 0.6 : 1;
  const initialX = obj.startX * m;
  const initialY = obj.startY;

  const x = useTransform(
    progress,
    [0, 0.4, 0.7, 0.9],
    [`${initialX}vw`, `${initialX * 1.1}vw`, `${initialX * 0.5}vw`, '0vw']
  );
  
  const y = useTransform(
    progress,
    [0, 0.4, 0.7, 0.9],
    [`${initialY}vh`, `${initialY - 40}vh`, `${initialY - 70}vh`, '0vh']
  );

  const rotate = useTransform(
    progress,
    [0, 0.7, 0.9],
    [obj.rotate, obj.rotate + 90, 0]
  );

  const opacity = useTransform(
    progress,
    [0, 0.8, 0.9, 1],
    [1, 1, 0, 0] 
  );

  const scale = useTransform(
    progress,
    [0, 0.8, 0.9],
    [1, 1, 0]
  );

  return (
    <motion.div
      initial={{ y: -1200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        type: "spring",
        bounce: 0.35,
        duration: 2.2, 
        delay: 3.8 + Math.random() * 0.5
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
    >
      <motion.div
        style={{ x, y, rotate, opacity, scale }}
        className={`${obj.color} font-mono font-bold drop-shadow-lg`}
      >
        {obj.isText ? (
          <span style={{ fontSize: obj.size }}>{obj.text}</span>
        ) : (
          <obj.Icon size={obj.size} />
        )}
      </motion.div>
    </motion.div>
  );
};

const StoryContent: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  const fixedDisplay = useTransform(smoothProgress, p => p > 0.98 ? 'none' : 'block');

  const text1Opacity = useTransform(smoothProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const text2Opacity = useTransform(smoothProgress, [0.6, 0.7, 0.85, 0.95], [0, 1, 1, 0]);

  // Computer formation animation inside sticky container
  const computerScale = useTransform(smoothProgress, [0.85, 0.95, 1], [0, 1, 1]);
  const computerOpacity = useTransform(smoothProgress, [0.85, 0.95], [0, 1]);
  
  // High-fidelity UI Reveal
  const uiOpacity = useTransform(smoothProgress, [0.93, 0.98], [0, 1]);
  const uiY = useTransform(smoothProgress, [0.93, 0.98], [30, 0]);
  const uiScale = useTransform(smoothProgress, [0.93, 0.98], [0.95, 1]);

  return (
    <section ref={containerRef} className="h-[500vh] bg-[#F5F2EB] relative z-20">
      
      <motion.div style={{ display: fixedDisplay }} className="fixed inset-0 pointer-events-none z-30">
        {FLOATING_OBJECTS.map((obj) => (
          <FloatingItem key={obj.id} obj={obj} progress={smoothProgress} isMobile={isMobile} />
        ))}
      </motion.div>

      <div className="sticky top-0 w-full h-screen overflow-hidden pointer-events-none z-30">
        
        <div className="absolute top-20 md:top-32 w-full px-4 flex justify-center z-40">
          <motion.div style={{ opacity: text1Opacity, position: 'absolute' }} className="text-center max-w-2xl w-full">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-brand-navy mb-4">Do conceito para a tela.</h2>
            <p className="text-lg md:text-xl text-brand-navy/70">As ideias tomam forma. Elementos se conectam, criando a fundação de produtos digitais que cabem no seu bolso.</p>
          </motion.div>
          <motion.div style={{ opacity: text2Opacity, position: 'absolute' }} className="text-center max-w-2xl w-full">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-brand-navy mb-4">A união perfeita entre sua ideia e o resultado.</h2>
            <p className="text-lg md:text-xl text-brand-navy/70">Quando os componentes se alinham, nasce uma experiência incomparável.</p>
          </motion.div>
        </div>

        <motion.div 
          style={{ opacity: computerOpacity, scale: computerScale }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-full max-w-3xl px-4 mt-12 md:mt-0 flex flex-col items-center"
        >
          <div className="w-[300px] md:w-[600px] h-[190px] md:h-[380px] bg-[#0a0a0a] rounded-t-2xl md:rounded-t-[32px] border-4 md:border-8 border-brand-navy shadow-2xl relative overflow-hidden flex flex-col pointer-events-auto">
            
            {/* Monitor Bezel Top */}
            <div className="h-4 md:h-6 bg-brand-navy w-full flex items-center justify-center shrink-0 z-10 relative shadow-md">
               <div className="w-1.5 h-1.5 rounded-full bg-zinc-700/80" />
            </div>
            
            {/* Screen Content - High Fidelity Website */}
            <div className="flex-1 bg-black relative overflow-hidden">
               <motion.div 
                 style={{ opacity: uiOpacity, y: uiY, scale: uiScale }} 
                 className="absolute inset-0 bg-slate-50 flex flex-col overflow-hidden origin-bottom"
               >
                 {/* Navbar */}
                 <div className="h-8 md:h-14 bg-white border-b border-slate-200 flex items-center justify-between px-3 md:px-6 shrink-0 shadow-sm z-10">
                   <div className="flex items-center gap-2 md:gap-3">
                     <div className="w-5 h-5 md:w-7 md:h-7 bg-brand-red rounded-lg flex items-center justify-center shadow-inner">
                       <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-sm" />
                     </div>
                     <div className="w-16 md:w-24 h-2 md:h-2.5 bg-slate-800 rounded-full" />
                   </div>
                   <div className="flex items-center gap-3 md:gap-5">
                     <div className="hidden md:flex gap-4">
                       <div className="w-10 h-1.5 bg-slate-200 rounded-full" />
                       <div className="w-10 h-1.5 bg-slate-200 rounded-full" />
                       <div className="w-10 h-1.5 bg-slate-200 rounded-full" />
                     </div>
                     <div className="flex items-center gap-2 md:gap-4">
                        <Bell size={14} className="text-slate-400 hidden sm:block" />
                        <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                          <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-300" />
                        </div>
                     </div>
                   </div>
                 </div>
                 
                 {/* Dashboard Layout */}
                 <div className="flex-1 p-2 md:p-5 flex gap-2 md:gap-5 overflow-hidden">
                   {/* Sidebar */}
                   <div className="w-8 md:w-16 hidden sm:flex flex-col gap-2 md:gap-4 pt-1 border-r border-slate-200/50 pr-2 md:pr-5 shrink-0">
                     <div className="w-full aspect-square rounded-md md:rounded-xl bg-brand-red/10 flex items-center justify-center transition-colors"><LayoutDashboard size={isMobile ? 12 : 20} className="text-brand-red" /></div>
                     <div className="w-full aspect-square rounded-md md:rounded-xl hover:bg-slate-100 flex items-center justify-center transition-colors"><BarChart3 size={isMobile ? 12 : 20} className="text-slate-400" /></div>
                     <div className="w-full aspect-square rounded-md md:rounded-xl hover:bg-slate-100 flex items-center justify-center transition-colors"><Activity size={isMobile ? 12 : 20} className="text-slate-400" /></div>
                   </div>

                   {/* Main Content Area */}
                   <div className="flex-1 flex flex-col gap-2 md:gap-5">
                      {/* Header Text & Action */}
                      <div className="flex justify-between items-end mt-1 md:mt-2">
                        <div className="space-y-1.5 md:space-y-2.5 flex-1">
                          <div className="w-1/3 h-3 md:h-6 bg-slate-800 rounded-md" />
                          <div className="w-1/4 h-2 md:h-3 bg-slate-400 rounded-md" />
                        </div>
                        <div className="w-16 md:w-28 h-5 md:h-8 bg-brand-navy rounded-full shadow-md" />
                      </div>
                      
                      {/* Grid */}
                      <div className="flex-1 flex flex-row gap-2 md:gap-5 pb-2 md:pb-4">
                         {/* Main Chart Card */}
                         <div className="flex-[2] bg-white rounded-lg md:rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-200/60 p-2.5 md:p-5 flex flex-col justify-between relative overflow-hidden group">
                           <div className="flex justify-between items-start mb-2">
                              <div className="space-y-1 md:space-y-2 w-full">
                                <div className="w-1/5 h-2 md:h-3 bg-slate-300 rounded" />
                                <div className="w-2/5 h-4 md:h-7 bg-slate-800 rounded" />
                              </div>
                              <div className="px-2 py-0.5 md:py-1 bg-green-50 text-green-600 text-[8px] md:text-xs font-bold rounded-full border border-green-200/50 flex items-center gap-1 shadow-sm">
                                <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-green-500 animate-pulse" />
                                +34.5%
                              </div>
                           </div>
                           <div className="flex-1 flex items-end gap-1.5 md:gap-3 pt-2 md:pt-4">
                             {[30, 45, 35, 65, 55, 85, 75, 95].map((h, i) => (
                               <div key={i} className="flex-1 bg-slate-100 rounded-t-[2px] md:rounded-t-md relative group-hover:bg-slate-200 transition-colors" style={{ height: '100%' }}>
                                  <div className="absolute bottom-0 left-0 right-0 bg-brand-navy rounded-t-[2px] md:rounded-t-md transition-all" style={{ height: `${h}%` }} />
                               </div>
                             ))}
                           </div>
                         </div>
                         
                         {/* Right Cards Stack */}
                         <div className="flex-1 flex flex-col gap-2 md:gap-5">
                            {/* Premium Metric Card */}
                            <div className="flex-[1.2] bg-gradient-to-br from-brand-red to-red-600 rounded-lg md:rounded-2xl shadow-lg p-2.5 md:p-5 text-white flex flex-col justify-center relative overflow-hidden">
                              <div className="absolute -right-4 -top-4 w-16 h-16 md:w-28 md:h-28 bg-white/20 rounded-full blur-2xl" />
                              <div className="absolute right-2 bottom-2 md:right-4 md:bottom-4 w-8 h-8 md:w-12 md:h-12 border-4 border-white/20 rounded-full border-t-white/80 rotate-45" />
                              <div className="w-1/2 h-1.5 md:h-2.5 bg-white/60 rounded mb-1.5 md:mb-3" />
                              <div className="w-3/4 h-4 md:h-7 bg-white rounded shadow-sm" />
                            </div>
                            
                            {/* List Card */}
                            <div className="flex-[1.8] bg-white rounded-lg md:rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-200/60 p-2.5 md:p-5 flex flex-col gap-1.5 md:gap-3 justify-center">
                              <div className="w-2/5 h-2 md:h-3 bg-slate-800 rounded mb-1 md:mb-2" />
                              {[1, 2, 3].map(i => (
                                <div key={i} className="flex items-center gap-2 md:gap-3 p-1 md:p-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                                   <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-brand-navy/5 flex items-center justify-center flex-shrink-0">
                                     <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-brand-navy/40" />
                                   </div>
                                   <div className="flex-1 space-y-1 md:space-y-1.5">
                                      <div className="w-full h-1 md:h-2 bg-slate-800 rounded-full" />
                                      <div className="w-2/3 h-1 md:h-2 bg-slate-300 rounded-full" />
                                   </div>
                                </div>
                              ))}
                            </div>
                         </div>
                      </div>
                   </div>
                 </div>
               </motion.div>
            </div>
          </div>
          <div className="w-[340px] md:w-[680px] h-[12px] md:h-[24px] bg-brand-navy rounded-b-xl md:rounded-b-2xl shadow-[0_20px_50px_rgba(200,16,46,0.2)] relative flex justify-center">
             <div className="w-[60px] md:w-[120px] h-full bg-[#1a1a2e] rounded-b-lg opacity-50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function DeviceStory() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) return null;
  return <StoryContent key={isMobile ? 'mobile' : 'desktop'} isMobile={isMobile} />;
}
