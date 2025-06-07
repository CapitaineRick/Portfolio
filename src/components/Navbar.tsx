import React, { useState, useEffect } from 'react';
import { Monitor, Menu, X, Zap } from 'lucide-react';

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
    <>
      {/* Navbar principale */}
      <nav className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? 'backdrop-blur-2xl bg-black/40 shadow-2xl shadow-orange-500/10' 
          : 'backdrop-blur-xl bg-black/20'
      }`}>
        
        {/* Ligne de lumière en haut */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo futuriste */}
            <div 
              className="flex items-center cursor-pointer group" 
              onClick={() => handleNavClick('#home')}
            >
              <div className="relative">
                {/* Halo animé */}
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                
                {/* Conteneur principal */}
                <div className="relative flex items-center space-x-4 p-3 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 group-hover:border-orange-500/50 transition-all duration-500">
                  
                  {/* Icône avec effet néon */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative p-2 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-xl border border-orange-500/30">
                      <Monitor className="h-7 w-7 text-orange-400 group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                  
                  {/* Texte du logo */}
                  <div className="flex flex-col">
                    <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-400 to-purple-400 group-hover:from-orange-300 group-hover:to-purple-300 transition-all duration-500">
                      PORTFOLIO
                    </span>
                    <span className="text-xs font-medium text-gray-400 group-hover:text-orange-400 transition-colors duration-500 tracking-wider">
                      BTS SIO SISR
                    </span>
                  </div>
                  
                  {/* Effet de scan */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000"></div>
                </div>
              </div>
            </div>
            
            {/* Navigation desktop futuriste */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-2 p-2 rounded-2xl bg-gradient-to-r from-gray-900/60 to-gray-800/60 border border-gray-700/30 backdrop-blur-xl">
                {navLinks.map((link, index) => (
                  <div key={link.name} className="relative">
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`relative px-6 py-3 text-sm font-semibold transition-all duration-500 rounded-xl overflow-hidden group ${
                        activeSection === link.href.substring(1)
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {/* Fond actif avec effet néon */}
                      {activeSection === link.href.substring(1) && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-purple-500/30 rounded-xl"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-xl animate-pulse"></div>
                          <div className="absolute inset-px bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-xl"></div>
                        </>
                      )}
                      
                      {/* Effet hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      
                      {/* Texte */}
                      <span className="relative z-10 tracking-wide">{link.name}</span>
                      
                      {/* Indicateur actif */}
                      {activeSection === link.href.substring(1) && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full animate-bounce"></div>
                          <div className="absolute inset-0 w-2 h-2 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full blur animate-pulse"></div>
                        </div>
                      )}
                      
                      {/* Effet de scan au hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700"></div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bouton menu mobile futuriste */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-4 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 text-gray-300 hover:text-white hover:border-orange-500/50 transition-all duration-500 group overflow-hidden"
              >
                {/* Halo */}
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icône */}
                <div className="relative z-10">
                  {isOpen ? (
                    <X className="h-6 w-6 transform transition-all duration-500 rotate-180" />
                  ) : (
                    <Menu className="h-6 w-6 transform transition-all duration-500" />
                  )}
                </div>
                
                {/* Effet de scan */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu mobile futuriste */}
      <div className={`lg:hidden fixed inset-x-0 top-20 z-40 transition-all duration-700 ${
        isOpen 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="mx-4 mt-2 rounded-3xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-2xl border border-gray-700/50 shadow-2xl shadow-orange-500/10 overflow-hidden">
          
          {/* Ligne de lumière */}
          <div className="h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
          
          <div className="p-6 space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative block px-6 py-4 rounded-2xl text-lg font-semibold transition-all duration-500 group overflow-hidden ${
                  activeSection === link.href.substring(1)
                    ? 'text-white bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-700/50'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: isOpen ? 'translateX(0)' : 'translateX(-100px)',
                  opacity: isOpen ? 1 : 0
                }}
              >
                {/* Fond actif */}
                {activeSection === link.href.substring(1) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-2xl animate-pulse"></div>
                )}
                
                {/* Effet hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex items-center justify-between">
                  <span className="tracking-wide">{link.name}</span>
                  {activeSection === link.href.substring(1) && (
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full animate-pulse"></div>
                      <Zap className="w-4 h-4 text-orange-400" />
                    </div>
                  )}
                </div>
                
                {/* Effet de scan */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000"></div>
              </a>
            ))}
          </div>
          
          {/* Ligne de lumière du bas */}
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;