const fs = require('fs');
const path = '/app/applet/src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace imports
content = content.replace("import CodeStory from './components/Story/CodeStory';", "import Services from './components/Services';");

// Replace component usage
content = content.replace("<CodeStory />", "<Services />");

fs.writeFileSync(path, content, 'utf8');
console.log("Successfully updated App.tsx");
