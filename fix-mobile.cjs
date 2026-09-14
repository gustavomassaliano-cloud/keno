const fs = require('fs');

const replaceInFile = (file, replaces) => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  replaces.forEach(({r, t}) => { content = content.replace(r, t); });
  fs.writeFileSync(file, content);
};

// 1. Hero.tsx - Adjust text sizes for mobile
replaceInFile('src/components/Hero.tsx', [
  { r: /text-5xl md:text-7xl lg:text-8xl/g, t: 'text-4xl sm:text-5xl md:text-7xl lg:text-8xl' },
  { r: /text-xl md:text-2xl/g, t: 'text-lg md:text-2xl px-4 md:px-0' },
  { r: /w-\[500px\]/g, t: 'w-[300px]' },
  { r: /h-\[500px\]/g, t: 'h-[300px]' }
]);

// 2. TimelineStory.tsx - Adjust sizes and padding for mobile
replaceInFile('src/components/Story/TimelineStory.tsx', [
  { r: /text-5xl md:text-7xl/g, t: 'text-3xl sm:text-4xl md:text-7xl px-4' },
  { r: /w-20 h-20/g, t: 'w-16 h-16 md:w-20 md:h-20' },
  { r: /text-2xl mb-8/g, t: 'text-xl md:text-2xl mb-6 md:mb-8' },
  { r: /text-xl md:text-2xl/g, t: 'text-lg md:text-2xl' }
]);

// 3. StoryCTA.tsx
replaceInFile('src/components/Story/StoryCTA.tsx', [
  { r: /text-5xl md:text-7xl/g, t: 'text-4xl md:text-7xl' },
  { r: /text-2xl/g, t: 'text-xl md:text-2xl' },
  { r: /px-10 py-5/g, t: 'px-6 py-4 md:px-10 md:py-5' },
  { r: /text-xl hover:bg-red-700/g, t: 'text-lg md:text-xl hover:bg-red-700' }
]);

// 4. CodeStory.tsx
replaceInFile('src/components/Story/CodeStory.tsx', [
  { r: /text-4xl md:text-5xl lg:text-6xl/g, t: 'text-3xl md:text-5xl lg:text-6xl' },
  { r: /text-xl text-\[\#D5C2A5\]\/70/g, t: 'text-lg md:text-xl text-[#D5C2A5]/70' },
  { r: /grid grid-cols-1 md:grid-cols-3 gap-8/g, t: 'grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8' },
  { r: /py-32/g, t: 'py-20 md:py-32' }
]);

// 5. ProjectsStory.tsx
replaceInFile('src/components/Story/ProjectsStory.tsx', [
  { r: /py-32/g, t: 'py-20 md:py-32' },
  { r: /text-4xl md:text-5xl/g, t: 'text-3xl md:text-5xl' },
  { r: /text-xl text-brand-navy\/70/g, t: 'text-lg md:text-xl text-brand-navy/70' }
]);

console.log('Fixed basic text sizing for mobile.');
