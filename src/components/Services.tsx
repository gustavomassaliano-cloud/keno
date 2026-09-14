import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Monitor, Users, Package, TrendingUp, ShoppingCart, Smartphone, Zap, Megaphone, Lightbulb, Star, Wifi } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Monitor,
      title: 'Desenvolvimento de Sites e Sistemas Personalizados',
      description: 'Crio sites profissionais e sistemas sob medida para cada negócio, pensados de acordo com a necessidade da empresa.'
    },
    {
      icon: Users,
      title: 'CRM e Gestão de Empresas',
      description: 'Desenvolvo sistemas para organizar clientes, vendas, pedidos e informações importantes, permitindo que o empresário tenha tudo centralizado em um só lugar.'
    },
    {
      icon: Package,
      title: 'Controle de Estoque',
      description: 'Sistemas para acompanhar produtos, quantidade disponível, entradas, saídas, custos e valores de venda, facilitando o controle do estoque.'
    },
    {
      icon: TrendingUp,
      title: 'Gestão Financeira e de Vendas',
      description: 'Criação de ferramentas para acompanhar faturamento, lucro, contas a receber, pagamentos, vendas pendentes e outros indicadores financeiros.'
    },
    {
      icon: ShoppingCart,
      title: 'Pedidos e Clientes',
      description: 'Cadastro de clientes, criação de pedidos, histórico de compras, acompanhamento de pagamentos e organização das informações comerciais.'
    },
    {
      icon: Smartphone,
      title: 'Desenvolvimento de Aplicativos',
      description: 'Posso desenvolver aplicativos personalizados para diferentes finalidades, seja para uma empresa, serviço, projeto ou necessidade específica.'
    },
    {
      icon: Zap,
      title: 'Automação de Processos',
      description: 'Criação de robôs e scripts de automação para tarefas repetitivas, integrando sistemas e economizando o seu tempo para focar no que importa.'
    },
    {
      icon: Megaphone,
      title: 'Divulgação Digital',
      description: 'Criação de soluções para divulgação de produtos, serviços, promoções e informações da empresa, ajudando o negócio a ter uma presença digital mais profissional.'
    }
  ];

  // Lógica de Mouse 3D
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [30, -30]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-35, 35]);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="servicos" className="py-20 md:py-32 bg-[#030712] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white font-medium mb-6">
            <span>🚀</span> O que eu faço
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight max-w-4xl mx-auto">
            Soluções completas para <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">
              o seu negócio.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl text-left backdrop-blur-sm hover:bg-white/10 transition-colors group flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-brand-red/20 rounded-xl flex items-center justify-center text-brand-red mb-6 shadow-inner group-hover:scale-110 transition-transform">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-[#D5C2A5]/60 leading-relaxed text-sm flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* NOVO PRODUTO FISICO FEATURED - Placa NFC */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1a1a2e] to-[#0f0f1b] border border-white/10 p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center gap-12"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
          
          <div className="flex-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium mb-6">
              <Star size={16} className="text-yellow-400 fill-yellow-400" /> Placa de Avaliação Google com NFC
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Aumente a visibilidade do seu estabelecimento.
            </h3>
            <div className="space-y-4 text-[#D5C2A5]/70 text-base md:text-lg leading-relaxed">
              <p>
                Uma solução simples e inteligente para facilitar a conquista de novos clientes. A placa utiliza a tecnologia NFC, permitindo que o cliente aproxime o celular e seja direcionado rapidamente para a página de avaliação do seu negócio no Google — sem precisar digitar ou procurar.
              </p>
              <p>
                Com mais avaliações, seu negócio pode fortalecer sua presença digital, transmitir mais confiança para novos consumidores e aumentar as chances de ser encontrado.
              </p>
              <div className="bg-white/5 border border-brand-red/20 rounded-xl p-5 mt-6 border-l-4 border-l-brand-red">
                <p className="text-white font-semibold">
                  📲 Aproximou. Avaliou. Compartilhou. Seu negócio ganha mais visibilidade.
                </p>
              </div>
            </div>
          </div>
          
          {/* Visual Representation of the Plaque (Interactive 3D) */}
          <div className="flex-1 flex justify-center w-full relative z-10">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-red/20 border border-white/10 w-full max-w-sm">
              <video 
                src="/placa-nfc.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto object-cover"
              >
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>
        </motion.div>

        {/* Objetivo Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-red/20 to-brand-navy/60 border border-white/10 p-8 md:p-12 text-center"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-red/30">
              <Lightbulb size={32} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              💡 Meu objetivo
            </h3>
            <p className="text-lg md:text-xl text-white font-medium mb-6">
              Transformar necessidades do seu negócio em soluções digitais.
            </p>
            <p className="text-[#D5C2A5]/80 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
              Se você precisa de um site, sistema de vendas, CRM, controle de estoque, aplicativo, ferramenta de divulgação ou uma solução criada especificamente para sua empresa, eu desenvolvo de acordo com aquilo que o seu negócio realmente precisa.
            </p>
            <div className="px-6 py-4 bg-white/10 border border-white/20 rounded-xl inline-block">
              <p className="text-white font-bold text-lg md:text-xl">
                Seu negócio tem uma necessidade. Eu transformo essa necessidade em uma solução digital.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
