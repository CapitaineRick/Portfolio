import React, { useState, useEffect } from 'react';
import { Monitor, Menu, X } from 'lucide-react';

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
        ? 'backdrop-blur-xl bg-gray-900/95 shadow-2xl border-b border-gray-800/50' 
        : 'backdrop-blur-md bg-gray-900/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo avec animation */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => handleNavClick('#home')}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative p-2 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-xl border border-orange-500/30 group-hover:border-orange-400/50 transition-all duration-300">
                <Monitor className="h-6 w-6 text-orange-500 group-hover:text-orange-400 transition-colors duration-300" />
              </div>
            </div>
            <div className="ml-3">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-orange-400 group-hover:to-purple-400 transition-all duration-300">
                Portfolio
              </span>
              <div className="text-xs text-gray-400 group-hover:text-orange-400 transition-colors duration-300">
                BTS SIO SISR
              </div>
            </div>
          </div>
          
          {/* Navigation desktop avec animations avancées */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl overflow-hidden
                    ${activeSection === link.href.substring(1)
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                    }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Fond actif avec gradient */}
                  {activeSection === link.href.substring(1) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 rounded-xl animate-pulse-slow"></div>
                  )}
                  
                  {/* Effet hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Texte */}
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Indicateur actif moderne */}
                  {activeSection === link.href.substring(1) && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full animate-bounce"></div>
                  )}
                </a>
              </div>
            ))}
          </div>
          
          {/* Bouton menu mobile amélioré */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-700/50 text-gray-300 hover:text-white hover:border-orange-500/50 transition-all duration-300 group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative">
                {isOpen ? (
                  <X className="h-5 w-5 transform rotate-0 transition-transform duration-300" />
                ) : (
                  <Menu className="h-5 w-5 transform rotate-0 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile avec animations */}
      <div className={`md:hidden transition-all duration-500 ease-in-out ${
        isOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="bg-gray-900/98 backdrop-blur-xl border-t border-gray-800/50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform ${
                  activeSection === link.href.substring(1)
                    ? 'text-white bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50 hover:scale-105'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: isOpen ? 'translateY(0)' : 'translateY(-20px)'
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>
                  {activeSection === link.href.substring(1) && (
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;