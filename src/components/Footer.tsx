import React from 'react';
import { Github, Linkedin, File, Shield, Eye, FileText, Scale } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-12 ${
      theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenu légal RGPD */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Protection des données */}
          <div>
            <h3 className="flex items-center gap-2 font-semibold mb-4 text-orange-500">
              <Shield size={18} />
              Protection des données
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Gestion des cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Vos droits RGPD
                </a>
              </li>
            </ul>
          </div>

          {/* Mentions légales */}
          <div>
            <h3 className="flex items-center gap-2 font-semibold mb-4 text-orange-500">
              <Scale size={18} />
              Mentions légales
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Responsabilité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Propriété intellectuelle
                </a>
              </li>
            </ul>
          </div>

          {/* Contact et droits */}
          <div>
            <h3 className="flex items-center gap-2 font-semibold mb-4 text-orange-500">
              <Eye size={18} />
              Vos droits
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:sebastien.78.fernandes@outlook.fr?subject=Demande RGPD" className="hover:text-orange-500 transition-colors">
                  Droit d'accès
                </a>
              </li>
              <li>
                <a href="mailto:sebastien.78.fernandes@outlook.fr?subject=Rectification données" className="hover:text-orange-500 transition-colors">
                  Droit de rectification
                </a>
              </li>
              <li>
                <a href="mailto:sebastien.78.fernandes@outlook.fr?subject=Suppression données" className="hover:text-orange-500 transition-colors">
                  Droit à l'effacement
                </a>
              </li>
            </ul>
          </div>

          {/* Informations site */}
          <div>
            <h3 className="flex items-center gap-2 font-semibold mb-4 text-orange-500">
              <FileText size={18} />
              À propos du site
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Hébergeur : Netlify</li>
              <li>Responsable : Sébastien Fernandes</li>
              <li>Contact DPO : 
                <a href="mailto:sebastien.78.fernandes@outlook.fr" className="hover:text-orange-500 transition-colors ml-1">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© {currentYear} Portfolio BTS SIO SISR - Sébastien Fernandes</p>
              <p className="text-xs mt-1 opacity-75">
                Conformément au RGPD - Données traitées de manière transparente et sécurisée
              </p>
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
                href="/docs/fernandes-sebastien-cv.pdf" 
                download
                className="text-gray-500 hover:text-orange-500 transition-colors"
                aria-label="Download CV"
              >
                <File size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;