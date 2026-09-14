const fs = require('fs');
const path = '/app/applet/src/components/Services.tsx';
let content = fs.readFileSync(path, 'utf8');

// The block to replace:
const searchBlock = `<div 
            className="flex-1 flex justify-center perspective-[1200px] w-full py-10 relative z-10 group cursor-grab active:cursor-grabbing"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ touchAction: "none" }}
          >
             <motion.div
               className="relative w-48 md:w-56 h-[320px] md:h-[360px] bg-[#fbfbfb] rounded-md shadow-2xl flex flex-col items-center justify-between py-12 px-6"
               style={{ 
                 rotateX: springRotateX,
                 rotateY: springRotateY,
                 transformStyle: 'preserve-3d',
                 boxShadow: '20px 20px 60px rgba(0,0,0,0.5), inset -5px -5px 15px rgba(0,0,0,0.05)'
               }}
             >
                {/* Edge thickness simulation */}
                <div className="absolute top-0 right-0 bottom-0 w-2 bg-[#e5e5e5] origin-right" style={{ transform: 'rotateY(90deg) translateZ(1px)' }}></div>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#d4d4d4] origin-bottom" style={{ transform: 'rotateX(-90deg) translateZ(1px)' }}></div>

                {/* Dica para o usuário (Interaja!) */}
                <div className="absolute -top-10 text-white/50 text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-z-[10px]">
                  Gire com o mouse
                </div>

                {/* Google Logo (SVG) */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 p-3 transform translate-z-[20px]">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                
                {/* NFC Icon Area */}
                <div className="w-16 h-16 rounded-full border-[3px] border-[#333] flex items-center justify-center transform translate-z-[15px]">
                   <Wifi className="rotate-90 text-[#333] ml-1" strokeWidth={2.5} size={32} />
                </div>

                {/* Base Support */}
                <div className="absolute -bottom-8 w-full h-16 bg-[#e5e5e5] origin-top rounded-b-md" style={{ transform: 'rotateX(-60deg)' }}></div>
                
                {/* Shadow on the floor */}
                <div className="absolute -bottom-16 w-[120%] h-12 bg-brand-red/10 blur-xl rounded-[100%] transform -rotate-x-45 -translate-z-20"></div>
             </motion.div>
          </div>`;

const replaceBlock = `<div className="flex-1 flex justify-center w-full relative z-10">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-red/20 border border-white/10 w-full max-w-sm">
              <video 
                src="/placa-nfc.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto object-cover"
              >
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>`;

content = content.replace(searchBlock, replaceBlock);

fs.writeFileSync(path, content, 'utf8');
console.log("Replaced 3D plaque with video tag.");
