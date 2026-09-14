const fs = require('fs');
const path = '/app/applet/src/components/Contact.tsx';
let content = fs.readFileSync(path, 'utf8');

const searchURL = 'const GOOGLE_SCRIPT_URL = "SUA_URL_DO_GOOGLE_SCRIPT_AQUI";';
const replaceURL = 'const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbypfBwo8FRCX8qQbIn6yjhd8AwjHgYoQztDw4ncB-Tw2U3JglbZ7HH8CD6FdrOAv_mEGw/exec";';

content = content.replace(searchURL, replaceURL);

fs.writeFileSync(path, content, 'utf8');
console.log("Successfully applied the Google Script URL.");
