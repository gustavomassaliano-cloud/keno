import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  const WHATSAPP_NUMBER = "5511988670071"; 
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Acabei de visitar o seu site e gostaria de saber mais sobre como vocês podem me ajudar com um projeto.`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2"
      aria-label="Fale conosco no WhatsApp"
    >
      <span className="absolute right-full mr-4 bg-white text-brand-navy text-sm px-3 py-1.5 rounded-lg border border-[#D5C2A5]/60 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none drop-shadow-xl font-medium">
        Fale conosco
      </span>
      <div className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
        <MessageCircle size={24} />
      </div>
    </motion.a>
  );
}
