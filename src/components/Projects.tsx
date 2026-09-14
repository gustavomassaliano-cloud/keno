import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, LayoutTemplate, BarChart3, Smartphone, ShoppingBag, X, Image as ImageIcon } from 'lucide-react';

// Aqui definimos as imagens de cada projeto. 
// Você pode enviar suas imagens para a pasta "public" com esses nomes (ex: rp-hoteis-1.png).
const projects = [
  {
    id: 1,
    title: 'RP Hotéis',
    category: 'Solução Digital Integrada',
    description: 'Desenvolvimento de uma solução digital completa para a RP Hotéis, modernizando a presença online e facilitando a gestão.',
    fullDescription: [
      "Desenvolvimento de uma solução digital completa para a RP Hotéis, com o objetivo de modernizar a presença online da empresa e facilitar a gestão, visualização e acompanhamento de informações.",
      "O projeto foi desenvolvido em três principais frentes:",
      "list|🌐 Site institucional: Criação de um site moderno, responsivo e intuitivo, desenvolvido para apresentar a empresa, seus serviços e informações de forma profissional, proporcionando uma experiência simples e agradável aos usuários em computadores, tablets e dispositivos móveis.",
      "list|📊 Aplicativo de Relatórios: Desenvolvimento de um aplicativo voltado para a geração, organização e acompanhamento de relatórios. A solução facilita o acesso às informações e permite uma visão mais clara dos resultados e indicadores, tornando o processo de análise mais rápido e eficiente.",
      "list|📈 Aplicativo de Dados: Criação de uma plataforma para centralização e visualização de dados, permitindo organizar informações de maneira estruturada e facilitar a tomada de decisões. O aplicativo foi pensado para transformar dados em informações mais acessíveis e úteis para a gestão da empresa.",
      "title|Resultado",
      "O projeto proporcionou à RP Hotéis uma estrutura digital integrada, unindo presença online, gestão de relatórios e análise de dados em soluções desenvolvidas especificamente para as necessidades da empresa.",
      "A proposta foi utilizar tecnologia para otimizar processos, centralizar informações e proporcionar maior praticidade na gestão, criando uma experiência mais moderna tanto para os usuários quanto para a equipe interna."
    ],
    icon: LayoutTemplate,
    color: 'from-brand-red/20 to-brand-navy/20',
    coverImage: '/capa-rp-hoteis.png',
    images: [
      '/Captura de Tela (44).png'
    ],
    link: 'https://www.rphoteis.com.br',
  },
  {
    id: 2,
    title: 'Arena Fut Certo',
    category: 'Aplicativo / Sistema de Gestão',
    description: 'O Arena Fut Certo é um aplicativo desenvolvido para facilitar a organização e o gerenciamento de partidas de futebol entre amigos, grupos e equipes.',
    fullDescription: [
      "O Arena Fut Certo é um aplicativo desenvolvido para facilitar a organização e o gerenciamento de partidas de futebol entre amigos, grupos e equipes.",
      "A plataforma permite que o usuário crie e gerencie suas próprias peladas, definindo informações como modalidade, local, dia, horário, quantidade de jogadores, número de times, valores da partida e mensalidade.",
      "Além da organização das partidas, o sistema possui um gerenciamento completo de jogadores e elencos, permitindo cadastrar participantes, definir seus níveis de habilidade e acompanhar quem faz parte de cada grupo.",
      "Um dos principais diferenciais é o sistema de sorteio de times, que ajuda a distribuir os jogadores de maneira organizada, considerando suas habilidades e a quantidade de equipes configuradas.",
      "O aplicativo também conta com um painel financeiro, onde é possível acompanhar mensalistas, pagamentos, valores arrecadados, despesas, aluguel da quadra, saldo do grupo e partidas avulsas.",
      "title|🚀 Principais funcionalidades",
      "list|⚽ Criação e gerenciamento: De peladas",
      "list|👥 Cadastro e gerenciamento: De jogadores",
      "list|⭐ Classificação: Do nível de habilidade dos jogadores",
      "list|🏆 Sorteio e formação automática: Dos times",
      "list|📅 Organização: De dias e horários das partidas",
      "list|📍 Cadastro: Do local da partida",
      "list|💰 Controle financeiro: Do grupo",
      "list|💳 Gerenciamento: De mensalistas e pagamentos",
      "list|📊 Acompanhamento: De receitas e despesas",
      "list|🏟️ Controle: De aluguel da quadra",
      "list|🔗 Convites: Para jogadores participarem das partidas",
      "list|👤 Perfil individual: Dos jogadores",
      "list|👑 Controle: De administradores e membros",
      "list|📱 Interface responsiva: E adaptada para diferentes dispositivos",
      "title|🎯 Objetivo",
      "O objetivo do Arena Fut Certo é transformar a organização daquela tradicional pelada entre amigos em algo simples, rápido e organizado, centralizando em um único aplicativo tudo o que o responsável pelo grupo precisa: jogadores, times, partidas, pagamentos e financeiro.",
      "Em vez de utilizar diferentes grupos de WhatsApp, planilhas e anotações para controlar quem joga, quem pagou, quanto custa a quadra e como serão formados os times, o Arena Fut Certo reúne essas informações em uma única plataforma."
    ],
    icon: Smartphone,
    color: 'from-brand-beige/20 to-brand-navy/20',
    coverImage: '/capa-arena.png',
    images: ['/arena-fut.png'],
    link: 'https://arena-fut-certo.netlify.app/',
  },
  {
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
    coverImage: '/capa-essencia.png',
    images: ['/essencia-1.png', '/essencia-2.png'],
    link: 'https://catalogo-ef.ai.studio',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projetos" className="py-24 lg:py-32 bg-white/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-display text-brand-navy mb-6"
            >
              Projetos que ganham vida.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-brand-navy/70 leading-relaxed"
            >
              Veja como transformamos problemas complexos em interfaces simples, bonitas e altamente funcionais.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col cursor-pointer"
              onClick={() => { console.log("clicked", project.id); setSelectedProject(project); }}
            >
              {/* Card Thumbnail */}
              <div className={`w-full aspect-[4/3] rounded-2xl mb-6 bg-gradient-to-br ${project.color} border border-[#D5C2A5]/60 overflow-hidden relative flex items-center justify-center p-0 transition-transform duration-500 group-hover:scale-[1.02] shadow-sm`}>
                
                {project.coverImage ? (
                   <div className="relative w-full h-full group bg-slate-100 flex items-center justify-center">
                     <img 
                       src={project.coverImage} 
                       alt={project.title}
                       className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                       onError={(e) => {
                           (e.target as HTMLImageElement).style.display = 'none';
                           e.currentTarget.parentElement?.classList.add('fallback-active');
                       }}
                     />
                     <div className="absolute inset-0 hidden [.fallback-active_&]:flex flex-col items-center justify-center text-brand-navy/40 bg-[#F5F2EB]">
                         <project.icon size={48} strokeWidth={1} className="mb-2" />
                         <span className="text-sm font-medium">Capa não encontrada</span>
                         <span className="text-xs font-normal mt-1 opacity-60">Falta: {project.coverImage.replace('/', '')}</span>
                     </div>
                   </div>
                ) : (
                  <div className="w-[85%] h-[85%] bg-[#F5F2EB]/90 rounded-xl border border-[#D5C2A5]/40 shadow-2xl flex flex-col overflow-hidden backdrop-blur-sm">
                    <div className="h-6 border-b border-[#D5C2A5]/40 flex items-center px-3 gap-1.5 bg-white/60">
                      <div className="w-2 h-2 rounded-full bg-[#D5C2A5]" />
                      <div className="w-2 h-2 rounded-full bg-[#D5C2A5]" />
                      <div className="w-2 h-2 rounded-full bg-[#D5C2A5]" />
                    </div>
                    <div className="flex-1 flex items-center justify-center p-6 text-brand-navy/40">
                      <project.icon size={48} strokeWidth={1} />
                    </div>
                  </div>
                )}
                
              </div>
              
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-white text-brand-navy/80 text-xs font-medium rounded-full border border-[#D5C2A5]/60">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold font-display text-brand-navy mb-3 group-hover:text-brand-red transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-brand-navy/70 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <button className="inline-flex items-center gap-2 text-brand-navy font-medium hover:text-brand-red transition-colors group/btn">
                  Ver detalhes e galeria
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal - Galeria de Imagens */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-brand-navy/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <div className="min-h-full flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-2xl w-full max-w-5xl shadow-2xl relative flex flex-col my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-slate-100 hover:bg-brand-red hover:text-white text-brand-navy rounded-full flex items-center justify-center transition-colors shadow-sm"
                >
                  <X size={20} />
                </button>

                {/* Informações do Projeto */}
                <div className="p-6 md:p-10 border-b border-slate-100 bg-white rounded-t-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#F5F2EB] text-brand-navy/80 text-xs font-bold rounded-full border border-[#D5C2A5]/60">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold font-display text-brand-navy mb-4">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.fullDescription ? (
                    <div className="max-w-4xl space-y-4 text-brand-navy/80 text-base md:text-lg">
                      {selectedProject.fullDescription.map((item, idx) => {
                        if (item.startsWith("list|")) {
                          const [title, desc] = item.replace("list|", "").split(": ");
                          return (
                            <ul key={idx} className="space-y-4 mt-4 ml-6 list-disc">
                              <li>
                                <strong>{title}:</strong> {desc}
                              </li>
                            </ul>
                          );
                        }
                        if (item.startsWith("title|")) {
                          return (
                            <h4 key={idx} className="font-bold text-xl font-display mt-8 mb-2 text-brand-navy">
                              {item.replace("title|", "")}
                            </h4>
                          );
                        }
                        return <p key={idx}>{item}</p>;
                      })}
                    </div>
                  ) : (
                    <p className="text-lg text-brand-navy/70 max-w-3xl">
                      {selectedProject.description}
                    </p>
                  )}
                  
                  {selectedProject.link && (
                    <div className="mt-8">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-navy text-white rounded-full font-medium hover:bg-brand-red transition-all shadow-md hover:shadow-lg"
                      >
                        Acessar site do projeto
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  )}
                </div>

                {/* Galeria de Imagens */}
                <div className="p-6 md:p-10 bg-slate-50 rounded-b-2xl">
                  {selectedProject.images && selectedProject.images.length > 0 ? (
                    <div className="flex flex-col gap-8">
                      {selectedProject.images.map((img, i) => (
                        <div key={i} className="w-full bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden relative flex items-center justify-center min-h-[200px]">
                          <img 
                            src={img} 
                            alt={`${selectedProject.title} Imagem ${i + 1}`} 
                            className="w-full h-auto object-contain"
                            loading="lazy"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                              e.currentTarget.parentElement?.classList.add('fallback-img-active');
                            }}
                          />
                          <div className="absolute inset-0 hidden [.fallback-img-active_&]:flex flex-col items-center justify-center text-slate-400">
                             <ImageIcon size={48} strokeWidth={1} className="mb-2 opacity-50" />
                             <p>Aguardando imagem {i + 1}</p>
                             <p className="text-xs mt-1">Nome do arquivo esperado: <b>{img.replace('/', '')}</b></p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                       <selectedProject.icon size={80} strokeWidth={1} className="mb-4 opacity-30" />
                       <p>Nenhuma imagem disponível.</p>
                    </div>
                  )}
                </div>
                
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
