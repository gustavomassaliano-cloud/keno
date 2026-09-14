const fs = require('fs');

const replaceInFile = (file, replaces) => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  replaces.forEach(({r, t}) => { content = content.replace(r, t); });
  fs.writeFileSync(file, content);
};

// 1. Global (index.html, index.css, App.tsx)
replaceInFile('index.html', [
  { r: /bg-brand-navy text-white/g, t: 'bg-[#F5F2EB] text-brand-navy' }
]);
replaceInFile('src/index.css', [
  { r: /background: #0B1C3A;/g, t: 'background: #F5F2EB;' }
]);
replaceInFile('src/App.tsx', [
  { r: /bg-brand-navy text-white/g, t: 'bg-[#F5F2EB] text-brand-navy' }
]);

// 2. Navbar
replaceInFile('src/components/Navbar.tsx', [
  { r: /bg-brand-navy\/90/g, t: 'bg-[#F5F2EB]/90' },
  { r: /text-white/g, t: 'text-brand-navy' },
  { r: /text-zinc-300/g, t: 'text-brand-navy/80' },
  { r: /text-zinc-400/g, t: 'text-brand-navy/70' },
  { r: /border-white\/10/g, t: 'border-brand-navy/10' }
]);
let navbar = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
navbar = navbar.replace(/bg-brand-red text-brand-navy/g, 'bg-brand-red text-white');
fs.writeFileSync('src/components/Navbar.tsx', navbar);

// 3. HeroStory
replaceInFile('src/components/Story/HeroStory.tsx', [
  { r: /bg-brand-navy/g, t: 'bg-[#F5F2EB]' },
  { r: /text-white/g, t: 'text-brand-navy' },
  { r: /text-brand-beige/g, t: 'text-brand-navy/70' },
  { r: /bg-white\/5/g, t: 'bg-brand-navy/5' },
  { r: /bg-white\/10/g, t: 'bg-brand-navy/10' },
  { r: /border-white\/10/g, t: 'border-brand-navy/10' }
]);

// 4. DeviceStory
replaceInFile('src/components/Story/DeviceStory.tsx', [
  { r: /bg-brand-navy/g, t: 'bg-[#F5F2EB]' },
  { r: /text-white/g, t: 'text-brand-navy' },
  { r: /text-brand-beige/g, t: 'text-brand-navy/70' },
  { r: /bg-\[#050C1A\]/g, t: 'bg-white' },
  { r: /border-zinc-800/g, t: 'border-[#D5C2A5]/50' },
  { r: /bg-\[#030712\]/g, t: 'bg-[#F5F2EB]' },
  { r: /border-white\/5/g, t: 'border-brand-navy/5' },
  { r: /bg-white\/5/g, t: 'bg-brand-navy/5' },
  { r: /bg-white\/20/g, t: 'bg-brand-navy/20' }
]);

// 6. ProjectsStory
replaceInFile('src/components/Story/ProjectsStory.tsx', [
  { r: /bg-brand-navy/g, t: 'bg-[#F5F2EB]' }, 
  { r: /text-white/g, t: 'text-brand-navy' },
  { r: /text-brand-beige/g, t: 'text-brand-navy/70' },
  { r: /bg-\[#050C1A\]/g, t: 'bg-white' },
  { r: /mix-blend-overlay/g, t: 'mix-blend-multiply' },
  { r: /border-white\/10/g, t: 'border-brand-navy/10' },
  { r: /from-brand-red\/20 to-brand-navy\/80/g, t: 'from-brand-red/10 to-[#D5C2A5]/30' },
  { r: /from-brand-beige\/20 to-brand-navy\/80/g, t: 'from-[#D5C2A5]/40 to-[#D5C2A5]/20' },
  { r: /from-blue-600\/20 to-brand-navy\/80/g, t: 'from-brand-navy/10 to-[#D5C2A5]/30' }
]);
let projects = fs.readFileSync('src/components/Story/ProjectsStory.tsx', 'utf8');
projects = projects.replace(/bg-brand-red text-brand-navy/g, 'bg-brand-red text-white');
fs.writeFileSync('src/components/Story/ProjectsStory.tsx', projects);

// 7. TimelineStory
replaceInFile('src/components/Story/TimelineStory.tsx', [
  { r: /bg-\[#030712\]/g, t: 'bg-[#F5F2EB]' },
  { r: /border-white\/5/g, t: 'border-brand-navy/5' },
  { r: /text-brand-beige/g, t: 'text-brand-navy/70' },
  { r: /text-white/g, t: 'text-brand-navy' },
  { r: /bg-brand-navy/g, t: 'bg-white' }
]);

// 8. StoryCTA
replaceInFile('src/components/Story/StoryCTA.tsx', [
  { r: /bg-brand-navy/g, t: 'bg-[#F5F2EB]' },
  { r: /text-white/g, t: 'text-brand-navy' },
  { r: /text-brand-beige/g, t: 'text-brand-navy/70' }
]);
let cta = fs.readFileSync('src/components/Story/StoryCTA.tsx', 'utf8');
cta = cta.replace(/bg-brand-red text-brand-navy/g, 'bg-brand-red text-white');
fs.writeFileSync('src/components/Story/StoryCTA.tsx', cta);

// 9. Contact
replaceInFile('src/components/Contact.tsx', [
  { r: /bg-\[#030712\]/g, t: 'bg-[#E8DEC7]' },
  { r: /text-white/g, t: 'text-brand-navy' },
  { r: /bg-white\/5/g, t: 'bg-white/50' },
  { r: /text-zinc-300/g, t: 'text-brand-navy/80' },
  { r: /text-zinc-400/g, t: 'text-brand-navy/70' },
  { r: /border-white\/10/g, t: 'border-brand-navy/10' }
]);
let contact = fs.readFileSync('src/components/Contact.tsx', 'utf8');
contact = contact.replace(/bg-brand-red text-brand-navy/g, 'bg-brand-red text-white');
fs.writeFileSync('src/components/Contact.tsx', contact);

console.log('Switched to beige theme successfully!');
