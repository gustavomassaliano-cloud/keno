const fs = require('fs');
const path = require('path');

const replaceAll = (str, mapObj) => {
  const re = new RegExp(Object.keys(mapObj).join("|"),"g");
  return str.replace(re, matched => mapObj[matched]);
};

// Global replacements
const globalMap = {
  'bg-zinc-950/80': 'bg-[#F5F2EB]/90',
  'bg-zinc-950/50': 'bg-white/30',
  'bg-zinc-950': 'bg-[#F5F2EB]',
  'bg-zinc-900/80': 'bg-white/90',
  'bg-zinc-900/50': 'bg-white/60',
  'bg-zinc-900/30': 'bg-white/40',
  'bg-zinc-900/20': 'bg-white/30',
  'bg-zinc-900': 'bg-white',
  'bg-zinc-800': 'bg-[#D5C2A5]/60',
  'bg-zinc-700': 'bg-[#D5C2A5]',
  'border-zinc-900/50': 'border-[#D5C2A5]/30',
  'border-zinc-900': 'border-[#D5C2A5]/40',
  'border-zinc-800/50': 'border-[#D5C2A5]/40',
  'border-zinc-800': 'border-[#D5C2A5]/60',
  'border-zinc-700': 'border-[#D5C2A5]',
  'text-zinc-300': 'text-brand-navy/80',
  'text-zinc-400': 'text-brand-navy/70',
  'text-zinc-500': 'text-brand-navy/50',
  'text-zinc-700': 'text-brand-navy/40',
  'text-white': 'text-brand-navy',
  'hover:text-white': 'hover:text-brand-red',
  'hover:bg-zinc-900': 'hover:bg-white',
  'hover:bg-zinc-800': 'hover:bg-[#D5C2A5]/30',
  'hover:border-zinc-700': 'hover:border-brand-red/30',
  'bg-gradient-to-br from-zinc-900 to-zinc-950': 'bg-gradient-to-br from-white to-[#F5F2EB]',
  'from-zinc-950 via-zinc-900 to-brand-navy/50': 'from-[#F5F2EB] via-[#E8DEC7] to-brand-beige/50',
};

const processFile = (filePath, specificReplacements = []) => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Apply specific first
  specificReplacements.forEach(({r, t}) => {
    content = content.replace(r, t);
  });
  
  // Apply global
  content = replaceAll(content, globalMap);
  
  fs.writeFileSync(filePath, content);
};

// App.tsx
processFile('src/App.tsx', [
  { r: /bg-zinc-950 text-zinc-50/g, t: 'bg-[#F5F2EB] text-brand-navy' }
]);

// index.html
processFile('index.html', [
  { r: /bg-zinc-950 text-zinc-50/g, t: 'bg-[#F5F2EB] text-brand-navy' }
]);

// index.css
processFile('src/index.css', [
  { r: /background: #09090b;/g, t: 'background: #F5F2EB;' },
  { r: /background: #27272a;/g, t: 'background: #D5C2A5;' },
  { r: /background: #3f3f46;/g, t: 'background: #BCA686;' }
]);

// Buttons and specific fixes where text-white should remain text-white
// (bg-brand-red text-white should not become text-brand-navy)
const buttonFixes = [
  { r: /bg-brand-red text-brand-navy/g, t: 'bg-brand-red text-white' },
  { r: /text-brand-navy px-3 py-1\.5/g, t: 'text-white px-3 py-1.5' }, // tooltip
  { r: /bg-blue-600 text-brand-navy/g, t: 'bg-brand-red text-white' },
  { r: /bg-[#25D366] text-brand-navy/g, t: 'bg-[#25D366] text-white' }
];

const files = fs.readdirSync('src/components').map(f => path.join('src/components', f));
files.forEach(f => {
  // We apply the global map, then we fix up buttons that got mangled
  let content = fs.readFileSync(f, 'utf8');
  
  // Pre-process: save text-white for brand-red backgrounds
  content = content.replace(/bg-brand-red text-white/g, 'bg-brand-red text-[PRESERVE_WHITE]');
  content = content.replace(/bg-\[#25D366\] text-white/g, 'bg-[#25D366] text-[PRESERVE_WHITE]');
  
  // Apply global replacements
  content = replaceAll(content, globalMap);
  
  // Post-process: restore text-white and fix specific component issues
  content = content.replace(/text-\[PRESERVE_WHITE\]/g, 'text-white');
  
  fs.writeFileSync(f, content);
});

// Footer.tsx has a dark background (brand-navy) so text should remain light
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace(/bg-brand-navy border-\[#D5C2A5\]\/40/, 'bg-brand-navy border-brand-navy/80');
footer = footer.replace(/text-brand-navy/g, 'text-white');
footer = footer.replace(/bg-\[#F5F2EB\]/g, 'bg-brand-navy');
footer = footer.replace(/border-\[#D5C2A5\]\/30/g, 'border-white/10');
footer = footer.replace(/border-\[#D5C2A5\]\/40/g, 'border-brand-navy');
fs.writeFileSync('src/components/Footer.tsx', footer);

// Hero CTA buttons fix
let hero = fs.readFileSync('src/components/Hero.tsx', 'utf8');
hero = hero.replace(/bg-white text-brand-navy font-semibold rounded-xl hover:bg-\[#D5C2A5\]\/30 hover:border-brand-red\/30/g, 'bg-white text-brand-navy font-semibold rounded-xl hover:bg-brand-beige/30 hover:border-brand-red/30');
fs.writeFileSync('src/components/Hero.tsx', hero);

// Special CTA button fix
let specialCta = fs.readFileSync('src/components/SpecialCTA.tsx', 'utf8');
specialCta = specialCta.replace(/bg-brand-navy text-white font-bold rounded-xl hover:bg-white transition-colors text-lg/g, 'bg-brand-navy text-white font-bold rounded-xl hover:bg-brand-navy/90 transition-colors text-lg');
fs.writeFileSync('src/components/SpecialCTA.tsx', specialCta);

console.log('Theme conversion complete!');
