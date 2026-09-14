const fs = require('fs');
const path = '/app/applet/src/components/Contact.tsx';
let content = fs.readFileSync(path, 'utf8');

// The Google Apps Script expects "Tipo de Projeto", but form data fields must match EXACTLY the headers in the sheet.
// Let's make sure our FormData corresponds to standard web approaches for passing to Google Apps Script.
// Sometimes FormData isn't parsed perfectly by GAS when sent via fetch directly as body: formData unless it's x-www-form-urlencoded

const searchFetch = `const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: 'no-cors' // Necessário para evitar erro de CORS do Google
      });`;

const replaceFetch = `// Convert FormData to URLSearchParams so Google Apps Script parses it correctly
      const data = new URLSearchParams();
      for (const pair of formData.entries()) {
        data.append(pair[0], pair[1] as string);
      }

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
        mode: 'no-cors' // Necessário para evitar erro de CORS do Google
      });`;

content = content.replace(searchFetch, replaceFetch);

fs.writeFileSync(path, content, 'utf8');
console.log("Updated form encoding.");
