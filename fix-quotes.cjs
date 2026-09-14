const fs = require('fs');
const path = '/app/applet/src/components/Contact.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/\\\`Bearer \\\$\\{tokenResponse.access_token\\}\\\`/g, "\`Bearer \${tokenResponse.access_token}\`");
fs.writeFileSync(path, content, 'utf8');
