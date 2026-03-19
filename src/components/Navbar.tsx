import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { useTheme } from '../ThemeContext';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about-president-tinubu' },
    { name: 'Vice President', path: '/vice-president-shettima' },
    { name: 'Achievements', path: '/achievements-dashboard' },
    { name: 'Renewed Hope', path: '/renewed-hope-agenda' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'News', path: '/news-center' },
    { name: 'Contact', path: '/contact-us' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ha', name: 'Hausa' },
    { code: 'yo', name: 'Yoruba' },
    { code: 'ig', name: 'Igbo' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-navy-blue/90 backdrop-blur-md border-b border-gray-100 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-lg">
                <img 
                  src="https://renewedhopeglobalconference.com/wp-content/uploads/2025/08/logo.png" 
                  alt="Renewed Hope Logo" 
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="hidden md:block border-l border-gray-200 dark:border-white/20 pl-3">
                <span className="block text-sm font-bold text-navy-blue dark:text-white leading-tight">RENEWED HOPE</span>
                <span className="block text-xs text-apc-red font-bold">TINUBU 2027</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-nigeria-green",
                  location.pathname === link.path 
                    ? "text-nigeria-green" 
                    : "text-dark-charcoal dark:text-gray-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 border-l dark:border-white/10 pl-6 ml-6">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-500 dark:text-gray-400 flex items-center gap-2"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>

              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-400" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="text-xs font-medium bg-transparent border-none focus:ring-0 cursor-pointer dark:text-gray-300"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code} className="dark:bg-navy-blue">{lang.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <Link
              to="/get-involved"
              className="bg-apc-red text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-200 dark:shadow-none"
            >
              {t('cta_join')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-500 dark:text-gray-400"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-charcoal dark:text-white hover:text-nigeria-green"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-navy-blue border-b dark:border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-dark-charcoal dark:text-gray-200 border-b border-gray-50 dark:border-white/5"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex items-center justify-between px-3">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Language</span>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as any)}
                      className={cn(
                        "px-2 py-1 text-xs rounded border",
                        language === lang.code 
                          ? "bg-nigeria-green text-white border-nigeria-green" 
                          : "border-gray-200 dark:border-white/10 dark:text-gray-300"
                      )}
                    >
                      {lang.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-6">
                <Link
                  to="/get-involved"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-apc-red text-white py-4 rounded-xl font-bold"
                >
                  {t('cta_join')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
