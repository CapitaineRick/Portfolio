import React from 'react';
import { Github, Linkedin, File } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-8 ${
      theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {currentYear} Portfolio BTS SIO SISR - Sébastien Fernandes</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/CapitaineRick" 
              className="text-gray-500 hover:text-orange-500 transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/s%C3%A9bastien-fernandes-566008232/" 
              className="text-gray-500 hover:text-orange-500 transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-orange-500 transition-colors"
              aria-label="Download CV"
            >
              <File size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="flex justify-center">

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;