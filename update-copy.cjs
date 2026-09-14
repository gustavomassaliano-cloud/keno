const fs = require('fs');

const replaceInFile = (file, replaces) => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  replaces.forEach(({r, t}) => { content = content.replace(r, t); });
  fs.writeFileSync(file, content);
};

replaceInFile('src/components/Hero.tsx', [
  { r: /Nós transformamos sua visão/g, t: 'Transformo sua visão' },
  { r: /Criamos sites/g, t: 'Crio sites' }
]);

replaceInFile('src/components/Story/CodeStory.tsx', [
  { r: /Escrevemos código limpo/g, t: 'Escrevo código limpo' },
  { r: /Nossa engenharia garante/g, t: 'Minha arquitetura garante' },
  { r: /Utilizamos as tecnologias/g, t: 'Utilizo as tecnologias' }
]);

replaceInFile('src/components/Story/ProjectsStory.tsx', [
  { r: /que desenvolvemos/g, t: 'que desenvolvi' }
]);

replaceInFile('src/components/Story/TimelineStory.tsx', [
  { r: /Mergulhamos no seu negócio/g, t: 'Mergulho no seu negócio' },
  { r: /Criamos wireframes/g, t: 'Crio wireframes' },
  { r: /Escrevemos o código, implementamos o banco de dados e arquitetamos/g, t: 'Escrevo o código, implemento o banco de dados e arquiteto' },
  { r: /Realizamos testes rigorosos e finalizamos/g, t: 'Realizo testes rigorosos e finalizo' }
]);

replaceInFile('src/components/Story/StoryCTA.tsx', [
  { r: /A Keno Tech transforma ideias/g, t: 'Transformo ideias' }
]);

replaceInFile('src/components/Contact.tsx', [
  { r: /entraremos em contato/g, t: 'entrarei em contato' },
  { r: /Estamos sempre prontos para criar algo/g, t: 'Estou sempre pronto para criar algo' }
]);

console.log('Copy updated to first person.');
