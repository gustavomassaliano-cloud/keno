const fs = require('fs');

// Update WhatsAppButton.tsx
const waPath = '/app/applet/src/components/WhatsAppButton.tsx';
let waContent = fs.readFileSync(waPath, 'utf8');

waContent = waContent.replace(
  'const WHATSAPP_NUMBER = "WHATSAPP_NUMBER";',
  'const WHATSAPP_NUMBER = "5511988670071";'
);
waContent = waContent.replace(
  'text=Olá, gostaria de falar sobre um projeto.',
  'text=Olá! Acabei de visitar o seu site e gostaria de saber mais sobre como vocês podem me ajudar com um projeto.'
);

fs.writeFileSync(waPath, waContent, 'utf8');
console.log("Updated WhatsAppButton.tsx");

// Update Navbar.tsx CTA buttons
const navPath = '/app/applet/src/components/Navbar.tsx';
let navContent = fs.readFileSync(navPath, 'utf8');

const searchDesktopCTA = `        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contato"
            onClick={(e) => handleNavClick(e, '#contato', 'Contato')}
            className="px-6 py-2.5 bg-brand-navy text-white font-semibold rounded-lg text-sm hover:bg-brand-navy/80 transition-colors shadow-sm"
          >
            Começar meu projeto
          </a>
        </div>`;

const replaceDesktopCTA = `        {/* CTA Button */}
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
        </div>`;

navContent = navContent.replace(searchDesktopCTA, replaceDesktopCTA);

const searchMobileCTA = `            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, '#contato', 'Contato')}
              className="mt-2 px-6 py-4 bg-brand-red text-white font-bold rounded-xl text-center hover:bg-red-700 transition-colors shadow-md"
            >
              Começar meu projeto
            </a>`;

const replaceMobileCTA = `            <motion.a
              href="#contato"
              onClick={(e) => handleNavClick(e, '#contato', 'Contato')}
              className="mt-2 px-6 py-4 bg-brand-red text-white font-bold rounded-xl text-center hover:bg-red-700 transition-colors shadow-md"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileTap={{ scale: 0.97 }}
            >
              Começar meu projeto
            </motion.a>`;

navContent = navContent.replace(searchMobileCTA, replaceMobileCTA);

fs.writeFileSync(navPath, navContent, 'utf8');
console.log("Updated Navbar.tsx");

