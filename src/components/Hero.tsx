import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Parallax transforms based on mouse position
  const textX = useTransform(springX, [-50, 50], [-10, 10]);
  const textY = useTransform(springY, [-50, 50], [-10, 10]);
  
  const bgX = useTransform(springX, [-50, 50], [20, -20]);
  const bgY = useTransform(springY, [-50, 50], [20, -20]);

  const shape1X = useTransform(springX, [-50, 50], [30, -30]);
  const shape1Y = useTransform(springY, [-50, 50], [30, -30]);

  const shape2X = useTransform(springX, [-50, 50], [-40, 40]);
  const shape2Y = useTransform(springY, [-50, 50], [-40, 40]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to a -50 to 50 scale based on screen center
      const x = ((e.clientX / window.innerWidth) - 0.5) * 100;
      const y = ((e.clientY / window.innerHeight) - 0.5) * 100;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F2EB] pt-20">
      
      {/* Dynamic Glow Backgrounds */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute z-0 w-[300px] md:w-[800px] h-[300px] md:h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/5 blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-sm font-medium text-brand-navy/70 mb-8 backdrop-blur-sm shadow-sm"
        >
          <Sparkles size={14} className="text-brand-red" />
          <span>Inovação e Tecnologia Digital</span>
        </motion.div>

        <motion.div style={{ x: textX, y: textY }} className="relative">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-display text-brand-navy leading-[1.1] tracking-tight mb-8"
          >
            Tudo começa com <br className="hidden md:block" />
            uma <span className="text-brand-red relative inline-block">
              ideia.
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
                className="absolute -bottom-1 md:-bottom-2 left-0 h-1 md:h-1.5 bg-brand-red/80 rounded-full"
              />
            </span>
          </motion.h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl px-4 md:px-0 text-brand-navy/70 max-w-2xl mb-12"
        >
          Transformo sua visão em uma experiência digital interativa, desenhada com precisão absoluta para engajar e converter.
        </motion.p>

      </div>
      
      {/* Abstract Floating Mouse-Reactive Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden md:block">
         <motion.div 
           style={{ x: shape1X, y: shape1Y }}
           className="absolute top-[20%] left-[15%] w-24 h-24 border-2 border-brand-red/10 rounded-2xl rotate-12"
         />
         <motion.div 
           style={{ x: shape2X, y: shape2Y }}
           className="absolute bottom-[25%] right-[15%] w-32 h-32 bg-brand-navy/5 rounded-full"
         />
         <motion.div 
           style={{ x: shape1X, y: shape2Y }}
           className="absolute top-[35%] right-[25%] w-4 h-4 bg-brand-red/30 rounded-full"
         />
         <motion.div 
           style={{ x: shape2X, y: shape1Y }}
           className="absolute bottom-[40%] left-[20%] w-3 h-3 bg-[#D5C2A5]/60 rounded-full"
         />
      </div>
    </section>
  );
}
