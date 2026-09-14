const fs = require('fs');
const path = '/app/applet/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf8');

// Add coverImage properties
content = content.replace(
  "images: ['/Captura de Tela (44).png'],",
  "coverImage: '/capa-rp-hoteis.png',\n    images: ['/Captura de Tela (44).png'],"
);

content = content.replace(
  "images: ['/arena-fut.png'],",
  "coverImage: '/capa-arena.png',\n    images: ['/arena-fut.png'],"
);

content = content.replace(
  "images: ['/essencia-flora.png'],",
  "coverImage: '/capa-essencia.png',\n    images: ['/essencia-flora.png'],"
);

// Update thumbnail rendering
const searchStr = `<div className={\`w-full aspect-[4/3] rounded-2xl mb-6 bg-gradient-to-br \${project.color} border border-[#D5C2A5]/60 overflow-hidden relative flex items-center justify-center p-0 transition-transform duration-500 group-hover:scale-[1.02] shadow-sm\`}>
                
                <div className="w-[85%] h-[85%] bg-[#F5F2EB]/90 rounded-xl border border-[#D5C2A5]/40 shadow-2xl flex flex-col overflow-hidden backdrop-blur-sm">
                  <div className="h-6 border-b border-[#D5C2A5]/40 flex items-center px-3 gap-1.5 bg-white/60">
                    <div className="w-2 h-2 rounded-full bg-[#D5C2A5]" />
                    <div className="w-2 h-2 rounded-full bg-[#D5C2A5]" />
                    <div className="w-2 h-2 rounded-full bg-[#D5C2A5]" />
                  </div>
                  <div className="flex-1 flex items-center justify-center p-6 text-brand-navy/40">
                    <project.icon size={48} strokeWidth={1} />
                  </div>
                </div>
                
              </div>`;

const replaceStr = `<div className={\`w-full aspect-[4/3] rounded-2xl mb-6 bg-gradient-to-br \${project.color} border border-[#D5C2A5]/60 overflow-hidden relative flex items-center justify-center p-0 transition-transform duration-500 group-hover:scale-[1.02] shadow-sm\`}>
                
                {project.coverImage ? (
                   <div className="relative w-full h-full group bg-slate-100 flex items-center justify-center">
                     <img 
                       src={project.coverImage} 
                       alt={project.title}
                       className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                       onError={(e) => {
                           (e.target as HTMLImageElement).style.display = 'none';
                           e.currentTarget.parentElement?.classList.add('fallback-active');
                       }}
                     />
                     <div className="absolute inset-0 hidden [.fallback-active_&]:flex flex-col items-center justify-center text-brand-navy/40 bg-[#F5F2EB]">
                         <project.icon size={48} strokeWidth={1} className="mb-2" />
                         <span className="text-sm font-medium">Capa não encontrada</span>
                         <span className="text-xs font-normal mt-1 opacity-60">Falta: {project.coverImage.replace('/', '')}</span>
                     </div>
                   </div>
                ) : (
                  <div className="w-[85%] h-[85%] bg-[#F5F2EB]/90 rounded-xl border border-[#D5C2A5]/40 shadow-2xl flex flex-col overflow-hidden backdrop-blur-sm">
                    <div className="h-6 border-b border-[#D5C2A5]/40 flex items-center px-3 gap-1.5 bg-white/60">
                      <div className="w-2 h-2 rounded-full bg-[#D5C2A5]" />
                      <div className="w-2 h-2 rounded-full bg-[#D5C2A5]" />
                      <div className="w-2 h-2 rounded-full bg-[#D5C2A5]" />
                    </div>
                    <div className="flex-1 flex items-center justify-center p-6 text-brand-navy/40">
                      <project.icon size={48} strokeWidth={1} />
                    </div>
                  </div>
                )}
                
              </div>`;

if (content.includes("w-[85%] h-[85%]")) {
    content = content.replace(searchStr, replaceStr);
    fs.writeFileSync(path, content, 'utf8');
    console.log("Successfully updated Projects.tsx");
} else {
    console.log("Could not find the target string.");
}
