const fs = require('fs');
const path = '/app/applet/src/components/Projects.tsx';
let content = fs.readFileSync(path, 'utf8');

// Add ShoppingBag to imports
content = content.replace('Smartphone, X, Image as ImageIcon', 'Smartphone, ShoppingBag, X, Image as ImageIcon');

const searchStr = `  {
    id: 3,
    title: 'App Connect',
    category: 'Aplicativo Mobile',
    description: 'Aplicativo mobile para conexão rápida e segura entre prestadores de serviço e clientes locais.',
    fullDescription: null,
    icon: Smartphone,
    color: 'from-red-600/20 to-brand-red/5',
    images: ['/app-1.png', '/app-2.png'],
  },`;

const replaceStr = `  {
    id: 3,
    title: 'Essência da Flora',
    category: 'Catálogo Virtual, CRM e Gestão de Estoque',
    description: 'Desenvolvimento de uma plataforma digital completa para a Essência da Flora, criada para centralizar a apresentação dos produtos e facilitar a gestão interna da empresa.',
    fullDescription: [
      "O projeto combina um catálogo virtual, voltado para os clientes, com um sistema de gerenciamento interno (CRM), permitindo que a empresa tenha maior controle sobre seus produtos, estoque e informações em um único ambiente.",
      "title|🛍️ Catálogo Virtual",
      "A plataforma conta com um catálogo digital desenvolvido para apresentar os produtos de maneira organizada, visual e intuitiva.",
      "Cada produto pode apresentar suas principais informações, permitindo que o cliente conheça melhor os itens disponíveis antes de realizar uma compra ou entrar em contato com a empresa.",
      "O catálogo foi pensado para proporcionar uma experiência simples e agradável, com navegação intuitiva, organização por produtos e acesso às informações de forma rápida.",
      "title|📦 Gestão de Produtos e Estoque",
      "Além da área destinada aos clientes, foi desenvolvido um sistema interno para facilitar o gerenciamento dos produtos.",
      "A empresa consegue manter suas informações centralizadas e acompanhar o estoque, evitando a necessidade de utilizar diferentes ferramentas para controlar os dados.",
      "O sistema permite organizar e atualizar informações dos produtos, controlar sua disponibilidade e manter o catálogo sempre alinhado com os dados utilizados internamente.",
      "title|📊 CRM e Gestão Interna",
      "O projeto também conta com recursos de CRM e gerenciamento, proporcionando uma visão mais organizada das informações utilizadas pela empresa.",
      "A ideia foi criar uma estrutura que facilitasse o trabalho diário, permitindo que a equipe tenha acesso rápido aos dados necessários para administrar os produtos e a operação.",
      "title|💻 Interface e Experiência",
      "A plataforma foi desenvolvida com foco em uma experiência moderna, responsiva e intuitiva, permitindo que o sistema seja utilizado em diferentes dispositivos.",
      "A interface foi estruturada para facilitar tanto a navegação dos clientes pelo catálogo quanto a utilização das ferramentas administrativas pela empresa.",
      "title|⚙️ Principais funcionalidades",
      "list|Catálogo virtual de produtos",
      "list|Cadastro e gerenciamento de produtos",
      "list|Informações detalhadas dos produtos",
      "list|Controle de estoque",
      "list|Gerenciamento de disponibilidade",
      "list|Organização dos produtos",
      "list|Sistema interno de gestão",
      "list|CRM",
      "list|Atualização das informações dos produtos",
      "list|Centralização dos dados da empresa",
      "list|Interface moderna e responsiva",
      "list|Experiência otimizada para diferentes dispositivos",
      "title|🎯 Objetivo do projeto",
      "O principal objetivo foi desenvolver uma solução centralizada para digitalizar e organizar os processos da Essência da Flora, conectando a apresentação dos produtos ao gerenciamento interno da empresa.",
      "Dessa forma, o projeto proporciona uma experiência mais profissional para os clientes e, ao mesmo tempo, oferece à empresa uma ferramenta para organizar produtos, estoque e informações de maneira mais eficiente.",
      "Resultado: uma plataforma completa que une catálogo digital + gestão de produtos + controle de estoque + CRM, transformando diferentes necessidades da empresa em uma única solução digital."
    ],
    icon: ShoppingBag,
    color: 'from-emerald-600/20 to-brand-navy/20',
    images: ['/essencia-flora.png'],
    link: 'https://catalogo-ef.ai.studio',
  },`;

if (content.includes("id: 3,")) {
    content = content.replace(searchStr, replaceStr);
    fs.writeFileSync(path, content, 'utf8');
    console.log("Successfully updated Projects.tsx");
} else {
    console.log("Could not find the target string.");
}
