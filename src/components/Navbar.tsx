import React, { useState, useEffect } from 'react';
import { Monitor, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
    <nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-gray-900/80 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Monitor className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
              Portfolio
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-2 mx-1 rounded-xl text-sm font-medium transition-all duration-300 relative group
                    ${activeSection === link.href.substring(1)
                      ? 'text-orange-500'
                      : 'text-gray-300 hover:text-orange-500'
                    }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform origin-left transition-transform duration-300 ${
                    activeSection === link.href.substring(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6 text-gray-300" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6 text-gray-300" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`block px-4 py-2 rounded-xl text-base font-medium transition-all duration-300
                ${activeSection === link.href.substring(1)
                  ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;