const fs = require('fs');
const path = '/app/applet/index.html';
let content = fs.readFileSync(path, 'utf8');

const search = '<title>Keno Tech | Sites, Aplicativos e Soluções Digitais</title>';
const replace = `<link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/favicon.png" />
    <title>Keno Tech | Sites, Aplicativos e Soluções Digitais</title>`;

content = content.replace(search, replace);

fs.writeFileSync(path, content, 'utf8');
console.log("index.html updated with favicon links.");
