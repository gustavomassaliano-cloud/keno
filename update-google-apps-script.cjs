const fs = require('fs');
const path = '/app/applet/src/components/Contact.tsx';
let content = fs.readFileSync(path, 'utf8');

const searchFetch = `const response = await fetch("https://formsubmit.co/ajax/gustavo.massaliano@gmail.com", {
        method: "POST",
        body: formData
      });`;
      
const replaceFetch = `// Você vai substituir a URL abaixo pela URL que o Google Apps Script te gerar!
      const GOOGLE_SCRIPT_URL = "SUA_URL_DO_GOOGLE_SCRIPT_AQUI";
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: 'no-cors' // Necessário para evitar erro de CORS do Google
      });
      
      // Como o no-cors esconde a resposta, assumimos que deu certo se não caiu no catch
      const isSuccess = true;`;

content = content.replace(searchFetch, replaceFetch);
content = content.replace('if (response.ok) {', 'if (isSuccess) {');

fs.writeFileSync(path, content, 'utf8');
console.log("Successfully setup Google Apps Script fetch.");
