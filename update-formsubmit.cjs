const fs = require('fs');
const path = '/app/applet/src/components/Contact.tsx';

const newContent = `import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/gustavo.massaliano@gmail.com", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        alert("Ocorreu um erro ao enviar. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro de conexão. Verifique sua internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-[#E8DEC7] border-t border-[#D5C2A5]/40">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-brand-navy mb-4">
            Inicie seu projeto
          </h2>
          <p className="text-lg text-brand-navy/70">
            Preencha os dados abaixo e retornaremos o contato o mais rápido possível.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/50 border border-brand-navy/10 p-8 md:p-12 rounded-3xl"
        >
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="w-16 h-16 bg-brand-red/20 text-brand-red rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-2">Mensagem enviada!</h3>
              <p className="text-brand-navy/70">Em breve entrarei em contato com você.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Oculta configs do formsubmit */}
              <input type="hidden" name="_subject" value="Novo Projeto - Keno Tech!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-brand-navy/80">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="Nome"
                    required
                    className="w-full bg-[#E8DEC7] border border-brand-navy/10 rounded-xl px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-brand-navy/80">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    name="Empresa"
                    className="w-full bg-[#E8DEC7] border border-brand-navy/10 rounded-xl px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
                    placeholder="Nome da sua empresa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-brand-navy/80">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    required
                    className="w-full bg-[#E8DEC7] border border-brand-navy/10 rounded-xl px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="text-sm font-medium text-brand-navy/80">WhatsApp</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="WhatsApp"
                    required
                    className="w-full bg-[#E8DEC7] border border-brand-navy/10 rounded-xl px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium text-brand-navy/80">Tipo de projeto</label>
                <select
                  id="type"
                  name="Tipo de Projeto"
                  required
                  defaultValue=""
                  className="w-full bg-[#E8DEC7] border border-brand-navy/10 rounded-xl px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors appearance-none"
                >
                  <option value="" disabled>Selecione uma opção</option>
                  <option value="site">Site</option>
                  <option value="landing_page">Landing Page</option>
                  <option value="app">Aplicativo</option>
                  <option value="sistema_web">Sistema Web</option>
                  <option value="dashboard">Dashboard</option>
                  <option value="automacao">Automação</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="idea" className="text-sm font-medium text-brand-navy/80">Conte um pouco sobre sua ideia</label>
                <textarea
                  id="idea"
                  name="Mensagem"
                  required
                  rows={4}
                  className="w-full bg-[#E8DEC7] border border-brand-navy/10 rounded-xl px-4 py-3 text-brand-navy focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-colors resize-none"
                  placeholder="Descreva brevemente o que você precisa..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-brand-red text-white font-semibold py-4 rounded-xl hover:bg-red-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar projeto'}
                {!isSubmitting && <Send size={18} />}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(path, newContent, 'utf8');
console.log("Successfully setup FormSubmit");
