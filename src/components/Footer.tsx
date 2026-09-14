export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-brand-navy pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          
          <div className="max-w-sm">
            <a href="#inicio" className="block mb-4">
              <img src="/logo.png" alt="Keno Tech" className="h-10 w-auto object-contain" />
            </a>
            <p className="text-white/70 text-sm">
              Transformando ideias em experiências digitais.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm font-medium text-white/70">
            <a href="#inicio" className="hover:text-brand-red transition-colors">Início</a>
            <a href="#servicos" className="hover:text-brand-red transition-colors">Serviços</a>
            <a href="#projetos" className="hover:text-brand-red transition-colors">Projetos</a>
            <a href="#sobre" className="hover:text-brand-red transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-brand-red transition-colors">Contato</a>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-white/50 text-sm">
            © 2026 Keno Tech. Todos os direitos reservados.
          </p>
          {/* Redes sociais removidas conforme solicitado */}
        </div>
      </div>
    </footer>
  );
}
