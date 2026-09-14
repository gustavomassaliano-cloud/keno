import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Processo', href: '#processo' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Dispara o evento customizado que será capturado pelo PageTransition
    window.dispatchEvent(new CustomEvent('nav-transition', { 
      detail: { target: href, name: name } 
    }));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5F2EB]/90 backdrop-blur-md border-b border-brand-navy/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, '#inicio', 'Início')}
          className="flex items-center gap-2 group"
        >
          <img src="/logo.png" alt="Keno Tech" className="h-8 md:h-10 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.name)}
              className="relative text-sm font-bold text-brand-navy/80 hover:text-brand-red transition-colors group py-1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] rounded-full bg-brand-red transition-all duration-300 ease-out group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <motion.a
            href="#contato"
            onClick={(e) => handleNavClick(e, '#contato', 'Contato')}
            className="inline-block px-6 py-2.5 bg-brand-navy text-white font-semibold rounded-lg text-sm hover:bg-brand-navy/80 transition-colors shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Começar meu projeto
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-navy hover:text-brand-red"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#F5F2EB] border-b border-brand-navy/10 p-6 shadow-2xl md:hidden flex flex-col gap-3"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.name)}
                className="text-lg font-bold text-brand-navy bg-white/50 hover:bg-white border border-brand-navy/5 rounded-xl px-4 py-3 hover:text-brand-red hover:shadow-sm transition-all flex items-center justify-between group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                whileTap={{ scale: 0.97 }}
              >
                {link.name}
                <span className="w-2 h-2 rounded-full bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </motion.a>
            ))}
            <motion.a
              href="#contato"
              onClick={(e) => handleNavClick(e, '#contato', 'Contato')}
              className="mt-2 px-6 py-4 bg-brand-red text-white font-bold rounded-xl text-center hover:bg-red-700 transition-colors shadow-md"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileTap={{ scale: 0.97 }}
            >
              Começar meu projeto
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
