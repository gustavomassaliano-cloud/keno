const fs = require('fs');
const path = '/app/applet/src/components/Story/TimelineStory.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  '<section ref={containerRef} className="h-[600vh]',
  '<section id="processo" ref={containerRef} className="h-[600vh]'
);

fs.writeFileSync(path, content, 'utf8');
console.log("Updated TimelineStory.tsx");
