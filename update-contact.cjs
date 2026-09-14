const fs = require('fs');
const path = '/app/applet/src/components/Contact.tsx';
let content = fs.readFileSync(path, 'utf8');

const searchBtn = `{isSubmitting ? 'Conectando ao Google e Enviando...' : 'Enviar projeto'}`;
const replaceBtn = `{isSubmitting ? 'Enviando...' : 'Enviar projeto'}`;

content = content.replace(searchBtn, replaceBtn);

fs.writeFileSync(path, content, 'utf8');
console.log("Successfully updated Contact.tsx");
