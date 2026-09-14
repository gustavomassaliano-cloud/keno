const fs = require('fs');
const path = '/app/applet/src/components/Navbar.tsx';
let content = fs.readFileSync(path, 'utf8');

const searchDesktopNav = `        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.name)}
              className="text-sm font-medium text-brand-navy/70 hover:text-brand-red transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>`;

const replaceDesktopNav = `        {/* Desktop Nav */}
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
        </nav>`;

content = content.replace(searchDesktopNav, replaceDesktopNav);

const searchMobileNav = `            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.name)}
                className="text-lg font-bold text-brand-navy bg-white/50 hover:bg-white border border-brand-navy/5 rounded-xl px-4 py-3 hover:text-brand-red hover:shadow-sm transition-all"
              >
                {link.name}
              </a>
            ))}`;

const replaceMobileNav = `            {navLinks.map((link, i) => (
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
            ))}`;

content = content.replace(searchMobileNav, replaceMobileNav);

fs.writeFileSync(path, content, 'utf8');
console.log("Successfully updated Navbar.tsx");
