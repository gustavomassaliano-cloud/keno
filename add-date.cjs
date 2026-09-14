const fs = require('fs');
const path = '/app/applet/src/components/Contact.tsx';
let content = fs.readFileSync(path, 'utf8');

const search = `const data = new URLSearchParams();
      for (const pair of formData.entries()) {
        data.append(pair[0], pair[1] as string);
      }`;

const replace = `const data = new URLSearchParams();
      for (const pair of formData.entries()) {
        data.append(pair[0], pair[1] as string);
      }
      
      // Adicionando a Data atual já formatada para o padrão do Brasil
      const dataAtual = new Date().toLocaleString('pt-BR');
      data.append('Data', dataAtual);`;

content = content.replace(search, replace);

fs.writeFileSync(path, content, 'utf8');
console.log("Updated to include Date in form data.");
