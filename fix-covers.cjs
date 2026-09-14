const fs = require('fs');
const path = '/app/applet/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf8');

const searchRp = `    images: [
      '/Captura de Tela (44).png'
    ],`;
const replaceRp = `    coverImage: '/capa-rp-hoteis.png',
    images: [
      '/Captura de Tela (44).png'
    ],`;

content = content.replace(searchRp, replaceRp);

const searchEssencia = `    coverImage: '/capa-essencia.png',
    images: ['/essencia-flora.png'],`;
const replaceEssencia = `    coverImage: '/capa-essencia.png',
    images: ['/essencia-1.png', '/essencia-2.png'],`;

content = content.replace(searchEssencia, replaceEssencia);

fs.writeFileSync(path, content, 'utf8');
console.log("Successfully fixed covers and essencia images.");
