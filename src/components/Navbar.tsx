import React, { useState, useEffect } from 'react';
import { Monitor, Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Formation', href: '#education' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Veille', href: '#techwatch' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Détection de la section active
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'backdrop-blur-xl bg-gray-900/95 border-b border-gray-800/50 shadow-2xl shadow-black/20' 
        : 'backdrop-blur-md bg-gray-900/80 border-b border-gray-800/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo amélioré */}
          <div className="flex-shrink-0 flex items-center group cursor-pointer" onClick={() => handleNavClick('#home')}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative p-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 group-hover:border-gray-600 transition-all duration-300">
                <Monitor className="h-6 w-6 text-orange-500 group-hover:text-orange-400 transition-colors" />
              </div>
            </div>
            <div className="ml-3">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-500 group-hover:from-orange-400 group-hover:to-purple-400 transition-all duration-300">
                Portfolio
              </span>
              <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                BTS SIO SISR
              </div>
            </div>
          </div>
          
          {/* Navigation desktop améliorée */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-2xl p-1 border border-gray-700/50">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-4 py-2 mx-0.5 rounded-xl text-sm font-medium transition-all duration-300 group
                    ${activeSection === link.href.substring(1)
                      ? 'text-white bg-gradient-to-r from-orange-500 to-purple-500 shadow-lg shadow-orange-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                    }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Effet de hover pour les liens non actifs */}
                  {activeSection !== link.href.substring(1) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                  
                  {/* Indicateur actif */}
                  {activeSection === link.href.substring(1) && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                  )}
                </a>
              ))}
            </div>
          </div>
          
          {/* Bouton menu mobile amélioré */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-3 rounded-xl transition-all duration-300 group ${
                isOpen 
                  ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white' 
                  : 'bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-white'
              }`}
              aria-expanded={isOpen}
            >
              <span className="sr-only">Menu principal</span>
              <div className="relative w-6 h-6">
                <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`} />
                <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile amélioré */}
      <div className={`md:hidden transition-all duration-500 ease-in-out ${
        isOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="relative">
          {/* Fond avec effet glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 to-gray-900/98 backdrop-blur-xl"></div>
          
          {/* Contenu du menu */}
          <div className="relative px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group ${
                  activeSection === link.href.substring(1)
                    ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>
                  {activeSection === link.href.substring(1) && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </div>
                
                {/* Effet de hover */}
                {activeSection !== link.href.substring(1) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </a>
            ))}
            
            {/* Séparateur décoratif */}
            <div className="flex justify-center pt-4">
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;